import { changeTitle } from "../util/util";

const NotFound = () => {
    const container = document.createElement("div");
    container.className = "container";

    const ErrorMessage = document.createElement("h2");
    ErrorMessage.innerText = "존재하지 않는 페이지입니다.";
    container.appendChild(ErrorMessage);

    changeTitle("Not found");

    return container;
};

export default NotFound;
