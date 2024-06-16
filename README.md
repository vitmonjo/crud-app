# Desafio - Desenvolvedor Full Stack

## Projeto de desenvolvimento de um CRUD básico, nele deve ser possível criar Clientes e posteriormente atribuir N Contatos para este Cliente.

### Estrutura do sistema

Uma tela de cadastro de Clientes com os seguintes campos:
* Nome completo;
* Email(s);
* Telefone(s);
* Data de Registro (populado automaticamente pelo Banco de Dados).

Uma tela de cadastro de Contatos com os seguintes campos:
* Nome completo;
* Email(s);
* Telefone(s).

Ambas as telas possuem as funcionalidades básicas de CRUD (Create, Read, Update e Delete)

### Tecnologias utilizadas

No back-end, a escolha foi Node.js com Express, para o Banco de Dados optei por usar MongoDB, acessado por meio de Mongoose.
Para o front-end, foram utilizados React, por meio de Next.js e para a estilização, fiz uso intenso da biblioteca de componentes para React, a Material UI.

A escolha para o front-end com React veio da grande familiaridade que já possuo com a biblioteca, pelo mesmo motivo optei pelo framework Express.js. Ambas as ferramentas são temas obrigatórios no decorrer do curso de Desenvolvimento Web que sigo, o The Odin Project. 

Fiz estas escolhas de Tech Stack por ter recebido o aval para utilizar as tecnologias de minha preferência, no entanto, já desenvolvi um CRUD similar com Java e Spring Boot, persistindo dados com Hibernate num Banco de Dados PostgreSQL. Acabei optando por fazer em Node.js pela praticiade da linguagem e velocidade que iria me permitir entregar, mas meu objetivo no momento é aprofundar meus conhecimentos em Java/Spring Boot.

### Instruções de Instalação

#### Github

##### Pré requisitos:
###### Git
###### NodeJs

Abrir um novo terminal e digitar <br />
git clone git@github.com:vitmonjo/senior-crud.git <br />
cd senior-crud <br />
npm install <br />


#### .RAR

##### Pré requisitos:
###### NodeJs

Extrair o arquivo em alguma pasta <br />
Abrir um novo terminal dentro desta pasta <br />
npm install <br />


Após realizada uma das etapas acima, abra dois terminais no VSCode: <br />
No primeiro terminal, execute o servidor Express (server): npm run api-dev <br />
No segundo terminal, execute o servidor React (client): npm run dev <br /> <br />

Acesse a aplicação no http://localhost:3000 <br />

### Problemas enfrentados

Tentei utilizar o arquivo .env para tornar público algumas variáveis, principalmente o port em que o Node está rodando, todavia, percebi muita instabilidade por parte do Next.Js, em outros projetos utilizando Vite conseguia acessar essas variáveis de forma consistente no client-side.
Ao menos pude utilizar no server-side para não ter que expor as credenciais de login do MongoDB.

Acerca do Idioma, apesar de sempre fazer todos os meus projetos em inglês, neste acabei usando os labels em português, para criar uma interface acessível a qualquer usuário. No código, todavia, o padrão da língua inglesa foi seguido a risca.
