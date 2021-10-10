class MovingObject {
    constructor(options){
        this.options = options;
    }

    draw(ctx){
        let color = (this.options.text == "E") ? "#00FF00" : "#000000"
        let text = (this.options.text == "E") ? "E" : "";
        ctx.fillStyle = color;
        ctx.strokeStyle = "black";
        ctx.font = "16px Georgia";
        ctx.arc(this.options.pos[0], this.options.pos[1], this.options.radius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.textAlign = 'center';
        ctx.fillText(text, this.options.pos[0], this.options.pos[1] + 4);
        ctx.fill();
    }

    move(ctx){
        this.options.pos[1] += 1;
        this.draw(ctx);
    }
}

export default MovingObject;