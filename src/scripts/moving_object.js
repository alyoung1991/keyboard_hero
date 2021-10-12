class MovingObject {
    constructor(options){
        this.options = options;
    }

    // draws circle with/without styling based on text content
    draw(ctx){
        let color = (this.options.text != "") ? "#00FF00" : "#000000"
        ctx.fillStyle = color;
        ctx.strokeStyle = "black";
        ctx.font = "16px roboto";
        ctx.arc(this.options.pos[0], this.options.pos[1], this.options.radius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.textAlign = "center";
        ctx.fillText(this.options.text, this.options.pos[0], this.options.pos[1] + 5);
        ctx.fill();
    }

    move(ctx){
        this.options.pos[1] += 2;
        this.draw(ctx);
    }
}

export default MovingObject;