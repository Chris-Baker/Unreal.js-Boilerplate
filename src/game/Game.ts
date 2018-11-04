import {Disposable} from "@engine/Disposable";

export class Game implements Disposable {

    constructor() {
        console.log('game created');
    }

    dispose(): void {
        console.log('dispose game');
    }
}