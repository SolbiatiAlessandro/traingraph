import Graph from 'graphology';
import Sigma from 'sigma';
import Station from './Station';
var container = document.getElementById("sigma-container");
var graph = new Graph();
function lookUp(x, y) { return "N" + x + "-" + y; }
function initialiseGraph() {
    for (var x = 0; x < 11; x++) {
        for (var y = 0; y < 11; y++) {
            var name = lookUp(x, y);
            graph.addNode(name, {
                x: x, y: y, size: 10, label: name, color: "grey",
                trainNodes: []
            });
        }
    }
}
function redNode(x, y) {
    var name = lookUp(x, y);
    graph.updateNodeAttribute(name, 'trainNodes', function (ns) { return ns.push(new Station(10, 1, 1, 'red')); });
    graph.setNodeAttribute(name, 'color', 'red');
}
initialiseGraph();
redNode(5, 6);
console.log(graph.order); //nodes
console.log(graph.size); //edges
graph.forEachNode(function (node) {
    console.log(node);
});
var renderer = new Sigma(graph, container);
