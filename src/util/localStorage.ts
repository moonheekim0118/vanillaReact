import { todoObject } from "./types";

export const localGetItem = (key: string): todoObject[] => {
    const value = localStorage.getItem(key);
    return value === null ? [] : JSON.parse(value);
};

export const localSetItem = (key: string, value: todoObject) => {
    if (value === null || value === undefined) return;
    const exData = localGetItem(key);
    exData.push(value);
    const toJson = JSON.stringify(exData);
    localStorage.setItem(key, toJson);
};

// todo List done 으로 변경
export const localTodoToggle = (id: number): boolean => {
    if (id === null || id === undefined) return;
    const exData = localGetItem("todoList");
    let result;
    exData.forEach((element) => {
        console.log(element.id, id);
        if (element.id === id) {
            result = !element.done;
            element.done = result;
        }
    });
    const toJson = JSON.stringify(exData);
    localStorage.setItem("todoList", toJson);
    return result;
};
