"use strict"

class KidsGroup {

    constructor() {
        this.kids = {};
    }

    create_kid(lastname, age) {
        if (this.kids[lastname]) {
            console.log("Kid with lastname " + lastname + " already exist!");
        }
        this.kids[lastname] = age;
    }

    delete_kid(lastname) {
        if (this.kids[lastname]) {
            delete this.kids[lastname];
        }
    }

    read_kids() {
        for (let i in this.kids) {
            console.log("Kid: " + i + " " + "Age: " + this.kids[i]);
        }
    }

    update_kid_age(lastname, age) {
        if (this.kids[lastname]) {
            this.kids[lastname] = age
        }
        else {
            console.log("No kid with lastname " + lastname + " !");
        }
    }

    average_age() {
        let sum = 0;
        let num = 0;
        for (let i in this.kids) {
            num++;
            sum += this.kids[i];
        }
        if (num) {
            console.log("Average age = " + (sum / num) );
        } else {
            console.log("There are no kids in group!");
        }
    }

    oldest_kid() {
        let res = null;
        for (let i in this.kids) {
            if ((res == null) || ((this.kids[i] > this.kids[res]) && (res))) {
                res = i;
            }
        }
        console.log("Oldest Kid: " + res + " " + "Age: " + this.kids[res]);
    }

    age_in_range(down, up) {
        for (let i in this.kids) {
            if (this.kids[i] > down && this.kids[i] < up) {
                console.log("Kid: " + i + " " + "Age: " + this.kids[i]);
            }
        }
    }

    first_symbol(sym) {
        for (let i in this.kids) {
            if (i[0] == sym) {
                console.log("Kid: " + i + " " + "Age: " + this.kids[i]);
            }
        }
    }

    len_lastname_longer_than(max_len) {
        for (let i in this.kids) {
            if (i.length > max_len) {
                console.log("Kid: " + i + " " + "Age: " + this.kids[i]);
            }
        }
    }

    first_symbol_vowel() {
        let mas_vowel = "a A e E i I o O u U y Y";
        for (let i in this.kids) {
            if (mas_vowel.includes(i[0])) {
                console.log("Kid: " + i + " " + "Age: " + this.kids[i]);
            }
        }
    }
}

let group = new KidsGroup();

console.log("=============  Test CREATE  and  READ kids  =============")
group.create_kid("Petrov", 15);
group.create_kid("Vetrov", 10);
group.create_kid("Ivanova", 4);
group.create_kid("Antipova", 14);
group.create_kid("Sidorov", 6);
group.create_kid("Solovev", 9);
group.create_kid("Galinskaya", 19);

group.read_kids();

console.log("\n=============  Test DELETE (Petrov)  =============")
group.delete_kid("Petrov");
group.read_kids();

console.log("\n=============  Test Update (Solovev, 11)  =============")
group.update_kid_age("Solovev", 11);
group.read_kids();

console.log("\n=============  Test Average_age  =============")
group.average_age();

console.log("\n=============  Test Oldest_kid  =============")
group.oldest_kid();

console.log("\n=============  Test Age_in_range (8, 17)  =============")
group.age_in_range(8, 17);

console.log("\n=============  Test First_symbol(S)  =============")
group.first_symbol("S");    

console.log("\n=============  Test len_lastname_longer_than (7)  =============")
group.len_lastname_longer_than(7);

console.log("\n=============  Test First_symbol_vowel  =============")
group.first_symbol_vowel();


const a = "hello"
console.log(`No kid with lastname ${a} !`);