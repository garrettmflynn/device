
// -------------------------------------------------------
// Synthetic Data Generation
// -------------------------------------------------------


let looping = false
export const ondata = (decoded:string)=> {
    let channelData = decoded.split(',').map(str => Number.parseFloat(str)) // Organize Decoder Output into a Float Array
    return channelData // Pass Array to DataTracks
}


// -------------------------------------------------------
// Template Callbacks
// -------------------------------------------------------

export const onconnect = async (device:any) => {

    // Create synthetic data stream
    let freqs = [1,5,10]
    looping = true
    let animate = () => {

        if (looping){
            let channels:number[] = []
            freqs.forEach(f => {
                channels.push(Math.sin((2 * f * Math.PI) * Date.now() / 1000))
            })
            let encoded = channels.join(',') // simulate encoding
            device.ondata(encoded)

            setTimeout(animate, 1000/60)
        }

    }

    animate()
    return true
}

export const ondisconnect = async (device:any) => {
    looping = false
    console.log('Device disconnected', device)
}

export const onerror = console.error

// -------------------------------------------------------
// Template Encoder / Decoder Specifications
// -------------------------------------------------------

let encoder = new TextEncoder();
const decoder = new TextDecoder("utf-8");
export const encode = (msg:any, _:string) => {
    return encoder.encode(msg)
}

export const decode = (msg:any, _:string) => {
    return decoder.decode(msg)
}