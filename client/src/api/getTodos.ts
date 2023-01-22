export type Todo = {
    title: string;
    description: string;
    _id: string;
};

export async function getTodos(): Promise<Todo[]> {
    const response = await fetch(`http://localhost:5000/`);
    return response.json();
}