import Router from './route';


const App =()=>{
    
    window.addEventListener("popstate", (e) => {
        render();
    });

    function render(){
        const renderingPage = Router.getCurrentURL(location.pathname);
        const $target = document.querySelector('.app');
        $target.appendChild(renderingPage);
    }

    setTimeout(render, 0);
}


export default App();