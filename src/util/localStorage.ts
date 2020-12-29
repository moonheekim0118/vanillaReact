import { todoObject } from "./types";

// just set Item
const setItem = (key: string, value: todoObject[]) => {
    const toJson = JSON.stringify(value);
    localStorage.setItem(key, toJson);
};

export const localGetItem = (key: string): todoObject[] => {
    const value = localStorage.getItem(key);
    return value === null ? [] : JSON.parse(value);
};

export const addTodo = (key: string, value: todoObject) => {
    if (value === null || value === undefined) return;
    const exData = localGetItem(key);
    exData.push(value);
    setItem(key, exData);
};

// todo List done 으로 변경
export const todoToggle = (id: number): boolean => {
    if (id === null || id === undefined) return;
    const exData = localGetItem("todoList");
    let result;
    exData.forEach((element) => {
        if (element.id === id) {
            result = !element.done;
            element.done = result;
        }
    });
    setItem("todoList", exData);
    return result;
};

// 투두 삭제
export const removeTodo = (id: number) => {
    if (id === null || id === undefined) return;
    const exData = localGetItem("todoList");
    const result = exData.filter((element) => element.id !== id);
    setItem("todoList", result);
};
