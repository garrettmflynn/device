# device
Template Driver for the Data Capture and Streams API

## Getting Started 
After you've installed Node and NPM, install all the project dependencies: 
```bash
npm install
```

Now modify the `src` files to interface with your specific hardware.

### Run
The following command will create a `dist` folder with your driver files **and serve the included `index.html` file to http://localhost:1234**.

```bash
npm start
```

This links the latest version of the Data Capture and Streams API to ensure compatibility.

### Publish
If your device is working properly, the following command will publish it to NPM.
```bash
npm publish --access public
```

## Use
In order to use your device in other projects, you'll have to link it using one of the following options:

#### Browser
```javascript
<script src="https://cdn.jsdelivr.net/npm/@brainsatplay/device"></script>
```

#### Module

```javascript
import device from `https://cdn.jsdelivr.net/npm/@brainsatplay/device`
```

#### Node.js
```javascript
const device = require(`https://cdn.jsdelivr.net/npm/@brainsatplay/device`)
```

Have fun with your data!