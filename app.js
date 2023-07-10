const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Servidor Node JS OK !');
});

server.listen(port, hostname, () => {
  console.log(`Servidor ejecutandose en http://${hostname}:${port}/`);
});

//***** API con GraphQL *****// 
var { graphql, buildSchema } = require("graphql")

// Construimos un esquema, usando lenguaje GraphQL 
var schema = buildSchema(`
  type Query {
    hola: String
  }
`)

// La variable rootValue provee una función resolver para cada endpoint de la API
var rootValue = {
  hola: () => {
    return "Hora Crack de la Programación !"
  },
}

// Ejecutamos la consulato GraphQL '{ hola }' e imprimimos la respuesta 
graphql({
  schema,
  source: "{ hola }",
  rootValue,
}).then(response => {
  console.log(response)
})