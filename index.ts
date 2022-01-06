import { ondata, onconnect, ondisconnect, encode, decode } from './device.utils'

// This must be of the DeviceConstraintsType from the datastreams-api
export const device = {

    // ----------------- Required Device Attributes -----------------
    label: 'Device', // Device name to reference
    kind: 'fnirsinput', // Expected data type

    // ----------------- Device Behavior -----------------

    // device, // Class with connect / disconnect methods (optional)
    onconnect, // Connection Callback (optional)
    ondisconnect, // Disconnection callback (optional)
    encode, // Message encoder (optional, defaults to using a TextEncoder)
    decode, // Message decoder (optional, defaults to using a TextDecoder)
    ondata, // Callback to load decoded data into an array for DataTrack parsing (optional)
    onerror, // Error callback (optional)

    // ----------------- Device Protocols -----------------

    // Bluetooth
    // namePrefix: 'HEG', // Filter for specified name from Bluetooth results
    serviceUUID: '6e400001-b5a3-f393-e0a9-e50e24dcca9e',
    characteristics: {
        transmit: '6e400003-b5a3-f393-e0a9-e50e24dcca9e',
        receive: '6e400002-b5a3-f393-e0a9-e50e24dcca9e',
    }, 
    // bluetooth: true,             // Force Bluetooth Connection (optional)

    // Serial / USB
    usbVendorId: 4292,
    usbProductId: 60000,
    // serial: true,                // Force Serial Connection (optional)

    // WebSocket / Wifi
    url: 'https://localhost'
    // wifi: true,                  // Force Wifi Connection (optional)
    // websocket: true,             // Force Websocket Connection (optional)

}

export default device