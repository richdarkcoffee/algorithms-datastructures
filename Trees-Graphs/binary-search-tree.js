// function Node(){
//     this.value = undefined;
//     this.left = null;
//     this.right = null;
// }
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

Node.prototype.add = function(value) {
    if (this.value === undefined){
        this.value = value;
    }
    if (value < this.value) {
        if (this.left !== null) {
        this.left.add(value);
        } else {
            this.left = new Node(value);
        }
    }
    if (value > this.value) {
        if (this.right !== null) {
        this.right.add(value);
        } else {
            this.right = new Node(value);
        }
    }
}

Node.prototype.delete = function(value) {

}

Node.prototype.search = function(value) {

}

var bst = new Node();
var bst2 = new Node(101);
console.log(bst);
console.log(bst2);
bst.add(8);
console.log(bst);
bst.add(4);
console.log(bst);
bst.add(10);
console.log(bst);
bst.add(2);
console.log(bst);
bst.add(6);
console.log(bst);
bst.add(20);
console.log(bst);
