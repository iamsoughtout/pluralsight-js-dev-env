import './index.css';

import numeral from 'numeral';   //using the numeral package installed in package.json. It's a library for formatting numbers.

/* eslint-disable no-debugger */
/*eslint-disable no-console*/
const courseValue = numeral(1000).format('$0,0.00');
debugger;
console.log(`I am charging ${courseValue} for this service`);
