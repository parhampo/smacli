const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      Product = require('../models/product');

class ProductsRepository {

    // get all the products
    getProducts(callback) {
        console.log('*** ProductsRepository.getProducts');
        Product.count((err, producsCount) => {
            let count = producsCount;
            console.log(`Products count: ${count}`);

            Product.find({}, (err, products) => {// find all products in the model with no query and return a call
                //back with either err or resultin  products parameter
                if (err) { 
                    console.log(`*** ProductsRepository.getProducts error: ${err}`); 
                    return callback(err); 
                }
                callback(null, {
                    count: count,
                    products: products
                });
            });

        });
    }

    getPagedProducts(skip, top, callback) {
        console.log('*** ProductsRepository.getPagedProducts');
        Product.count((err, producsCount) => {
            let count = producsCount;
            console.log(`Skip: ${skip} Top: ${top}`);
            console.log(`products count: ${count}`);

            Product.find({})
                    .sort({lastName: 1})
                    .skip(skip)
                    .limit(top)
                    .exec((err, products) => {
                        if (err) { 
                            console.log(`*** productsRepository.getPagedproducts error: ${err}`); 
                            return callback(err); 
                        }
                        callback(null, {
                            count: count,
                            products: products
                        });
                    });

        });
    }

    // get the product summary
    getProductsSummary(skip, top, callback) {
        console.log('*** ProductsRepository.getProductsSummary');
        Product.count((err, producsCount) => {
            let count = producsCount;
            console.log(`products count: ${count}`);

            Product.find({}, { 'id': 0, 'productName': 1, 'auctype': 1, 'city': 1, 'state': 1, 'releaseDat': 1, ' Highlights': 1 })
                    .skip(skip)
                    .limit(top)
                    .exec((err, productsSummary) => {
                        callback(null, {
                            count: count,
                            productsSummary: productsSummary
                        });
                    });

        });
    }

    // get a  product
    getProduct(id, callback) {
        console.log('*** productsRepository.getproduct');
        Product.findById(id, (err, product) => {
            if (err) { 
                console.log(`*** productsRepository.getproduct error: ${err}`); 
                return callback(err); 
            }
            callback(null, product);
        });
    }

    // insert a  product
    insertProduct(body, callback) {
        console.log('*** productsRepository.insertproduct');
        let product = new Product();
        console.log(body);
        product.id          = body.id;
        product.productName = body.productName;
        product.auctype = body.auctype;
        product.description = body.description;
        product.releaseDate = body.releaseDate;
        product.Highlights = body.Highlights;
        product.website = body.website;
        product.coverimg = body.coverimg;
        product.imageUrl = body.imageUrl;
        product.email = body.email;
        product.term = body.term;
        product.time = body.time;
        product.shipping = body.shipping;
        product.tel = body.tel;
        product.note = body.note;
        product.address = body.address;
        product.city = body.city;
        product.zip = body.zip;
        product.state = body.state;

        product.save((err, product) => {
            if (err) { 
                console.log(`*** productsRepository insertproduct error: ${err}`); 
                return callback(err, null); 
            }

            callback(null, product);
        });
    }

    updateProduct(id, body, callback) {
        console.log('*** productsRepository.editproduct');
        Product.findById(id, (err, product)  => {
            if (err) { 
                console.log(`*** productsRepository.editproduct error: ${err}`); 
                return callback(err); 
            }
        product.productName = body.productName || product.productName;
        product.auctype = body.auctype || product.auctype;
        product.description = body.description || product.description;
        product.realeaseDate = body.realeaseDate || product.realeaseDate;
        product.Highlights = body.Highlights || product.Highlights;
        product.website = body.website || product.website;
        product.coverimg = body.coverimg || product.coverimg;
        product.imgUrl = body.imgUrl || product.imgUrl;
        product.email = body.email || product.email;
        product.term = body.term || product.term;
        product.time = body.time || product.time;
        product.shipping = body.shipping || product.shipping;
        product.tel = body.tel || product.tel;
        product.note = body.note || product.note;
        product.address = body.address || product.address;
        product.city = body.city || product.city;
        product.zip = body.zip || product.zip;
        product.state = body.state || product.state;
        


            product.save((err, product) => {
                if (err) { 
                    console.log(`*** productsRepository.updateproduct error: ${err}`); 
                    return callback(err, null); 
                }

                callback(null, product);
            });

        });
    }

    // delete a product
    deleteProduct(id, callback) {
        console.log('*** productsRepository.deleteproduct');
        Product.remove({ 'id': id }, (err, product) => {
            if (err) { 
                console.log(`*** productsRepository.deleteproduct error: ${err}`); 
                return callback(err, null); 
            }
            callback(null, product);
        });
    }

}

module.exports = new ProductsRepository();