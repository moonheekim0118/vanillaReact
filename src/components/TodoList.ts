import TodoCard from "./TodoCard";
import { todoToggle, removeTodo } from "../util/localStorage";
import { todoObject } from "../util/types";

type listType = todoObject[];

const TodoList = () => {
    // 로컬스토리지에 저장된 todoList 받아오기

    function render(todoList: listType): Element {
        const TodoList = document.createElement("div");
        TodoList.className = "Todo-List";
        // 각각 투두 별로 ToDoCard 컴포넌트 생성
        todoList.map((todo) => {
            TodoList.appendChild(
                TodoCard({
                    id: todo.id,
                    description: todo.description,
                    done: todo.done
                })
            );
        });

        // 현재 TodoList에서 특정 자식 노드 인덱스 찾아주는 함수
        function findChildren(id: string, children): string {
            return Object.keys(children).find(
                (key) => children[key].dataset.id === id
            );
        }

        // 투두 토글 (이벤트 위임)
        function onToggle(e) {
            const id = e.target.dataset.id;
            const result = todoToggle(+id); // 토글
            const target =
                TodoList.children[findChildren(id, TodoList.children)];
            target.children[1].className = result ? "fas fa-check" : ""; // 자식 노드 체크 표시
        }
        TodoList.addEventListener("click", onToggle);
        return TodoList;
    }

    return render;
};

export default TodoList();
