// Module dependencies
const   mongoose = require('mongoose'),
        Product = require('../models/product'),
        dbConfig = require('./configLoader').databaseConfig,
        connectionString = `mongodb://${ dbConfig.dbuser}:${ dbConfig.dbpassword}${ dbConfig.mlab}/${dbConfig.database}`,
        connection = null;

class DBSeeder {
    
    init() {
        mongoose.connection.db.listCollections({name: 'products'})
                .next((err, collinfo) => {
                    if (!collinfo) {
                        console.log('Starting dbSeeder...');
                        this.seed();
                    }
                });
    }
    
    seed() {

        console.log('Seeding data....');

        Product.remove({});
        
         var product = new Product({
                'id'         : 1,
                'productName': 'Rittenhouse Auctions',
                'auctype':'On-site',
                'description': 'Lady s 14k white gold and 1 carat diamond pendant, 14k white gold and .50 carat D colours',
                'releaseDate': '2017-12-10',
                'website': 'www.onitcanada.com',
                'Highlights':[' EVENING AUCTION Jewellery ',' Costume Jewellery - Stamps  Antiques ',' Collectibles - Coins'],
                'coverimg': '../assets/images/361.png',
                'imageUrl':['../assets/images/product/031.jpg','../assets/images/product/032.jpg','../assets/images/product/033.jpg','../assets/images/product/034.jpg','../assets/images/product/035.jpg','../assets/images/product/036.jpg','../assets/images/product/037.jpg','../assets/images/product/038.jpg','../assets/images/product/038-s190x90.jpg','../assets/images/product/039.jpg','../assets/images/product/040.jpg'],
                'terms': 'Cash, Visa, MasterCard, Debit',
                'time': 'Sale Starts At 5:30 PM, Preview 4:00 PM ',
                'shipping': 'Buyer Pays Shipping Cost ',
                'email': 'Rittenhouse.Auctions@gmail.com',
                'tel':'613-640-1234 ',
                'note': 'mynote ',
                'address': '3694 MacKenzie Drive ',
                'city':'toronto ',
                'zip':'M2J 1B8',
                'state':'Ontario'
                 });
                 
            product.save((err, prodc) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('inserted product: ' + prodc.productName + ' ' + prodc.releaseDate);
                }
            });
    }
}

module.exports = new DBSeeder();




