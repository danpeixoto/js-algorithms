class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertNode(newData) {
    const newNode = new Node(newData);

    if (!this.size) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  deleteAt(index) {
    if (index > this.size || index < 0) {
      console.log("Index deve ser maior que zero ou menor igual que", this.size);
      return;
    }

    let current = this.head;

    if (index === 0) {
      this.head = this.head?.next || null;
    } else {
      let previous = current;
      let i = 0;

      while (i < index) {
        i++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size && this.size--; // subtrai 1 se o número for maior que zero

    return current;
  }
  find(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) return true;

      current = current.next;
    }

    return false;
  }

  printList() {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      console.log(`${index}: ${current.data}`);
      current = current.next;
      index++;
    }
  }
}


const linkedList = new LinkedList();
linkedList.insertNode("daniel");
linkedList.insertNode("peixoto");
linkedList.insertNode("pinto");
linkedList.insertNode("da silva");
linkedList.printList();

console.log(linkedList.find("daniel"));
console.log(linkedList.deleteAt(3));
linkedList.printList();