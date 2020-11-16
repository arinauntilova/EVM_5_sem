class Point {

    constructor(name, x, y) {
        this.pnt = {};
        this.pnt["name"] = name;
        this.pnt["x_cord"] = x;
        this.pnt["y_cord"] = y;
    }

    read_info(flag = 1){
        let string = "";
        for (let j in this.pnt) {
            string += j + ": " + this.pnt[j] + " ";
        }
        if (flag)
            console.log(string);
        return string;
    }
}

class Section{

    constructor(point1, point2) {
        this.pnt1 = point1;
        this.pnt2 = point2;
        this.name = this.pnt1.pnt["name"] + this.pnt2.pnt["name"];
    }

    read_info(){
        let str = "Отрезок " + this.name + " задан точками: " + this.pnt1.read_info(0);
        str += this.pnt2.read_info(0);
        console.log(str);
    }

    find_dist(x1, y1, x2, y2){
        let x = x2 - x1;
        let y = y2 - y1;
        let dist = Math.sqrt(x * x + y * y);
        return dist;
    }

    sect_length(){
        let x1 = this.pnt1.pnt["x_cord"];
        let y1 = this.pnt1.pnt["y_cord"];
        let x2 = this.pnt2.pnt["x_cord"];
        let y2 = this.pnt2.pnt["y_cord"];
        let dist = this.find_dist(x1, y1, x2, y2);
        console.log("Длина отрезка: " + dist);
    }
}

let p1 = new Point("A", 1, 1);
let p2 = new Point("B", 3, 4);
let s1 = new Section(p1, p2);
console.log("\n=============  Section A(1,1) B(3,4)   =============");
s1.read_info();
s1.sect_length();

let p11 = new Point("С", -2, 0);
let p22 = new Point("D", 13, -4);
let s11 = new Section(p11, p22);
console.log("\n=============  Section C(-2, 0) D(13, -4)   =============");
s11.read_info();
s11.sect_length();