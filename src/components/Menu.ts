import MenuData from "../util/menuList";

const Menu = (nowPage: string): Element => {
    const container = document.createElement("aside");
    container.className = "Menu-Container";

    function render() {
        const MenuList = document.createElement("ul");
        MenuList.className = "Menu-List";

        container.innerHTML = "";
        MenuList.innerHTML = "";

        MenuData.map((data) => {
            const Menu = document.createElement("li");
            Menu.dataset.id = data.path;
            Menu.className = "Menu";

            const Link = document.createElement("a");
            Link.className = "link";
            Link.innerText = data.name;
            Link.href = data.path;

            if (nowPage === data.path) {
                // 현재 방문중이라면 클래스 추가
                Menu.classList.add("visiting");
            }

            Menu.appendChild(Link);
            MenuList.appendChild(Menu);
        });

        container.appendChild(MenuList);

        return container;
    }

    return render();
};

export default Menu;
