import "jsdom-global/register";
import TodoInput from "../../components/TodoInput";

describe("<TodoInput/>", () => {
    let container;
    let MockOnInput = jest.fn();
    let MockOnSubmit = jest.fn();

    let MockData = {
        keyword: "test",
        onInput: MockOnInput,
        onSubmit: MockOnSubmit
    };

    it("renders correctly", () => {
        container = TodoInput(MockData);
    });

    it("matches snapshot", () => {
        expect(container).toMatchSnapshot();
    });

    it("should call onInput if input happend", () => {
        container.dispatchEvent(new Event("input"));
        expect(MockOnInput).not.toHaveBeenCalled(); // 쓰로틀링 체크
        setTimeout(() => expect(MockOnInput).toHaveBeenCalled(), 900);
    });

    it("should call onSubmit if form is submited", () => {
        container.dispatchEvent(new Event("submit"));
        expect(MockOnSubmit).toHaveBeenCalled();
    });
});
