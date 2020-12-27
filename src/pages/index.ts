import Router from "../route";

const Index = () => {
    const container = document.createElement("div");
    container.className = "container";
    container.innerText = "index page";
    Router.changeTitle("인덱스");

    return container;
};

export default Index;
