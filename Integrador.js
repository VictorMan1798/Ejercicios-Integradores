/*
Realizar los 4 ejercicios integrando los temas vistos de fundamentos de NodeJS que son:
* Let
* Template Literal
* Destructuración.
* Funciones flechas
* async-await
Para cada ejercicio utilizar promesas y TODOS los temas anteriores.

PUNTO EXTRA: mostrar como resultado de las promesas, la data que se muestra a continuación, tanto en 
ese mismo orden y los mismos  ejemplos:

1.- El alumno Cecilia Mata Muñoz con la matrícula 160530 está inscrito a los cursos 'Aplicación de las 
Telecomunicaciones' y 'Aplicaciones Web Orientadas a Servicios', sumando un total de 10 faltas y un promedio de 87 en el 9no cuatrimentre.

2.- El curso 'Aplicaciones Web Orientadas a Servicios' (AWOS) tiene en total 3 unidades, pertenece a la 
academia de Programación y tiene un total de 3 alumnos incritos.

3.- Los alumnos con matrícula 160530 y 160599 que cursan actualmente el 9no cuatrimeste, tienen un total de 
12 faltas entre los 2 en todos sus cursos, el director de carrera mencionó si esa cifra era mayor o igual a 5, les pediría participar en una actividad comunitaria para que no les afectase. Cecilia Mata Muñoz y Abraham Carranza Macías se dieron cuenta que tendrán que partipar en esa actividad.

4.- El la institución hay un total de 2 cursos que pertenecen a la academia de Programación y suman 5 alumnos 
inscritios.

*/

//DATA
// 5 Alumnos
alumnos = [{
        _id: '5ede810a8ad8391a54eb35a0',
        strNombre: 'Cecilia',
        strPrimerApellido: 'Mata',
        strSegundoApellido: 'Muñoz',
        nmbEdad: 22,
        strMatricula: '160530',
        nmbCuatrimestre: 9
    },
    {
        _id: '5ede813b8ad8391a54eb35a7',
        strNombre: 'Abraham',
        strPrimerApellido: 'Carranza',
        strSegundoApellido: 'Macías',
        nmbEdad: 22,
        strMatricula: '160599',
        nmbCuatrimestre: 9
    },
    {
        _id: '5ede81548ad8391a54eb35ac',
        strNombre: 'Isabela',
        strPrimerApellido: 'Hernández',
        strSegundoApellido: 'Vite',
        nmbEdad: 23,
        strMatricula: '160521',
        nmbCuatrimestre: 9
    },
    {
        _id: '5ede816a8ad8391a54eb35b1',
        strNombre: 'Fracisco',
        strPrimerApellido: 'Tapia',
        strSegundoApellido: 'Macías',
        nmbEdad: 25,
        strMatricula: '150498',
        nmbCuatrimestre: 9
    },
    {
        _id: '5ede817f8ad8391a54eb35b6',
        strNombre: 'Pedro',
        strPrimerApellido: 'De La Cruz',
        strSegundoApellido: 'Rosas',
        nmbEdad: 28,
        strMatricula: '130493',
        nmbCuatrimestre: 9
    }
];

// 5 cursos
cursos = [{
        _id: '5ede81a08ad8391a54eb35bb',
        strNombre: 'Administración de Proyectos de TI II',
        strNombreCorto: 'APT-II',
        nmbUnidades: 5,
        strAcademia: 'Programación',
    },
    {
        _id: '5ede67b9b47ba23d8c63f492',
        strNombre: 'Aplicación de las Telecomunicaciones',
        strNombreCorto: 'AT',
        nmbUnidades: 4,
        strAcademia: 'Redes',
    },
    {
        _id: '5ede6801b47ba23d8c63f497',
        strNombre: 'Aplicaciones Web Orientadas a Servicios',
        strNombreCorto: 'AWOS',
        nmbUnidades: 3,
        strAcademia: 'Programación',
    },
    {
        _id: '5ede6824b47ba23d8c63f49c',
        strNombre: 'Dirección de equipos de alto rendimiento',
        strNombreCorto: 'DEAR',
        nmbUnidades: 5,
        strAcademia: 'Mercadotecnia',
    },
    {
        _id: '5ede6883b47ba23d8c63f4a1',
        strNombre: 'Inglés VIII',
        strNombreCorto: 'I-VIII',
        nmbUnidades: 3,
        strAcademia: 'Idiomas',
    }

];

