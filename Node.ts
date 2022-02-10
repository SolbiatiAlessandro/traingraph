import Station from "./Station";

export default class Node {
	constructor(){}

	public stations: Array<Station> = [];
	//public trains: Array<Train> = [];
	
	addStation(station: Station): void{
		this.stations.push(station);
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
	}
}
