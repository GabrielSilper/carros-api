# carros-api

Um projeto pessoal pra aplicar meu novos conhecimentos com o banco não relacional MongoDB e o ODM Mongoose.

### O que vou fazer:

- Criar um API REST simples de carros;
    - o objeto carro vai seguir a seguinte entidade: 
    - `Car {
        _id: string;
        name: string;
        brand: string;
        image: string;
        type: string;
        year: number;
    }`
- Fazer um CRUD completo;
- Pegar os valores únicos de marca, tipo e ano;
    - vai ajudar o front-end saber quais valores filtrar
- Fazer uma ou mais funções de filtros;

### Habilidades que desenvolvi:

_obs.: essa seção vou documentar as habilidades que venho aplicando no projeto para mostrar o que aprendi_

- Criei um docker-compose com os serviços de Node e MongoDB;
- Aprendi a conectar o Mongoose com o meu container de MongoDB;
- Usei algumas funções simples do Mongoose;
- Aprendi a usar o `distinct` para trazer valores únicos;
