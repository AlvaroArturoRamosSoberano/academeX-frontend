<template>
    <el-button @click="openForm" :type="props.type" :icon="props.icon" plain></el-button>

    <el-dialog v-model="dialogFormVisible" :title="props.title" :width="300">
        <el-input v-model="formData.name" placeholder="Ingrese el nombre del estado" clearable></el-input>
        <div class="flex justify-end pt-2">
            <el-button @click="dialogFormVisible = false">Cancelar</el-button>
            <el-button :type="isEditMode ? 'warning' : 'primary'" @click="submitForm">
                {{ isEditMode ? "Actualizar" : "Confirmar" }}
            </el-button>
        </div>
    </el-dialog>
</template>

<script setup>
import { ref, computed, defineEmits } from "vue"
import { showNotification } from "@/modules/cruds/shared/functions/Notifications";
import { sendData } from "@/modules/cruds/statuses/services/ApiStatuses.js";
const props = defineProps({
    title: String,
    type: String,
    icon: Object,
    id: Number,
    statuse: Object,
    mode: String,
});
const token = localStorage.getItem("token");
const mode = ref('');
const dialogFormVisible = ref(false);
const emit = defineEmits(['done']);
const formData = ref({
    name: '',
});

const openForm = () => {
    if (mode.value === "edit") {
        formData.value = statuse;
        dialogFormVisible.value = true;
    } else {
        dialogFormVisible.value = true;
    }
};

const submitForm = async () => {
    try {
        await sendData(formData.value, token);
        showNotification("Éxito", "Agregado con éxito", "success");
        emit("done"); // Emitir el evento 'done'
        dialogFormVisible.value = false;
        resetForm();
    } catch (error) {
        if (error.response) {
            showNotification("Error", error.response.data.message, "error");
        } else {
            console.log("Error de respuesta indefinida:", error);
        }
    }
};

const resetForm = () => {
    formData.value.name = '';
};
const isEditMode = computed(() => {
    return mode.value === "edit";
});

/*
import { ref, computed, defineEmits, onMounted } from "vue"
import { showNotification } from "@/modules/cruds/shared/functions/Notifications";
import { getStatusesData, updateStatusesData, sendStatusesData } from "@/modules/cruds/statuses/services/ApiStatuses.js";

const openForm = () => {
    if (mode.value === "edit") {
        formData.value = statuses.value;
        dialogFormVisible.value = true;
    } else {
        dialogFormVisible.value = true;
    }
};

 const submitForm = async (token) => {
    try {
        if (mode.value === "edit") {
            await updateStatusesData(id.value, formData.value);
            showNotification("Éxito", "Actualizado con éxito", "success");
        } else {
            await sendStatusesData(formData.value, token);
            showNotification("Éxito", "Agregado con éxito", "success");
        }
        emit("done"); // Emitir el evento 'done'
        dialogFormVisible.value = false;
        resetForm();
    } catch (error) {
        console.log(formData.value, token);

        showNotification("Error", error.response.data.message, "error");
    }
};

onMounted(() => {
    sendStatusesData({},token);
    getStatusesData({},token);
}); */
</script>