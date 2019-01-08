class DoublyListNode {
  constructor (obj) {
    this.data = obj;
    this.prev = null;
    this.next = null;
  }

  get Data () {
    return this.data;
  }

  set Data (newValue) {
    this.data = newValue;
  }

  get Next () {
    return this.next;
  }

  set Next (newValue) {
    this.next = newValue;
  }

  get Prev () {
    return this.prev;
  }

  set Prev (newValue) {
    this.prev = newValue;
  }
}

export class DoublyList {
  constructor (obj) {
    this.count = 0;
    this.first = this.last = null;
  }

  get Count () {
    return this.count;
  }

  set Count (newValue) {
    if (newValue < 0)
      throw new Error (
        'The number of elements in the DoublyList can not be less than zero'
      );
    else this.count = newValue;
  }

  get First () {
    return this.first;
  }

  set First (newValue) {
    this.first = newValue;
  }

  get Last () {
    return this.last;
  }

  set Last (newValue) {
    this.last = newValue;
  }

  AddFirst (obj) {
    let node = new DoublyListNode (obj);

    if (this.count == 0) {
      this.first = this.last = node;
    } else {
      node.Next = this.first;
      this.first = node;
      node.Next.Prev = this.first;
    }

    this.count++;
    this.ConFirstLast ();
  }

  AddLast (obj) {
    let node = new DoublyListNode (obj);

    if (this.count == 0) {
      this.first = this.last = node;
    } else {
      node.Prev = this.last;
      this.last = node;
      node.Prev.Next = this.last;
    }

    this.count++;
    this.ConFirstLast ();
  }

  ConFirstLast = () => {
    if (this.first && this.last) {
      this.first.Prev = this.last;
      this.last.Next = this.first;
    }
  };

  RemoveAt = NumberEl => {
    let node = this.first;

    let pNumberEl = Number (NumberEl);

    for (let i = 0; i < this.count; i++) {
      if (i == pNumberEl) {
        node.Next.Prev = node.Prev;
        node.Prev.Next = node.Next;

        if (this.count == 2) {
          this.first = node.Next;
          this.last = node.Prev;
        } else if (this.count == 1) {
          this.first = null;
          this.last = null;
        } else if (i == 0) {
          this.first = node.Next;
        } else if (i == this.count - 1) {
          this.last = node.Prev;
        }

        this.count--;
        node = null;
        this.ConFirstLast ();
        break;
      } else if (node) {
        node = node.Next;
      }
    }
  };

  SortBubble () {
    let i = 1;
    let n = this.count;

    while (i < n) {
      let nodeB = this.last;
      let j = n - 1;

      while (j >= i) {
        if (nodeB.Prev.Data > nodeB.Data) {
          this.ChangeNodes (nodeB.Prev, nodeB);
          nodeB = nodeB.Next;

          if (j == n - 1) this.last = nodeB;
          else if (j == 1) this.first = nodeB.Prev;
        }

        nodeB = nodeB.Prev;
        j--;
      }

      i++;
    }

    this.ConFirstLast ();
  }

  ChangeNodes (nodeA, nodeB) {
    nodeA.Next = nodeB.Next;
    nodeB.Next.Prev = nodeA;
    nodeB.Next = nodeA;
    nodeB.Prev = nodeA.Prev;
    nodeA.Prev = nodeB;
    nodeB.Prev.Next = nodeB;
  }

  [Symbol.iterator] () {
    let index = 0;
    let N = this.count;
    let node = this.first;

    return {
      next () {
        let result = {
          value: undefined,
          done: true,
        };

        if (index < N) {
          result.value = node.Data;
          result.done = false;
          index++;
          node = node.Next;
        }

        return result;
      },
    };
  }

  toString () {
    let pValue = 'The list: ';
    let node = this.first;

    for (let i = 0; i < this.count; i++) {
      pValue += `${node.Data} | `;
      node = node.Next;
    }

    return pValue;
  }
}
