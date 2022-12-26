import {
  Application,
  Graphics,
  Sprite,
  Text,
  Container,
  Texture,
} from "pixi.js";

export class Game extends Application {
  index:number = 0;
  arr1:String[]=["image1","image2","image3","image4","image5","image6"];
  arr2:String[]=[];
  
  constructor(opts: any) {
    super(opts);
    // this.btnImages([
    //   {name:"nextBtn",url:"./assets/next.png"},
    //   {name:"prevBtn",url:"./assets/prev.png"}
    // ],this.viewOFImage.bind(this));
    this.arrayImages(
      [
        {name:"nextBtn",url:"./assets/next.png"},
      {name:"prevBtn",url:"./assets/prev.png"},
        { name: "image1", url: "./assets/left1.png" },
        { name: "image2", url: "./assets/left2.png" },
        { name: "image3", url: "./assets/leftPage.png" },
        { name: "image4", url: "./assets/right.png" },
        { name: "image5", url: "./assets/right1.png" },
        { name: "image6", url: "./assets/right2.png" },
      ],
      this.onLoad.bind(this)
    );
    this.nextButton();
    this.previousBtn();
    // this.displayImages();
  }
  arrayImages(list: any[], cb: () => {}): void {
      this.loader.add(list);
      // console.log(list)
      this.loader.load(cb);
      
  }
  btnImages(list: any[], cb: () => {}): void {
    this.loader.add(list);
    // console.log(list)
    this.loader.load(cb);
    
}
// viewOFImage():void{
//   const next = new Sprite(this.loader.resources["nextBtn"].texture);
//   next.anchor.set(0.5);
//   next.x = this.screen.width / 1.09;
//   next.y = this.screen.height / 2;
//   this.stage.addChild(next);
//   next.interactive = true;
//   next.buttonMode = true;
//   next.on("pointerdown", this.onLoad.bind(this));

//   const prev = new Sprite(this.loader.resources["prevBtn"].texture);
//     prev.anchor.set(0.5);
//     prev.x = this.screen.width / 12;
//     prev.y = this.screen.height / 1.99;
//     prev.width = 175;
//     prev.height = 150;
//     this.stage.addChild(prev);
//     prev.interactive = true;
//     prev.buttonMode = true;
//     prev.on("pointerdown", this.preLoad.bind(this));
// }
  onLoad(): void {
    let arr=["image1","image2","image3","image4","image5","image6"];
    let x = arr[this.index];
    this.arr2.push(x);
    this.arr1.pop();
    console.log(this.arr2)
    // console.log(x);
    const sprites = new Sprite(this.loader.resources[x].texture);
    sprites.anchor.set(0.5);
    sprites.x = this.screen.width /2;
    sprites.y = this.screen.height / 2;
    sprites.width=1000;
    sprites.height=700;
    this.stage.addChild(sprites);
    this.index++;
    if(this.index==6){
      this.stage.removeChildAt(0);
      // this.previousBtn()
    }
  }

  // displayImages(){
  //   const nextbtn = Sprite.from("./assets/next.png");
  //   nextbtn.anchor.set(0.5);
  //     nextbtn.x = this.screen.width / 2;
  //     nextbtn.y = this.screen.height / 2;
  //     this.stage.addChild(nextbtn);
  //     nextbtn.interactive = true;
  //     nextbtn.buttonMode = true;
    
  //   nextbtn.on("pointerdown", this.viewOFImage.bind(this));
  // }
  public nextButton() {
    //Next button
    const nextbtn = Sprite.from("./assets/next.png");
    // const nextbtn = new Sprite(this.loader.resources["nextBtn"].texture);
    nextbtn.anchor.set(0.5);
    nextbtn.x = this.screen.width / 1.09;
    nextbtn.y = this.screen.height / 2;
    this.stage.addChild(nextbtn);
    nextbtn.interactive = true;
    nextbtn.buttonMode = true;
    nextbtn.on("pointerdown", this.onLoad.bind(this));
    
  }
  preLoad(): void {
    console.log(this.arr2)
    let x = this.arr2[this.index];
    console.log(this.index);
    // const sprites = new Sprite(this.loader.resources[x].texture);
    // sprites.anchor.set(0.5);
    // sprites.x = this.screen.width /2;
    // sprites.y = this.screen.height / 2;
    // sprites.width=1000;
    // sprites.height=700;
    // this.stage.addChild(sprites);
    this.index--;
    if(this.index===0){
      this.stage.removeChildAt(1);
      // this.nextButton();
    }
  }
  public previousBtn() {
    // previous btn
    const prevbtn = Sprite.from("./assets/prev.png");
    // const prevbtn = new Sprite(this.loader.resources["prevBtn"].texture);
    prevbtn.anchor.set(0.5);
    prevbtn.x = this.screen.width / 12;
    prevbtn.y = this.screen.height / 1.99;
    prevbtn.width = 175;
    prevbtn.height = 150;
    this.stage.addChild(prevbtn);
    prevbtn.interactive = true;
    prevbtn.buttonMode = true;
    prevbtn.on("pointerdown", this.preLoad.bind(this));
  }


}
