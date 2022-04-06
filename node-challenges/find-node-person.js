class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    //if node is greater than the original value we pass it to the right
    if (node > this.value) {
      //if this.right is null then well add the node to it
      if (this.right === null) {
        this.right = node;
      }
      // if this.right is not null then well rerun the add
      else {
        this.right.add(node);
      }
    }
    //if node is smaller than the original value we pass it to the left
    if (node < this.value) {
      //if this.left is null then well add the node to it
      if (this.left === null) {
        this.left = node;
      }
      // if this.left is not null then well rerun the add
      else {
        this.left.add(node);
      }
    }
  }
  findPerson(name) {
    if (this.person === null) {
      return false;
    }

    let current = this.person;

    if (name < current.value) {
      current = current.left;
    } else if (name > current.value) {
      current = current.right;
    } else {
      return true;
    }
    return false;
  }
}
