import { Application } from 'pixi.js';
import { Game } from './Game';
// import './css/main.css';
window.onload = ()=>{
    const gameDiv:HTMLDivElement = <HTMLDivElement>document.getElementById('game');
    const app:Application = new Game({
        // resizeTo: gameDiv,
        width:innerWidth/1.02,
        height:innerHeight/1.02,
        backgroundColor: 0x1099bb,
    });
 gameDiv.appendChild(app.view);
}
