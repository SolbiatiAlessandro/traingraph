import Graph from 'graphology';
import Sigma from 'sigma';
import Station from './Station';
import Node from './Node';

const container = document.getElementById("sigma-container") as HTMLElement;

const graph = new Graph();

function lookUp(x: number, y: number): string { return "N"+x+"-"+y; }

function initialiseGraph(): void{
	for(var x = 0; x < 11; x++){
		for(var y = 0; y < 11; y ++){
			var name: string = lookUp(x, y);
			graph.addNode(name, 
						  new Node(x, y, { size: 10, label: name, color: 'grey' })
						 );
		}
	}
}

function redNode(x: number, y: number): void{
	var name: string = lookUp(x,y);
	graph.updateNodeAttribute(name, 'trainNodes', ns => ns.push(new Station(10, 1, 1, 'red')));
	graph.setNodeAttribute(name, 'color', 'red');
}


initialiseGraph();
//redNode(5, 6);

console.log(graph.order); //nodes
console.log(graph.size); //edges

graph.forEachNode(node => {
	console.log(node);
})

const renderer = new Sigma(graph, container);
