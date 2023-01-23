
const products = [];

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

function addProduct(title, description, price, thumbnail, stock) {
    if(title, description, price, thumbnail, stock){
        products.push(new ProductManager(title, description, price, thumbnail, stock))
    }
    else{
        console.log("ERROR: Todos los datos para poder cargar el producto son obligatorios")  
    }
    
}

function getProducts() {
    if (products.length === 0) {
        console.log("AVISO: No hay productos para mostrar");
    }
    else {
        console.log(products);
    }
}

function getProductsById(id) {

    let findProduct = products.find(products => products.code === id)

    if (findProduct) {
        console.log(findProduct)
    }
    else {
        console.log("AVISO: No se encontro el producto buscado")
    }


}


getProducts();
addProduct("Razer Keyboard", "Gamming Keyboard", 25000, "./img/razerkeyboard.png", 1);
addProduct("Hyperx Keyboard", "Gamming Keyboard", 30000, "./img/hyperxkeyboard.png", 4);
addProduct("Monitor Asus", "Gamming Monitor", 88000, "./img/monitor.png", 7);
addProduct("Razer Mouse", "Gamming Mouse", "./img/razermouse.png");
getProducts();
getProductsById(2);
getProductsById(7);


