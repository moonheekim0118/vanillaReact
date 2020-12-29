import TodoCard from "./TodoCard";
import { todoToggle, removeTodo } from "../util/localStorage";
import { todoObject } from "../util/types";

type listType = todoObject[];

const TodoList = () => {
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

        // Todo Remove
        function onRemove(id: number, target: Element) {
            removeTodo(id);
            target.classList.add("removed");
        }

        // Todo Toggle
        function onToggle(id: number, target: Element) {
            const result = todoToggle(+id); // 토글
            target.children[1].className = result ? "fas fa-check" : ""; // 자식 노드 체크 표시
        }

        // Toggle인지 Remove인지 구분후 실행
        function onClick(e) {
            const id = e.target.dataset.id;
            const target =
                TodoList.children[findChildren(id, TodoList.children)];
            if (e.target.id === "Remove-Btn") {
                // 투두 삭제
                onRemove(+id, target);
            } else {
                // Done Toggle
                onToggle(+id, target);
            }
        }

        // 클릭 시 이벤트
        TodoList.addEventListener("click", onClick);
        return TodoList;
    }

    return render;
};

export default TodoList();
