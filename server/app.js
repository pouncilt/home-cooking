 "use strict"
 let express = require("express");
 let app = express();
 
 
 app.use( express.static(__dirname + "/.." ) );
 app.get('/recipedata',(request,response) => {
	response.json( ['Roasted Duck','Bacon Avocado Salad','Mongolian Beef from Slow Cooker',
		'San Francisco Pork Chops', 'Peking Duck'] );
 });
 app.listen(8181, () => console.log("listening on port 8181"));
