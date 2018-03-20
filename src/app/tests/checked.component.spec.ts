import { CheckedComponent } from '../checked/checked.component'; 

describe('CheckedComponent', () => {
    it('emits the input value on delete', () => {
        let total = null; 
        const component = new CheckedComponent(); 
        component.item = {value: 'example'}; 
        component.delete.subscribe(item => {
            total = item; 
        });
        component.onDelete()
        expect(total).not.toBeNull();
        expect(total).toEqual('example'); 
    }); 
}); 