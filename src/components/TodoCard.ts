import { todoObject } from "../util/types";

const TodoCard = () => {
    function render({ id, description, done }: todoObject): Element {
        const dataId = id.toString();
        const TodoCard = document.createElement("div");
        TodoCard.className = "Todo-Card";
        TodoCard.dataset.id = dataId;

        const TodoDesc = document.createElement("span");
        TodoDesc.className = "Todo-Descr";
        TodoDesc.innerText = description;
        TodoDesc.dataset.id = dataId;

        const TodoDone = document.createElement("i");
        TodoDone.className = done ? "fas fa-check" : "";
        TodoDone.dataset.id = dataId;

        const RemoveIcon = document.createElement("i");
        RemoveIcon.className = "fas fa-trash-alt";
        RemoveIcon.id = "Remove-Btn";
        RemoveIcon.dataset.id = dataId;

        TodoCard.appendChild(TodoDesc);
        TodoCard.appendChild(TodoDone);
        TodoCard.appendChild(RemoveIcon);

        return TodoCard;
    }

    return render;
};

export default TodoCard();
