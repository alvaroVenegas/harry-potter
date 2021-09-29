interface HechizoInterface {
    id: number;
    hechizo: string;
    uso: string;
};

export class Hechizo implements HechizoInterface {
    id: number;
    hechizo: string;
    uso: string;

    constructor(id: number, hechizo: string, uso: string) {
        this.id = id;
        this.hechizo = hechizo;
        this.uso = uso;
    };
};