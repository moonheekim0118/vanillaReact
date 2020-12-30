import "jsdom-global/register";
import about from "../../pages/about";

describe("about page rendering", () => {
    let container;

    it("renders correctly", () => {
        container = about();
    });

    it("matches snapshot", () => {
        expect(container).toMatchSnapshot();
    });
});
