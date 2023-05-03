let Operation = [];
let instructions = [];
let o = false;
let eq = false;
let sign = true; // true: + , false: -
let lightMode = false;
function eval() {
        while (1 < instructions.length) {
                if (instructions[0][1] === "+") {
                        instructions[1][0] = instructions[0][0] + instructions[1][0];
                        instructions.splice(0, 1);
                } else if (instructions[0][1] === "*") {
                        instructions[1][0] = instructions[0][0] * instructions[1][0];
                        instructions.splice(0, 1);
                } else if (instructions[0][1] === "/") {
                        instructions[1][0] = instructions[0][0] / instructions[1][0];
                        instructions.splice(0, 1);
                } else if (instructions[0][1] === "-") {
                        instructions[1][0] = instructions[0][0] - instructions[1][0];
                        instructions.splice(0, 1);
                } else if (instructions[0][1] === "^") {
                        instructions[1][0] = Math.pow(instructions[0][0], instructions[1][0]);
                        instructions.splice(0, 1);
                } else if (instructions[0][1] === "yroot") {
                        instructions[1][0] = Math.pow(instructions[0][0], 1 / instructions[1][0]);
                        instructions.splice(0, 1);
                } else if (instructions[0][1] === "log base") {
                        instructions[1][0] = Math.log(instructions[0][0]) / Math.log(instructions[1][0]);
                        instructions.splice(0, 1);
                }
        }
}

function op(div) {
        o = true;
        eq = false;
        let s = document.getElementById("display").innerHTML;
        let d;
        switch (div.id) {
                case "divi":
                        d = [parseFloat(s), "/"];
                        Operation.push("/");
                        break;
                case "mult":
                        d = [parseFloat(s), "*"];
                        Operation.push("*");
                        break;
                case "plus":
                        d = [parseFloat(s), "+"];
                        Operation.push("+");
                        break;
                case "mine":
                        d = [parseFloat(s), "-"];
                        Operation.push("-");
                        break;
                case "xpowy":
                        d = [parseFloat(s), "^"];
                        Operation.push("^");
                        break;
                case "yroot":
                        d = [parseFloat(s), "yroot"];
                        Operation.push("yroot");
                        break;
                case "logyx":
                        d = [parseFloat(s), "log base"];
                        Operation.push("log base");
                        break;
        }
        Operation.unshift(s);
        instructions.push(d);
        eval();
        document.getElementById("display2").innerHTML = instructions[0][0].toString() + " " + instructions[0][1];
}
function eventHand(div) {
        if (document.getElementById("display").innerHTML === "0") {
                document.getElementById("display").innerHTML = div.innerHTML;
        } else if (o) {
                document.getElementById("display").innerHTML = div.innerHTML;
                o = false;
        } else {
                document.getElementById("display").innerHTML += div.innerHTML;
        }
}
function ans() {
        if (eq) {
                let d = document.getElementById("display").innerHTML;
                instructions.push([parseFloat(d), Operation[Operation.length - 2]]);
                instructions.push([parseFloat(Operation[Operation.length - 1]), null]);
                document.getElementById("display2").innerHTML = instructions[0][0].toString() + " " + instructions[0][1] + " " + instructions[1][0].toString() + " =";
                eval();
                document.getElementById("display").innerHTML = instructions[0][0];
                instructions = [];
                return;
        }
        eq = true;
        let s = document.getElementById("display").innerHTML;
        Operation.push(s);
        let c = [parseFloat(s), null];
        document.getElementById("display2").innerHTML = instructions[0][0].toString() + " " + instructions[0][1] + " " + s.toString() + " =";
        instructions.push(c);
        eval();
        document.getElementById("display").innerHTML = instructions[0][0].toString();
        instructions = [];
}
function cl() {
        instructions = [];
        document.getElementById("display").innerHTML = "0";
        document.getElementById("display2").innerHTML = "";
        sign = true;
        eq = false;
        o = false;
}
function signChanger() {
        if (sign === true) {
                sign = false;
                document.getElementById("display").innerHTML = "-" + document.getElementById("display").innerHTML;
        } else {
                sign = true;
                let s = document.getElementById("display").innerHTML;
                s = s.split("");
                s.shift();
                s = s.join("");
                document.getElementById("display").innerHTML = s;
        }
}
function square2() {
        let doc = document.getElementById("display").innerHTML;
        if (parseFloat(doc) < 0) {
                document.getElementById("display").innerHTML = "Invalid Input";
                cl();
        } else {
                document.getElementById("display").innerHTML = Math.sqrt(parseFloat(doc));
        }
}
function pow2() {
        let doc = document.getElementById("display").innerHTML;
        document.getElementById("display").innerHTML = Math.pow(parseFloat(doc), 2);
}
function del() {
        let doc = document.getElementById("display").innerHTML;
        let arr = doc.split("");
        arr.pop();
        doc = arr.join("");
        doc === "" || doc === "-" ? (document.getElementById("display").innerHTML = "0") : (document.getElementById("display").innerHTML = doc);
}
function ce() {
        document.getElementById("display").innerHTML = "0";
}
function inv() {
        let doc = document.getElementById("display").innerHTML;
        doc = 1 / parseFloat(doc);
        document.getElementById("display").innerHTML = doc;
}
function log10() {
        let doc = document.getElementById("display").innerHTML;
        doc = parseFloat(doc);
        if (doc <= 0) {
                cl();
        } else {
                doc = Math.log10(doc);
        }
        document.getElementById("display").innerHTML = doc;
}
function ex() {
        let doc = document.getElementById("display").innerHTML;
        doc = parseFloat(doc);
        doc = Math.pow(Math.E, doc);
        document.getElementById("display").innerHTML = doc;
}
function tenx() {
        let doc = document.getElementById("display").innerHTML;
        doc = parseFloat(doc);
        doc = Math.pow(10, doc);
        document.getElementById("display").innerHTML = doc;
}
function lightmode() {
        if (lightMode === false) {
                document.getElementById("html").style.backgroundColor = "white";
                document.getElementById("light-mode").style.color = "black";
                document.getElementById("display").style.color = "black";
                document.getElementById("display2").style.color = "black";
                document.getElementById("light-mode").style.transform = "rotate(30deg)";
                document.querySelectorAll(".button").forEach((element) => {
                        element.classList.toggle("hover");
                });
                document.querySelectorAll(".c").forEach((element) => {
                        element.classList.toggle("chover");
                });
                document.querySelectorAll(".equal").forEach((element) => {
                        element.classList.toggle("ehover");
                });
                lightMode = true;
        } else {
                document.getElementById("html").style.backgroundColor = "black";
                document.getElementById("light-mode").style.color = "rgb(185, 185, 185)";
                document.getElementById("display").style.color = "white";
                document.getElementById("display2").style.color = "white";
                document.getElementById("light-mode").style.transform = "rotate(-30deg)";
                document.querySelectorAll(".button").forEach((element) => {
                        element.classList.toggle("hover");
                });
                document.querySelectorAll(".c").forEach((element) => {
                        element.classList.toggle("chover");
                });
                document.querySelectorAll(".equal").forEach((element) => {
                        element.classList.toggle("ehover");
                });
                lightMode = false;
        }
}
