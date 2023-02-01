import express from 'express'
import {getProductsById, getProducts} from '../desafio-3.js'

const app = express()
const PORT = 4000

app.get('/', (req,res) => {
    res.send("Hola soy la pagina de inicio")
})

app.get('/productos/:id', async (req,res) => {    

    console.log(getProductsById(parseInt(req.params.id)))
    res.send(`Se esta mostrando por consola el producto: ${req.params.id} `)
   
})

app.get('/productos', async (req,res) => {
    let {limite} = req.query 
    if(limite){
        console.log(getProducts(limite))
        res.send(`Se esta mostrando por consola los primeros: ${limite} productos `)
    }
    else{
        console.log(getProducts())
        res.send(`Se esta mostrando por consola todos los productos`)
    }   

})
app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`)
}) 