const uuidv4 = require('uuid/v4');

const buffer = new Array();
uuidv4(null, buffer);

console.log('New 128 Bit UUID v4 Generated:');
console.log(`UUID: ${uuidv4({random: buffer})}\n`);

const hexArray = buffer.map(d => '0x' + d.toString(16).toUpperCase())

console.log(`array:\n[${hexArray}]\n`)
console.log(`array (reversed):\n[${hexArray.reverse()}]\n`)
console.log(`uint8_t hex array:\n{${hexArray}}\n`);
console.log(`uint8_t hex array (reversed):\n{${hexArray.reverse()}}\n`);
