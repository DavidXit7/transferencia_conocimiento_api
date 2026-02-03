// Enunciado 1

const peticionUsuariosActivosConPosts = async () => {
    // Traer usuarios
    let users = await fetch('http://localhost:3000/users')
    let dataUsers = await users.json()
    
    // Traer publicaciones
    let posts = await fetch('http://localhost:3000/posts')
    let dataPosts = await posts.json()

    let resultados = [];

    // Recorrer cada usuario
    for (let i = 0; i < dataUsers.length; i++) {
        let usuario = dataUsers[i];

        // Solo si el usuario esta activo
        if (usuario.active) {
            let cantidadPublicaciones = 0;

            // Contar publicaciones de ese usuario
            for (let j = 0; j < dataPosts.length; j++) {
                let publicacion = dataPosts[j];

                if (publicacion.userId == usuario.id) {
                    cantidadPublicaciones++;
                }
            }

            // Guardar resultado
            resultados.push({
                nombre: usuario.name,
                cantidadPublicaciones: cantidadPublicaciones
            });
        }
    }

    // Mostrar resultados
    console.log(resultados);
}

peticionUsuariosActivosConPosts();