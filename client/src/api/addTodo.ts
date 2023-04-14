import { config } from "../config/config";

export async function addTodo(title: string, description: string) {
  const response = await fetch(`${config.API_URL}/addTodo`, {
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
