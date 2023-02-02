class Ground {
    constructor(x, y, w, h) {
        var opintions = {
            isStatic: true
        }
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, w, h, opintions)

        World.add(world, this.body)
    }
    show() {
        rect(this.body.position.x, this.body.position.y, this.w, this.h)
    }

}