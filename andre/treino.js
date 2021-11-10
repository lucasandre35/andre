const input = require ("readline-sync");

console.log("== bom dia. ==");
const quantia = input.question("quanto quer retirar?");

if (quantia >=20 && quantia <2000){
    console.log("saque autorizado")
} else if (quantia <=2000) {console.log("autorizado!")

} else {
    console.log("não autorizado!")
};

