// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
const tamannoCadena = (cadena) => {
    let longitud;

    if (typeof cadena === 'string') {
        longitud = cadena.length;
        return longitud;
    } else if (typeof cadena === 'number') {
        longitud = cadena.toString().length;
        return longitud;
    } else if (typeof cadena === 'boolean') {
        longitud = cadena.toString().length;
        return longitud;
    }
}