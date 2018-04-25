const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const completadoFilter = {
    alias: 'c',
    desc: 'Filtra por completado'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Eliminar una tarea', {
        descripcion
    })
    .command('listar', 'Listar tareas', {
        completadoFilter
    })
    .help()
    .argv;

module.exports = {
    argv
}