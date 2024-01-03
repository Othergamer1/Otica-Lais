// Importando o módulo express
import express from "express";

// Importando rotas
import { produtosRoutes } from './src/routes/produtos.js';
import { maisVendidosRoutes } from './src/routes/maisVendidos.js';
import { promocoesRoutes } from './src/routes/promocoes.js';
import { cadastroRouter } from "./src/routes/cadastro.js";

// Criando uma instância do express
const app = express();

// Dizendo ao express que vamos usar JSON
app.use(express.json());

// Tornando a pasta 'public' pública
app.use(express.static("public/"));

// Usando as rotas
app.use(produtosRoutes);
app.use(maisVendidosRoutes);
app.use(promocoesRoutes);
app.use( cadastroRouter);

// Configurando o servidor para escutar na porta 3333
app.listen(3333, () => {
    console.log("Seu servidor está escutando a porta 3333");
});