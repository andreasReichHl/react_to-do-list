export default function Todo(props) {
    function deleteElement() {
        const updateTodos = [...props.todos];
        updateTodos.splice(props.index, 1);
        props.setTodos(updateTodos);
    }

    return (
        <div className="card bg-base-100 w-1/4 shadow-xl m-auto mb-2">
            <div className="card-body">
                <div className="card-actions flex-row items-center ">
                    <p className="text-left">{props.task}</p>
                    <button
                        className="btn bg-red-700 text-white hover:bg-red-600"
                        onClick={deleteElement}
                    >
                        delete
                    </button>
                </div>
            </div>
        </div>
    );
}
