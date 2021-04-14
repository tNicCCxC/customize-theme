export class Nodo {
    value   :   JSX.Element;
    next    :   Nodo;

    constructor(value: JSX.Element,next:Nodo) {
        this.value = value;
        this.next  = next;
    }

}

export class LinkedList {

    root    :   Nodo = null;

    add(value: JSX.Element){
        this.root = new Nodo(value, this.root);
    }

    addToIndex(value: JSX.Element, index){
        if(index>this.length()) return;
        let count = 0, nodo=this.root;

        if(index===0){
            const newComponent = new Nodo(value, null);
            newComponent.next=this.root
            this.root=newComponent;
            return;
        }
        while (nodo) {
            if(index-1===count) {
                const refNodo = nodo.next;
                const newComponent = new Nodo(value, null);
                newComponent.next=refNodo;
                nodo.next=newComponent;
                return ;
            }
            count++;
            nodo = nodo.next;
        }
    }

    modify(value: JSX.Element, index){
        if(index>this.length()-1) return;
        let count = 0, nodo=this.root;

        if(index===0){
            this.root = new Nodo(value, this.root.next)
            return;
        }

        while (nodo){
            if(index-1===count){
                nodo.next=new Nodo(value, nodo.next);
            }
            nodo = nodo.next;
            count++;
        }
    }

    length():number{
        if(!this.root) return 0;
        let count = 0, nodo = this.root;
        while(nodo.next){
            count++;
            nodo = nodo.next
        }
        return count;
    }

    find(index:number):Nodo{
        if(!this.root) return null;
        let count = 0, nodo=this.root;
        while (nodo.value) {
            if(index===count) {return nodo}
            count++;
            nodo = nodo.next;
        }
    }

    toArray(){
        const res : JSX.Element[] = [];
        let nodo = this.root;
        while (nodo){
            res.push(nodo.value);
            nodo=nodo.next;
        }
         return res;
    }


}