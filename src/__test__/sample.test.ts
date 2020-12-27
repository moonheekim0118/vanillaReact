import "jsdom-global/register";
import index from "../pages/index";

const container = document.createElement("div");
container.className = "container";
container.innerText = "index page";

it("샘플 테스트", () => {
    const result = index();
    expect(result).toEqual(container);
});
