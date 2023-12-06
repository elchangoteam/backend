window.addEventListener('DOMContentLoaded', () => {
    cargarResidentes()

})


async function cargarResidentes() {

    const response = await fetch('http://localhost:3000/residentes')
    const data = await response.json()
    console.log(data)

}