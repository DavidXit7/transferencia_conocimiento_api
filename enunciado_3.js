// Enunciado 3

const consultaPublicacion = async (idPublicacion) => {
    // Traer publicaciones
    let posts = await fetch('http://localhost:3000/posts')
    let dataPosts = await posts.json()

    // Buscar la publicacion especifica
    let publicacionEncontrada = null;
    for (let i = 0; i < dataPosts.length; i++) {
        if (Number(dataPosts[i].id) === Number(idPublicacion)) {
            publicacionEncontrada = dataPosts[i];
            break; // ya la encontre, salgo del bucle
        }
    }

    if (!publicacionEncontrada) {
        console.log("No existe la publicación con ese ID");
        return;
    }

    // Traer comentarios
    let comments = await fetch('http://localhost:3000/comments')
    let dataComments = await comments.json()

    // Contar comentarios asociados
    let cantidadComentarios = 0;
    for (let j = 0; j < dataComments.length; j++) {
        if (Number(dataComments[j].postId) === Number(publicacionEncontrada.id)) {
            cantidadComentarios++;
        }
    }

    // Mostrar informacion detallada
    console.log({
        titulo: publicacionEncontrada.title,
        contenido: publicacionEncontrada.body,
        numeroComentarios: cantidadComentarios
    });
}

//Consulto el id de la publicacion numero 3
consultaPublicacion(3);
