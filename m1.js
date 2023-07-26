/*
const simple = require("./m2.js");
simple();
*/

/*
//"type": "module", esm-cjs
import {simple} from "./m21.mjs";
simple();
*/

/*
import sim from "./m21.mjs";
sim();
*/

/*
import {simple as sim} from "./m21.mjs";
sim();
*/

import * as a1 from "./m21.mjs";
console.log(a1.simple());


