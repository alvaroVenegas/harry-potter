interface PersonajeInterface {
    id: number;
    personaje: string;
    apodo: string;
    estudianteDeHowarts: boolean;
    casaDeHowarts: string;
    interpretado_por: string;
    hijos: string[];
    imagen: string;
};

export class Personaje implements PersonajeInterface {
    id: number;
    personaje: string;
    apodo: string;
    estudianteDeHowarts: boolean;
    casaDeHowarts: string;
    interpretado_por: string;
    hijos: string[];
    imagen: string;

    constructor(id: number, personaje: string, apodo: string, estudianteDeHowarts: boolean, casaDeHowarts: string, interpretado_por: string, hijos: string[],
        imagen: string) {
        this.id = id;
        this.personaje = personaje;
        this.apodo = apodo;
        this.casaDeHowarts = casaDeHowarts;
        this.estudianteDeHowarts = estudianteDeHowarts;
        this.interpretado_por = interpretado_por;
        this.hijos = hijos;
        this.imagen = imagen;
    };
};