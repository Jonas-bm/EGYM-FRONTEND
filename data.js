module.exports = function () {
    var data = {
        alumnos: [
            {
                id:1,
                nombre: "Juan Andrés",
                apellidoPaterno: "Borjas",
                apellidoMaterno:"Machuca",
                dni:"72381574",
                direccion: "Av. Los Cascabeles Mz. a Lt. 5 - Las Brisas - Barranco",
                celular:987456123,
                fechaNacimiento:2000-02-10,
                peso:65,
                talla:175
            },
            {
                id:2,
                nombre: "David",
                apellidoPaterno: "Villa",
                apellidoMaterno:"Carranza",
                dni:"72381579",
                direccion: "Av. Los Cocharcas Mz. s Lt. 7 - Los Condoritos - Miraflores",
                celular:987456123,
                fechaNacimiento:"1999-05-11",
                peso:70,
                talla:180
            },
            {
                id:3,
                nombre: "Piero Gonzalo",
                apellidoPaterno: "Corrento",
                apellidoMaterno:"Vernaola",
                dni:"65381556",
                direccion: "Av. Las Totoras Mz. d Lt. 10 - Los Cascabeles - Lurín",
                celular:958445712,
                fechaNacimiento:"1995-08-16",
                peso:75,
                talla:185
            },
            {
                id:4,
                nombre: "Maria Angélica",
                apellidoPaterno: "Elitsu",
                apellidoMaterno:"Gomez",
                dni:"95457815",
                direccion: "Av. Las Camelias Mz. d Lt. 6 - Eucaliptos - Santa Anita",
                celular:956847456,
                fechaNacimiento:"2002-12-12",
                peso:75,
                talla:185
            }
        ],
        entrenador: [
            {
                id:1,
                nombre: "Luís",
                apellidoPaterno: "Cordova",
                apellidoMaterno: "Lazo",
                dni: "72649255",
                telefono: "981546325",
                correo: "Cordova08@gmail.com",
                habilidades: "aeróbic, entrenamiento con pesas",
                experiencia: "8 años",
                educacion: "Certificado en EUROINNOVA",
                estado: "Activo",

            },
            {
                id:2,
                nombre: "Juan Carlos",
                apellidoPaterno: "Garcia",
                apellidoMaterno: "Chavez",
                dni: "89652417",
                telefono: "958421367",
                correo: "JuanGarcia@gmail.com",
                habilidades: "Zumba, Bailes, Ciclismo",
                experiencia: "5 años",
                educacion: "Edutin Academy",
                estado: "Activo",

            },
            {
                id:3,
                nombre: "Jon",
                apellidoPaterno: "Cueva",
                apellidoMaterno: "Rios",
                dni: "74265135",
                telefono: "911748563",
                correo: "Cueva12@gmail.com",
                habilidades: "Correr, levantamiento de pesas",
                experiencia: "6 años",
                educacion: "D' Fitness",
                estado: "Activo",

            },

        ],
        Nutricionista:[
          {
            id:1,
            nombreNutricionista:"Luis Miguel",
            apellidosNutricionista:"Matinez Guzman",
            dni:"74525296",
            telefono:"996845125",
            sexo:"Masculino",
            Descripcion:"Veterano",
            Estado:"Disponible",
          },
          {
            id:2,
            nombreNutricionista:"Miguelito Andres",
            apellidosNutricionista:"Sandoval Rosse",
            dni:"75869585",
            telefono:"996354142",
            sexo:"Masculino",
            Descripcion:"Veterano",
            Estado:"Disponible",
          },
          {
            id:3,
            nombreNutricionista:"Josefina Rosales",
            apellidosNutricionista:"Ayala Rosse",
            dni:"71586932",
            telefono:"987654122",
            sexo:"Femenino",
            Descripcion:"Novata",
            Estado:"Ocupado",
          },
          {
            id:4,
            nombreNutricionista:"Sandra Andrea",
            apellidosNutricionista:"Mosquera Rosse",
            dni:"75147485",
            telefono:"985632147",
            sexo:"Femenino",
            Descripcion:"Novata",
            Estado:"Disponible",
          }
        ],
    }
    return data
}
