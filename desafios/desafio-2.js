import {promises as fs} from 'fs'

let products = [];




class ProductManager {
    constructor(title, description, price, thumbnail, stock) {
        this.code = ProductManager.codeIncrement()
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.stock = stock        
    }

    static codeIncrement() {
        if (this.idIncrement) { //Undefined lo creo, si es verdadera +1
            this.idIncrement++
        } else {
            this.idIncrement = 1
        }
        return this.idIncrement
    }

}

const addProduct = async (title, description, price, thumbnail, stock) => {
    if(title, description, price, thumbnail, stock){       
        products.push(new ProductManager(title, description, price, thumbnail, stock))  
        await fs.writeFile('./db.txt' , JSON.stringify(products))
    }
    else{
        console.log("ERROR: Todos los datos para poder cargar el producto son obligatorios")  
    }
    
}

const getProducts = async () => {
    let resultado = await fs.readFile('./db.txt', 'utf-8')
    products = JSON.parse(resultado)
   
    if (products.length === 0) {
        console.log("AVISO: No hay productos para mostrar");
    }
    else {
        console.log(products);
    }
}

const getProductsById = async (id) => {
    let resultado = await fs.readFile('./db.txt', 'utf-8')
    products = JSON.parse(resultado)

    let findProduct = products.find(products => products.code === id)

    if (findProduct) {
        console.log(findProduct)
    }
    else {
        console.log("AVISO: No se encontro el producto buscado")
    }


}

const updateProduct = async (id, newPrice) =>{
    let resultado = await fs.readFile('./db.txt', 'utf-8')
    products = JSON.parse(resultado)
    
    let findProduct = products.find(products => products.code === id)
    

    if (findProduct) {
        findProduct.price = newPrice        
        await fs.writeFile('./db.txt' , JSON.stringify(products))
        
    }
    else {
        console.log("AVISO: No se encontro el producto para actualizar el precio")
    }


}

const deleteProduct = async (id) => {
    let resultado = await fs.readFile('./db.txt', 'utf-8')
    products = JSON.parse(resultado)

    if(products.some(products => products.code  === id)){
    products = products.filter(products => products.code !== id)

    await fs.writeFile('./db.txt' , JSON.stringify(products))
    }
    else {

        console.log("AVISO: No existe el producto a eliminar")
    }

}

addProduct("Razer Keyboard", "Gamming Keyboard", 25000, "./img/razerkeyboard.png", 1);
addProduct("Hyperx Keyboard", "Gamming Keyboard", 30000, "./img/hyperxkeyboard.png", 4);
addProduct("Monitor Asus", "Gamming Monitor", 98000, "./img/monitor.png", 7);
addProduct("Razer Mouse", "Gamming Mouse", "./img/razermouse.png");
getProducts();
getProductsById(2);
getProductsById(7);
updateProduct(1,30000);
updateProduct(5,90000);
deleteProduct(2);



