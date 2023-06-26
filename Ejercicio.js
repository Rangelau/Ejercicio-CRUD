// Clase Data para realizar operaciones CRUD
class Data {
  constructor() {
    this.productos = []; // Inicializamos la colección de productos vacía
  }

  // Obtener todos los productos
  getAll() {
    return this.productos;
  }

  // Obtener un producto por su ID
  getById(id) {
    return this.productos.find(producto => producto.id === id);
  }

  // Agregar un nuevo producto
  add(producto) {
    this.productos.push(producto);
  }

  // Actualizar un producto existente
  update(id, updatedProducto) {
    const index = this.productos.findIndex(producto => producto.id === id);
    if (index !== -1) {
      this.productos[index] = updatedProducto;
    }
  }

  // Eliminar un producto existente
  delete(id) {
    const index = this.productos.findIndex(producto => producto.id === id);
    if (index !== -1) {
      this.productos.splice(index, 1);
    }
  }
}