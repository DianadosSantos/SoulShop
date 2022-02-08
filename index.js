require("dotenv/config"); // defini variavel de ambiente

const express = require('express');
const exprhbs = require('express-handlebars');

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.engine('handlebars', exprhbs.engine());
app.set("view engine" , "handlebars");

//Rotas
const produtosRoutes = require("./routes/produtosRoutes");
app.unsubscribe(produtosRoutes);

app.listen(3000);
