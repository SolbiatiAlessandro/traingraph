import Train from "./Train.js";
var Node = /** @class */ (function () {
    function Node(name, x, y, graph) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.graph = graph;
        this.stations = [];
    }
    Node.prototype.neighbors = function () {
        var _this = this;
        return this.graph.neighbors(this.name).map(function (n) {
            return _this.graph.getNodeAttribute(n, "_node");
        });
    };
    Node.prototype.addStation = function (station) {
        this.stations.push(station);
    };
    Node.prototype.newTrain = function () {
        var train = new Train(this.name + "-train", {}, this.x, this.y, this);
        this.trainArrives(train);
    };
    Node.prototype.trainLeaves = function () {
        this.train = null;
        this.graph.setNodeAttribute(this.name, 'color', 'grey');
    };
    Node.prototype.trainArrives = function (train) {
        this.train = train;
        this.graph.setNodeAttribute(this.name, 'color', 'green');
    };
    Node.prototype.getLabel = function () {
        var label = "";
        for (var _i = 0, _a = this.stations; _i < _a.length; _i++) {
            var station = _a[_i];
            var state = station.getState();
            label += state.content + ": " + state.stored + "/" + state.capacity + "\n";
        }
        return label;
    };
    Node.prototype.update = function (time, delta) {
        this.stations.forEach(function (station) { station.update(time, delta); });
        if (this.train) {
            this.train.update();
        }
    };
    return Node;
}());
export default Node;
