<h1 align='center'>Pizza Shop API</h1>

<p  align='center'>
  <img src='https://img.shields.io/badge/license-MIT-%23835afd' alt='License' />
  <img src='https://img.shields.io/badge/forks-MIT-%23835afd' alt='Forks' />
  <img src='https://img.shields.io/badge/stars-MIT-%23835afd' alt='Stars' />
</p>

<br>

## 💻 Projeto

[PIZZASHOPAPI]() O projeto Pizza Shop é um sistema de gerenciamento de restaurantes que oferece funcionalidades voltadas à administração eficiente de pedidos e produtos. O sistema permite que os usuários criem restaurantes, visualizem os pedidos recebidos, alterem o status dos pedidos em tempo real (como "em preparo" ou "entregue"), e acompanhem os produtos mais populares, exibindo os cinco itens mais vendidos. Além disso, a aplicação fornece relatórios financeiros, permitindo ao dono do restaurante visualizar as receitas semanais e mensais, facilitando a análise de desempenho do estabelecimento.

## 🧪 Technologies

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Bun](https://bun.sh/)
- [Typescript](https://www.typescriptlang.org/)
- [ElysiaJS](https://elysiajs.com/)
- [Drizzle-kit](https://orm.drizzle.team/kit-docs/overview)
- [Postgres](https://www.postgresql.org/)
- [FakerJS](https://fakerjs.dev/)
- [ParallelDriver/cuid2](https://github.com/paralleldrive/cuid2)
- [Chalk](https://www.npmjs.com/package/chalk)
- [ElysiaJS/cookie](https://github.com/elysiajs/elysia-cookie)
- [ElysiaJS/cors](https://elysiajs.com/plugins/cors)
- [ElysiaJS/jwt](https://elysiajs.com/plugins/jwt)
- [Dayjs](https://day.js.org/)
- [Drizzle-orm](https://orm.drizzle.team/)
- [Drizzle-typebox](https://orm.drizzle.team/docs/typebox)
- [Zod](https://zod.dev/)

## 🚀 Instalação

```bash
  # Clone o repositório e entre na pasta do projeto
  $ git clone
  $ cd https://github.com/RayanneRamos/api-com-bunjs.git
  # Instale as dependências
  $ bun install
  # Execute a aplicação
  $ bun dev
```

Para fazer o teste das rotas usa algum serviço por exemplo: Insomnia, Postman, HTTPie e entre outros.

## 🧩 Rotas do Server

Aqui você encontra todas as rotas disponíveis na aplicação.

- `GET /auth-links/authenticate` - Recebe o link de autenticação no email
- `GET /metrics/day-orders-amount` - Métricas dos pedidos do dia
- `GET /metrics/daily-receipt-in-perio` - Métricas da receita do dia num período de 7 dias
- `GET /evaluations` - Busca a avaliação do restaurante
- `GET /managed-restaurant` - Busca um gerente de um restaurante
- `GET /metrics/month-canceled-orders-amount` - Métricas de pedidos cancelados
- `GET /metrics/month-orders-amount` - Métricas de pedidos feitos no mês
- `GET /metrics/month-receipt` - Métricas de receita por mês
- `GET /order/:orderId` - Busca um pedido pelo ID
- `GET /orders` - Busca todas os pedidos
- `GET /metrics/popular-products` - Busca os produtos mais populares
- `GET /me` - Busca as informações do Profile
- `POST /evaluations` - Cria uma avaliação
- `POST /restaurants/:restaurantId/order` - Cria um pedido no restaurante
- `POST /customers` - Cria um cliente
- `POST /restaurants` - Cria um restaurante
- `POST /authenticate` - Cria uma conta
- `POST /sign-out` - Sai da conta acessada
- `PUT /menu` - Atualiza as informações do menu
- `PUT /profile` - Atualiza as informações do profile
- `PATCH /order/:orderId/aprove` - Atualiza o status do pedido para aprovado
- `PATCH /order/:orderId/cancel` - Atualiza o status do pedido para cancelado
- `PATCH /order/:orderId/delivery` - Atualiza o status do pedido para entregue
- `PATCH /order/:orderId/dispatch` - Atualiza o status do pedido para em entrega

## 📝 License

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para obter mais detalhes.

---

<p align='center'>Criado by Rayanne Ramos</p>
