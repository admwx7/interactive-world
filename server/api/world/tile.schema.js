var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tileTypes = [
  'water',
  'mountain',
  'grassland',
  'plain'
];
var TileSchema = new Schema({
  level: {
    type: Number,
    min: 1,
    max: 10,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: tileTypes,
    required: true
  },
  x: {
    type: Number,
    required: true
  },
  y: {
    type: Number,
    required: true
  }
});

module.exports = TileSchema;
