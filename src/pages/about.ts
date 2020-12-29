import { changeTitle } from "../util/util";

const About = () => {
    const container = document.createElement("side");

    function render() {
        changeTitle("Taylor TODO | about");
        container.className = "container";
        const description = `
        <h2>a Swiftie made this site just for fun🤩</h2>
        <p>I use <a href="https://taylor.rest/">taylor rest API</a> for serving her photos and quotes</p>
        `;
        container.innerHTML = description;
        return container;
    }

    return render();
};

export default About;
