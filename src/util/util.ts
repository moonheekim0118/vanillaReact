export const changeTitle = (title: string) => {
    const elem = document.querySelector("title");
    if (elem) {
        elem.innerText = title;
    }
};
