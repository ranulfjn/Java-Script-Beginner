class quadrilateral {
    constructor(X, Y, numberofelements) {
        this.X = X;
        this.Y = Y;
        this.numberofelements = numberofelements;

        this.Ymax = parseInt(Math.max(...this.Y));
        this.Ymin = parseInt(Math.min(...this.Y));

        this.Xmax = parseInt(Math.max(...this.X));
        this.Xmin = parseInt(Math.min(...this.X));
    }
    calculatearea(length, width, shape) {
        console.log("area of" + shape + "is " + length * width);
    }
    calculatperimeter(length, width, shape) {
        console.log("perimetere of" + shape + "is " + (2 * length + 2 * width));
    }

}
class rectangle extends quadrilateral {
    constructor(X, Y, numberofelements) {
        super(X, Y, numberofelements);
    }
    drawreactangle() {

        let i, j;
        console.log("creating a rectangle")
        for (i = this.Ymin; i <= (this.Ymax - this.Ymin); i++) {
            for (j = this.Ymin; j <= (this.Xmax - this.Xmin); j++) {
                if (i == this.Ymin || i == (this.Ymax - this.Ymin) ||
                    j == this.Ymin || j == (this.Xmax - this.Xmin))
                    process.stdout.write("*");
                else
                    process.stdout.write(" ");
            }
            console.log();
        }
        this.calculatearea((this.Ymax - this.Ymin), (this.Xmax - this.Xmin), " rectangle ");
        this.calculatperimeter((this.Ymax - this.Ymin), (this.Xmax - this.Xmin), " rectangle ");

    }
}
class square extends quadrilateral {
    constructor(X, Y, numberofelements) {
        super(X, Y, numberofelements);
    }
    drawsquare() {
        let i, j;
        console.log(" creating a Square")
        for (i = this.Ymin; i <= (this.Ymax - this.Ymin); i++) {
            for (j = this.Ymin; j <= (this.Ymax - this.Ymin); j++) {
                if (i == this.Ymin || i == (this.Ymax - this.Ymin) ||
                    j == this.Ymin || j == (this.Ymax - this.Ymin))
                    process.stdout.write("* ");
                else
                    process.stdout.write("  ");
            }
            console.log();
        }
        this.calculatearea((this.Ymax - this.Ymin), (this.Ymax - this.Ymin), " square ");
        this.calculatperimeter((this.Ymax - this.Ymin), (this.Ymax - this.Ymin), " square ");
    }
}


const X = [2, 3, 2, 6];
const Y = [1, 3, 5, 7];
let drawrectangle = new rectangle(X, Y, X.length);
drawrectangle.drawreactangle();
let drawsquare = new square(X, Y, X.length);
drawsquare.drawsquare();