export async function addTodo(title: string, description: string) {
  const response = await fetch(`http://localhost:5000/addTodo`, {
    method: "POST",
    body: JSON.stringify({
      title,
      description,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