// 10 calificaciones
calificaciones = [{
        _id: 0,
        idAlumno: '5ede810a8ad8391a54eb35a0',
        idCurso: '5ede67b9b47ba23d8c63f492',
        nmbCalificacion: 98,
        nmbFaltas: 2
    },
    {
        _id: 0,
        idAlumno: '5ede810a8ad8391a54eb35a0',
        idCurso: '5ede6801b47ba23d8c63f497',
        nmbCalificacion: 76,
        nmbFaltas: 8
    },
    {
        _id: 0,
        idAlumno: '5ede813b8ad8391a54eb35a7',
        idCurso: '5ede6883b47ba23d8c63f4a1',
        nmbCalificacion: 85,
        nmbFaltas: 2
    },
    {
        _id: 0,
        idAlumno: '5ede813b8ad8391a54eb35a7',
        idCurso: '5ede6801b47ba23d8c63f497',
        nmbCalificacion: 96,
        nmbFaltas: 0
    },
    {
        _id: 0,
        idAlumno: '5ede81548ad8391a54eb35ac',
        idCurso: '5ede81a08ad8391a54eb35bb',
        nmbCalificacion: 86,
        nmbFaltas: 0
    },
    {
        _id: 0,
        idAlumno: '5ede81548ad8391a54eb35ac',
        idCurso: '5ede6824b47ba23d8c63f49c',
        nmbCalificacion: 94,
        nmbFaltas: 0
    },
    {
        _id: 0,
        idAlumno: '5ede816a8ad8391a54eb35b1',
        idCurso: '5ede6824b47ba23d8c63f49c',
        nmbCalificacion: 90,
        nmbFaltas: 0
    },
    {
        _id: 0,
        idAlumno: '5ede816a8ad8391a54eb35b1',
        idCurso: '5ede6801b47ba23d8c63f497',
        nmbCalificacion: 80,
        nmbFaltas: 4
    },
    {
        _id: 0,
        idAlumno: '5ede817f8ad8391a54eb35b6',
        idCurso: '5ede67b9b47ba23d8c63f492',
        nmbCalificacion: 79,
        nmbFaltas: 1
    },
    {
        _id: 0,
        idAlumno: '5ede817f8ad8391a54eb35b6',
        idCurso: '5ede81a08ad8391a54eb35bb',
        nmbCalificacion: 80,
        nmbFaltas: 1
    }
];

// 1.- El alumno ${nombreCompleto} con la matrícula ${strMatricula} está inscrito a los cursos '${strCurso1}' 
// y '${strCurso2}', sumando un total de ${nmbTotalFaltas} faltas y un promedio de ${nmbPromedioCalificaciones} 
// en el ${nmbCuatrimestre}no cuatrimentre.

let ObtenerAlumno = (id) =>{
    return new Promise((resolve,reject)=>{
        let alumno = alumnos.find((alumno) =>{
            return alumno._id == id
        })
        if (!alumno){
            reject('No se encuentra el Alumno/a')
        }else{
            resolve(alumno)
        }
    })
}


let ObtenerCalificaciones= (idA) =>{
    const Calificacion = calificaciones.findIndex(Calificacion.idAlumno==idA)
    let Index = Calificacion+2
    return new Promise ((resolve, reject)=>{
        let Calificacion = calificaciones.slice(Calificacion,Index,(calificaciones)=>{
            return calificaciones.idAlumno == idA
        })
        if (!Calificacion){
            reject ('No se encuentra la Calificacion')
        }else{
            resolve(Calificacion)
        }
    })
}

