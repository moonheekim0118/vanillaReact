type Props = Array<{ name: string; path: string }>;

const Menu = (datas: Props): Element => {
    const MenuContainer = document.createElement("aside");
    MenuContainer.className = "Menu-Container";
    const MenuList = document.createElement("ul");
    MenuList.className = "Menu-List";

    datas.map((data) => {
        const Menu = document.createElement("li");
        const Link = document.createElement("a");
        Menu.dataset.id = data.path;
        Menu.className = "Menu";
        Link.className = "link";
        Link.innerText = data.name;
        Link.href = data.path;
        Menu.appendChild(Link);
        MenuList.appendChild(Menu);
    });

    MenuContainer.appendChild(MenuList);

    return MenuContainer;
};

export default Menu;
