//Consulta de Datos//
let animales = (() => {

    const datos = './animales.json'

    const getData = async() => {

        const resDatos = await fetch(datos);
        const data = await resDatos.json();
        return data;

    }
    return { getData }


})();

export default animales;