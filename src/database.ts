import { TUsers } from "./types"
import { TProducts } from "./types"

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

export const users: TUsers[] = [
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
  
  export const products: TProducts[] = [
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

export function createUser(id:string , name:string, email:string, password:string): string {
    const createdAt:string = new Date().toISOString();
    const newUser: TUsers = { id, name, email, password, createdAt}
    users.push(newUser);

    return 'Cadastro realizado com sucesso'
}

export function getAllUsers():TUsers[]{
    return users
}

const listaDeUsuarios: TUsers[] = getAllUsers()


//2

export function createProduct(id: string, name:string, price:number, description: string, imageUrl: string):string {
    const newProduct: TProducts = {id, name, price, description, imageUrl} 
    return "Produto criado com sucesso"
}

export function getAllProducts():TProducts[] {
    return products
}

//3

export function searchProductsByName(name:string):TProducts[] {
    name = name.toLowerCase()
    const matchingProducts = products.filter(product => product.name.toLowerCase().includes(name))
    return matchingProducts
}