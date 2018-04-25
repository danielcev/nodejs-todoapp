var colors = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./to-do/to-do');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listado = []

        if (argv.completadoFilter) {
            listado = porHacer.getListado(argv.completadoFilter);

            console.log('True');

        } else {
            listado = porHacer.getListado();
            console.log('False');
        }

        if (listado.length == 0) {
            console.log('No hay tareas que mostrar');
        }

        for (let tarea of listado) {
            console.log('========Por hacer========'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('========================='.green);
        }

        break;

    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);

        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');

}