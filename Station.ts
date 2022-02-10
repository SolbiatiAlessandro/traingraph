export default class Station {
	// values are per ms
	constructor(
		public name: string,
		protected stores: number, // protected doesn't break js, just breaks ts
		protected sinks: number,
		protected generates: number,
		protected _type: string,
	){};
	protected stored: number = 0;

	getState(): { stored: number, capacity: number, content: string }{
		return { stored: this.stored, capacity: this.stores, content: this._type };
	}

	// delta: ms passed
	// returns (generated, sinked) in this step
	update(time: number, delta: number): [number, number]{
		console.log(this.name + " update");
		var generated = this.generates * (delta / 1000);
		var sinked = this.sinks * (delta / 1000);
		this.stored = Math.max(
			0, 
			Math.min(
				this.stores, 
				this.stored + generated - sinked
			));
		return [generated, sinked];
	}
}
