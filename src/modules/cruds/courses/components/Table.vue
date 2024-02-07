<template>
    <section class="h-screen bg-white flex justify-center items-center">
        <div class="w-screen">
            <div class="card h-screen border-2 flex flex-col justify-center items-center">
                <div class="card-bg bg-white p-4 rounded-xl shadow-xl">
                    <div class="card-header bg-water-300 border border-gray-500 flex justify-between items-center p-2">
                        <h1 class="font-bold text-lg ps-2">Listado de Cursos</h1>
                        <RouterLink :to="{ name: 'view-courses-create' }"><el-button type="primary" plain>Agregar</el-button>
                        </RouterLink>
                    </div>
                    <table class="w-full border border-gray-500 border-separate border-t-0 border-b-0 p-2">
                        <thead>
                            <tr>
                                <th class="border border-gray-500 rounded-md">ID</th>
                                <th class="border border-gray-500 rounded-md">Titulo</th>
                                <th class="border border-gray-500 rounded-md">Descripción</th>
                                <th class="border border-gray-500 rounded-md">Instructor</th>
                                <th class="border border-gray-500 rounded-md">Precio</th>
                                <th class="border border-gray-500 rounded-md">Duración</th>
                                <th class="border border-gray-500 rounded-md">Imagen</th>
                                <th class="border border-gray-500 rounded-md">Categoria</th>
                                <th class="border border-gray-500 rounded-md">Nivel</th>
                                <th class="border border-gray-500 rounded-md">Status</th>
                                <th class="border border-gray-500 rounded-md">Acciones</th>
                            </tr>
                        </thead>
                        <tbody v-for="course in courses" :key="course.id">
                            <tr class="text-center">
                                <td class="border border-gray-500 rounded-lg">{{ course.id }}</td>
                                <td class="border border-gray-500 rounded-lg">{{ course.title ? course.title : "Sin registro"}}</td>
                                <td class="border border-gray-500 rounded-lg">{{ course.description ? course.description : "Sin registro" }}</td>
                                <td class="border border-gray-500 rounded-lg">{{ course.instructor ? course.description : "Sin registro" }}</td>
                                <td class="border border-gray-500 rounded-lg">{{ course.price ? course.price : "Sin registro" }}</td>
                                <td class="border border-gray-500 rounded-lg">{{ course.duration ? course.duration : "Sin registro" }}</td>
                                <td class="border border-gray-500 rounded-lg">{{ course.image_path ? course.image_path : "Sin registro" }}</td>
                                <td class="border border-gray-500 rounded-lg">{{ course.category.name ? course.category.name : "Sin registro" }}</td>
                                <td class="border border-gray-500 rounded-lg">{{ course.level.name ? course.level.name : "Sin registro" }}</td>
                                <td class="border border-gray-500 rounded-lg">{{ course.status.name ? course.status.name : "Sin registro" }}</td>
                                <td class="border border-gray-500 rounded-lg">
                                <el-button type="info" :icon="icons.View" plain/>
                                <el-button type="warning" :icon="icons.Edit" plain/>
                                <el-button type="danger" :icon="icons.Delete" plain/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <el-pagination
          class="flex justify-end rounded-tl-none rounded-tr-none rounded-bl-xl rounded-br-xl border-t-0 border border-gray-500 p-4"
          background
          
          small
          :total="50"
        />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { getCoursesData } from "@/modules/cruds/courses/services/ApiCourses.js";
import { ref, onMounted, markRaw } from "vue";
import { Edit, Delete, Plus, View } from "@element-plus/icons-vue";

const icons = markRaw({
    Edit: Edit,
    Plus: Plus,
    Delete: Delete,
    View: View,
});
const courses = ref([]);

const getCourses = async (token) => {
    try {
        const response = await getCoursesData(token);
        courses.value = response.data.data;
    } catch (error) {
        console.log("Error to get data from Api", error);
    }
}
onMounted(() => {
    const token = localStorage.getItem("token");
    getCourses(token); // Pasar el token a getCourses
});

</script>