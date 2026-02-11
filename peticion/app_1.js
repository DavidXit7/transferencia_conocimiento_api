// const UsuariosActivosConPublicaciones = async () => {
//     // 1️ Obtener usuarios
//     const resUsers = await fetch("http://localhost:3000/users");
//     const users = await resUsers.json();

//     // 2️ Obtener publicaciones
//     const resPosts = await fetch("http://localhost:3000/posts");
//     const posts = await resPosts.json();

//     // 3️ Filtrar usuarios activos
//     const usuariosActivos = users.filter(user => user.active === true);

//     // 4️ Mostrar resultado
//     console.log("Usuarios activos y cantidad de publicaciones:");

//     usuariosActivos.forEach(user => {
//         const cantidadPublicaciones = posts.filter(
//             post => post.userId === user.id
//         ).length;

//         console.log(
//             `Usuario: ${user.name} - Publicaciones: ${cantidadPublicaciones}`
//         );
//     });
// };

// // Ejecución
// UsuariosActivosConPublicaciones();

import { usuarios, postUsuarios } from './modules/enunciado_1.js';

usuarios()
.then((usuario) => 
{
    // Se inicializa una constante que se le asigna con un arreglo vacío para guardar el resultado final
    const resultados = [];
    // recorre el arreglo de los usuarios
    usuario.map(({id, name}) => 
    {
        // Llama a la función postUsuarios la cual obtiene los post de cada usuario por medio del id
        postUsuarios(id)
        .then((post) => {
            // En el arreglo resultados se guarda el nombre del usuario y la cantidad de posts que tiene
            resultados.push({
                nombre : name,
                CantidadPosts: post.length 
            });
            // Condición que compara si la cantidad de resultados es igual a la cantidad total de usuarios
            if(resultados.length === usuario.length)
            {
                // Imprime el nombre del usuario y la cantidad de posts
                console.log(resultados);
            }
        })
    })
})