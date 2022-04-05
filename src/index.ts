import { ondata, onconnect, ondisconnect, encode, decode } from './device.utils'

const device = {

    // ----------------- Required Device Attributes -----------------
    label: 'device', // Unique device name to reference

    // ----------------- Device Behavior -----------------

    // device, // Class with connect / disconnect methods (optional)
    onconnect, // Connection Callback (optional)
    ondisconnect, // Disconnection callback (optional)
    encode, // Message encoder (optional, defaults to using a TextEncoder)
    decode, // Message decoder (optional, defaults to using a TextDecoder)
    ondata, // Callback to load decoded data into an array for DataTrack parsing (optional)
    onerror, // Error callback (optional)

    // ----------------- Device Protocols -----------------

    // ----------------- Bluetooth -----------------
    // namePrefix: 'HEG', // Filter for specified name from Bluetooth results (required if device should be selectable with a loose constraint (e.g. {bluetooth: true}))
    // serviceUUID: '6e400001-b5a3-f393-e0a9-e50e24dcca9e',
    // characteristics: {
    //     transmit: '6e400003-b5a3-f393-e0a9-e50e24dcca9e',
    //     receive: '6e400002-b5a3-f393-e0a9-e50e24dcca9e',
    // }, 

    // ----------------- Serial / USB -----------------
    // usbVendorId: 4292,
    // usbProductId: 60000,
    // bufferSize: 1000,
    // baudRate: 115200,

    // ----------------- WebSocket / Wifi -----------------
    // url: 'https://localhost',

    protocols: [
        // 'serial', 
        // 'bluetooth', 
        // 'websocket'
    ]

}

export default device