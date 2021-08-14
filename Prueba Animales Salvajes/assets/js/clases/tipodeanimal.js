import Animal from './animal.js';

//Clase hija//

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    Rugir() {
        this.getSonido()
        return `<audio controls style="width: 100px; height:25px"><source src="./assets/sounds/Rugido.mp3" type="audio/mpeg"/></audio>`;

    }

}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    Aullar() {

        this.getSonido()
        return `<audio controls style="width: 100px; height:25px"><source src="./assets/sounds/Aullido.mp3" type="audio/mpeg"/></audio>`;

    }

}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    Gruñir() {

        this.getSonido()
        return `<audio controls style="width: 100px; height:25px"><source src="./assets/sounds/Gruñido.mp3" type="audio/mpeg"/></audio>`;

    }

}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    Sisear() {

        this.getSonido()
        return `<audio controls style="width: 100px; height:25px"><source src="./assets/sounds/Siseo.mp3" type="audio/mpeg"/></audio>`;

    }

}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    Chillar() {

        this.getSonido()
        return `<audio controls style="width: 100px; height:25px"><source src="./assets/sounds/Chillido.mp3" type="audio/mpeg"/></audio>`;

    }

}


export { Leon, Lobo, Oso, Serpiente, Aguila };