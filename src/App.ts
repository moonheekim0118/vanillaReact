import Router from './route';


const App =($target:Element)=>{
    
    window.onhashchange = () => { 
        render();
     };

    function render(){
        const renderingPage = Router.getCurrentURL(window.location.hash);
        console.log(renderingPage);
        $target.innerHTML="";
        $target.appendChild(renderingPage);
    }

    render();
}


export default App(document.querySelector('.app'));