import { config } from "../config/config";

export async function deleteTodo(todoId: string) {
  await fetch(`${config.API_URL}/${todoId}`, {
    method: "DELETE",
  });
}
