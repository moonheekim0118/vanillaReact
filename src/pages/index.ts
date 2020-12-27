import { changeTitle } from "../util/util";

const Index = () => {
    const container = document.createElement("div");
    container.className = "container";
    container.innerText = "index page";
    changeTitle("인덱스");

    return container;
};

export default Index;
