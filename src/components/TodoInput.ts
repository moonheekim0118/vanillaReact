import { debounce, throttling } from "../util/util";

interface Props {
    keyword: string;
    onInput: (any) => void;
    onSubmit: (any) => void;
}

const TodoInput = ({ keyword, onInput, onSubmit }: Props): Element => {
    const container = document.createElement("form");
    container.className = "Input-Container";

    function render() {
        const Input = document.createElement("input");
        Input.className = "Todo-Input";
        Input.value = keyword;

        const SubmitButton = document.createElement("button");
        SubmitButton.className = "Todo-Submit-Btn";
        SubmitButton.innerText = "🐥";
        SubmitButton.type = "submit";

        container.appendChild(Input);
        container.appendChild(SubmitButton);

        // todo 입력시 input 이벤트로 저장 (디바운싱 적용)
        container.addEventListener("input", debounce(onInput, 900));

        // todo 등록시 저장 (스로틀링 적용)
        container.addEventListener("submit", throttling(onSubmit, 900));

        return container;
    }

    return render();
};

export default TodoInput;
