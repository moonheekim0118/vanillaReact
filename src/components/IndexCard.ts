interface Props {
    Quote: string;
    Image: string;
}

const IndexCard = () => {
    function render({ Quote, Image }: Props) {
        const Card = document.createElement("div");
        Card.className = "Index-Card";
        const CardTitle = document.createElement("span");
        CardTitle.className = "Card-Title";
        CardTitle.innerText = "Let's be cool as Taylor👩‍🎤";
        const QuoteContainer = document.createElement("span");
        QuoteContainer.className = "Quote";
        const ImageContainer = document.createElement("img");
        ImageContainer.className = "Image";

        QuoteContainer.innerText = Quote;
        ImageContainer.src = Image;

        Card.appendChild(CardTitle);
        Card.appendChild(ImageContainer);
        Card.appendChild(QuoteContainer);

        return Card;
    }

    return render;
};

export default IndexCard;
