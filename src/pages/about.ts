import { changeTitle } from "../util/util";

const About = () => {
    const container = document.createElement("side");
    container.className = "container";
    const description = `
    <h2>a Swiftie made this site just for fun🤩</h2>
    <p>I use <a href="https://taylor.rest/">taylor rest API</a> for serving her photos and quotes</p>
    `;

    container.innerHTML = description;
    changeTitle("Taylor TODO | about");

    return container;
};

export default About;
