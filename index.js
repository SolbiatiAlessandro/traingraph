var _a, _b;
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
            graph.addNode(name, { x: x, y: y, size: 10, label: "", color: 'grey', _node: new Node(name, x, y, graph) });
        }
    }
}
function redStation(source, train) {
    if (train === void 0) { train = false; }
    var x = randInt();
    var y = randInt();
    var name = lookUp(x, y);
    var _node = graph.getNodeAttribute(name, '_node');
    if (source) {
        _node.addStation(new Station(name + '-station-red', 10, 2, 0, 'red'));
    }
    else {
        _node.addStation(new Station(name + '-station-red', 10, 0, 1, 'red'));
    }
    if (train) {
        _node.newTrain();
    }
    graph.setNodeAttribute(name, 'color', 'red');
    return [x, y];
}
function blueStation(source) {
    var x = randInt();
    var y = randInt();
    var name = lookUp(x, y);
    var _node = graph.getNodeAttribute(name, '_node');
    if (source) {
        _node.addStation(new Station(name + '-station-red', 10, 2, 0, 'blue'));
    }
    else {
        _node.addStation(new Station(name + '-station-red', 10, 0, 1, 'blue'));
    }
    graph.setNodeAttribute(name, 'color', 'blue');
    return [x, y];
}
function randInt() { return Math.floor(Math.random() * 10); }
//
// fake UI
function createEdges(x, y, px, py) {
    for (var i = 0; i < Math.abs(px - x); i++) {
        if (px < x) {
            graph.addEdge(lookUp(px + i, py), lookUp(px + i + 1, py));
        }
        else {
            graph.addEdge(lookUp(px - i, py), lookUp(px - i - 1, py));
        }
    }
    for (var i = 0; i < Math.abs(py - y); i++) {
        if (py < y) {
            graph.addEdge(lookUp(x, py + i), lookUp(x, py + i + 1));
        }
        else {
            graph.addEdge(lookUp(x, py - i), lookUp(x, py - i - 1));
        }
    }
}
initialiseGraph();
var px, py, x, y;
_a = redStation(true, true), px = _a[0], py = _a[1];
_b = redStation(true), x = _b[0], y = _b[1];
createEdges(x, y, px, py);
redStation(false);
blueStation(true);
blueStation(true);
blueStation(false);
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
window.update();
