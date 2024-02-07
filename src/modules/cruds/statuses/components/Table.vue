<template>
    <section class="h-auto bg-white flex justify-center items-center">
        <div class="w-screen">
            <div v-loading="loading" element-loading-text="Cargando datos..."
                class="card h-screen flex flex-col justify-center items-center pt-10">
                <div class="card-bg w-80 lg:w-1/2 h-auto bg-white p-4 rounded-xl shadow-xl">
                    <div class="card-header bg-water-300 border border-gray-500 flex justify-between items-center p-2">
                        <h1 class="font-bold text-lg ps-2">Listado de Estados</h1>
                        <Modal-Form title="Agregar" type="success" :icon="icons.Plus" @done="getStatuses"></Modal-Form>
                    </div>
                    <table class="w-full border border-gray-500 border-separate border-t-0 border-b-0 p-2">
                        <thead>
                            <tr>
                                <th class="border border-gray-500 rounded-md">#</th>
                                <th class="border border-gray-500 rounded-md">Estado</th>
                                <th class="border border-gray-500 rounded-md">Acciones</th>
                            </tr>
                        </thead>
                        <tbody v-for="(status, index) in statuses" :key="status.id">
                            <tr class="text-center">
                                <td class="border border-gray-500 rounded-lg">{{ index + 1 }}</td>
                                <td class="border border-gray-500 rounded-lg">{{ status.name }}</td>
                                <td class="border border-gray-500 rounded-lg flex flex-col pe-3 pt-1 pb-1">
                                    <el-button type="primary" :icon="icons.View" plain class="ms-3" />
                                    <Modal-Form type="warning" title="Editar" :icon="icons.Edit" :id="status.id"
                                        :statuse="status" :mode="isEditMode ? 'edit' : 'create'" @done="test"></Modal-Form>
                                    <el-button type="danger" :icon="icons.Delete" @click="deleteStatuses(status.id)" plain
                                        class="ms-3" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <el-pagination
                        class="flex justify-end rounded-tl-none rounded-tr-none rounded-bl-xl rounded-br-xl border-t-0 border border-gray-500 p-4"
                        background @current-change="changePage" small :total="filterParams.total" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { getData, deleteData } from "@/modules/cruds/statuses/services/ApiStatuses.js";
import { Edit, Delete, Plus, View } from "@element-plus/icons-vue";
import { ref, onMounted, markRaw } from "vue";
import ModalForm from "../../statuses/components/ModalForm.vue";
import {
    showConfirmation,
    showMessage,
} from "@/modules/cruds/shared/functions/Notifications.js";
const statuses = ref([]);
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
})

const loading = ref(true)
const isEditMode = ref(true);

const getStatuses = async (params, token) => {
    try {
        const response = await getData(params, token);
        statuses.value = response.data.data;
        filterParams.total = response.data.total;
        filterParams.pages = response.data.last_page;
    } catch (error) {
        console.log("Error to get data from Api", error);
    } finally {
        loading.value = false;
    }
};

const deleteStatuses = async (id) => {
    try {
        const confirmed = await showConfirmation(
            " La información será eliminada permanentemente. ¿Continuar?"
        );
        if (confirmed) {
            loading.value = true;
            await deleteData(id, token);
            getStatuses({}, token);
            showMessage("success", "Eliminado con éxito");
        } else {
            showMessage("info", "Operación cancelada");
        }
    } catch (error) {
        showMessage(
            "error",
            "Error al eliminar registro. Por favor, inténtalo de nuevo."
        );
    }
};

const test = () => {
    console.log('ejcutado con exito, aqui no es el error crack');
};

const changePage = (value) => {
    getStatuses({ page: value });
};

onMounted(() => {
    getStatuses({}, token);
});

</script>