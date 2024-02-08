import { onMounted, ref } from 'vue';
<template>
    <section class="h-auto bg-white flex justify-center items-center">
        <div class="w-screen">
            <div v-loading="loading" :element-loading-text="loadingMessage"
                class="card h-screen flex flex-col justify-center items-center pt-10">
                <div class="card-bg w-80 md:w-1/2 h-auto bg-white p-4 rounded-xl shadow-xl">
                    <div class="card-header bg-water-300 border border-gray-500 flex justify-between items-center p-2">
                        <h1 class="font-bold text-lg ps-2">Listado de Niveles</h1>
                        <Modal-Form title="Agregar" type="success" :icon="icons.Plus"
                            @done="getLevels({}, token)"></Modal-Form>

                    </div>
                    <table class="w-full border border-gray-500 border-separate border-t-0 border-b-0 p-2">
                        <thead>
                            <tr>
                                <th class="border border-gray-500 rounded-md">ID</th>
                                <th class="border border-gray-500 rounded-md">Nivel</th>
                                <th class="border border-gray-500 rounded-md">Acciones</th>
                            </tr>
                        </thead>
                        <tbody v-for="(level, index) in levels" :key="level.id">
                            <tr class="text-center">
                                <td class="border border-gray-500 rounded-lg">{{ index + 1 }}</td>
                                <td class="border border-gray-500 rounded-lg">{{ level.name ? level.name : "Sin registro" }}
                                </td>
                                <td
                                    class="border border-gray-500 rounded-lg flex flex-col md:flex-row md:justify-center pe-3 pt-1 pb-1">
                                    <el-button type="primary" :icon="icons.View" plain class="ms-3"></el-button>
                                    <Modal-Form type="warning" title="Editar" :icon="icons.Edit" :id="level.id"
                                        :level="level" :mode="isEditMode ? 'edit' : 'create'"
                                        @done="getLevels({}, token)"></Modal-Form>
                                    <el-button type="danger" :icon="icons.Delete" @click="deleteLevels(level.id)" plain
                                        class="ms-3"></el-button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <el-pagination
                        class="flex justify-end rounded-tl-none rounded-tr-none rounded-bl-xl rounded-br-xl border-t-0 border border-gray-500 p-4"
                        background @current-change="changePage()" small :total="filterParams.total" />

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { getData, deleteData } from "@/modules/cruds/levels/services/ApiLevels.js";
import { Edit, Delete, Plus, View } from "@element-plus/icons-vue";
import { ref, onMounted, markRaw } from "vue";
import ModalForm from "../../levels/components/ModalForm.vue";
import { showConfirmation, showMessage } from "../../shared/functions/Notifications";

const levels = ref([]);
const token = localStorage.getItem("token");
const icons = markRaw({
    Edit: Edit,
    Plus: Plus,
    Delete: Delete,
    View: View,
});
const filterParams = ({
    total: "",
    pages: "",
});
const loading = ref(false);
const loadingMessage = ref('');
const isEditMode = ref(true);

const getLevels = async (params) => {
    try {
        loading.value = true;
        loadingMessage.value = 'Cargando datos...';
        const response = await getData(params, token);
        levels.value = response.data.data;
        filterParams.total = response.data.total;
        filterParams.pages = response.data.last_page;
    } catch (error) {
        console.log("Error to get data from Api", error);
    } finally {
        loading.value = false;
    }
};

const deleteLevels = async (id) => {
    try {
        const confirmed = await showConfirmation(
            " La información será eliminada permanentemente. ¿Continuar?"
        );
        if (confirmed) {
            loading.value = true;
            loadingMessage.value = 'Actualizando datos...';
            await deleteData(id, token);
            getLevels({}, token);
            showMessage("success", "Eliminado con éxito");
        } else {
            showMessage("info", "Operación cancelada");
        }
    } catch (error) {
        showMessage(
            "error",
            "Error al eliminar registro. Por favor, inténtalo de nuevo."
        );
    } finally {
        loading.value = false;
    }
};

const changePage = (value) => {
    getStatuses({ page: value }, token);
};

onMounted(() => {
    getLevels({}, token);
});

</script>