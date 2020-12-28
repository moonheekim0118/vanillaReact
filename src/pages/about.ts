import { changeTitle } from "../util/util";

const About = () => {
    const container = document.createElement("div");
    container.className = "container";
    container.innerText = "about page";
    changeTitle("Taylor TODO | about");

    return container;
};

export default About;
