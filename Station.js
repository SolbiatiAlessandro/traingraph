var Station = /** @class */ (function () {
    // values are per ms
    function Station(stores, sinks, generates, _type) {
        this.stores = stores;
        this.sinks = sinks;
        this.generates = generates;
        this._type = _type;
        this.stored = 0;
    }
    ;
    Station.prototype.getStorageCapacity = function () {
        return this.stores;
    };
    Station.prototype.getContentType = function () {
        return this._type;
    };
    // delta: ms passed
    // returns (generated, sinked) in this step
    Station.prototype.update = function (time, delta) {
        var generated = this.generates * delta;
        var sinked = this.sinks * delta;
        this.stored = Math.max(0, Math.min(this.stores, this.stored + generated - sinked));
        return [generated, sinked];
    };
    return Station;
}());
export default Station;
