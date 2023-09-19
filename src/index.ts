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
app.get('/users', (req: Request, res: Response):void => {
    try {
        const result: TUsers[] = users;
        res.status(200).send(result)
        
    } catch (error) {
        res.status(400).send('Ocorreu um erro ao buscar os accounts.');
    }
})

// todos os produtos
app.get('/products', (req: Request, res: Response):void => {
    try {
        const result: TProducts[] = products;
        res.status(200).send(result);
      } catch (error) {
        res.status(400).send('Ocorreu um erro ao buscar os produtos.');
      }
});

// todos os produtos por id com validacao

app.get("/products/:id", (req: Request, res: Response):void => {
    try { 
        
        const id: string = req.params.id

        const result:TProducts | undefined = products.find((product) => product.id === id) 
        if(!result) {
            res.statusCode = 404
            throw new Error("Produto nao encontrada. Verifique a 'id'.")
        }
    
        res.status(200).send(result)

    } catch(error){
        if(error instanceof Error){
            res.send(error.message)
        }
    }    
})



// criar usuario
app.post('/users', (req: Request, res: Response):void => {
    try {

    const{id,name,email,password,createdAt}:TUsers = req.body

    const NovoUsuario:TUsers = {
        id,
        name,
        email,
        password,
        createdAt
    }

    if(!id || !name || !email || !password || !createdAt){
        res.statusCode = 400
        throw new Error('Todos os campos são obrigatórios.')
    }

    users.push(NovoUsuario)

    res.status(201).send('Usuario registrado com sucesso')
        
    } catch (error) {
        if(error instanceof Error){
            res.send(error.message)
        }
    }
})


// criar produto

app.post('/products', (req: Request, res: Response):void => {
    try {
        const{id,name,price,description,imageUrl}:TProducts = req.body

    const NovoProduto:TProducts = {
        id,
        name,
        price,
        description,
        imageUrl
    }

    if(!id || !name || !price || !description || !imageUrl){
        res.statusCode = 400
        throw new Error('Todos os campos são obrigatórios.')

    }

    products.push(NovoProduto)

    res.status(201).send('Produto registrado com sucesso')
        
    } catch (error) {
        if(error instanceof Error){
            res.send(error.message)  
        }
    }
})

// DELETE USER BY ID

app.delete('/users/:id', (req: Request, res: Response):void => {

    try {
           // identificação do que será deletado via path params
const idToDelete = req.params.id

if(idToDelete[0]!== 'u') {
    req.statusCode = 400
    throw new Error ("'id' invalido. Deve iniciar com a letra 'a'.")
}


// encontrar o index do item que será removido
const userIndex:number = users.findIndex((user) => user.id === idToDelete)

// caso o item exista, o index será maior ou igual a 0
if (userIndex >= 0) {
        // remoção do item através de sua posição
users.splice(userIndex, 1)
}

res.status(200).send("User apagado com sucesso")
        
    } catch (error) {
        if(error instanceof Error){

            res.send(error.message)
        }   
    }
})


// DELETE PRODUCT BY ID

app.delete('/products/:id', (req: Request, res: Response):void => {
    try {
            // identificação do que será deletado via path params
const idToDelete = req.params.id

if(idToDelete[0]!== 'p'){
    req.statusCode = 400
    throw new Error ("'id' invalido. Deve iniciar com a letra 'p'.")

}

// encontrar o index do item que será removido
const productIndex:number = products.findIndex((product) => product.id === idToDelete)

// caso o item exista, o index será maior ou igual a 0
if (productIndex >= 0) {
        // remoção do item através de sua posição
products.splice(productIndex, 1)
}

res.status(200).send("Produto apagado com sucesso")
        
    } catch (error) {
        if(error instanceof Error){

            res.send(error.message)
        }
        
    }

})


//EDIT PRODUCT BY ID

app.put('/products/:id', (req: Request, res: Response):void => {
    try {
    const id:string = req.params.id
    const newId = req.body.id as string  | undefined     
    const newName = req.body.name as string | undefined     
    const newPrice = req.body.price as number | undefined      
    const newDescription = req.body.description as string | undefined 
    const newImageUrl = req.body.imageUrl as string | undefined 

    if(newId&&!newId.startsWith("p")){
        res.statusCode = 400
        throw new Error("'ID' invalido. Deve iniciar com a letra 'p'.")
    }

    if(newName && typeof newName !== 'string'){
        res.statusCode = 400
        throw new Error('NewName deve ser do tipo string.')
    }

    if(newPrice && typeof newPrice !== 'number'){
        res.statusCode = 400
        throw new Error('Newprice deve ser do tipo number.')
    }

    if(newDescription&&newDescription.length < 2){
        res.statusCode = 400
        throw new Error('Newdescription deve possuir no mínimo 2 caractere.')
    }

    if(newImageUrl&&!newImageUrl.startsWith("h")){
        res.statusCode = 400
        throw new Error("'ImageUrl' invalido. Deve iniciar com a letra 'h'.")
    }


const product:TProducts | undefined = products.find((product) => product.id === id)

if (product) {
    // se o novo dado não foi definido, então mantém o que já existe
    product.id = newId || product.id
    product.name = newName || product.name
    product.price = newPrice || product.price
    product.description = newDescription || product.description
    product.imageUrl = newImageUrl || product.imageUrl          
}

res.status(200).send("Produto atulizado com sucesso")      
    } catch (error) {

        if(error instanceof Error){
            res.send(error.message)
        }
    
    }
})

//EDIT USER BY ID

app.put('/users/:id', (req: Request, res: Response):void => {
    try {
    const id:string = req.params.id
    const newId = req.body.id as string  | undefined     
    const newName = req.body.name as string | undefined     
    const newEmail = req.body.email as string | undefined      
    const newPassword = req.body.password as string | undefined 
    const newCreatedAt = req.body.createdAt as string | undefined 

    if(newId&&!newId.startsWith("u")){
        res.statusCode = 400
        throw new Error("'ID' invalido. Deve iniciar com a letra 'p'.")
    }

    if(newName && typeof newName !== 'string'){
        res.statusCode = 400
        throw new Error('NewName deve ser do tipo string.')
    }

    if(newEmail && typeof newEmail !== 'string'){
        res.statusCode = 400
        throw new Error('NewEmail deve ser do tipo string.')
    }

    if(newPassword&&newPassword.length < 4){
        res.statusCode = 400
        throw new Error('NewPassword deve possuir no mínimo 4 caracteres.')
    }

    if(newCreatedAt && typeof newCreatedAt !== 'string'){
        res.statusCode = 400
        throw new Error("'NewCreatedAt deve ser do tipo string..")
    }


const user:TUsers | undefined = users.find((user) => user.id === id)

if (user) {
    // se o novo dado não foi definido, então mantém o que já existe
    user.id = newId || user.id
    user.name = newName || user.name
    user.email = newEmail || user.email
    user.password = newPassword || user.password
    user.createdAt = newCreatedAt || user.createdAt          
}

res.status(200).send("Usuario atulizado com sucesso")      
    } catch (error) {

        if(error instanceof Error){
            res.send(error.message)
        }
    
    }
})

// todos os users por id com validacao

app.get("/users/:id", (req: Request, res: Response):void => {
    try { 
        
        const id: string = req.params.id

        const result:TUsers | undefined = users.find((user) => user.id === id) 
        if(!result) {
            res.statusCode = 404
            throw new Error("Usuario nao encontrada. Verifique a 'id'.")
        }
    
        res.status(200).send(result)

    } catch(error){
        if(error instanceof Error){
            res.send(error.message)

        }

    }
    
})