let ObtenerCurso = (idCurso, idCurso2) =>{
    return new Promise((resolve,reject)=>{
        let cursito = cursos.filter((cursos)=>{
            return cursos._id == idCurso 
        })
        if(!cursito){
            reject('No se encuentra el Curso')
        }else{
            resolve(cursito)
        }
    })
}
let ObteberDatos = async ()=>{
    let alumno = await ObtenerAlumno('5ede810a8ad8391a54eb35a0')
    let Calificacion = await ObtenerCalificaciones (alumno._id)
    var promedio=0
    var faltar=0;
    for(let valor of Calificacion){
        promedio += valor.nmbCalificacion
        faltas +=valor.nmbFaltas
    }
    let curso1 = await ObtenerCurso (Calificacion[0].idCurso)
    let curso2 = await ObtenerCurso (Calificacion [1].idCurso)
    promedio = promedio/Calificacion.length

    return `1.- El alumno ${alumno.strNombre} ${alumno.strPrimerApellido} ${alumno.strSegundoApellido} 
    con la matrícula ${alumno.strMatricula} está inscrito a los cursos '${curso1.strNombre}' y '${curso2.strNombre}', sumando un total de  faltas ${faltas} y un promedio ${promedio} 
    de  en el ${alumno.nmbCuatrimestre}no cuatrimentre.`

}
 
// 2.- El curso '${strNombre}' (${strNombreCorto}) tiene en total ${nmbUnidades} unidades, pertenece a la 
// academia de ${strAcademia} y tiene un total de ${nmbAlumnosIncritos} alumnos incritos.
let obtenerDatos2 = async ()=>{
    let curso = await obtenerCursos ('5ede6801b47ba23d8c63f497')
   var totalAlumnos = await obtenerAlumCur (curso._id)
    
  return `El curso ${curso.strNombre} (${curso.strNombreCorto}) tiene en total ${curso.nmbUnidades} unidades, pertenece a la 
    academia de ${curso.strAcademia} y tiene un total de ${totalAlumnos} alumnos incritos.`
}
let obtenerAlumCur = (idCurso) =>{
    return  new Promise((resolve, reject) =>{
        let listaCalf = calificaciones.filter(function(lista) {
            return lista.idCurso == idCurso
        })
 
        if(!listaCalf){
            reject('No hay calificaciones')
        }else{
            var totalAlumnos =0;
            for(let valor of listaCalf){
                totalAlumnos ++
            }
            resolve(totalAlumnos)
 
        }
        
    })
 
}

// 3.- Los alumnos con matrícula ${strMatricula1} y ${strMatricula2} que cursan actualmente el 
// ${nmbCuatrimestre}no cuatrimeste, tienen un total de ${totalFaltas} faltas entre los 2 en todos sus cursos, 
// el director de carrera mencionó si esa cifra era mayor o igual a 5, les pediría participar en una actividad 
// comunitaria para que no les afectase. ${strNombreCompleto1} y ${strNombreCompleto2} se dieron cuenta que 
// ${ decision } que partipar en esa actividad.

