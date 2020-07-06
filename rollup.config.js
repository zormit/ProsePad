import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"

const commonJsPlugin = commonjs({
  include: 'node_modules/**',
  sourceMap: false
})

const browserPlugins = [
  resolve({
    main: true,
    browser: true
  }),
  commonJsPlugin,
  json()
]

const nodePlugins = [
  resolve({
    main: true
  }),
  commonJsPlugin,
  json()
]

export default [
  {
    input: "src/collab/client/startpage.js",
    output: {
      file: "public/js/startpage.js",
      format: "iife"
    },
    plugins: browserPlugins
  },
  {
    input: "src/collab/client/fullpage.js",
    output: {
      file: "public/js/fullpage.js",
      format: "iife"
    },
    plugins: browserPlugins
  },
  {
    input: "src/collab/server/start.js",
    output: {
      file: "lib/server.js",
      format: "cjs"
    },
    plugins: nodePlugins,
    external: ["crypto", "events", "url", "fs", "path", "http"]
  },
  {
    input: "src/build/build.js",
    output: {
      file: "lib/build.js",
      format: "cjs"
    },
    plugins: nodePlugins,
    external: ["url", "fs", "path", "http"]
  }
]
