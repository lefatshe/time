// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// Define a new 'ArticleSchema'
var ArticleSchema = new Schema({
	  // Timeshare Discriptions
      created: {
        type: Date,
        default: Date.now
      },
      title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
      }, 
      category: {
        type: String,
        default: '',
        trim: true,
        required: 'Category cannot be blank'
      }, 
      province: {
        type: String,
        default: '',
        trim: true,
        required: 'province cannot be blank'
      }, 
      discription: {
        type: String,
        default: '',
        trim: true,
        required: 'Discription cannot be blank'
      }, 
      creator: {
        type: Schema.ObjectId,
        ref: 'User' 
      },

      // Timeshare Images
      images: {
        type: Array,
        default : [],
        trim: true
      }, 

      // Timeshare attractions
      attractions: {
        type: Array,
        default : [],
        trim: true
      }, 
      nearby: {
        type: Array,
        default : [],
        trim: true
      },

      // Timeshare purchase price & discription
      purchase: {
        type: String,
        default: '',
        trim: true,
        required: 'Rent or buy cannot be blank'
      },
      price: {
        type: String,
        default: '',
        trim: true,
        required: 'Price or buy cannot be blank'
      },
      bedrooms: {
        type: String,
        default: '',
        trim: true,
        required: 'bedrooms cannot be blank'
      },
      datemin: {
        type: String,
        default: '',
        trim: true,
        required: 'Date stay cannot be blank'
      },
      datemax: {
        type: String,
        default: '',
        trim: true,
        required: 'Date stay cannot be blank'
      },

      // Admin options
      availability: {
        type: String,
        default: '',
        trim: true,
        required: 'Availability cannot be blank'
      },
      verify: {
        type: String,
        default: '',
        trim: true,
        required: 'Availability cannot be blank'
      }
});

// Create the 'Article' model out of the 'ArticleSchema'
mongoose.model('Article', ArticleSchema);