export const ObtenerMensajeErrorGato: (error: any, mensajeDefecto:string) => string = (error: any, mensajeDefecto:string) => {
    var mensaje: string = mensajeDefecto;
    var primerNivel: string[];
    var segundoNivel: string[];
    var tercerNivel: string[];
    //var cuartoNivel: string[];
    // var quintoNivel: string[];
    // var sextoNivel: string[];
    // var septimoNivel: string[];

    var primerNivel: string[] = Object.keys(error);
    console.log("1", primerNivel);
    if (!primerNivel.includes('response')) {
        return mensaje;
    }
    var segundoNivel: string[] = Object.keys(error.response);
    console.log("2", segundoNivel);
    if (!segundoNivel.includes('data')) {
        return mensaje;
    }
    var tercerNivel: string[] = Object.keys(error.response.data);
    console.log("3", tercerNivel);
    if (!segundoNivel.includes('data')) {
        return mensaje;
    }
    if (tercerNivel.length > 10) {
        return error.response.data;
    }
    return Object.values(error.response.data.errors)[0];

}
