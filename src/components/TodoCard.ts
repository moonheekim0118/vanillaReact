import { localTodoToggle } from "../util/localStorage";
import { todoObject } from "../util/types";

const TodoCard = () => {
    function render({ id, description, done }: todoObject): Element {
        const TodoCard = document.createElement("div");
        TodoCard.className = "Todo-Card";
        TodoCard.dataset.id = id.toString();
        const TodoDesc = document.createElement("span");
        TodoDesc.className = "Todo-Descr";
        TodoDesc.innerText = description;
        const TodoDone = document.createElement("i");
        TodoDone.className = done ? "fas fa-check" : "";

        TodoCard.appendChild(TodoDesc);
        TodoCard.appendChild(TodoDone);

        // 투두 토글
        function onToggleDone() {
            const result = localTodoToggle(id);
            TodoDone.className = result ? "fas fa-check" : ""; // 바로 변경
        }

        TodoCard.addEventListener("click", onToggleDone);
        return TodoCard;
    }

    return render;
};

export default TodoCard();