let ObtenerAlumnos =(id,id2) =>{
    return new Promise((resolve, reject) =>{
        let alumno = alumnos.filter(function(alumno){
            return alumno._id == id ||alumno._id == id2
        })

        if(!alumno) {
            reject('No hay alumnos')
        }else{
            resolve(alumno)
        }
    })
}
let obtenerDatos3 = async ()=>{
   let alumnos = await ObtenerAlumnos ('5ede813b8ad8391a54eb35a7','5ede817f8ad8391a54eb35b6')
   let FaltasTotales= await obtenerFaltasAlum(alumnos[0]._id,alumnos[1]._id)
   var nmbFaltas = 0;
   let strMatricula1= alumnos[0].strMatricula
   let strMatricula2= alumnos[1].strMatricula

   let strNombreCompleto1 = `${alumnos[0].strNombre}${alumnos[0].strPrimerApellido}${alumnos[0].strSegundoApellido}`
   let strNombreCompleto2 = `${alumnos[1].strNombre}${alumnos[1].strPrimerApellido}${alumnos[1].strSegundoApellido}`
   

   for (let faltas of FaltasTotales){
        nmbFaltas += faltas.nmbFaltas
        
   }
   let decision= await definir(nmbFaltas)
   return  `Los alumnos con matrícula ${strMatricula1} y ${strMatricula2} que cursan actualmente el 
    ${alumnos[0].nmbCuatrimestre}no cuatrimeste, tienen un total de ${nmbFaltas} faltas entre los 2 en todos sus cursos, 
    el director de carrera mencionó si esa cifra era mayor o igual a 5, les pediría participar en una actividad 
    comunitaria para que no les afectase. ${strNombreCompleto1} y ${strNombreCompleto2} se dieron cuenta que 
    ${decision} que partipar en esa actividad.`

}
function definir (faltas) {
    if(faltas >=5){
        return 'tendran'
        
    }else{
        return 'no tendran'
    }
}
let obtenerFaltasAlum = (idAlumno, idAlumno2) =>{
    return  new Promise((resolve, reject) =>{
        let listaCa = calificaciones.filter(function(lista) {
            return lista.idAlumno == idAlumno ||lista.idAlumno == idAlumno2
        })

        if(!listaCa){
            reject('No hay calificaciones')
        }else{
            resolve(listaCa)
        }
    })
    
}
obtenerDatos3 ().then((data) =>{
    console.log(data)
}).catch((err) =>{
    console.log(err)
})


// NOTA: El la última data a mostrar (${decision}) se tendrá que mostrar el texto 'tendrán' o 'no tendrán' en 
// caso de cumplir o no cumplir respecitivamente, la decisión antes mencionada.

// 4.- El la institución hay un total de ${nmbCantidadCursos} cursos que pertenecen a la academia de 
// ${strAcademia} y suman ${nmbCantidadAlumnos} alumnos inscritios.

let obtenerCursosPorAcademia = (nombreAcademia) =>{
    return new Promise((resolve, reject) =>{
         let cursito = cursos.filter(function (curso) {
            return curso.strAcademia == nombreAcademia
        })
 
        if(!cursito){
            reject('No se encuentra el curso')
        }else{
            resolve(cursito)
        }
    })
}


 
let obtenerAlumnosPorCurso =(idsCursos) =>{
    return new Promise((resolve, reject) =>{
        let alumnosPorCurso = calificaciones.filter(function(califAlumnos) {
            if(idsCursos.length>1) {
           return califAlumnos.idCurso == idsCursos[0]._id || califAlumnos.idCurso == idsCursos[1]._id 
          }
           else{
            return califAlumnos.idCurso == idsCursos[0]._id 
           }
        })
        if(!alumnosPorCurso){
            reject('Nadie toma ese curso')
        }else{
            resolve(alumnosPorCurso)
        }
    })
}
    
let obtenerDatos4 =async () =>{
    let cursos = await obtenerCursosPorAcademia('Programación')
    let alumnosPorcurso = await obtenerAlumnosPorCurso(cursos) 
    var nmbCantidadCursos =0;
    nmbCantidadCursos = cursos.length
    var nmbAlumnosInscritos = alumnosPorcurso.length
    return `4.- El la institución hay un total de ${nmbCantidadCursos} cursos que pertenecen a la academia de ${cursos[0].strAcademia} y suman ${nmbAlumnosInscritos} alumnos inscritios.`
}
 
obtenerDatos4().then((data) =>{
    console.log(data)
}).catch((err) =>{
    console.log(err)
})
