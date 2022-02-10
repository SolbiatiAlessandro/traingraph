var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UINode = /** @class */ (function () {
    function UINode(size, label, color) {
        this.size = size;
        this.label = label;
        this.color = color;
    }
    ;
    return UINode;
}());
var Node = /** @class */ (function (_super) {
    __extends(Node, _super);
    function Node(x, y, UI_values) {
        var _this = _super.call(this, UI_values.size, UI_values.label, UI_values.color) || this;
        _this.x = x;
        _this.y = y;
        _this.UI_values = UI_values;
        _this.stations = [];
        return _this;
    }
    return Node;
}(UINode));
export default Node;
