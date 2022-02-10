const { Router } = require("express");
const ProdutoController = require("../controllers/ProdutoController");
const router = Router();

//Pagina de produtos
router.get("/produtos" , ProdutoController.paginaProdutos);
//Renderização de adição de produtos
router.get("/produtos/novo", ProdutoController.paginaAdicionarProduto);
//metodo de adicionar produto
router.post("/produtos/enviar", ProdutoController.addProduto);
//Renderização da edição de produtos
router.get("/produtos/editar/:id" , ProdutoController.paginaEditProduto);
//metodo para editar e atualizar o produto
router.post("/produtos/atualizar" , ProdutoController.editProduto);
//metodo deletar produto
router.post("/produtos/deletar", ProdutoController.deleteProduto);

module.exports = router;