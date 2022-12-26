import { sound } from "@pixi/sound";
import { Application, Graphics, Sprite, Text, Container, Texture} from "pixi.js";
import 'pixi.js';

export class Game extends Application {
 
  constructor(opts: any) {
    super(opts);
    this.playButton();
  }

  public playButton() {
    //Next button
    const nextbtn= Sprite.from("./assets/play.png");
    nextbtn.anchor.set(0.5);
    nextbtn.x = this.screen.width / 2;
    nextbtn.y = this.screen.height / 2;
    nextbtn.width= 100;
    nextbtn.height=100;
    nextbtn.interactive= true;
    nextbtn.buttonMode=true;
    nextbtn.on("pointerdown", this.onButtonDown.bind(this));
    this.stage.addChild(nextbtn);
  }
  public pauseButton() {
    //Next button
    const nextbtn= Sprite.from("./assets/pause.png");
    nextbtn.anchor.set(0.5);
    nextbtn.x = this.screen.width / 2;
    nextbtn.y = this.screen.height / 2;
    nextbtn.width= 100;
    nextbtn.height=100;
    nextbtn.interactive= true;
    nextbtn.buttonMode=true;
    nextbtn.on("pointerdown", this.onButtonUp.bind(this));
    this.stage.addChild(nextbtn);
  }
  
  onButtonDown(){
    sound.add("s1","assets/abc.mp3");
    sound.play("s1");
    this.stage.removeChildren();
    this.pauseButton();
  }
  onButtonUp(){
    sound.stop("s1");
    this.stage.removeChildren();
    this.playButton();
  }
  
}