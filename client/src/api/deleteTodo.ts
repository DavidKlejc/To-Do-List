export async function deleteTodo(todoId: string) {
  await fetch(`http://localhost:5000/${todoId}`, {
    method: "DELETE",
  });
}
