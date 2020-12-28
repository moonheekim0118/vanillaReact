export const getItem = (key: string) => {
    const value = localStorage.getItem(key);
    if (key === "keyword") {
        return value === null ? null : JSON.parse(value);
    }
    return value === null ? [] : JSON.parse(value);
};

export const removeItem = (key: string) => {
    localStorage.removeItem(key);
};

export const setItem = (key: string, value: object) => {
    if (value === null || value === undefined) return;
    let toJson;
    if (key === "todoList") {
        const exData = getItem(key);
        exData.push(value);
        toJson = JSON.stringify(exData);
        localStorage.setItem(key, toJson);
    } else {
        toJson = JSON.stringify(value);
        localStorage.setItem(key, toJson);
    }
};
