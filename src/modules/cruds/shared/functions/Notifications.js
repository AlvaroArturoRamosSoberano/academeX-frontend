import { ElMessage, ElMessageBox, ElNotification } from "element-plus";

export function showMessage(type, message) {
  ElMessage({
    type: type,
    message: message
  });
}
export async function showConfirmation(message, title = "Advertencia") {
  try {
    const confirmed = await ElMessageBox.confirm(message, title, {
      confirmButtonText: "OK",
      cancelButtonText: "Cancelar",
      type: "warning"
    });
    return confirmed;
  } catch (error) {
    return false;
  }
}
export async function showNotification(title, message, type) {
  ElNotification({
    title: title,
    message: message,
    type: type
  });
}
