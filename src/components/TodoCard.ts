import { todoObject } from "../util/types";

const TodoCard = ({ id, description, done }: todoObject): Element => {
    const dataId = id.toString();

    const container = document.createElement("div");
    container.className = done ? "Todo-Card done" : "Todo-Card";
    container.dataset.id = dataId;
    container.draggable = true;

    function render() {
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

        container.appendChild(TodoDesc);
        container.appendChild(TodoDone);
        container.appendChild(RemoveIcon);

        return container;
    }

    return render();
};

export default TodoCard;
