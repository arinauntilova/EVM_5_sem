class Triangle{

    constructor(name, len1, len2, len3) {
        this.len1 = len1;
        this.len2 = len2;
        this.len3 = len3;
        this.name = name;
    }

    check_exist(){
        if ((this.len1 + this.len2 > this.len3) && (this.len1 + this.len3 > this.len2) && (this.len2 + this.len3 > this.len1)){
            console.log("Треугольник существует");
            return 1;
        }
        else{
            console.log("Треугольник НЕ существует");
            return 0;
        }
    }

    perimetr(flag = 1){
        let len = this.len1 + this.len2 + this.len3;
        if(flag){
            console.log("Перимет треугольника = " + len);
        }
        return len;
    }

    square(flag = 1){
        let p = this.perimetr(0) / 2;
        let s = Math.sqrt(p * (p - this.len1) * (p - this.len2) * (p - this.len3));
        if(flag){
            console.log("Площадь треугольника = " + s);
        }
        return s;
    }

    is_rect(){
        let a = this.len1;
        let b = this.len2;
        let c = this.len3;
        if ((a * a + b * b == c * c) || (a * a + c * c == b * b) || (c * c + b * b == a * a)){
            console.log("Треуголньник прямоугольный!" );
        }
        else{
            console.log("Треуголньник не является прямоугольным!");
        }
    }
}

console.log("\n=============  Triangle (3, 4, 5)   =============")
let tr1 = new Triangle("ABC", 3, 4, 5)
if (tr1.check_exist()){
    tr1.is_rect();
    tr1.perimetr();
    tr1.square();
}

console.log("\n=============  Triangle (1, 24, 5)   =============")
let tr2 = new Triangle("EMF", 1, 24, 5)
if (tr2.check_exist()){
    tr2.is_rect();
    tr2.perimetr();
    tr2.square();
}

console.log("\n=============  Triangle (3, 3, 5)   =============")
let tr3 = new Triangle("EMF", 3, 3, 5)
if (tr3.check_exist()){
    tr3.is_rect();
    tr3.perimetr();
    tr3.square();
}
