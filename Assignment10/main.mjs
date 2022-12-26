import {Application } from "https://cdnjs.cloudflare.com/ajax/libs/pixi.js/6.5.2/browser/pixi.mjs";
import { start } from "./js/game.mjs";
import { loadAssets } from "./js/loader.mjs";

export function createGame(div) {
    const game = new Application({
        width:innerWidth,
        height:innerHeight,
        backgroundColor:0x7b5a85
    });
    console.log('game', game);
    div.appendChild(game.view);
    return game;
}

const game = createGame(document.getElementById('game'));
loadAssets(game,[
    { name: "back", url: "/assets/cardback.png" },
    // { name: "front", url: "assets/smilies.jpg" },
    { name: "front", url: "assets/cards.png" },

  ], () => {
    console.log('starting game');
    start(game);
  });
