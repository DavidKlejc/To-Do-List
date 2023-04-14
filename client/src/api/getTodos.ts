import { config } from "../config/config";

export type Todo = {
  title: string;
  description: string;
  _id: string;
};

export async function getTodos(): Promise<Todo[]> {
  const response = await fetch(`${config.API_URL}/`);
  return response.json();
}
