var Train = /** @class */ (function () {
    function Train(name, cargo, x, y, currNode) {
        this.name = name;
        this.cargo = cargo;
        this.x = x;
        this.y = y;
        this.currNode = currNode;
        this.prevNode = null;
    }
    Train.prototype.update = function () {
        var possibleNextNodes = this.currNode.neighbors();
        console.log(possibleNextNodes);
        if (possibleNextNodes.length > 0) {
            this.currNode.trainLeaves();
            possibleNextNodes[0].trainArrives(this);
            this.prevNode = this.currNode;
            this.currNode = possibleNextNodes[0];
        }
    };
    return Train;
}());
export default Train;
