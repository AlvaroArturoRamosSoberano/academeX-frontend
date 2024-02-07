<template>
    <section class="h-screen bg-slate-300 flex justify-center items-center">
        <div class="card h-96 w-80 border-2 bg-gray-200 rounded-xl shadow-2xl flex flex-col justify-center font-jakarta">
            <div class="card-header flex justify-center">
                <h1 class="text-2xl">Registrarse</h1>
            </div>
            <div class="card-body p-4">
                <el-input v-model="formData.name" placeholder="Nombre" clearable class="pb-4"></el-input>
                <el-input v-model="formData.email" placeholder="Correo electrónico" clearable class="pb-4"></el-input>
                <el-input v-model="formData.password" placeholder="Contraseña" show-password class="pb-4"></el-input>
                <el-button class="w-full shadow-2xl" type="primary" @click="handleRegister">Entrar</el-button>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from "vue";
import { register } from "@/modules/shared/functions/ApiAuth.js"
const formData = ref({
    name: '',
    email: '',
    password: '',
});
const token = ref('')

const handleRegister = async () => {
    try {
        const response = await register(formData.value);
        token.value = response.data;
    } catch (error) {
        console.log('error')
    }
}
</script>