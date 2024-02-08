<template>
    <el-button @click="openForm" :type="props.type" :icon="props.icon" plain></el-button>

    <el-dialog v-model="dialogFormVisible" :title="props.title" :width="300">
        <el-input v-model="formData.name" placeholder="Ingrese el nombre de la categoria" clearable></el-input>
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
import { sendData, updateData } from "@/modules/cruds/categories/services/ApiCategories.js";
const token = localStorage.getItem("token");
const props = defineProps({
    title: String,
    type: String,
    icon: Object,
    id: Number,
    category: Object,
    mode: String,
});
const emit = defineEmits(['done']);
const mode = props.mode;
const category = props.category;
const id = props.id;
const dialogFormVisible = ref(false);
const formData = ref({
    name: '',
});

const isEditMode = computed(() => {
    return mode === 'edit';
});

const openForm = () => {
    if (mode === "edit") {
        formData.value = category;
        dialogFormVisible.value = true;
    } else {
        dialogFormVisible.value = true;
    }
};

const submitForm = async () => {
    try {
        if (mode === 'edit') {
            await updateData(id, formData.value, token);
            showNotification("Éxito", "Actualizado con éxito", "success");
        } else {
            await sendData(formData.value, token);
            showNotification("Éxito", "Agregado con éxito", "success");
        }
        emit("done"); // Emitir el evento 'done'
        dialogFormVisible.value = false;
        resetForm();
    } catch (error) {
        console.log(id, formData.value, token);
        showNotification("Error", error.response.data.message, "error");
    }
};

const resetForm = () => {
    formData.value.name = '';
};
</script>