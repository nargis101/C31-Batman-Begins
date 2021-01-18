class House{
    constructor(){
        var options = {
            isStatic: true,
        }

        this.house = Bodies.rectangle(850, 470, 50, 100, options);
        this.width = 600;
        this.height = 600;
        World.add(world, this.house)
        this.image = loadImage("house.jpg");
    }

    display(){
        var pos = this.house.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}