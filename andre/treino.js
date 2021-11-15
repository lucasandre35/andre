const input = require ("readline-sync");

console.log("== bom dia. ==");
const quantia = input.question("qual seu nome?");

if (quantia >=20 && quantia <3000){
    console.log("autorizado!")
    
} else if (quantia >3000) {console.log("requer autorização sa gerecia!")

} else {
    console.log("não autorizado!")
};

