import "jsdom-global/register";
import error from "../../pages/error";

describe("index page rendering", () => {
    let container;

    it("renders correctly", () => {
        container = error();
    });

    it("matches snapshot", () => {
        expect(container).toMatchSnapshot();
    });
});
