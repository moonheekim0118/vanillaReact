import TodoCard from "./TodoCard";

type listType = { description: string; done: boolean }[];

const TodoList = () => {
    // 로컬스토리지에 저장된 todoList 받아오기
    function render(todoList: listType): Element {
        const TodoList = document.createElement("div");
        TodoList.className = "Todo-List";
        // 각각 투두 별로 ToDoCard 컴포넌트 생성
        todoList.map((todo) => {
            TodoList.appendChild(
                TodoCard({
                    id: Date.now(),
                    description: todo.description,
                    done: todo.done
                })
            );
        });
        return TodoList;
    }

    return render;
};

export default TodoList();
