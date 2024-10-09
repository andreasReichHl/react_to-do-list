import { useState } from "react";
import Todo from "./Todo";

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    function add() {
        setTodos((old) => [...old, task]);
    }

    return (
        <>
            <section className="m-auto text-center mt-10">
                <h1 className="font-custom text-3xl font-bold mb-6">
                    To-Do Liste
                </h1>
                <input
                    type="text"
                    placeholder="Aufgabe"
                    className="input input-bordered w-3/12  mr-3"
                    onChange={(e) => setTask(e.target.value)}
                    required
                />
                <button
                    className="btn bg-blue-700 text-white mb-10"
                    onClick={add}
                >
                    Add
                </button>
                {todos.map((task, index) => (
                    <Todo
                        task={task}
                        index={index}
                        setTodos={setTodos}
                        todos={todos}
                    />
                ))}
            </section>
        </>
    );
}
