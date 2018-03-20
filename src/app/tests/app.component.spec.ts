import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
    it('renders without crashing', () => {
        new AppComponent(); 
    });
    it('handleDelete removes items passed to it', () => {
        const wrapper = new AppComponent(); 
        wrapper.handleDelete('Example 1');
        expect(wrapper.unchecked.length).toBe(2) 
    }); 
    it('handleDelete does nothing if passed invalid params', () => {
        const wrapper = new AppComponent(); 
        wrapper.handleDelete('Example');
        expect(wrapper.unchecked.length).toBe(3)
    }); 
    it('handleAdd adds new item passed to it', () => {
        const wrapper = new AppComponent(); 
        wrapper.handleAdd('Example'); 
        expect(wrapper.unchecked.length).toBe(4); 
        expect(wrapper.unchecked).toContain({ value: 'Example', checked: false }); 
    }); 
    it('handleCheck removes item from unchecked and adds it to checked', () => {
        const wrapper = new AppComponent(); 
        wrapper.handleCheck('Example 1');
        expect(wrapper.unchecked.length).toBe(2); 
        expect(wrapper.checked.length).toBe(2)
        expect(wrapper.unchecked).not.toContain({ value: 'Example 1', checked: true })
        expect(wrapper.checked).toContain({ value: 'Example 1', checked: true })   
    }); 
    it('handleCheck does nothing if passed invalid params', () => {
        const wrapper = new AppComponent(); 
        wrapper.handleCheck("example");
        expect(wrapper.unchecked.length).toBe(3); 
    }); 
});