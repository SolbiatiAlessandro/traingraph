import Station from "./Station";

class UINode{
	constructor(
		public size: number,
		public label: string,
		public color: string
	){};
}

export default class Node extends UINode{
	constructor(
		public x: number,
		public y: number,
		public UI_values: { size: number, label: string, color: string }
	){
		super(
			UI_values.size,
			UI_values.label,
			UI_values.color,
		);
	}

	public stations: Array<Station> = [];
	//public trains: Array<Train> = [];
}
