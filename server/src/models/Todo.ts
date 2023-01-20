import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: String,
    description: String,
});

const TodoModel = mongoose.model("Todo", TodoSchema);

export default TodoModel;