import { PostComponent } from '../post/post.component'; 

describe('Post', () => {
    it('emits Input value onDelete', () => {
        let total = null; 
        const component = new PostComponent(); 
        component.item = {value: 'example'}; 
        component.delete.subscribe(item => {
            total = item; 
        });
        component.onDelete()
        expect(total).not.toBeNull();
        expect(total).toEqual('example'); 
    }); 
    it('emits Input value onCheck', () => {
        let total = null; 
        const component = new PostComponent(); 
        component.item = {value: 'example'}; 
        component.check.subscribe(item => {
            total = item; 
        });
        component.onCheck()
        expect(total).not.toBeNull();
        expect(total).toEqual('example'); 
    });  
}); 