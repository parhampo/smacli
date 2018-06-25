const productsRepo = require('../../../lib/productsRepository'),
      util = require('util');

class ProductsController {

    constructor(router) {
       router.get('/', this.getProducts.bind(this));// any GET request on this route, 
                                                    //usually by Angular Service which produces HTTP.GET()
                                                    // will call for a function on repository side
       router.get('/page/:skip/:top', this.getProductsPage.bind(this));
       router.get('/:id', this.getProduct.bind(this));
       router.post('/', this.insertProduct.bind(this));// any POST request on this route, usually by Angular DataService POST
       router.put('/:id', this.updateProduct.bind(this));
       router.delete('/:id', this.deleteProduct.bind(this));
    }

    getProducts(req, res) { //getproducts function accepts request and returns response here in API
                            // and calls for getproducts function from repository which returns
                            // data reponse or error
        console.log('*** getproducts');
        productsRepo.getProducts((err, data) => {
            if (err) {
                console.log('*** getProducts error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getProducts ok');
                res.json(data.products); // Express/node creates a reponse as soon as 
                //recieves the products and turns it to json object in format of data.product for Angular Services
                // or repoitory returns data, we turn it to json obj and transfer it buy res object from getproduct
            }
        });
    }

    getProductsPage(req, res) {
        console.log('*** getProductsPage');
        const topVal = req.params.top,
              skipVal = req.params.skip,
              top = (isNaN(topVal)) ? 10 : +topVal,
              skip = (isNaN(skipVal)) ? 0 : +skipVal;

        productsRepo.getPagedProducts(skip, top, (err, data) => {
            res.setHeader('X-InlineCount', data.count);
            if (err) {
                console.log('*** getProductsPage error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getProductsPage ok');
                res.json(data.products);
            }
        });
    }

    getProduct(req, res) {
        console.log('*** getProduct');
        const id = req.params.id;
        console.log(id);

        productsRepo.getProduct(id, (err, product) => {
            if (err) {
                console.log('*** getProduct error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getProduct ok');
                res.json(product);
            }
        });
    }

    insertProduct(req, res) {
        console.log('*** insertProduct');
        productsRepo.insertProduct(req.body, (err, product) => {
                    if (err) {
                        console.log('*** ProductsRepo.insertProduct error: ' + util.inspect(err));
                        res.json({status: false, error: 'Insert failed', product: null});
                    } else {
                        console.log('*** insertProduct ok');
                        res.json({ status: true, error: null, product: product });
                    }
                });
            };
        
    updateProduct(req, res) {
        console.log('*** updateProduct');
        console.log('*** req.body');
        console.log(req.body);

        if (!req.body) {
            throw new Error('Product required');
        }
        productsRepo.updateProduct(req.params.id, req.body, (err, product) => {
                    if (err) {
                        console.log('*** updateProduct error: ' + util.inspect(err));
                        res.json({ status: false, error: 'Update failed', product: null });
                    } else {
                        console.log('*** updateProduct ok');
                        res.json({ status: true, error: null, product: product });
                    }
                });
            }
        
    deleteProduct(req, res) {
        console.log('*** deleteProduct');

        productsRepo.deleteProduct(req.params.id, (err) => {
            if (err) {
                console.log('*** deleteProduct error: ' + util.inspect(err));
                res.json({ status: false });
            } else {
                console.log('*** deleteProduct ok');
                res.json({ status: true });
            }
        });
    }

}

module.exports = ProductsController;