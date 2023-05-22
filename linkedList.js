// 노드 클래스 작성
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked List 클래스 작성
class LinkedList {
  constructor() {
    this.head = null;
  }

  // 노드를 추가하는 함수 C
  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // 노드를 중간에(특정한 위치에) 삽입하는 함수 C
  insertAt(data, position) {
    const newNode = new Node(data);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;

      while (count < position) {
        previous = current;
        current = current.next;
        count++;
      }

      previous.next = newNode;
      newNode.next = current;
    }
  }

  // 연결 리스트 출력하는 함수 R
  printList() {
    let current = this.head;
    let list = '';

    while (current) {
      list += current.data + ' -> ';
      current = current.next;
    }

    list += 'null';
    console.log(list);
  }

  // 노드 데이터를 업데이트하는 함수 U
  updateNode(oldData, newData) {
    let current = this.head;

    while (current !== null) {
      if (current.data === oldData) {
        current.data = newData;
        break;
      }
      current = current.next;
    }
  }

  // 노드 삭제하는 함수 D
  removeAt(position) {
    if (this.head === null) {
      return;
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    if (position === 0) {
      this.head = current.next;
    } else {
      while (count < position) {
        previous = current;
        current = current.next;
        count++;
      }

      previous.next = current.next;
    }
  }
}

// 사용법
const linkedList = new LinkedList();

// 노드 추가
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
console.log(linkedList.printList()); // 출력: 1-> 2 -> 3 -> null

// 노드 중간에 삽입
linkedList.insertAt(4, 1);
console.log(linkedList.printList()); // 출력: 1 -> 4 -> 2 -> 3 -> null

// 노드 업데이트
linkedList.updateNode(1, 0);
console.log(linkedList.printList()); // 출력: 0 -> 4 -> 2 -> 3 -> null

// 노드 삭제
linkedList.removeAt(2);
console.log(linkedList.printList()); // 출력: 0 -> 4 -> 3 -> null
