import Node from "./Node"

export default class Train {
	constructor(
		public name: string,
		public cargo: Record<string, number>,
		public x: number,
		public y: number,
		public currNode: Node
	){}

	public prevNode: Node = null;

	update(){
		var possibleNextNodes = this.currNode.neighbors();
		console.log(possibleNextNodes);
		if(possibleNextNodes.length > 0){
			this.currNode.trainLeaves();
			possibleNextNodes[0].trainArrives(this);
			this.prevNode = this.currNode;
			this.currNode = possibleNextNodes[0];
		}
	}
}
