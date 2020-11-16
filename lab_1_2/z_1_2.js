"use strict"

class Student {

    constructor(name, num, mas) {
        this.stud = {};
        this.stud["gr_name"] = name;
        this.stud["st_card"] = num;
        this.stud["marks"] = mas;
    }

    average_mark() {
        let num = 0;
        let sum = 0;
        let mas = this.stud["marks"];
        for(let i = 0; i < (mas.length); i++) {
            num++;
            sum += mas[i];
        }
        if (num) {
            console.log("Average mark = " + (sum / num) );
        } else {
            console.log("There are no marks!");
        }
    }

    read_info(){
        let string = "";
        for (let j in this.stud) {
            string += j + ": " + this.stud[j] + " ";
        }
        console.log(string);
    }
}


function create_stud(group, name, num, mas) {     
    let flag = 0;
    for(let i = 0; i < group.length && flag == 0; i++){    
        let st = group[i];
        if (st.stud["st_card"] == num){
            flag = 1;
        }
    }
    if (!flag){
        let st = new Student(name, num, mas);
        group.push(st);
    }
    else{
        console.log("Student with student card number: " + num + " already exists!\n");
    }
}

function delete_stud(group, name) {
    for (let i = 0; i < group.length; i++) {
        let st = group[i];
        if (st.stud["gr_name"] == name) {
            group.splice(i, 1);
        }
    }
}

function update_stud_group(group, num, name) {
    for (let i = 0; i < group.length; i++) {
        let st = group[i];
        if (st.stud["st_card"] == num) {
            st.stud["gr_name"] = name;
        }
    }
}

function read_stud(group) {
    for (let i = 0; i < group.length; i++) {
        let st = group[i];
        st.read_info();
    }
}

function find_average_mark(group, num){
    for (let i = 0; i < group.length; i++) {
        let st = group[i];
        if(st.stud["st_card"] == num){
            st.average_mark();
        }
    }
}

function student_in_group(group, name){
    for (let i = 0; i < group.length; i++) {
        let st = group[i];
        if(st.stud["gr_name"] == name){
            st.read_info();
        }
    }
}

function max_num_marks(group, name){
    let res = null;
    let res_st = null;
    if (group.length){}
    for (let i = 0; i < group.length; i++) {
        let st = group[i];
        if(st.stud["gr_name"] == name){
            let mas = st.stud["marks"];
            if ((res == null) || ((mas.length > res) && (res))) {
                res = mas.length;
                res_st = group[i];
            }
        }
    }
    if (res_st){
        res_st.read_info();
        console.log("Num of marks: " + res);
    }
}

function no_marks(group){
    let res_st = null;
    if (group.length){}
    for (let i = 0; i < group.length; i++) {
        let st = group[i];
        let mas = st.stud["marks"];
        if (mas.length == 0) {
            res_st = group[i];
        }
    }
    if (res_st){
        res_st.read_info();
    }
}

let group = [];

console.log("=============  Test CREATE  and  READ students  =============");
create_stud(group, "IU7-56", 969, [4, 2, 3]);
create_stud(group, "MT11-12", 910, [5, 3, 4, 3]);
create_stud(group, "IU3-53", 942, [3, 4, 3]);
create_stud(group, "RL5-36", 814, [4, 5, 3]);
create_stud(group, "RK7-56", 863, []);
create_stud(group, "MT4-51", 944, [5, 5, 3]);
create_stud(group, "IU3-53", 819, [5, 5, 3, 4, 5, 5]);
create_stud(group, "IU4-23", 819, [5, 5, 3]);

read_stud(group);

console.log("\n=============  Test Update (814, IU6-32)  =============")
update_stud_group(group, 814, "IU6-32");
read_stud(group);

console.log("\n=============  Test DELETE (IU7-56)  =============")
delete_stud(group, "IU7-56");
read_stud(group);

console.log("\n=============  Test Average_mark(819)  =============")
find_average_mark(group, 819);

console.log("\n=============  Test Students_in_group (IU3-53)  =============")
student_in_group(group, "IU3-53");

console.log("\n=============  Test Max_num_marks (IU3-53)  =============")
max_num_marks(group, "IU3-53");

console.log("\n=============  Test No_marks  =============")
no_marks(group);
