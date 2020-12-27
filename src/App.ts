import Router from "./route";
import Menu from "./components/Menu";

const App = ($target: Element) => {
    let nowPage = "";

    function renewPage() {
        nowPage = window.location.hash;
    }

    window.onhashchange = () => {
        renewPage();
        render();
        Menu(nowPage);
    };

    // 최초 렌더링시 실행
    function init() {
        renewPage();
        // 메뉴 삽입
        document.querySelector("body").appendChild(Menu(nowPage));
        render(); // 렌더링
    }

    function render() {
        const renderingPage = Router.getCurrentURL(nowPage);
        $target.innerHTML = "";
        $target.appendChild(renderingPage());
    }

    init();
};

export default App(document.querySelector(".app"));
