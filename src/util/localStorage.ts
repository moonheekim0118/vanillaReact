export const localGetItem = (key: string) => {
    const value = localStorage.getItem(key);
    return value === null ? [] : JSON.parse(value);
};

export const localSetItem = (key: string, value: object) => {
    if (value === null || value === undefined) return;
    const exData = localGetItem(key);
    exData.push(value);
    const toJson = JSON.stringify(exData);
    localStorage.setItem(key, toJson);
};
