import "jsdom-global/register";
import TodoCard from "../../components/TodoCard";

describe("<TodoCard/>", () => {
    let container;
    const MockData = {
        id: 1,
        description: "test",
        done: true
    };

    it("renders correctly", () => {
        container = TodoCard(MockData);
    });

    it("matches snapshot", () => {
        expect(container).toMatchSnapshot();
    });
});
