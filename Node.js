var Node = /** @class */ (function () {
    function Node() {
        this.stations = [];
    }
    //public trains: Array<Train> = [];
    Node.prototype.addStation = function (station) {
        this.stations.push(station);
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
    };
    return Node;
}());
export default Node;
