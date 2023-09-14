import express, { Request, Response } from 'express'
import cors from 'cors'
import {  createProduct, searchProductsByName, getAllProducts, products, users, createUser } from "./database";
import { TProducts, TUsers } from './types';

// console.log("Hello world!");
// console.log(userFulano, userBeltrana);
// console.log(product1, product2);
// console.log(createUser("u001","Mario","mario@email.com", "123456"));
// console.log(createProduct("prod003", "SSD gamer", 349.99, "Acelere seu sistema com velocidades incríveis de leitura e gravação.", "https://images.unsplash.com/photo%22))
// console.log(searchProductsByName("Mouse gamer"))
//console.log(searchProductsByName("gamer"))

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

// todos os usuarios
app.get('/users', (req: Request, res: Response) => {
    const result: TUsers[] = users;

    res.status(200).send(result)
})

// todos os produtos

app.get('/products', (req: Request, res: Response) => {
    const nameToFind = req.query.name as string

    if (nameToFind) {
        const allProdutcs: TProducts[] = products.filter(
            (products) => products.name.toLowerCase().includes(nameToFind.toLowerCase())
        );
        res.status(200).send(allProdutcs)

    } else {
        res.status(200).send(products)
    }    
})

// criar usuario
app.post('/users', (req: Request, res: Response) => {

    
    const{id,name,email,password,createdAt}:TUsers = req.body

    const NovoUsuario:TUsers = {
        id,
        name,
        email,
        password,
        createdAt
    }

    users.push(NovoUsuario)

    res.status(201).send('Usuario registrado com sucesso')
})

// criar produto

app.post('/products', (req: Request, res: Response) => {

    
    const{id,name,price,description,imageUrl}:TProducts = req.body

    const NovoProduto:TProducts = {
        id,
        name,
        price,
        description,
        imageUrl
    }

    products.push(NovoProduto)

    res.status(201).send('Produto registrado com sucesso')
})

// DELETE USER BY ID

app.delete('/users/:id', (req: Request, res: Response) => {
    // identificação do que será deletado via path params
const idToDelete = req.params.id

    // encontrar o index do item que será removido
const userIndex = users.findIndex((user) => user.id === idToDelete)

    // caso o item exista, o index será maior ou igual a 0
if (userIndex >= 0) {
            // remoção do item através de sua posição
    users.splice(userIndex, 1)
}

res.status(200).send("User apagado com sucesso")
})


// DELETE PRODUCT BY ID

app.delete('/products/:id', (req: Request, res: Response) => {
    // identificação do que será deletado via path params
const idToDelete = req.params.id

    // encontrar o index do item que será removido
const productIndex = products.findIndex((product) => product.id === idToDelete)

    // caso o item exista, o index será maior ou igual a 0
if (productIndex >= 0) {
            // remoção do item através de sua posição
    products.splice(productIndex, 1)
}

res.status(200).send("Produto apagado com sucesso")
})


// EDIT PRODUCT BY ID

app.put('/products/:id', (req: Request, res: Response) => {

const idToEdit = req.params.id


    const newId = req.body.id as string | undefined
    const newName = req.body.name as string | undefined
    const newPrice = req.body.price as number | undefined
    const newDescription = req.body.description as string | undefined 
    const newImageUrl = req.body.imageUrl as string | undefined 

const product = products.find((product) => product.id === idToEdit)


if (product) {
    // se o novo dado não foi definido, então mantém o que já existe
    product.id = newId || product.id
    product.name = newName || product.name
    product.price = newPrice || product.price
    product.description = newDescription || product.description
    product.imageUrl = newImageUrl || product.imageUrl


}

res.status(200).send("Produto atulizado com sucesso")
})