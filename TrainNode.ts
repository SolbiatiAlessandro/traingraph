export default class TrainNode {
	// values are per ms
	constructor(
		protected stores: number,
		protected sinks: number,
		protected generates: number,
		protected _type: string,
	){};
	protected stored: number = 0;

	getStorageCapacity(): number{
		return this.stores;
	}

	getContentType(): string{
		return this._type;
	}

	// delta: ms passed
	// returns (generated, sinked) in this step
	update(time: number, delta: number): [number, number]{
		var generated = this.generates * delta;
		var sinked = this.sinks * delta;
		this.stored = Math.max(
			0, 
			Math.min(
				this.stores, 
				this.stored + generated - sinked
			));
		return [generated, sinked];
	}
}
