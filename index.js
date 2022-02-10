import Graph from 'graphology';
import Sigma from 'sigma';
import Station from './Station';
import Node from './Node';
var container = document.getElementById("sigma-container");
var graph = new Graph();
function lookUp(x, y) { return "N" + x + "-" + y; }
function initialiseGraph() {
    for (var x = 0; x < 11; x++) {
        for (var y = 0; y < 11; y++) {
            var name = lookUp(x, y);
            graph.addNode(name, { x: x, y: y, size: 10, label: "", color: 'grey', _node: new Node() });
        }
    }
}
function redStation(x, y) {
    var name = lookUp(x, y);
    var _node = graph.getNodeAttribute(name, '_node');
    _node.addStation(new Station(name + '-station-red', 10, 2, 0, 'red'));
    graph.setNodeAttribute(name, 'color', 'red');
}
function blackStation(x, y) {
    var name = lookUp(x, y);
    var _node = graph.getNodeAttribute(name, '_node');
    _node.addStation(new Station(name + '-station-black', 10, 0, 1, 'black'));
    graph.setNodeAttribute(name, 'color', 'black');
}
initialiseGraph();
redStation(5, 6);
blackStation(2, 1);
blackStation(3, 1);
blackStation(5, 7);
console.log(graph.order); //nodes
console.log(graph.size); //edges
var renderer = new Sigma(graph, container);
// this is a fake game loop
window.update = function update() {
    graph.forEachNode(function (nodeKey, attributes) {
        var _node = attributes._node;
        _node.update(0, 1000);
        graph.setNodeAttribute(nodeKey, 'label', _node.getLabel());
    });
}.bind(graph);
