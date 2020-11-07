import {Sorter} from './Sorter'

class Node { 
  next : Node | null = null;
  constructor(public data:number){  }
}

export class LinkedList extends Sorter{
  head : Node | null = null;

  add(data : number) : void{
    const node = new Node(data);
    if(this.head == null){
      this.head = node;
      return;
    }

    let tempNode = this.head;
    while(tempNode.next){
      tempNode = tempNode.next;
    }
    tempNode.next = node;
  }

  get length():number{
    if(this.head == null){
      return 0;
    }
    let cnt = 1;
    let tempNode = this.head;
    while(tempNode.next ){
      cnt++;
      tempNode = tempNode.next;
    }
    return cnt;
  }

  at(index:number):Node{
    if(this.head == null){
      throw new Error('List is Empty');
    }

    let tempNode : Node | null = this.head;
    let cnt = 0;
    while(tempNode !=null ){
      if(cnt === index){
        return tempNode;
      }
      cnt++;
      tempNode = tempNode.next;
    }
    throw new Error('Index out of bound');

  }

  compare(leftIndex: number, rightIndex: number):boolean{
    if(this.head == null){
      throw new Error('List is Empty!!');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex:number):void{
    let tempData = this.at(leftIndex).data;
    this.at(leftIndex).data = this.at(rightIndex).data;
    this.at(rightIndex).data = tempData;
  }

  print():void{
    if(this.head == null){
      throw new Error('List is Empty!!');
    }
    let tempNode:Node|null  = this.head;
    while(tempNode!=null){
      console.log(tempNode.data);
      tempNode = tempNode.next;
    }
  }

}