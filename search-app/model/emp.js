const mongoose = require('mongoose');

const empSchema  = mongoose.Schema({
	empname: {
		type : String,
		required : true
	},
	date : {
		type : String,
		required:true
	},
	salary : {
	    type : Number,
		required:true
	}
})

module.exports = mongoose.model('Emp', empSchema)