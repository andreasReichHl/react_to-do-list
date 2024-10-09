import { useState } from "react";
import TodoList from "./assets/components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);

    return (
        <>
            <TodoList />
        </>
    );
}

export default App;
