<template>
    <section class="h-screen bg-slate-300 flex justify-center items-center">
        <div class="w-screen">
            <div class="card h-screen border-2 flex flex-col justify-center items-center">
                <div class="card-bg bg-white p-4 rounded-xl shadow-xl">
                    <div class="card-header bg-water-300 border border-gray-500 flex justify-between items-center p-2">
                        <h1 class="font-bold text-lg ps-2">Listado de Categorias</h1>
                    </div>
                    <table class="w-full border border-gray-500 border-separate border-t-0 border-b-0 p-2">
                        <thead>
                            <tr>
                                <th class="border border-gray-500 rounded-md">ID</th>
                                <th class="border border-gray-500 rounded-md">Categoria</th>

                            </tr>
                        </thead>
                        <tbody v-for="category in categories" :key="category.id">
                            <tr class="text-center">
                                <td class="border border-gray-500 rounded-lg">{{ category.id }}</td>
                                <td class="border border-gray-500 rounded-lg">{{ category.name }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { getCategoriesData } from "@/modules/cruds/categories/services/ApiCategories.js";
import { ref, onMounted } from "vue";

const categories = ref([]);

const getCategories = async () => {
    try {
        const token = localStorage.getItem("token");
        console.log("Token:", token);
        const response = await getCategoriesData(token);
        categories.value = response.data.data;
    } catch (error) {
        console.log("Error to get data from Api", error);
    }
}
onMounted(getCategories());
</script>