import Station from "./Station";
import Train from "./Train.js";

export default class Node {
	constructor(
	public name: string,
	public x: number,
	public y: number,
	public graph){}

	public stations: Array<Station> = [];
	public train: Train; // there can only be one train

	neighbors(): Array<Node>{
		return this.graph.neighbors(this.name).map(n => {
			return this.graph.getNodeAttribute(n, "_node");
		})
	}
	
	addStation(station: Station): void{
		this.stations.push(station);
	}

	newTrain(): void {
		var train = new Train(this.name + "-train", {}, this.x, this.y, this);
		this.trainArrives(train);
	}

	trainLeaves(): void{
		this.train = null;
		this.graph.setNodeAttribute(this.name, 'color', 'grey');
	}

	trainArrives(train: Train): void{
		this.train = train;
		this.graph.setNodeAttribute(this.name, 'color', 'green');
	}

	getLabel(): string{
		var label = "";
		for(var station of this.stations){
			var state = station.getState()
			label += state.content + ": " + state.stored + "/" + state.capacity + "\n";
		}
		return label
	}

	update(time, delta){
		this.stations.forEach(station => { station.update(time, delta) });
		if(this.train){
			this.train.update();
		}
	}
}
