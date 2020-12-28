import { changeTitle } from "../util/util";
import { getItem, setItem, removeItem } from "../util/localStorage";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const Todo = () => {
    const container = document.createElement("side");
    container.className = "container";
    const TodoListContainer = document.createElement("div");
    TodoListContainer.className = "TodoList-Container";
    const keyword = getItem("keyword");
    let todoLists = getItem("todoList");

    function render() {
        changeTitle("Taylor TODO | Todo");
        // 투두 input 컴포넌트 추가
        container.appendChild(
            TodoInput({
                keyword,
                onInput: (value) => {
                    setItem("keyword", value);
                },
                onSubmit: (value) => {
                    setItem("todoList", { description: value, done: false });
                    removeItem("keyword");
                    updateList();
                }
            })
        );
        // 투두 리스트 컴포넌트 추가
        container.appendChild(TodoListContainer);
        return container;
    }

    function updateList() {
        // 투두 추가시 투두 리스트 뷰 업데이트
        todoLists = getItem("todoList");
        TodoListContainer.innerHTML = "";
        TodoListContainer.appendChild(TodoList(todoLists));
    }
    updateList();
    return render;
};

export default Todo();
