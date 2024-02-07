<template>
    <div class="h-screen w-screen flex justify-center items-center">
        <div class="bg-white rounded-xl shadow-xl">
            <div class="p-4 md:p-4 lg:p-4 xl:p-4">
                <h1 class="p-4 font-bold text-2xl">Curso</h1>
                <el-form @submit.prevent="">
                    <el-input class="p-2" placeholder="Ingrese titulo del curso" />
                    <el-input class="p-2" placeholder="Ingrese descripción" />
                    <el-input class="p-2" placeholder="Ingrese instructor" />
                    <el-input class="p-2" placeholder="Precio del curso" />
                    <el-input class="p-2" placeholder="Duración" />
                    <el-input class="p-2" placeholder="Imagen" />
                    <!-- <el-select class="p-2"  filterable placeholder="Seleccione la especie">
                        <el-option v-for="species in species" :key="species.id" :label="species.name" :value="species.id" />
                    </el-select> -->
                    <!-- <el-select class="p-2"  filterable
                        placeholder="Responsable de la mascota">
                        <el-option v-for="customer in customers" :key="customer.id" :label="customer.name"
                            :value="customer.id" />
                    </el-select> -->
                    <div class="p-2 flex justify-end gap-2">
                        <el-button type="success" plain>Agregar</el-button>
                        <router-link :to="{ name: 'view-courses' }"><el-button type="primary"
                                plain>Volver</el-button></router-link>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = ref({
    title: '',
    type: '',
});
</script>