import MenuData from "../util/menuList";

const Menu = () => {
    const MenuContainer = document.createElement("aside");
    MenuContainer.className = "Menu-Container";
    const MenuList = document.createElement("ul");
    MenuList.className = "Menu-List";

    function render(nowPage: string): Element {
        MenuContainer.innerHTML = "";
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

        MenuContainer.appendChild(MenuList);
        return MenuContainer;
    }

    return render;
};

export default Menu();
