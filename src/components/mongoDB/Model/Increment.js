    var Mongoose = require('mongoose'),
 Schema = Mongoose.Schema;


var PostSchema = new Schema({
 dailygoal:{type: String},
 waterintake: {type: String},
//  email: {type: String,},
//  address:{type: String },
clicks:{type:Number,default:0},
//  cities:{type: String},
 });
var post = Mongoose.model('post', PostSchema, 'post');
module.exports = {
 Post: post
};