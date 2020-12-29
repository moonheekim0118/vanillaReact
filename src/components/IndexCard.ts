interface Props {
    Quote: string;
    Image: string;
}

const IndexCard = ({ Quote, Image }: Props): Element => {
    const container = document.createElement("div");
    container.className = "Index-Card";

    function render() {
        const CardTitle = document.createElement("span");
        CardTitle.className = "Card-Title";
        CardTitle.innerText = "Let's be cool as Taylor👩‍🎤";

        const QuoteContainer = document.createElement("span");
        QuoteContainer.className = "Quote";

        const ImageContainer = document.createElement("img");
        ImageContainer.className = "Image";

        QuoteContainer.innerText = Quote;
        ImageContainer.src = Image;

        container.appendChild(CardTitle);
        container.appendChild(ImageContainer);
        container.appendChild(QuoteContainer);

        return container;
    }

    return render();
};

export default IndexCard;
