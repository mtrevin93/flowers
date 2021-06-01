const flowers = [
    {
        id: 1,
        color: "white",
        species: "rose",
        price: 0.90
    },
    {
        id: 2,
        color: "red",
        species: "tulip",
        price: 1.10
    }
]

const addFlower = (flowerObject) => {

const lastIndexNumber = flowers.length -1
const lastIndexItem = flowers[lastIndexNumber]
const lastID = lastIndexItem.id
const newID = lastID + 1
const newFlower = (flowerObject)
flowerObject.id = newID
flowers.push(newFlower)
}

const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code


for (flower of flowers) {
    if (flower.price >= 1.00)
    expensiveFlowers.push(flower)
}



    return expensiveFlowers  // Do not change this code
}




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

