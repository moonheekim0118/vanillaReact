import { changeTitle } from "../util/util";
import { getItem, setItem, removeItem } from "../util/localStorage";
import TodoInput from "../components/TodoInput";

const Todo = () => {
    const container = document.createElement("side");
    container.className = "container";
    const keyword = getItem("keyword");
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
            }
        })
    );
    return container;
};

export default Todo;
