import { Application, Graphics, Sprite, Text, Container, Texture } from "pixi.js";

export class Game extends Application {
  constructor(opts: any) {
    super(opts);
    this.nextButton();
    this.previousBtn()
  }

  public nextButton() {
    //Next button
    const nextbtn= Sprite.from("./assets/next.png");
    nextbtn.anchor.set(0.5);
    nextbtn.x = this.screen.width / 1.09;
    nextbtn.y = this.screen.height / 2;
    this.stage.addChild(nextbtn);
    nextbtn.interactive= true;
    nextbtn.buttonMode=true;
    nextbtn.on("pointerdown", this.onClick.bind(this));
  }

  
  public previousBtn() {
    //previous btn
    const prevbtn= Sprite.from("./assets/prev.png");
    prevbtn.anchor.set(0.5);
    prevbtn.x = this.screen.width / 12;
    prevbtn.y = this.screen.height / 1.99;
    prevbtn.width= 175;
    prevbtn.height= 150;
    this.stage.addChild(prevbtn);
    prevbtn.interactive=true;
    prevbtn.buttonMode=true;
    prevbtn.on("pointerdown", this.onClicked.bind(this));
  }
  
  public right() {
    // let images:any[]=["./assets/right.png","./assets/right1.png","./assets/right2.png","./assets/leftPage.png","./assets/left2.png"];
    const sprite = Sprite.from("./assets/right.png");
    sprite.anchor.set(0.5);
    sprite.x = this.screen.width / 2;
    sprite.y = this.screen.height / 2;
    this.stage.addChild(sprite);
  }
  public left() {
    const sprite = Sprite.from("./assets/leftPage.png");
    sprite.anchor.set(0.5);
    sprite.x = this.screen.width / 2;
    sprite.y = this.screen.height / 2;
    this.stage.addChild(sprite);
  }
  public onClicked() {
    this.stage.removeChild();
    this.nextButton();
    this.right();
    
  }

  public onClick() {
    this.stage.removeChild();
    this.left();
    this.previousBtn();
  }

 
}
