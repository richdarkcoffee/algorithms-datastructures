function Node() {
    this.value = new String();
    this.children = new Array();
    this.marked = false;
}

function Graph() {
    this.graph = new Node();
    this.adjacency = new Array();
}

Node.prototype.add = function(value) {
    this.children.forEach(child => {
        if(child.value == value) {
            return false;
        }
    })
    length = this.children.length() + 1;
    this.children[length] = new Node();
    this.children[length].value = value;
}

Graph.prototype.add = function(node, value) {
    // Two ways to solve this problem:
    // 1) search through the graph array
    // 2) search through the graph data structure
    // I'll assume we're searching through a graph data structure since
    // searching through an array is simple.
    if (node instanceof String) {
        tmpNode = this.dfsearch(this.graph, node.value);

    } else if (node instanceof Node) {
        tmpNode = node;
    }
    
    // Do I need a condition if node is not String or Node?

    tmpNode.children[tmpNode.children.length+1] = new Node();
    tmpNode.children[tmpNode.children.length+1].value = value;
}

Graph.prototype.dfsearch = function(value) {
    tmpPointer = new Object();
    tmpPointer = this.graph.dfsearch(value);
    debugger;
    // cleanup DFSEARCH MARKED NODES
    return tmpPointer;
}

Node.prototype.dfsearch = function(value) {
    tmpPointer = new Object();
    if(this.value == value) return this;
    this.marked = true;
    this.children.forEach(element => {
        if (element.marked == false) {
            console.log(element);
            tmpPointer = element.dfsearch(value);
            debugger;
            if (tmpPointer != undefined) {
                return tmpPointer;
            }
        }
        return undefined;
    });
    // cleanup DFSEARCH MARKED NODES
}

Graph.prototype.buildgraph = function(grapharray,node) {
    if (node == undefined) {
        node = this.graph;
    }
    var tmpgrapharray = new Array();
    for (i = 0; i < grapharray.length; i++) {
        tmpgrapharray[i] = new Node();
        this.graph.children
    }
    this.graph 
}

Graph.prototype.routebetween = function(root, value1, value2) {
    tmpisvalue = false;
    if(root == null) {
        return;
    }
    if(root.value == value) return root;
    root.marked = true;
    root.children.forEach(element => {
        if (element.marked == false) {
            element.dfsearch(element,value)
        }
    });
}

// Graph.prototype.bfsearch = function() {

// }

// Graph.prototype.directedroutecheck = function(array) {
//     // search depth first
//     // look for two values
//     // if two values are along the same route, return true


// }


adjacencygraph = [
    [0,1,0,0,0,0,1],
    [0,0,1,0,1,0,0],
    [0,0,0,1,0,0,0],
    [0,0,0,0,1,0,0],
    [0,0,0,0,0,1,0],
    [0,0,0,0,1,0,0]
]

grapharray = [
    [1,6],
    [2,4],
    [3],
    [4],
    [5],
    [],
    [4]
]

listofvalues = [
    "Dave",
    "Mary",
    "Fred",
    "Zhou",
    "Kate",
    "Ajah",
    "Curt"
]

// Building a graph from an array
// for each node, set the value, create node in the array, then search through the array
// 

mygraph = new Graph();

// get length of grapharray
// create temporary array of booleans set to false of the same length
// read connections for 0th element and set 0th boolean to true
// add nodes connected to the 0th element
// jump to place in array and add nodes connected to those elements and set nth boolean to true

mygraph.graph.value = listofvalues[0];
mygraph.graph.children[0] = new Node();
mygraph.graph.children[0].value = listofvalues[1];
mygraph.graph.children[1] = new Node();
mygraph.graph.children[1].value = listofvalues[6];
mygraph.graph.children[1].children[0] = new Node();
mygraph.graph.children[1].children[0].value = listofvalues[2];
mygraph.graph.children[1].children[1] = new Node();
mygraph.graph.children[1].children[1].value = listofvalues[4];



console.log(mygraph.graph);

console.log("-----------");

console.log(mygraph.dfsearch("Curt"));

