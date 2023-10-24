const mongoose = require('mongoose');

module.exports = async () => {
	try {
		await mongoose.connect(process.env.DATABASE_LOCAL,{
			// mongoose.connect(DB,{
			useNewUrlParser: true,
			// useCreateIndex: true,
			useUnifiedTopology: true,
			// useFindAndModify: false
		})
		console.log('MongoDB Connected....');
	} catch (e) {
		console.log(e);
		console.log('Refused to Connect');
	}
};
