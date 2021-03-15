/*
    ===== Código de TypeScript =====
*/

function sumar( a: number, b: number ): number {
    return a + b;
}

function multiplicar( numero: number, otroNumero?: number, base: number = 2 ){
    return numero * base;
}

const sumarFlecha = ( a: number, b: number ): number => {
    return a + b;
}

interface PersonajeMarvel{
    nombre: string;
    pv: number;
}

function curar( personaje: PersonajeMarvel, curarX: number ): void{

    personaje.pv += curarX;

}

const nuevoPersonaje: PersonajeMarvel = {
    nombre: "Thor",
    pv: 55,
}

console.log(nuevoPersonaje);
curar(nuevoPersonaje, 10);
console.log(nuevoPersonaje);