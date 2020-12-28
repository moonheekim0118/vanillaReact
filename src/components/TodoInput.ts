import { debounce, throttling } from "../util/util";

interface Props {
    keyword: string;
    onInput: (any) => void;
    onSubmit: (any) => void;
}

const TodoInput = () => {
    function render({ keyword, onInput, onSubmit }: Props): Element {
        const InputContainer = document.createElement("form");
        InputContainer.className = "Input-Container";
        const Input = document.createElement("input");
        Input.className = "Todo-Input";
        Input.value = keyword;
        const SubmitButton = document.createElement("button");
        SubmitButton.className = "Todo-Submit-Btn";
        SubmitButton.innerText = "add🐥";
        SubmitButton.type = "submit";

        InputContainer.appendChild(Input);
        InputContainer.appendChild(SubmitButton);

        // todo 입력시 input 이벤트로 저장 (디바운싱 적용)
        Input.addEventListener("input", debounce(onInput, 900));

        // todo 등록시 저장 (스로틀링 적용)
        InputContainer.addEventListener("submit", throttling(onSubmit, 900));

        return InputContainer;
    }

    return render;
};

export default TodoInput();
