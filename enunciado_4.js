// Enunciado 4

const eliminarPublicacion = async (idPublicacion) => {
    // Consultar comentarios
    let comments = await fetch('http://localhost:3000/comments')
    let dataComments = await comments.json()

    //Revisar si la publicacion tiene comentarios
    let tieneComentarios = false;
    for (let j = 0; j < dataComments.length; j++) {
        if (dataComments[j].postId == idPublicacion) {
            tieneComentarios = true;
            break;
        }
    }

    if (tieneComentarios) {
        console.log("No se puede eliminar la publicacion porque tiene comentarios");
    } else {
        //Se elimina la publicacion consultada con el metodo DELETE
        await fetch(`http://localhost:3000/posts/${idPublicacion}`, {
            method: 'DELETE'
        });
        console.log(`Publicacion ${idPublicacion} eliminada correctamente`);
    }
}

//Se envia el argumento con id numero 5
eliminarPublicacion(3);