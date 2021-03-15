/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 65,
    cancion: "Just the way you are",
    detalles: {
        autor: "Bruno Mars",
        anio: 2010,
    },
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles; 

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
