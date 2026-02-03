// Enunciado 2

const publicacionesConComentarios = async () => {
    // Traer publicaciones
    let posts = await fetch('http://localhost:3000/posts')
    let dataPosts = await posts.json()

    // Traer comentarios
    let comments = await fetch('http://localhost:3000/comments')
    let dataComments = await comments.json()

    let resultados = [];

    // Recorrer cada publicacion
    for (let i = 0; i < dataPosts.length; i++) {
        let post = dataPosts[i];
        let cantidadComentarios = 0;

        // Contar comentarios asociados a este post
        for (let j = 0; j < dataComments.length; j++) {
            let comentario = dataComments[j];

            if (comentario.postId == post.id) {
                cantidadComentarios++;
            }
        }

        // Decidir el estado con if normal
        let estado;
        if (cantidadComentarios > 0) {
            estado = "Con comentarios";
        } else {
            estado = "Sin comentarios";
        }

        // Guardar resultado
        resultados.push({
            titulo: post.title,
            numeroComentarios: cantidadComentarios,
            estado: estado
        });
    }

    console.log(resultados);
}

publicacionesConComentarios();