import "jsdom-global/register";
import IndexCard from "../../components/IndexCard";

describe("<IndexCard/>", () => {
    let container = null;
    let MockData = {
        Quote: "this is a test",
        Image: "test Image"
    };

    it("renders correctly", () => {
        container = IndexCard(MockData);
    });

    it("matches snapshot", () => {
        expect(container).toMatchSnapshot();
    });
});
