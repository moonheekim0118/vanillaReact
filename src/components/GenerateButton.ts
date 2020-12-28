interface Props {
    title: string;
    onClick: () => Promise<void>;
}

// 버튼 클릭시 image와 quotes 모두 갱신
const GenerateButton = () => {
    function render({ title, onClick }: Props): Element {
        const Button = document.createElement("button");
        Button.className = "Generate-Btn";
        Button.innerText = title;
        Button.addEventListener("click", onClick);

        return Button;
    }
    return render;
};

export default GenerateButton();
