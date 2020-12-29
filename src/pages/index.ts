import { changeTitle } from "../util/util";
import { api } from "../api/api";
import GenerateButton from "../components/GenerateButton";
import IndexCard from "../components/IndexCard";

const Index = () => {
    const container = document.createElement("side");
    container.className = "container";

    const CardContianer = document.createElement("section");
    CardContianer.className = "Card-Container";

    let quoteData; // quote 저장
    let imageData; // image 저장

    // 초기렌더링시
    function init() {
        getQuote();
        getImage();
        updateInfo();
    }

    async function getQuote() {
        const response = await api.getQuotes();
        if (!response.isError) {
            quoteData = response.data.quote;
            updateInfo();
        }
    }

    async function getImage() {
        const response = await api.getImage();
        if (!response.isError) {
            imageData = response.data.url;
            updateInfo();
        }
    }

    // quote , image 변경시 업데이트
    function updateInfo() {
        CardContianer.innerHTML = "";
        CardContianer.appendChild(
            IndexCard({
                Quote: quoteData,
                Image: imageData
            })
        );
    }

    function render() {
        changeTitle("Taylor TODO");
        const APIButtons = document.createElement("section");
        APIButtons.className = "API-Btns";

        // Quote 불러오는 버튼
        const QuoteButton = GenerateButton({
            title: "random quotes🧠",
            onClick: getQuote
        });
        // 이미지 불러오는 버튼
        const ImageButton = GenerateButton({
            title: "random image👱‍♀️",
            onClick: getImage
        });

        container.appendChild(CardContianer);
        APIButtons.appendChild(QuoteButton);
        APIButtons.appendChild(ImageButton);
        container.appendChild(APIButtons);
        return container;
    }

    init();
    return render();
};

export default Index;
