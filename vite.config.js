import glsl from "./node_modules/vite-plugin-glsl";
// import { GUI } from 'three/addons/libs/lil-gui.module.min.js'
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default {    
    // root: 'src/',
    publicDir: '../static/',
    base: './',
    server:
    {
        host: true, // Open to local network and display URL
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env) // Open if it's not a CodeSandbox
    },
    build:
    {
        outDir: '../dist', // Output in the dist/ folder
        emptyOutDir: true, // Empty the folder first
        sourcemap: true // Add sourcemap
    },
    plugins:
    [        
        glsl() // Handle shader files
    ]
}