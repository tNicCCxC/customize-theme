export class Nodo {
    value   :   JSX.Element;
    next    :   Nodo;

    constructor(value: JSX.Element,next:Nodo) {
        this.value = value;
        this.next  = next;
    }

}

export class LinkedList {

    head    :   Nodo

    constructor() {
        this.head   =   null;
    }

    add(value: JSX.Element){
        this.head = new Nodo(value, this.head);
    }

    addToIndex(value: JSX.Element, index){
        if(index>this.length()) return;
        let count = 0, nodo=this.head;

        if(index===0){
            const newComponent = new Nodo(value, null);
            newComponent.next=this.head
            this.head=newComponent;
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
        let count = 0, nodo=this.head;

        if(index===0){
            this.head = new Nodo(value, this.head.next)
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
        if(!this.head) return 0;
        let count = 0, nodo = this.head;
        while(nodo.next){
            count++;
            nodo = nodo.next
        }
        return count;
    }

    find(index:number):Nodo{
        if(!this.head) return null;
        let count = 0, nodo=this.head;
        while (nodo.value) {
            if(index===count) {return nodo}
            count++;
            nodo = nodo.next;
        }
    }

    map(callback: Function){
        const res : JSX.Element[] = [];
        let nodo = this.head;
        while (nodo){
            res.push(callback(nodo.value));
            nodo=nodo.next;
        }
         return res;
    }


}