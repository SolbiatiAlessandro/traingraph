var Station = /** @class */ (function () {
    // values are per ms
    function Station(name, stores, sinks, generates, _type) {
        this.name = name;
        this.stores = stores;
        this.sinks = sinks;
        this.generates = generates;
        this._type = _type;
        this.stored = 0;
    }
    ;
    Station.prototype.getState = function () {
        return { stored: this.stored, capacity: this.stores, content: this._type };
    };
    // delta: ms passed
    // returns (generated, sinked) in this step
    Station.prototype.update = function (time, delta) {
        console.log(this.name + " update");
        var generated = this.generates * (delta / 1000);
        var sinked = this.sinks * (delta / 1000);
        this.stored = Math.max(0, Math.min(this.stores, this.stored + generated - sinked));
        return [generated, sinked];
    };
    return Station;
}());
export default Station;
