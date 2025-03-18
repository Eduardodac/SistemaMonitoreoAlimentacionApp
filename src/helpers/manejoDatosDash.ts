export interface IDatosRecibidos {
    name: string;
    nombre: string;
    alimentoConsumido: number;
    tiempo: number;
}

export interface IDatosDashboard {
    name: string;
    [key: string]: number | string;
}

export interface IDatosSalida {
    name: string; // Nombre del animal
    value: number; // Suma total de alimentoConsumido
}

export const obtenerDatosDashboard = () => {
    const dia = 1;
    const hora = 2;
    return [dia, hora]
}

const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const horas = [
    "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM",
    "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"
];

export const getDatosLine = (datos: IDatosRecibidos[], esDia: boolean): IDatosDashboard[][] => {

    var frecuencia: string[] = esDia? diasSemana: horas;
    // Obtener todos los nombres únicos de animales
    const nombresAnimales = [...new Set(datos.map(d => d.nombre))];

    const datosAlimento: IDatosDashboard[] = frecuencia.map(element => {
        const datosFrecuencia = datos.filter(d => d.name === element);
        // Crear un objeto para el día actual
        const datosTransformadosDia: IDatosDashboard = { name: element };
        // Rellenar con 0 si no hay datos para un gato
        nombresAnimales.forEach(animal => {
            datosTransformadosDia[animal] = datosFrecuencia.find(d => d.nombre === animal)?.alimentoConsumido || 0;
        });
        return datosTransformadosDia;
    });

    const datosTiempo: IDatosDashboard[] = frecuencia.map(element => {
        const datosFrecuencia = datos.filter(d => d.name === element);
        // Crear un objeto para el día actual
        const datosTransformadosDia: IDatosDashboard = { name: element };
        // Rellenar con 0 si no hay datos para un gato
        nombresAnimales.forEach(animal => {
            datosTransformadosDia[animal] = datosFrecuencia.find(d => d.nombre === animal)?.tiempo || 0;
        });
        return datosTransformadosDia;
    });

    return [datosAlimento, datosTiempo];
};

export const obtenerClavesDinamicas = (datosTransformados: IDatosDashboard[]): string[] => {
    const clavesUnicas = new Set<string>();

    // Recorrer todos los objetos transformados
    datosTransformados.forEach(dia => {
        // Recorrer las claves de cada objeto
        Object.keys(dia).forEach(key => {
            if (key !== "name") {
                clavesUnicas.add(key); // Agregar la clave al Set (evita duplicados)
            }
        });
    });

    // Convertir el Set a un array
    return Array.from(clavesUnicas);
};

export const getDatosPieAlimento = (datos: IDatosRecibidos[]): IDatosSalida[] => {
    // Objeto para almacenar la suma de alimentoConsumido por animal
    const sumaPorAnimal: { [key: string]: number } = {};

    // Recorrer los datos y sumar el alimentoConsumido por animal
    datos.forEach(dato => {
        const nombreAnimal = dato.nombre;
        const alimentoConsumido = dato.alimentoConsumido;

        if (sumaPorAnimal[nombreAnimal]) {
            sumaPorAnimal[nombreAnimal] += alimentoConsumido;
        } else {
            sumaPorAnimal[nombreAnimal] = alimentoConsumido;
        }
    });

    // Convertir el objeto a un array con la estructura deseada
    const resultado = Object.keys(sumaPorAnimal).map(nombre => ({
        name: nombre,
        value: sumaPorAnimal[nombre]
    }));

    return resultado;
};

export const getDatosPieTiempo = (datos: IDatosRecibidos[]): IDatosSalida[] => {
    // Objeto para almacenar la suma de tiempo por animal
    const sumaPorAnimal: { [key: string]: number } = {};

    // Recorrer los datos y sumar el tiempo por animal
    datos.forEach(dato => {
        const nombreAnimal = dato.nombre;
        const tiempo = dato.tiempo;

        if (sumaPorAnimal[nombreAnimal]) {
            sumaPorAnimal[nombreAnimal] += tiempo;
        } else {
            sumaPorAnimal[nombreAnimal] = tiempo;
        }
    });

    // Convertir el objeto a un array con la estructura deseada
    const resultado = Object.keys(sumaPorAnimal).map(nombre => ({
        name: nombre,
        value: sumaPorAnimal[nombre]
    }));

    return resultado;
};