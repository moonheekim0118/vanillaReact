import { changeTitle } from "../util/util";
import { localGetItem, addTodo } from "../util/localStorage";
import {
    sessionGetItem,
    sessionSetItem,
    sessionRemoveItem
} from "../util/sessionStorage";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const Todo = () => {
    const container = document.createElement("side");
    container.className = "container";

    const TodoListContainer = document.createElement("section");
    TodoListContainer.className = "TodoList-Container";

    const keyword = sessionGetItem("keyword");
    let todoLists = localGetItem("todoList");

    function render() {
        container.innerHTML = "";
        changeTitle("Taylor TODO | Todo");
        // 투두 input 컴포넌트 추가
        container.appendChild(
            TodoInput({
                keyword,
                onInput: (value) => {
                    sessionSetItem("keyword", value);
                },
                onSubmit: (value) => {
                    addTodo("todoList", {
                        description: value,
                        id: Date.now(),
                        done: false
                    });
                    sessionRemoveItem("keyword");
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
        todoLists = localGetItem("todoList");
        TodoListContainer.innerHTML = "";
        TodoListContainer.appendChild(TodoList(todoLists));
    }
    updateList();
    return render;
};

export default Todo();
