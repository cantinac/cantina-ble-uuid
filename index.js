const uuidv4 = require('uuid/v4');
const { take, map, addIndex, forEach } = require('ramda')

const toHexArray = buffer => map(d => '0x' + d.toString(16).toUpperCase(), buffer)

const representArray = buffer => {
  return `array:\n[${buffer}]\n`
  + `array (reversed):\n[${buffer.reverse()}]\n`
  + `uint8_t hex array:\n{${buffer}}\n`
  + `uint8_t hex array (reversed):\n{${buffer.reverse()}}\n`
}

const generate_ble_uuid = () => {
  const buffer = new Array()
  uuidv4(null, buffer)
  return buffer
}

const generate_characteristic_ids = (uuidBuffer, characteristics = []) => {
  // strip the last 4 bytes of the serviceId
  const initial = take(12, uuidBuffer)
  const mapIndexed = addIndex(map)
  return mapIndexed( (c, i) => ({ name: c, uuid: [...initial, 0, 0, 0, i] }), characteristics)
}

// Isolate out side effects
const output_ble_uuid = buffer => {
  console.log('New 128 Bit UUID v4 Generated:')
  console.log(`UUID: ${uuidv4({random: buffer})}\n`)
  
  const hexArray = toHexArray(buffer)
  
  console.log(representArray(hexArray))
}

const output_characteristics = characteristics => {
  console.log('--------------------------')
  forEach(
    c => console.log(`Characteristic name: ${c.name}\n\n${representArray(c.uuid)}`),
    characteristics
  )
}

const ble_uuid = {
  generate_ble_uuid,
  generate_characteristic_ids,
  output_ble_uuid,
  output_characteristics,
}

module.exports = ble_uuid