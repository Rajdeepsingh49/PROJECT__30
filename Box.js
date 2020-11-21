class Box{
    constructor(x,y,width,height){
        var ops={
           'restitution':0.1,
            'friction':0.25,
            'isStatic':false
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,ops);
        this.image = loadImage("sprites/Box.jpg");
        this.visibility = 255;
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        console.log(this.body.speed);
        if(this.body.speed < 4.5){
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        }else{
            World.remove(world,this.body);
            this.visibility = this.visibility-10;
            tint(255,this.visibility);
            image(this.image,0,0,this.width,this.height);
        }
        pop();
  
    }
}