// const PublicacionesConYSinComentarios = async () => {
//     // 1️ Obtener publicaciones
//     const resPosts = await fetch("http://localhost:3000/posts");
//     const posts = await resPosts.json();

//     // 2️ Obtener comentarios
//     const resComments = await fetch("http://localhost:3000/comments");
//     const comments = await resComments.json();

//     // 3️ Mostrar resultado
//     console.log("Listado de publicaciones y estado de comentarios:");

//     posts.forEach(post => {
//         const comentariosDelPost = comments.filter(
//             comment => comment.postId === post.id
//         );

//         const cantidadComentarios = comentariosDelPost.length;
//         const estado = cantidadComentarios > 0 
//             ? "Con comentarios" 
//             : "Sin comentarios";

//         console.log(
//             `Título: ${post.title} | Comentarios: ${cantidadComentarios} | Estado: ${estado}`
//         );
//     });
// };

// // Ejecución
// PublicacionesConYSinComentarios();

import { getPostById, getCommentByPost } from "./modules/enunciado_2.js";

let resultado = await getPostById();
let recorreArreglo = await resultado.map(async (post) => {
    let comentarios = await getCommentByPost(post.id);
    let tiene = (comentarios.length > 0) ? "Con comentarios" : "Sin comentarios";
    return {
        "Titulo": post.title,
        "Cantidad Comentarios": comentarios.length,
        "Tiene Comentarios" : tiene
    }
});

let data = await Promise.all(recorreArreglo);
console.log(data);