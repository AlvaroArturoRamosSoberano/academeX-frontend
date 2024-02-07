<template>
    <section class="h-screen bg-white flex justify-center items-center">
        <div v-loading="loading" element-loading-text="Iniciando sesión..."
            class="card h-96 w-80 bg-gray-100 rounded-xl shadow-2xl flex flex-col justify-center font-jakarta">
            <div class="card-header flex justify-center">
                <h1 class="text-2xl">Iniciar sesión</h1>
            </div>
            <div class="card-body p-4">
                <el-form>
                    <el-input v-model="formData.email" id="email" name="email" placeholder="Correo electrónico" clearable
                        class="pb-4" :prefix-icon="User"></el-input>
                    <el-input v-model="formData.password" id="password" email="password" placeholder="Contraseña"
                        show-password class="pb-4" :prefix-icon="Lock"></el-input>
                    <el-button class="w-full shadow-2xl" type="primary" @click="handleLogin">Entrar</el-button>
                </el-form>

                <router-link :to="{ name: 'view-register' }">
                    <a class="text-xs flex justify-center pt-3 opacity-70 hover:opacity-100 cursor-pointer">Registrarse</a>
                </router-link>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from "vue";
import router from "@/router/router.js";
import { auth } from "@/modules/shared/functions/ApiAuth.js"
import { showMessage } from "@/modules/cruds/shared/functions/Notifications";
import { User, Lock } from '@element-plus/icons-vue';

const formData = ref({
    email: '',
    password: '',
});

const loading = ref(false)
const handleLogin = async () => {
    try {
        loading.value = true
        const response = await auth(formData.value);
        const tokenValue = response.data["token "]; // Obtener el valor del token utilizando corchetes y el nombre de la propiedad
        localStorage.setItem("token", tokenValue); // Almacena solo el valor del token
        router.push({ name: "admin-panel" });
        showMessage("success", "Sesión iniciada");
    } catch (error) {
        console.log(error);
        showMessage("error", "Intente de nuevo");
    } finally {
        loading.value = false
    }
}

</script>