export function liveReload(filename) {
    Context.RunFile('aliases.js')
    Context.RunFile('polyfill/unrealengine.js')
    Context.RunFile('polyfill/timers.js')
    require('devrequire')(filename)
}
