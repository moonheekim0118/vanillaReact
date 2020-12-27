import Router from "../route";

const NotFound = () => {
    const container = document.createElement("div");
    container.className = "container";
    const ErrorMessage = document.createElement("h2");
    ErrorMessage.innerText = "존재하지 않는 페이지입니다.";
    container.appendChild(ErrorMessage);

    Router.changeTitle("Not found");

    return container;
};

export default NotFound;
