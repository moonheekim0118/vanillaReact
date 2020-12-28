import { changeTitle } from "../util/util";

const Todo = () => {
    const container = document.createElement("side");
    container.className = "container";
    changeTitle("Taylor TODO | Todo");

    return container;
};

export default Todo;
