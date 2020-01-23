"use strict";

var t = 5;

function test(n) {
	let x = 0;
	let someVariable = 0;
	if (x == 0) {
		let y = 1;
		var z = 2;
		t = 5;
		someVariabl = 1;
	}
}

let x = undefined;
let y = x + ""; // y == "undefined"

let x = 0;
let y = x + ""; // y == "0"

let x = "5";
let y = parseInt(x); // y == 5
let z = x - 3; // z == 2 <=> let z = parseInt(x) - 3
let t = x / 5; // t == 1 <=> let t = parseInt(x) / 5
let u = x + 1; // u == "51"

let x = 1;
if (x) { // <=> if (x != 0) {
	
}

let x = "";
if (x) { // <=> if (x != "") {
	
}

let x = undefined;
if (x) { // -> false
	// <script> src="scripts/test.js"></script>
}