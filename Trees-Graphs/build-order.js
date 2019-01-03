// Problem 4.7 in Cracking the Coding Interview

// Build classes for Node and Graph
function Node() {
    this.value = new String();
    this.children = new Array(); // An array of all children nodes
}

function Graph() {
    this.nodes = new Array(); // An array of all nodes in the Graph
}

// Loading up this graph will be important
Graph.prototype.add = function(project) {
    node = new Node();

    if (this.search(project)) {
        return -1;
    } 
    else {
        node.value = project;
        this.nodes[this.nodes.length] = node;
        return 0;
    }
}

// Adding edges
Graph.prototype.addedge = function(parent, dependent) {
    // Find parent and dependent nodes
    tmpparent = this.search(parent);
    tmpdependent = this.search(dependent);

    // Test the existence of either the nodes
    if (!tmpparent || !tmpdependent) return -1;

    // Search parent for existing dependency
    for (i=0 ; i < tmpparent.children.length ; i++) {
        if (tmpparent.children[i].value === dependent) return 1;
    }

    // If no existing dependency exists, set dependency
    tmpparent.children[tmpparent.children.length] = tmpdependent;
    return 0;
}

// May need to search the graph
Graph.prototype.search = function(project) {
    for (i = 0; i < this.nodes.length; i++) {
        if (this.nodes[i].value === project) return this.nodes[i];
    }
    return 0;
}

// Search for all nodes without dependencies and create a queue to browse

Graph.prototype.searchnondeps = function() {
    nondepMap = new Map();
    
    for (i=0;i<this.nodes.length;i++) {
        for (j=0;j<this.nodes[i].children.length;j++) {
            // Add children and count of children to Map if they do not already exist
            if (nondepMap.get(this.nodes[i].children[j].value) == undefined) {
                nondepMap.set(this.nodes[i].children[j].value, 1);
            } else {
                nondepMap.set(this.nodes[i].children[j].value, 1 + nondepMap.get(this.nodes[i].children[j].value));
            }
        }
    }
    return nondepMap;
}
// 

// This is where we'll get the result of this problem
Graph.prototype.depList = function(node, memo) {
    tmpnondepMap = this.searchnondeps();
    console.log(tmpnondepMap);
    // Find all nodes without dependencies
    // Print them
    // Recurse to children
    // Print them
    // Recurse to children
}

thisGraph = new Graph();
thisGraph.add('a');
thisGraph.add('b');
thisGraph.add('c');
thisGraph.add('d');
thisGraph.add('e');
thisGraph.add('f');
console.log(thisGraph.add('f'));
console.log(thisGraph);
console.log(thisGraph.addedge('a', 'g'));
console.log(thisGraph.addedge('a', 'd'));
thisGraph.addedge('f', 'b');
thisGraph.addedge('b', 'd');
thisGraph.addedge('f', 'a');
thisGraph.addedge('d', 'c');
console.log(thisGraph);
thisGraph.depList();
