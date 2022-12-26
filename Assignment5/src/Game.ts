import {
  Application,
  Graphics,
  Sprite,
  Text,
  Container,
  Texture,
  TextStyle,
  AnimatedSprite,
} from "pixi.js";

export class Game extends Application {
  constructor(opts: any) {
    super(opts);
    this.textButton();
    this.nextButton();
    this.borderAnimatedButton();
  }

  public textButton() {
     const style = new TextStyle({
      fontFamily: "Arial",
      fontSize: 36,
      fontStyle: "italic",
      fontWeight: "bold",
      fill: ["#ffffff", "#00ff99"], // gradient
      stroke: "#4a1850",
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: "#000000",
      dropShadowBlur: 4,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 440,
      lineJoin: "round",
    });
    const text = new Text("Click Me",style);
    text.x = 50;
    text.y = 220;
    text.interactive=true;
    text.buttonMode=true;
    this.stage.addChild(text);
    text.on("pointerdown",()=>{ this.stage.removeChildren();
      this.right();
    });
  }

  public allbutton(){
    this.nextButton();
    this.textButton();
    this.borderAnimatedButton();
  }
  public right() {
    const container = new Container();
    this.stage.addChild(container);
    const sprite = Sprite.from("./assets/right.png");
    const cross = Sprite.from("./assets/cross.png");
    cross.x=450;
    cross.y=-290;
    cross.width=50;
    cross.height=50;
    cross.on("pointerdown",()=>{container.removeChildren(),this.allbutton()});
    cross.interactive=true;
    cross.buttonMode=true;
    sprite.anchor.set(0.5);
    cross.anchor.set(0.5);
    sprite.x = this.screen.width / 2;
    sprite.y = this.screen.height / 2;
    container.addChild(sprite);
    sprite.addChild(cross);
  }

  public nextButton() {
    //Next button
    const nextbtn = Sprite.from("./assets/logo.png");
    nextbtn.anchor.set(0.5);
    nextbtn.x = this.screen.width / 1.09;
    nextbtn.y = this.screen.height / 2;
    this.stage.addChild(nextbtn);
    nextbtn.interactive = true;
    nextbtn.buttonMode = true;
    nextbtn.on("pointerdown", this.logoButton.bind(this));
  }
  logoButton(){
    const container = new Container();
    this.stage.addChild(container);
    const sprite = Sprite.from("./assets/avatar.png");
    sprite.anchor.set(0.5);
    sprite.x = this.screen.width / 2;
    sprite.y = this.screen.height / 2;
    container.addChild(sprite);
    
    setTimeout(() => {
      container.removeChildren();
    }, 2000);
    
  }
public borderAnimatedButton(){
  const thing = new Graphics();
  const graphics = new Graphics();
  thing.x =this.screen.width / 2;
  thing.y = this.screen.height / 2;
  this.stage.addChild(thing);
  let count = 0;
  this.stage.on('pointerdown', () => {
    graphics.lineStyle(Math.random() * 30, Math.random() * 0xFFFFFF, 1);
    graphics.moveTo(Math.random() * 800, Math.random() * 600);
    graphics.bezierCurveTo(
      Math.random() * 800, Math.random() * 600,
      Math.random() * 800, Math.random() * 600,
      Math.random() * 800, Math.random() * 600,
      );
    });
    this.stage.addChild(graphics);

this.ticker.add(() => {
    count += 0.1;

    thing.clear();
    thing.lineStyle(10, 0xff0000, 1);
    thing.beginFill(0xffFF00, 0.5);

    thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
    thing.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count) * 20);
    thing.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count) * 20);
    thing.lineTo(-120 + Math.cos(count) * 20, 100 + Math.sin(count) * 20);
    thing.lineTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
    thing.closePath();
});
thing.interactive=true;
thing.buttonMode=true
thing.on("pointerdown",()=>{ this.stage.removeChildren(),this.right()});
}

}
