class Node{
    
        constructor(index, next){
            this.index = index;
            this.next = next;
        }

        get toString(){

            if( this.hasNext )
               return this.index +" => "+this.next.toString;
            else   
               return this.index +" => null";

        } 
}

function invert_list(list){
    
    let list_final = new Node(list.index, null);
        
    list  = list.next;
        
    while( list != null ){
        let temp = new Node( list.index , list_final );
        list_final = temp;
        list = list.next;
    }
    
    return list_final;
}

function invert_list_rec(list1, list2){

    if(list1 == null)
        return list2;    
    else
        return invert_list_rec(list1.next, new Node(list1.index, list2));
    
}

let node3 = new Node(3,null);
let node2 = new Node(2,node3);
let node1 = new Node(1,node2);


console.log(node1.toString);
   
let list = invert_list_rec(node1,null);

console.log(list.toString);






