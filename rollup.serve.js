

import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import base from './rollup.config'

base.plugins.push(
    serve({
        open: true,
        openPage: '/',
    
        // Show server address in console (default: true)
        verbose: false,
    
        // Multiple folders to serve from
        contentBase: ['./'],
    
        // Set to true to return index.html (200) instead of error page (404)
        historyApiFallback: true,

        // Options used in setting up server
        host: 'localhost',
        port: 1234,
    }),
    livereload()
  )
export default base