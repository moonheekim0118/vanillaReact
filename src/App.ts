import Router from "./route";
import Menu from "./components/Menu";

const App = ($target: Element) => {
    window.onhashchange = () => {
        render();
    };

    // 최초 렌더링시 실행
    function init() {
        // 메뉴 삽입
        const menuData = [
            { name: "Home", path: "#" },
            { name: "About", path: "#about" }
        ];
        document.querySelector("body").appendChild(Menu(menuData));
        render(); // 렌더링
    }

    function render() {
        const renderingPage = Router.getCurrentURL(window.location.hash);
        $target.innerHTML = "";
        $target.appendChild(renderingPage());
    }

    init();
};

export default App(document.querySelector(".app"));
