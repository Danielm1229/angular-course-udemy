/*
    ===== Código de TypeScript =====
*/
interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    dondeVive?: string;
}

const personaje: Personaje = {
    nombre: "Iron man",
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Laser'],
}

personaje.dondeVive = 'Nueva york';

console.table(personaje);