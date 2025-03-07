export interface IDatosRecibidos {
    name: string;
    nombre: string;
    alimentoConsumido: number;
    tiempo: number;
}

export interface IDatosTransformados {
    name: string;
    [key: string]: number | string; 
}

export interface IDatosSalida {
    name: string; // Nombre del animal
    value: number; // Suma total de alimentoConsumido
}

export const transformarDatosDias = (datos: IDatosRecibidos[]): IDatosTransformados[] => {
    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    // Obtener todos los nombres únicos de animales
    const nombresAnimales = [...new Set(datos.map(d => d.nombre))];

    const datosTransformados: IDatosTransformados[] = diasSemana.map(dia => {
        const datosDia = datos.filter(d => d.name === dia);

        // Crear un objeto para el día actual
        const datosTransformadosDia: IDatosTransformados = { name: dia };

        // Rellenar con 0 si no hay datos para un animal
        nombresAnimales.forEach(animal => {
            datosTransformadosDia[animal] = datosDia.find(d => d.nombre === animal)?.alimentoConsumido || 0;
        });

        return datosTransformadosDia;
    });

    return datosTransformados;
};

export const transformarDatosHoras = (datos: IDatosRecibidos[]): IDatosTransformados[] => {
    // Definir todas las horas de 12 AM a 11 PM
    const horas = [
        "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM",
        "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"
    ];

    // Obtener todos los nombres únicos de animales
    const nombresAnimales = [...new Set(datos.map(d => d.nombre))];

    const datosTransformados: IDatosTransformados[] = horas.map(hora => {
        const datosHora = datos.filter(d => d.name === hora);

        // Crear un objeto para la hora actual
        const datosTransformadosHora: IDatosTransformados = { name: hora };

        // Rellenar con 0 si no hay datos para un animal
        nombresAnimales.forEach(animal => {
            datosTransformadosHora[animal] = datosHora.find(d => d.nombre === animal)?.alimentoConsumido || 0;
        });

        return datosTransformadosHora;
    });

    return datosTransformados;
};

export const transformarDatosDiasTiempo = (datos: IDatosRecibidos[]): IDatosTransformados[] => {
    // Definir todos los días de la semana
    const diasSemana = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    // Obtener todos los nombres únicos de animales
    const nombresAnimales = [...new Set(datos.map(d => d.nombre))];

    const datosTransformados: IDatosTransformados[] = diasSemana.map(dia => {
        const datosDia = datos.filter(d => d.name === dia);

        // Crear un objeto para el día actual
        const datosTransformadosDia: IDatosTransformados = { name: dia };

        // Rellenar con 0 si no hay datos para un animal
        nombresAnimales.forEach(animal => {
            datosTransformadosDia[animal] = datosDia.find(d => d.nombre === animal)?.tiempo || 0;
        });

        return datosTransformadosDia;
    });

    return datosTransformados;
};

export const transformarDatosHorasTiempo = (datos: IDatosRecibidos[]): IDatosTransformados[] => {
    // Definir todas las horas de 12 AM a 11 PM
    const horas = [
        "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM",
        "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"
    ];

    // Obtener todos los nombres únicos de animales
    const nombresAnimales = [...new Set(datos.map(d => d.nombre))];

    const datosTransformados: IDatosTransformados[] = horas.map(hora => {
        const datosHora = datos.filter(d => d.name === hora);

        // Crear un objeto para la hora actual
        const datosTransformadosHora: IDatosTransformados = { name: hora };

        // Rellenar con 0 si no hay datos para un animal
        nombresAnimales.forEach(animal => {
            datosTransformadosHora[animal] = datosHora.find(d => d.nombre === animal)?.tiempo || 0;
        });

        return datosTransformadosHora;
    });

    return datosTransformados;
};

export const obtenerClavesDinamicas = (datosTransformados: IDatosTransformados[]): string[] => {
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

export const getDatosPietiempo = (datos: IDatosRecibidos[]): IDatosSalida[] => {
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