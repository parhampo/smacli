const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
    
const ProductSchema = new Schema({
  id            : { type : Number, required: true},
  productName   : { type : String, required: true},
  auctype       : { type : String, required: true },
  description   : { type : String, required: true },
  releaseDate   : { type : String, required: true },
  website       : { type : String },
  Highlights    : { type : [String] },// or [String],
  imageUrl      : { type : [String] },
  coverimg      : { type : String},
  email         : { type : String},
  terms         : { type : String},
  time          : { type : String },
  shipping      : { type : String },
  tel           : { type : String },
  note          : { type : String },
  address       : { type : String },
  city          : { type : String },
  zip           : { type : String },
  state         : { type : String}
 
});

module.exports = mongoose.model('Product', ProductSchema, 'products');
