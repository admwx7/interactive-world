'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TileSchema = require('./tile.schema');

var WorldSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  start: {
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    }
  },
  tiles: [TileSchema]
});

module.exports = mongoose.model('World', WorldSchema);
