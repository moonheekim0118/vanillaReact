import Router from '../route';

 const Index=()=>{

    const container = document.createElement('div');
    container.className='container';
    container.innerText='index page';
    const pushButton = document.createElement('button');
    pushButton.innerText='go to about page';
    pushButton.addEventListener('click',()=>{
        Router.push('about');
    });
    
    container.appendChild(pushButton);
    
    return container;
}

export default Index();
