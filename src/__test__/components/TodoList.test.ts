import "jsdom-global/register";
import TodoList from "../../components/TodoList";

describe("<TodoList/>", () => {
    let container;
    const MockData = [
        {
            description: "test1",
            id: 1,
            done: true
        },
        {
            description: "test2",
            id: 2,
            done: false
        }
    ];

    it("renders correctly", () => {
        container = TodoList(MockData);
    });

    it("matches snapshot", () => {
        expect(container).toMatchSnapshot();
    });
});
