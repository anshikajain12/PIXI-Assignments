import { Application, Graphics, Sprite, Text, Container, Texture  } from "pixi.js";
import * as particles from "@pixi/particle-emitter";
import { gsap } from 'gsap';
export class Game extends Application {
  private spin: boolean;
  private sliceAngle = 360 / 16;
  arr:any[]=[400,200,70,10,"JACKPOT",150,90,30,400,60,20,500,"JACKPOT",150,90,30]
  constructor(opts: any) {
    super(opts);
    // this.spinwheel();
    this.preload(
      [
        // { name:"wheel",url:"assets/Wheel.png"},
        // { name:"arrow",url:"assets/arrow.png"},
        { name: "coin1", url: "assets/coin1.png" },
        { name: "coin2", url: "assets/coin2.png" },
        { name: "coin3", url: "assets/coin3.png" },
        { name: "coin4", url: "assets/coin4.png" },
        { name: "coin5", url: "assets/coin5.png" },
        { name: "coin6", url: "assets/coin6.png" },
      ],
      this.onload.bind(this)
    );
    
  }
  preload(list: any[], cb: () => {}): void {
    this.loader.add(list);
    this.loader.load(cb);
  }
public onload(){
  //wheel and arrow
  let random = 0;
    const wheel = Sprite.from("assets/Wheel.png");
    const arrow = Sprite.from("assets/arrow.png");
    wheel.anchor.set(0.5);
    wheel.x = this.screen.width / 2;
    wheel.y = this.screen.height / 2;
    arrow.x= this.screen.width/2-40;
    arrow.y= this.screen.height/2-240;
    wheel.width=500;
    wheel.height=500;
    arrow.width=50;
    arrow.height=65;
    this.stage.addChild(wheel);
    this.stage.addChild(arrow); 
    wheel.interactive=true;
    wheel.buttonMode=true;
    wheel.on("pointerup",()=>{
      let random=Math.floor(Math.random()*12);
      // let random=4;
            let stopAngle = random * this.sliceAngle;
            console.log(random)
            gsap.fromTo(wheel, { angle: 0 }, { angle: 3600 + stopAngle, duration: 6, ease: 'expo.out' });     
            setTimeout(()=>{
              if(this.arr[random]=="JACKPOT" || this.arr[random]=="JACKPOT" ){
                c.visible=true;
                console.log("Jackpot");
              }
              setTimeout(() => {
                c.visible=false;
              }, 1000);
            },7000)
    })

  const c = new Container();
  c.x = this.screen.width / 2;
  c.y = this.screen.height / 2 - 40;
  c.visible = false;
  this.stage.addChild(c);
  const e = new particles.Emitter(c, {
    lifetime: {
      min: 0.25,
      max: 1.25,
    },
    frequency: 0.001,
    spawnChance: 1,
    particlesPerWave: 1,
    emitterLifetime: 0,
    maxParticles: 250,
    pos: {
      x: 0,
      y: 200,
    },
    addAtBack: false,
    behaviors: [
      {
        type: "alpha",
        config: {
          alpha: {
            list: [
              {
                value: 0.3,
                time: 0,
              },
              {
                value: 1,
                time: 0.2,
              },
              {
                value: 0.8,
                time: 1,
              },
            ],
          },
        },
      },
      {
        type: "scale",
        config: {
          scale: {
            list: [
              {
                value: 0.001,
                time: 0,
              },
              {
                value: 0.1,
                time: 0.4,
              },
              {
                value: 0.02,
                time: 1,
              },
            ],
          },
          minMult: 3,
        },
      },
      {
        type: "color",
        config: {
          color: {
            list: [
              {
                value: "fb1010",
                time: 0,
              },
              {
                value: "ffffff",
                time: 0.5,
              },
              {
                value: "f5b830",
                time: 1,
              },
            ],
          },
        },
      },
      {
        type: "moveSpeed",
        config: {
          speed: {
            list: [
              {
                value: 400,
                time: 0,
              },
              {
                value: 200,
                time: 1,
              },
            ],
            isStepped: false,
          },
        },
      },
      {
        type: "moveAcceleration",
        config: {
          accel: {
            x: 0,
            y: 2000,
          },
          minStart: 2000,
          maxStart: 2000,
          rotate: true,
        },
      },
      {
        type: "rotationStatic",
        config: {
          min: 260,
          max: 280,
        },
      },
      {
        type: "spawnShape",
        config: {
          type: "torus",
          data: {
            x: 0,
            y: 0,
            radius: 20,
          },
        },
      },
      {
        type: "animatedRandom",
        config: {
          anims: [
            {
              framerate: 24,
              loop: true,
              textures: ["coin1", "coin2", "coin3", "coin4", "coin5"],
            },
            {
              framerate: 24,
              loop: true,
              textures: ["coin5", "coin4", "coin3", "coin2", "coin1"],
            },
          ],
        },
      },
    ],
  });
  e.emit = true;
  this.ticker.add((delta: number) => {
    e.update(delta * 0.01);
  });
}
 
}
