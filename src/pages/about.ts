import { changeTitle } from "../util/util";

const About = () => {
    const container = document.createElement("div");
    container.className = "container";
    container.innerText = "about page";
    changeTitle("어바웃");

    return container;
};

export default About;
