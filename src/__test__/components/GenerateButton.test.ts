import "jsdom-global/register";
import GenerateButton from "../../components/GenerateButton";

describe("<GenerateButton/>", () => {
    let container = null;
    const mockFn = jest.fn();

    it("renders correctly", () => {
        container = GenerateButton({ title: "test", onClick: mockFn });
    });

    it("matches snapshot", () => {
        expect(container).toMatchSnapshot();
    });

    it("should call onClick if button is clicked", () => {
        container.click();
        expect(mockFn).toHaveBeenCalled();
    });
});
