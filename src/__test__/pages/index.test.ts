import "jsdom-global/register";
import index from "../../pages/index";

describe("index page rendering", () => {
    let container;

    it("renders correctly", () => {
        container = index();
    });

    it("matches snapshot", () => {
        expect(container).toMatchSnapshot();
    });
});
