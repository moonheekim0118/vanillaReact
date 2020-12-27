import "jsdom-global/register";
import MenuComponent from "../components/Menu";

describe('Menu test', () => {
    it('component test',()=>{
        const container = MenuComponent('#about');
        expect(container).toMatchSnapshot();
    })
})
