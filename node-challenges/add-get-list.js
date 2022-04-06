class LinkedListNode {
  constructor(letter) {
    this.letter = letter;
    this.next = null;
  }

  //this is our add method that will be linking the new node to our list
  add(node) {
    //if next is null then we will add the node in it's place to link them
    if (!this.next) {
      this.next = node;
    }
    //if next is not null then we will pass the node down our list by
    //recalling our next and repeating until next is null
    else {
      this.next.add(node);
    }
  }

  getList() {
    // return a string
    // order values
    // use recursion to delegate
    if (!this.next) return this.letter;

    return `${this.letter} ${this.next.getList()}`;
  }
}

const root = new LinkedListNode('A');
const nodeB = new LinkedListNode('B');
root.add(nodeB);
// console.log(root.getList()); // 'A B'
const nodeC = new LinkedListNode('C');
const nodeD = new LinkedListNode('D');
const nodeE = new LinkedListNode('E');
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root.getList()); // 'A B C D E'
// root.remove(1);
console.log(root.getList()); // 'A C D E'
