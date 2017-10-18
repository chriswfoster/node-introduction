


var books = [];
var id = 0;


module.exports = {				// exporting methods, to import them elsewhere
	create: (req, res) => {
		req.body.id = id
		books.push(req.body)
		id++;
		res.status(200).send( books );
	},

	read: ( req, res ) => {
		res.status(200).send( books );
	},

	update: (req, res ) => {
		const updateID = req.params.id;
		let index = books.findIndex( book => book.id == updateID);
		
		books [index ] = {
			id: books [index]. id,
			title: req.body.title || books [index].title,
			author: req.body.author || books [index].author
		};
		
		res.status(200).send( books );
	},

	delete: (req, res) => {
		const deleteID = req.params.id;
		bookID = books.findIndex( book => book.id == deleteID );
		books.splice(bookID, 1);
		res.status(200).send( books );
	}
};
//

