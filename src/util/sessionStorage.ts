export const sessionGetItem = (key: string) => {
    const value = sessionStorage.getItem(key);
    return value === null ? null : JSON.parse(value);
};

export const sessionSetItem = (key: string, value: string) => {
    if (value === null || value === undefined) return;
    const toJson = JSON.stringify(value);
    sessionStorage.setItem(key, toJson);
};

export const sessionRemoveItem = (key: string) => {
    sessionStorage.removeItem(key);
};
