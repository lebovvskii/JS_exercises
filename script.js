const products = [
    {
        id: 1,
        name: "Product 1",
        reviews: [
            { rating: 4 },
            { rating: 5 },
            { rating: 3 },
            { rating: 5 },
            { rating: 4 },
        ],
    },
    {
        id: 2,
        name: "Product 2",
        reviews: [
            { rating: 2 },
            { rating: 3 },
            { rating: 4 },
            { rating: 1 },
            { rating: 2 },
        ],
    },
    {
        id: 3,
        name: "Product 3",
        reviews: [
            { rating: 5 },
            { rating: 5 },
            { rating: 4 },
            { rating: 5 },
            { rating: 4 },
        ],
    },
];

const avgRating = (products = []) => {
    console.log('avgRating works')
    let result = []
    let obj;
    for (let i = 0; i < products.length; i+=1) {
        obj = new Object();
        obj.id = products[i].id;
        obj.rating = avgReviews(products[i]);
        result[i] = obj;
        console.log(result[i]);
    }
    console.log(result)
    return result
}

const avgReviews = (product) => {
    let sum = 0;
    for (let i = 0; i < product.reviews.length; i += 1) {
        sum += product.reviews[i].rating
    }
    let avg = (sum / product.reviews.length);
    return avg;
}

avgRating(products);