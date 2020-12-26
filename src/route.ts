import indexPage from './pages/index';
import aboutPage from './pages/about';
import errorPage from './pages/error';

const pathLists =["", "about"];

 class Router {
    routes :object;
    root : string;

    constructor(){
        this.routes = {
            "":indexPage,
            "about":aboutPage,
            "404":errorPage,
        };
        
        this.root = "/";
    };

    initialRoutes(){
        
    }
 
    // 현재 url 주소에 따라서 라우팅해주는 함수 
    getCurrentURL(path:string){
        const key = this.parsePath(path);

        console.log(key);
        if(pathLists.includes(key)){ 
            return this.routes[key];
        }
        else{  // pathLists에 없는 주소라면 404 Routing 
            return this.routes["404"];
        }
    };

    // pathname 파싱
    parsePath(path:string):string{
        return path.toString().replace("public/","").replace(".html","").replace(/\/$/,"").replace(/^\//,"");
    };

    navigateTo(path) {
        history.pushState(
          { prevURL: location.pathname },
          null,
          this.root + this.parsePath(path)
        );
        const popStateEvent = new PopStateEvent("popstate");
        dispatchEvent(popStateEvent);
      }
};


const router = new Router();

export default router;