import { changeTitle } from "../util/util";
import { api } from "../api/api";
import GenerateButton from "../components/GenerateButton";
import IndexCard from "../components/IndexCard";

const Index = () => {
    const container = document.createElement("side");
    container.className = "container";
    container.innerText = "index page";
    const CardContianer = document.createElement("section");
    CardContianer.className = "Card-Container";

    changeTitle("인덱스");

    let quoteData; // quote 저장
    let imageData; // image 저장
    const CardComponent = IndexCard();

    // 초기렌더링시
    function init() {
        getQuote();
        getImage();
    }

    async function getQuote() {
        const response = await api.getQuotes();
        if (!response.isError) {
            quoteData = response.data.quote;
            render();
        } else {
        }
    }

    async function getImage() {
        const response = await api.getImage();
        if (!response.isError) {
            imageData = response.data.url;
            render();
        } else {
        }
    }

    function render() {
        CardContianer.innerHTML = "";
        CardContianer.appendChild(
            CardComponent({
                Quote: quoteData,
                Image: imageData
            })
        );
    }

    // Quote 불러오는 버튼
    const QuoteButton = GenerateButton({
        title: "random quotes",
        onClick: getQuote
    });
    // 이미지 불러오는 버튼
    const ImageButton = GenerateButton({
        title: "random image",
        onClick: getImage
    });

    container.appendChild(CardContianer);
    container.appendChild(QuoteButton);
    container.appendChild(ImageButton);

    init();
    return container;
};

export default Index;
