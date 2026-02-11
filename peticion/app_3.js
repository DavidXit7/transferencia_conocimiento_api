// const BuscarPublicacionPorId = async (idPost) => {
//     // 1️ Obtener todas las publicaciones
//     const resPosts = await fetch("http://localhost:3000/posts");
//     const posts = await resPosts.json();

//     // 2️ Buscar la publicación por ID
//     const publicacion = posts.find(post => post.id === idPost);

//     if (!publicacion) {
//         console.log("La publicación no existe");
//         return;
//     }

//     // 3️ Obtener todos los comentarios
//     const resComments = await fetch("http://localhost:3000/comments");
//     const comments = await resComments.json();

//     // 4️ Filtrar comentarios de la publicación
//     const comentariosPublicacion = comments.filter(
//         comment => comment.postId === idPost
//     );

//     // 5️ Mostrar información
//     console.log("Información de la publicación:");
//     console.log(`Título: ${publicacion.title}`);
//     console.log(`Contenido: ${publicacion.body}`);
//     console.log(`Número de comentarios: ${comentariosPublicacion.length}`);
// };

// // Ejecución
// BuscarPublicacionPorId(8);

import { getPostById, getCommentByPost } from "./modules/enunciado_3.js";

let resultado = await getPostById(2);
let recorreArreglo = await resultado.map(async (post) => {
    let comment = await getCommentByPost(post.id);
    return {
        "Titulo": post.title,
        "Contenido": post.body,
        "Comentarios" : comment.length
    }
})

let data = await Promise.all(recorreArreglo);
console.log(data);