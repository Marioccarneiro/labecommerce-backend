"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProductsByName = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.products = exports.users = void 0;
// export const userFulano: Tusers = {
//     id: "u001",
//     name: "Fulano",
//     email: "fulano@email.com",
//     password: "fulano123",
//     createdAt: new Date().toISOString(), 
// }
// export let userBeltrana: Tusers = {
//     id: "u002",
//     name: "Beltrana",
//     email: "beltrana@email.com",
//     password: "beltrana00",
//     createdAt: new Date().toISOString(), 
// }
// export let product1: Tproducts = {
//     id: "prod001",
//     name: "Mouse gamer",
//     price: 250,
//     description: "Melhor mouse do mercado!",
//     imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400",
// }
// export let product2: Tproducts = {
//     id: "prod002",
//     name: "Monitor",
//     price: 900,
//     description: "Monitor LED Full HD 24 polegadas",
//     imageUrl: "https://picsum.photos/seed/Monitor/400",
// }
exports.users = [
    {
        id: "u001",
        name: "Fulano",
        email: "fulano@ElementInternals.com",
        password: "fulano123",
        createdAt: new Date().toISOString(),
    },
    {
        id: "u002",
        name: "Beltrana",
        email: "beltrana@ElementInternals.com",
        password: "beltrana00",
        createdAt: new Date().toISOString(),
    },
];
exports.products = [
    {
        id: "prod001",
        name: "Mouse gamer",
        price: 250,
        description: "Melhor mouse do mercado!",
        imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400",
    },
    {
        id: "prod002",
        name: "Monitor",
        price: 900,
        description: "Monitor LED Full HD 24 polegadas",
        imageUrl: "https://picsum.photos/seed/Monitor/400",
    },
];
// 1
function createUser(id, name, email, password) {
    const createdAt = new Date().toISOString();
    const newUser = { id, name, email, password, createdAt };
    exports.users.push(newUser);
    return 'Cadastro realizado com sucesso';
}
exports.createUser = createUser;
function getAllUsers() {
    return exports.users;
}
exports.getAllUsers = getAllUsers;
const listaDeUsuarios = getAllUsers();
//2
function createProduct(id, name, price, description, imageUrl) {
    const newProduct = { id, name, price, description, imageUrl };
    return "Produto criado com sucesso";
}
exports.createProduct = createProduct;
function getAllProducts() {
    return exports.products;
}
exports.getAllProducts = getAllProducts;
//3
function searchProductsByName(name) {
    name = name.toLowerCase();
    const matchingProducts = exports.products.filter(product => product.name.toLowerCase().includes(name));
    return matchingProducts;
}
exports.searchProductsByName = searchProductsByName;
