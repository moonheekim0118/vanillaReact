import { changeTitle } from "../util/util";

const NotFound = () => {
    const container = document.createElement("div");

    function render() {
        changeTitle("Not found");

        const ErrorMessage = document.createElement("h2");

        container.className = "container";
        ErrorMessage.innerText = "존재하지 않는 페이지입니다.";

        container.appendChild(ErrorMessage);
        return container;
    }

    return render();
};

export default NotFound;
