///<reference path="engine/typings/ue.d.ts"/>
import {liveReload} from "@engine/bootstrap";
import {Game} from '@game/Game';

function main() {

    const game = new Game();

    // clean up the mess
    return () => {
        game.dispose();
    }
}

// bootstrap to initiate live-reloading dev env.
try {
    module.exports = () => {
        let cleanup;

        // wait for map to be loaded.
        process.nextTick(() => cleanup = main());

        // live-reloadable function should return its cleanup function
        return () => cleanup()
    }
}
catch (e) {
    liveReload('game');
}
