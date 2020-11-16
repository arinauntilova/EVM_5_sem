"use strict"

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


function create_point(group, name, x, y) {     
    let flag = 0;
    for(let i = 0; i < group.length && flag == 0; i++){    
        let st = group[i];
        if (st.pnt["name"] == name){
            flag = 1;
        }
    }
    if (!flag){
        let st = new Point(name, x, y);
        group.push(st);
    }
    else{
        console.log("Point with such name: " + name + " already exists!\n");
    }
}

function delete_point(group, name) {
    for (let i = 0; i < group.length; i++) {
        let st = group[i];
        if (st.pnt["name"] == name) {
            group.splice(i, 1);
        }
    }
}

function update_point_group(group, name, x) {
    for (let i = 0; i < group.length; i++) {
        let st = group[i];
        if (st.pnt["name"] == name) {
            st.pnt["x_cord"] = x;
        }
    }
}

function read_point(group) {
    for (let i = 0; i < group.length; i++) {
        let pt = group[i];
        pt.read_info();
    }
}

function find_len(x1, y1, x2, y2){
    let x = x2 - x1;
    let y = y2 - y1;
    let dist = Math.sqrt(x * x + y * y);
    return dist;
}

function find_max_dist(group){
    let max_dist = -1, ind1, ind2;
    if (group.length > 1){
        let ind1 = 0;
        let ind2 = 1;
    }
    for (let i = 0; i < group.length - 1; i++) {   
        let pt1 = group[i];
        for (let j = i + 1; j < group.length; j++) {
            let pt2 = group[j];
            let dist = find_len(pt1.pnt["x_cord"], pt1.pnt["y_cord"], pt2.pnt["x_cord"], pt2.pnt["y_cord"]);
            if (max_dist < 0){
                max_dist = dist;
            }
            else if(dist > max_dist){
                max_dist = dist; 
                ind1 = i;
                ind2 = j;
            }
        }
    }
    let ans = "Максимальное расстояние расстояние между двумя точками = " + max_dist + " между точками: ";
    console.log(ans);
    ans += group[ind1].read_info();
    ans += group[ind2].read_info();
}


function find_dist_less_than(group, pt, max_dist){     
    let str = "Искомые точки: ";
    for (let i = 0; i < group.length ; i++) {   
        let pt2 = group[i];
        let dist = find_len(pt.pnt["x_cord"], pt.pnt["y_cord"], pt2.pnt["x_cord"], pt2.pnt["y_cord"]);
        if (dist <= max_dist){
            str += pt2.pnt["name"] + " ";
        }
    }
    console.log(str);
}

function points_axes(group){     
    let pt = null;
    let num = 0;
    let str = "";
    let x1, y1;
    for (let i = 0; i < group.length ; i++) { 
        str = "";  
        pt = group[i];
        str += pt.pnt["name"];
        x1 = pt.pnt["x_cord"];
        y1 = pt.pnt["y_cord"];
        if(x1 > num){
            str += " правее оси Оу";
        }
        else if(x1 < num){
            str += " левее оси Оу";
        }
        else{
            str += " на оси Оу";
        }

        if(y1 > num){
            str += " выше оси Ох";
        }
        else if(y1 < num){
            str += " ниже оси Ох";
        }
        else{
            str += " на оси Ох";
        }
        console.log(str);
    }
}

function find_points_in_zone(group, xr1, yr1, xr2, yr2){
    let str = " В заданной области лежат точки: ";
    let pt;
    for (let i = 0; i < group.length; i++){
        pt = group[i];
        let x1 = pt.pnt["x_cord"];
        let y1 = pt.pnt["y_cord"];
        if ((x1 >= xr1 && x1 <= xr2 && y1 <= yr2 && y1 >= yr1) || (x1 >= xr2 && x1 <= xr1 && y1 <= yr1 && y1 >= yr2)){
            str += pt.pnt["name"] + " ";
        }
    }
    console.log(str);
}

let group_points = [];

console.log("=============  Test CREATE  and  READ points  =============");
create_point(group_points, "A", 3, 2);
create_point(group_points, "B", 14, -3);
create_point(group_points, "C", -2, 6);
create_point(group_points, "D", 0, 10);
create_point(group_points, "K", -5, -3);
create_point(group_points, "T", -1, -2);
create_point(group_points, "M", 1, 1);
create_point(group_points, "N", 4, 5);

read_point(group_points);

console.log("\n=============  Test Update (A, x = 11)  =============")
update_point_group(group_points, "A", 11);
read_point(group_points);

console.log("\n=============  Test DELETE A  =============")
delete_point(group_points, "A");
read_point(group_points);

console.log("\n=============  Test Find_max_dist  =============")
find_max_dist(group_points);

console.log("\n=============  Test Find_points_dist_less_than   O(2, 2)  =============")
let pt1 = new Point("O", 2, 2);
find_dist_less_than(group_points, pt1, 4);

console.log("\n=============  Test Points_axes  =============")
points_axes(group_points);

console.log("\n=============  Test Find_points_in_zone (1, -1, 5, 9) =============")
find_points_in_zone(group_points, 1, -1, 5, 9);
