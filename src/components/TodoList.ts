import TodoCard from "./TodoCard";
import { todoToggle, removeTodo, switchItems } from "../util/localStorage";
import { findNodeInChidrenById } from "../util/util";
import { todoObject } from "../util/types";

type listType = todoObject[];

const TodoList = (todoList: listType): Element => {
    const container = document.createElement("div");
    container.className = "Todo-List";
    let dragging;

    function render() {
        todoList.map((todo) => {
            container.appendChild(
                TodoCard({
                    id: todo.id,
                    description: todo.description,
                    done: todo.done
                })
            );
        });

        // Todo Remove
        function onRemove(id: number, target: Element) {
            removeTodo(id);
            target.classList.add("removed");
        }

        // Todo Toggle
        function onToggle(id: number, target: Element) {
            const result = todoToggle(+id); // 토글
            target.children[1].className = result ? "fas fa-check" : ""; // 자식 노드 체크 표시
            target.classList.toggle("done");
        }

        // Toggle인지 Remove인지 구분후 실행
        function onClick(e) {
            const id = e.target.dataset.id;
            const target =
                container.children[
                    findNodeInChidrenById(id, container.children)
                ];
            if (e.target.id === "Remove-Btn") {
                // 투두 삭제
                onRemove(+id, target);
            } else {
                // Done Toggle
                onToggle(+id, target);
            }
        }

        // 드래그 저장
        function drag(e) {
            const id = e.target.dataset.id;
            dragging =
                container.children[
                    findNodeInChidrenById(id, container.children)
                ]; // 드래깅 타겟 저장
            dragging.classList.add("dragging"); // background-color 추가
        }

        function allowDrop(e) {
            e.preventDefault();
        }

        // 드랍
        function drop(e) {
            const id = e.target.dataset.id;
            switchingLists(
                container.children[
                    findNodeInChidrenById(id, container.children)
                ]
            );
        }

        // 리스트 드래그 - 드랍 교환
        function switchingLists(dropped) {
            dragging.classList.remove("dragging");

            // 각각 dropped 타겟 컨텐츠와 dragged 타겟 컨텐츠 저장
            const droppedContents = dropped.innerHTML;
            const draggedContents = dragging.innerHTML;

            // 각각 dropped 타겟 id와 dragged 타겟 id 저장
            const droppedId = dropped.dataset.id;
            const draggedId = dragging.dataset.id;

            // 각각 dropped 타겟 class와 dragged 타겟 class 저장
            const droppedClass = dropped.className;
            const draggedClass = dragging.className;

            // 서로 html 및 id, class 교환
            dropped.innerHTML = draggedContents;
            dropped.dataset.id = draggedId;
            dropped.className = draggedClass;

            dragging.innerHTML = droppedContents;
            dragging.dataset.id = droppedId;
            dragging.className = droppedClass;

            // 로컬스토리지에서도 순서 교환
            switchItems(+droppedId, +draggedId);
        }

        // 클릭 시 이벤트
        container.addEventListener("click", onClick);

        // 드래그 이벤트
        container.addEventListener("dragstart", drag);

        // 드래그 오버 이벤트
        container.addEventListener("dragover", allowDrop);

        // 드랍 이벤트
        container.addEventListener("drop", drop);
        return container;
    }

    return render();
};

export default TodoList;
