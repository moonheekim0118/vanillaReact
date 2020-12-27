import Router from "../route";

const About = () => {
    const container = document.createElement("div");
    container.className = "container";
    container.innerText = "about page";
    Router.changeTitle("어바웃");

    return container;
};

export default About;
