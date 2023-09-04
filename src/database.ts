import {Tusers} from "./types"
import { Tproducts } from "./types"

export let userFulano: Tusers = {
    id: "u001",
    name: "Fulano",
    email: "fulano@email.com",
    password: "fulano123",
    createdAt: new Date().toISOString(), 
}

export let userBeltrana: Tusers = {
    id: "u002",
    name: "Beltrana",
    email: "beltrana@email.com",
    password: "beltrana00",
    createdAt: new Date().toISOString(), 
}

export let product1: Tproducts = {
    id: "prod001",
    name: "Mouse gamer",
    price: 250,
    descripion: "Melhor mouse do mercado!",
    imgUrl: "https://picsum.photos/seed/Mouse%20gamer/400",
}

export let product2: Tproducts = {
    id: "prod002",
    name: "Monitor",
    price: 900,
    descripion: "Monitor LED Full HD 24 polegadas",
    imgUrl: "https://picsum.photos/seed/Monitor/400",
}