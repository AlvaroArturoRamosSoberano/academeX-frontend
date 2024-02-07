<template>
    <section class="h-screen bg-white flex justify-center items-center">
        <div v-loading="loading" :element-loading-text="loadingMessage"
            class="card h-96 w-80 border-2 bg-gray-100 rounded-xl shadow-2xl flex flex-col justify-center font-jakarta">
            <div class="card-header flex justify-center">
                <h1 class="text-2xl">Registrarse</h1>
            </div>
            <div class="card-body p-4">
                <el-input v-model="formData.name" placeholder="Nombre" clearable class="pb-4"></el-input>
                <el-input v-model="formData.email" placeholder="Correo electrónico" clearable class="pb-4"></el-input>
                <el-input v-model="formData.password" placeholder="Contraseña" show-password class="pb-4"></el-input>
                <el-button class="w-full shadow-2xl" type="primary" @click="handleRegister">Registarse</el-button>
                <router-link :to="{ name: 'view-login' }">
                    <a class="text-xs flex justify-center pt-3 opacity-70 hover:opacity-100 cursor-pointer">¿Ya tiene una
                        cuenta?</a>
                </router-link>
                <router-link :to="{ name: 'Home-page' }">
                    <a class="text-xs flex justify-center pt-3 opacity-70 hover:opacity-100 cursor-pointer">Volver</a>
                </router-link>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from "vue";
import router from "@/router/router.js";
import { register, auth } from "@/modules/shared/functions/ApiAuth.js";
import { showMessage } from "@/modules/cruds/shared/functions/Notifications";

const formData = ref({
    name: '',
    email: '',
    password: '',
});
const loading = ref(false)
const loadingMessage = ref('');

const handleRegister = async () => {
    try {
        loading.value = true;
        loadingMessage.value = 'Validando datos...';
        await register(formData.value);
        showMessage("success", "Registrado con éxito");
        // Verificar si el registro fue exitoso antes de intentar iniciar sesión
        if (formData.value.email && formData.value.password) {
            loading.value = true;
            loadingMessage.value = 'Iniciando sesión...';
            const response = await auth(formData.value);
            const tokenValue = response.data["token "]; // Obtener el valor del token utilizando corchetes y el nombre de la propiedad
            localStorage.setItem("token", tokenValue); // Almacenar el token en localStorage
            router.push({ name: "admin-panel" });
            showMessage("success", "Sesión iniciada");
        } else {
            showMessage("error", "Datos de inicio de sesión incompletos");
        }
    } catch (error) {
        console.log(error)
        showMessage("error", "Intente de nuevo");
    } finally {
        loading.value = false
    }
};
</script>