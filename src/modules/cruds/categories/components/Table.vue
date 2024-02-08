<template>
    <section class="h-screen bg-white flex justify-center items-center">
        <div class="w-screen">
            <div v-loading="loading" :element-loading-text="loadingMessage"
                class="card flex flex-col justify-center items-center mt-20">
                <div class="card-bg w-80 lg:w-1/2 h-auto bg-white p-4 rounded-xl shadow-xl">
                    <div class="card-header bg-water-300 border border-gray-500 flex justify-between items-center p-2">
                        <h1 class="font-bold text-lg ps-2">Listado de Categorias</h1>
                        <Modal-Form title="Agregar" type="success" :icon="icons.Plus"
                            @done="getCategories({}, token)"></Modal-Form>
                    </div>
                    <table class="w-full border border-gray-500 border-separate border-t-0 border-b-0 p-2">
                        <thead>
                            <tr>
                                <th class="border border-gray-500 rounded-md">#</th>
                                <th class="border border-gray-500 rounded-md">Categoria</th>
                                <th class="border border-gray-500 rounded-md">Acciones</th>
                            </tr>
                        </thead>
                        <tbody v-for="(category, index) in categories" :key="category.id">
                            <tr class="text-center">
                                <td class="border border-gray-500 rounded-lg">{{ index + 1 }}</td>
                                <td class="border border-gray-500 rounded-lg">{{ category.name ? category.name : "Sin registro"
                                }}</td>
                                <td class="border border-gray-500 rounded-lg flex flex-col pe-3 pt-1 pb-1">
                                    <el-button type="primary" :icon="icons.View" plain class="ms-3" />
                                    <Modal-Form type="warning" title="Editar" :icon="icons.Edit" :id="category.id"
                                        :category="category" :mode="isEditMode ? 'edit' : 'create'"
                                        @done="getCategories({}, token)"></Modal-Form>
                                    <el-button type="danger" :icon="icons.Delete" @click="deleteCategories(category.id)" plain
                                        class="ms-3" />
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
import { getData, deleteData } from "@/modules/cruds/categories/services/ApiCategories.js";
import { Edit, Delete, Plus, View } from "@element-plus/icons-vue";
import { ref, onMounted, markRaw } from "vue";
import ModalForm from "../../categories/components/ModalForm.vue";
import {
    showConfirmation,
    showMessage,
} from "@/modules/cruds/shared/functions/Notifications.js";
const categories = ref([]);
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

const getCategories = async (params) => {
    try {
        loading.value = true;
        loadingMessage.value = 'Cargando datos...';
        const response = await getData(params, token);
        categories.value = response.data.data;
        filterParams.total = response.data.total;
        filterParams.pages = response.data.last_page;
    } catch (error) {
        console.log("Error to get data from Api", error);
    } finally {
        loading.value = false;
    }
};

const deleteCategories = async (id) => {
    try {
        const confirmed = await showConfirmation(
            " La información será eliminada permanentemente. ¿Continuar?"
        );
        if (confirmed) {
            loading.value = true;
            loadingMessage.value = 'Actualizando datos...';
            await deleteData(id, token);
            getCategories({}, token);
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
    getCategories({ page: value }, token);
};

onMounted(() => {
    getCategories({}, token);
});

</script>