import indexPage from "./pages/index";
import aboutPage from "./pages/about";
import todoPage from "./pages/todo";
import errorPage from "./pages/error";

class Router {
    routes: object;
    nowPage = window.location.hash;

    constructor() {
        this.routes = {
            "": indexPage,
            about: aboutPage,
            todo: todoPage
        };
    }

    // 현재 url 주소에 따라서 라우팅해주는 함수
    getCurrentURL(path: string) {
        const key = this.parsePath(path);
        const pathLists = Object.keys(this.routes);
        if (pathLists.includes(key)) {
            return this.routes[key];
        } else {
            // pathLists에 없는 주소라면 404 Routing
            return errorPage;
        }
    }

    // pathname 파싱
    parsePath(path: string): string {
        return path.toString().replace("#", "");
    }

    // push to
    push(pageName: string) {
        window.location.hash = pageName;
    }
}

const router = new Router();
export default router;
