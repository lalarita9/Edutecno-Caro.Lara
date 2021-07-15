//Construcción método privado//
const audioVisual = (() => {
    let body;

    function mostrarAudioVisualPrivada(miUrlPrivada, miIdPrivada) {
        if (miIdPrivada == "musica") {
            body = document.querySelector("#musica > #video-musica");
            body.setAttribute("src", miUrlPrivada)
        }
        if (miIdPrivada == "peliculas") {
            body = document.querySelector("#peliculas > #video-peliculas");
            body.setAttribute("src", miUrlPrivada)

        }
        if (miIdPrivada == "series") {
            body = document.querySelector("#series > #video-series");
            body.setAttribute("src", miUrlPrivada)

        }
    }
    return {
        mostrarAudioVisualPublica: function(miUrlPublica, miIdPublica) {
            mostrarAudioVisualPrivada(miUrlPublica, miIdPublica);
        },
    }
})();

//Closures//
class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => {
            return _url;
        }
        this.setUrl = (nueva_url) => {
            _url = nueva_url;
        }
    }
    get url() {
        return this.getUrl();
    }
    set url(nueva_url) {
        this.setUrl(nueva_url);
    }
    setInicio() {
        return ""
    }
}
//Hija//
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }
    get id() {
        return this._id;
    }

    clickVideos() {
        audioVisual.mostrarAudioVisualPublica(this.url, this.id);
        console.log(this.url);

    }

    setInicio(comenzar_en) {
        this.url = `${this.url}?start=${comenzar_en}`;
    }
}
//Interacción//
let miMusica = new Reproductor('https://www.youtube.com/embed/umWytYd_BNI', 'musica');
let miPelicula = new Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY', 'peliculas');
let miSerie = new Reproductor('https://www.youtube.com/embed/f1-OHMyJWN8', 'series');
console.log(miPelicula);
console.log(miMusica);
console.log(miSerie);
miMusica.setInicio(56);
miPelicula.setInicio(60);
miSerie.setInicio(15);
//Activando botón acordeón//
let botonMusica = document.querySelector('#btn-1');
botonMusica.addEventListener('click', miMusica.clickVideos());

let botonPelicula = document.querySelector('#btn-2');
botonPelicula.addEventListener('click', miPelicula.clickVideos());

let botonSerie = document.querySelector('#btn-3');
botonSerie.addEventListener('click', miSerie.clickVideos());