# device
Template Driver for the Data Capture and Streams API

## Getting Started 
1. Ensure that you have Node and NPM installed.
2. Modify the `src` files to interface with your specific hardware

### Build and Test
The following command will create a `dist` folder with your driver files.
```bash
npm build
```

Test your build by running the included `index.html` file. This is pre-linked to the latest version of the Data Capture and Streams API——as well as your distribution files.

### Publish
After you've tested your device driver, the following command will publish it publicly to NPM.
```bash
npm publish --access public
```


## Including the Device in your Project
In order to use your device, you'll have to link it into existing projects using one of the following options:

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
 
Refer to the included `index.html` file for more details on usage.