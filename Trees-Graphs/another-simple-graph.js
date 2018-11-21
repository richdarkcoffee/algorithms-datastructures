function Graph() {
    this.graph = [[]];
    this.adjacency = [[]];
    this.nodevalue = [];

}

Graph.prototype.search = function(node) {
    if (this.nodevalue.indexOf(node) >= 0) return true;
    else return false;
}

Graph.prototype.addnode = function(node) {
    debugger;
    if (this.search(node)) return false;
    if(this.nodevalue.length > 0) {
        this.graph[this.graph.length] = [];
        this.adjacency[this.adjacency.length] = [];
        this.adjacency.forEach(element => {
            element[element.length] = 0;
        })
    }
    this.nodevalue[this.nodevalue.length] = node;
    for (k=0;k < this.graph.length;k++) {
        if (!(this.adjacency[this.graph.length - 1][k])) this.adjacency[this.graph.length - 1][k] = 0;
    }
} 

Graph.prototype.addedge = function(node1, node2, undirected) {
    if (this.search(node1) && this.search(node2)) {
        tmp1 = this.nodevalue.indexOf(node1);
        tmp2 = this.nodevalue.indexOf(node2);
        this.graph[tmp1]
        .push(tmp2);
        this.adjacency[tmp1][tmp2] = 1;
        if (undirected) {
            this.graph[tmp2]
            .push(tmp1);
            this.adjacency[tmp2][tmp1] = 1;
        }
        return true;
    } else return false;
} 

Graph.prototype.deleteedge = function(node1, node2) {
    if (this.search(node1) && this.search(node2)) {
        tmp1 = this.nodevalue.indexOf(node1);
        tmp2 = this.nodevalue.indexOf(node2);
        this.adjacency[tmp1][tmp2] = 0;
        for( var i = 0; i < this.nodevalue.length-1; i++){ 
            if (this.graph[tmp1][i] === tmp2) {
              this.graph[tmp1].splice(i,1);
            }
        }
    } else return false;
}

Graph.prototype.deletenode = function(node) {
    tmp1 = this.search(node);
    if (tmp1 < 0) return false;
    // Delete all of the edges it's connected to
    this.graph[this.search(node)] = [];
    // Delete all of the edges that are connected to it
    // for (i=0;i<)
    // Delete the node
} 

Graph.prototype.printgraph = function() {
    var i = 0;
    var j = 0;
    for (i = 0; i < this.nodevalue.length; i++) {
        if (this.graph[i].length === 0) console.log(`${this.nodevalue[i]} has no connections.`);
        else {
            console.log(`${this.nodevalue[i]} is connected to:`);
            this.graph[i].forEach(element => {
                console.log(`${this.nodevalue[element]}, `);
            })
        }
    }
}

Graph.prototype.findroute = function(node1, node2) {

}


thistest = new Graph();
thistest.printgraph();
thistest.addnode('Richard');
console.log(thistest);
thistest.printgraph();
thistest.addnode('Fred');
thistest.addnode('Kate');
thistest.addnode('Richard');
console.log(thistest);
thistest.addedge('Richard','Kate',false);
thistest.addedge('Kate','Fred',false);
thistest.printgraph();
thistest.addnode('Sarah');
thistest.addedge('Sarah','Richard',false);
thistest.addnode('Claire');
thistest.addedge('Richard','Claire',false);
thistest.addedge('Claire','Sarah',true);
thistest.printgraph();
console.log(thistest);
thistest.deleteedge('Richard','Claire');
thistest.printgraph();
console.log(thistest);
