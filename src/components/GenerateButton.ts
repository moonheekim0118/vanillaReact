interface Props {
    title: string;
    onClick: () => Promise<void>;
}

// 버튼 클릭시 image와 quotes 모두 갱신
const GenerateButton = ({ title, onClick }: Props): Element => {
    const Button = document.createElement("button");

    function render() {
        Button.className = "Generate-Btn";
        Button.innerText = title;
        Button.addEventListener("click", onClick);
        return Button;
    }

    return render();
};

export default GenerateButton;
