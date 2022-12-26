import { Application, Graphics, Sprite, Text, Container } from "pixi.js";

export class Game extends Application {
  constructor(opts: any) {
    super(opts);
    this.nextButton();
  }

  public nextButton() {
    //Next button
    const graphics = new Graphics();
    graphics.beginFill(0xde3249);
    graphics.drawRect(innerWidth / 2.3, innerHeight / 1.5, 140, 100);
    graphics.endFill();
    graphics.buttonMode = true;
    graphics.interactive = true;
    this.stage.addChild(graphics);
    console.log("HHHHHHHHHHHHHHHHHHH");
    graphics.on("pointerdown", this.onClick.bind(this));
  }

  public s() {
    const sprite = Sprite.from("./assets/toy.png");
    sprite.anchor.set(0.5);
    sprite.x = this.screen.width / 2;
    sprite.y = this.screen.height / 2;
    this.stage.addChild(sprite);
  }

  public previousBtn() {
    //previous btn
    const graphics1 = new Graphics();
    graphics1.lineStyle(2, 0xfeeb77, 1);
    graphics1.beginFill(0x650a5a);
    graphics1.drawRect(innerWidth / 2, innerHeight / 1.3, 100, 100);

    graphics1.endFill();
    graphics1.buttonMode = true;
    graphics1.interactive = true;
    this.stage.addChild(graphics1);
    graphics1.on("pointerdown", this.onClicked.bind(this));
  }

  public onClicked() {
    this.stage.removeChildren();
    this.nextButton();
    
  }

  public onClick() {
    this.stage.removeChildren()
    this.s();
    this.previousBtn();
  }
}
