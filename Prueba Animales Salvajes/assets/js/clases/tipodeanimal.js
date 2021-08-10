import Animal from './animal.js';

//Clase hija//

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonidos) {
        super(nombre, edad, img, comentarios, sonidos)
    }

    Rugir() {
        let sound = new sound(this.getSondios());
        sound.play();
    }

}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonidos) {
        super(nombre, edad, img, comentarios, sonidos)
    }

    Aullar() {
        let sound = new sound(this.getSondios());
        sound.play();
    }

}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonidos) {
        super(nombre, edad, img, comentarios, sonidos)
    }

    Gruñir() {
        let sound = new sound(this.getSondios());
        sound.play();
    }

}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonidos) {
        super(nombre, edad, img, comentarios, sonidos)
    }

    Sisear() {
        let sound = new sound(this.getSondios());
        sound.play();
    }

}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonidos) {
        super(nombre, edad, img, comentarios, sonidos)
    }

    Chillar() {
        let sound = new sound(this.getSondios());
        sound.play();
    }

}

export { Leon, Lobo, Oso, Serpiente, Aguila };