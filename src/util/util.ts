export const changeTitle = (title: string) => {
    const elem = document.querySelector("title");
    if (elem) {
        elem.innerText = title;
    }
};

// 디바운싱 함수
export const debounce = (func, limit) => {
    let inDebounce;

    return function (event) {
        const value = event.target.value;
        const context = this;
        if (inDebounce) {
            clearTimeout(inDebounce);
        }
        inDebounce = setTimeout(func.bind(context, value), limit);
    };
};

// 쓰로틀링 함수
export const throttling = (func, limit) => {
    let inThrottle;

    return function (event) {
        const value = event.target[0].value;
        event.target[0].value = ""; // 이전 value 비워주기
        const context = this;
        if (!inThrottle) {
            func.apply(context, [value]);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};
