# Desafio - Desenvolvedor Full Stack

## Neste projeto, desenvolvi um sistema básico de CRUD onde é possível criar Clientes e posteriormente atribuir múltiplos Contatos para cada Cliente.

### Estrutura do sistema
<hr>

#### Cadastro de Clientes
Campos:
* Nome completo;
* Email(s);
* Telefone(s);
* Data de Registro (populado automaticamente pelo Banco de Dados).

#### Cadastro de Contatos
Campos:
* Nome completo;
* Email(s);
* Telefone(s).

Ambas as telas possuem as funcionalidades básicas de CRUD (Create, Read, Update e Delete)

### Tecnologias utilizadas
<hr>

#### Back-end
* <em>Node.js</em> com <em>Express</em>
* <em>MongoDB</em> acessado por meio de <em>Mongoose</em>

#### Front-end
* <em>React</em> com <em>Next.js</em>
* <em>Material UI</em> para estilização

A escolha do stack tecnológico foi baseada na minha familiaridade com essas ferramentas e na rapidez de desenvolvimento que elas proporcionam. Ambas são amplamente utilizadas no curso de Desenvolvimento Web que sigo, o The Odin Project. Para os testes, utilizei Mocha, Jest, SuperTest, Chai e Sinon, que são ferramentas populares e eficazes para garantir a integridade do código.

### Instruções de Instalação
<hr>

#### Github

##### Pré requisitos:
###### Git
###### NodeJs
<hr>
Abrir um novo terminal e digitar <br />
git clone git@github.com:vitmonjo/senior-crud.git <br />
cd senior-crud <br />
npm install <br />

<hr>

#### .RAR

##### Pré requisitos:
###### NodeJs
<hr>
Extrair o arquivo em alguma pasta <br />
Abrir um novo terminal dentro desta pasta <br />
npm install <br />

<hr>


### Uso
Para entender como usar a aplicação, há um botão de ajuda dentro da própria aplicação que fornece instruções detalhadas. <br />

Após realizada uma das etapas acima (Github ou .RAR), abra dois terminais no VSCode: <br />
No primeiro terminal, execute o servidor Express (server): npm run api-dev <br />
No segundo terminal, execute o servidor React (client): npm run dev <br /> <br />
Acesse a aplicação no http://localhost:3000 <br />


### Como realizar testes 
Para realizar testes, com o aplicativo instalado, abra um terminal e execute o seguinte comando. <br />
npm test <br>

No momento há 10 testes sendo rodados, cobrindo todos os endpoints da API. <br />

### Demonstração