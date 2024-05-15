// 2) Triangulo de #. Para este ejercicio, construir un programa que permita armar un trianguloformado con #, de la siguiente manera:
// #
// ##
// ###
// ####
// #####

for (let i = 1; i <= 5; i++) {
    let triangulo = "";
    for (let j = 1; j <= i; j++) {
        triangulo += "#";
    }
    console.log(triangulo);
}    