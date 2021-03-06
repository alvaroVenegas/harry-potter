interface LibroInterface {
    id: number;
    libro: string;
    titulo_original: string;
    fecha_de_lanzamiento: string;
    autora: string;
    descripcion: string;
};

export class Libro implements LibroInterface {
    id: number;
    libro: string;
    titulo_original: string;
    fecha_de_lanzamiento: string;
    autora: string;
    descripcion: string;

    constructor(id: number, libro: string, titulo_original: string, fecha_de_lanzamiento: string, autora: string, descripcion: string) {
        this.id = id;
        this.libro = libro;
        this.titulo_original = titulo_original;
        this.autora = autora;
        this.fecha_de_lanzamiento = fecha_de_lanzamiento;
        this.descripcion = descripcion;
    };
};