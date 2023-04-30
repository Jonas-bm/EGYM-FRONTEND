module.exports = function () {
    var data = {
        alumnos: [
            {
                id:1,
                nombre: "Juan Andrés",
                apellidoPaterno: "Borjas",
                apellidoMaterno: "Chavez",
                dni:"72381574",
                direccion: "Av. Los Cascabeles Mz. a Lt. 5 - Las Brisas - Barranco",
                celular:987456123,
                fechaNacimiento:"2000-02-10",
                peso:65,
                talla:175
            },
            {
                id:2,
                nombre: "David Marcelo",
                apellidoPaterno: "Sárate",
                apellidoMaterno: "Barrantes",
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
                apellidoPaterno: "Gil",
                apellidoMaterno: "Briseño",
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
                apellidoPaterno: "Soto",
                apellidoMaterno: "Mayor",
                dni:"95457815",
                direccion: "Av. Las Camelias Mz. d Lt. 6 - Eucaliptos - Santa Anita",
                celular:956847456,
                fechaNacimiento:"2002-12-12",
                peso:75,
                talla:185
            }
        ],
        entrenadores: [
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
              nombre: "Carlos",
              apellidoPaterno: "Cueva",
              apellidoMaterno: "Flores",
              dni: "78532648",
              telefono: "932864197",
              correo: "CuevaFlores@gmail.com",
              habilidades: "Entrenamiento con pesas",
              experiencia: "5 años",
              educacion: "Certificado en EUROINNOVA",
              estado: "Activo",
            }

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
          },
        ],
        producto: [
          {
            id:1,
            precio: 164,
            nombre: "Pelota con Rebote 3 Kg",
            descripcion:"El balón medicinal con rebote Rudem tiene la capacidad de dar bote contra las superficies, lo que lo hace útil para que el cuerpo amortiguar esta fuerza.",
          },
          {
            id:2,
            precio: 59,
            nombre: "Liga de Resistencia",
            descripcion:"Unisex permite tonificar y esculpir cada grupo muscular. Ideal para ejercicios de rehabilitación.",
          },
          {
            id:3,
            precio: 79,
            nombre: "Rueda Abdominal Bracked Whell",
            descripcion:"Incluye dos Discos compactos. con 1.5 cm entre cada disco. Barra Ergonómica con manijas de agarre.",
          },
          {
            id:4,
            precio: 1069,
            nombre: "Barra Elite 15Kg - 8 Rodajes",
            descripcion:"LA ELITE BARBELL representa el más alto nivel de ingeniería de precisión con una amplia gama de nuevas características.",
      }
    ],
    calificaciones:[
      {
        id:1,
        name: "Rodrigo Narique",
        puntuacion: 9,
        comentario:"estuvo muy bien",
      },
      {
        id:2,
        name: "Pedro Gonzales Sanchez",
        puntuacion: 8,
        comentario:"estuvo bien",
      },

      {
        id:3,
        name: "Juan Miranda Javor",
        puntuacion: 6,
        comentario:"Estuvo algo bien",
	}
    ],
    }
    return data
}
