interface Props {
    id: number;
    description: string;
    done: boolean;
}

const TodoCard = () => {
    function render({ id, description, done }: Props): Element {
        const TodoCard = document.createElement("div");
        TodoCard.className = "Todo-Card";
        TodoCard.dataset.id = id.toString();
        const TodoDesc = document.createElement("span");
        TodoDesc.className = "Todo-Descr";
        TodoDesc.innerText = description;
        const TodoDone = document.createElement("div");
        TodoDone.className = "Todo-Done";
        TodoDone.innerText = done ? "✔️" : "❌";

        TodoCard.appendChild(TodoDesc);
        TodoCard.appendChild(TodoDone);
        return TodoCard;
    }

    return render;
};

export default TodoCard();
