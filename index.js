class Usuario {
    constructor (nombre,apellido,libros,mascotas){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }
    mostrarUsuario(){
        console.log(Usuario);
    }
    getFullName() {
        console.log(`Nombre Completo: ${this.nombre} ${this.apellido}`);
    }
    addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota);
        console.log('Array mascotas: ',this.mascotas);
    }
    countMascotas(){
        console.log('cantidad de mascotas: ',this.mascotas.length);
    }
    addBook(titulo,autor){
        const libroNuevo = {titulo:titulo,autor:autor}
        this.libros.push(libroNuevo)
        console.log(`Se agrega el libro '${libroNuevo.titulo}' del autor ${libroNuevo.autor}`);
    }
    getBooks(){
        const tituloLibros = []
        this.libros.forEach(libro => {
            tituloLibros.push(libro.titulo)
        });
        console.log('Libros: ',tituloLibros);
    }
}

const userPrueba = new Usuario ('Cosme','Fulanito',[{titulo:'Harry Potter',autor:'JK Rowling'},{titulo:'La Iliada',autor:'Homero'}],['milanesa','firulais','pepito']);

// console.log('Usuario: ',userPrueba);
mostrarUsuario()


userPrueba.getFullName();

userPrueba.addMascota('Sirius');

userPrueba.countMascotas();

userPrueba.addBook('El Principito','Antoine de Saint-Exupéry');

userPrueba.getBooks();
