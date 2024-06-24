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
git clone git@github.com:vitmonjo/crud-app.git <br />
cd crud-app <br />
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

#### Testes

![image](https://github.com/vitmonjo/senior-crud/assets/95149403/f7ea84ac-7f4a-484c-8339-ee9bd88e91d4)

#### Página principal - Visualização de Clientes

![image](https://github.com/vitmonjo/senior-crud/assets/95149403/85afbe19-904a-4886-a142-caf444d275a1)

#### Tela de Ajuda - Clientes

![image](https://github.com/vitmonjo/senior-crud/assets/95149403/5ef2112e-0f31-408a-bb45-c8bc710efee2)

#### Tela de criação de Cliente

![image](https://github.com/vitmonjo/senior-crud/assets/95149403/24c59212-55fa-4d2e-9dcd-1bd57e637974)

![image](https://github.com/vitmonjo/senior-crud/assets/95149403/916f9caa-0616-4391-986c-f6c396bfb00e)

#### Tela de criação de Contato

![image](https://github.com/vitmonjo/senior-crud/assets/95149403/9015e216-156f-48cf-91c1-808a5acd440e)

![image](https://github.com/vitmonjo/senior-crud/assets/95149403/94737f93-31c3-4e01-b7be-de0546cde991)

#### Visualização de Contatos

![image](https://github.com/vitmonjo/senior-crud/assets/95149403/9206a9eb-1d98-4171-b110-79173e969cfc)

#### Tela de Ajuda - Contatos

![image](https://github.com/vitmonjo/senior-crud/assets/95149403/9f850d94-bd73-4179-b013-6d30f5b2b9ca)

#### Filtro por Nome - Clientes

![image](https://github.com/vitmonjo/senior-crud/assets/95149403/db8e8739-56f6-41d8-b28b-0b3ce8051d85)

#### Filtro por Telefone - Clientes

![image](https://github.com/vitmonjo/senior-crud/assets/95149403/032ee55d-c08f-4628-9a9d-f5a104309e3d)

#### Filtro por Nome - Contatos

![image](https://github.com/vitmonjo/senior-crud/assets/95149403/cd1ec975-53fa-4762-aab1-815f35168c09)

#### Filtro por Telefone - Contatos

![image](https://github.com/vitmonjo/senior-crud/assets/95149403/1840fd94-b73b-4d12-9972-638979eb4936)

Vale ressaltar que também é possível classificar por "Nome" e "Criado em", além de poder alterar a largura das colunas do DataGrid.

### Ferramentas a serem implementadas

Para melhorar ainda mais a experiência de quem faz o uso deste Sistema de Gerenciamento de Clientes, faz-se útil a implementação de um login de acesso, permitindo que cada usuário só veja a sua própria coleção de clientes e contatos. Também pretendo implementar novas validações nas entidades, como por exemplo campo CNPJ/CPF nos Clientes, assim como um campo de CPF nos Contatos, para impedir duplicatas de Contatos. No momento também é possível excluir um Cliente que ainda possua Contatos vinculados, seria útil uma validaçao no back-end para impedir a exclusão nesses casos. <br /><br />
Embora goste bastante de utilizar a Material UI, percebi que eles pecam bastante na falta de Componentes de Input com validações de máscara ou tipo. O campo de telefone foi feito com o package @react-input/mask que permitiu aplicar a máscara no campo, permitindo somente números e já aplicando o formato de telefone brasileiro. Mais uma vez, o ideal seria que eu validasse os inputs tanto no front-end como no back-end.
Apesar de ser possível utilizar o aplicativo em dispositivos móveis, esta não é a melhor experiência possível, um grande passo a frente no projeto seria então aumentar a responsividade, pois atualmente o usuário precisa mover muito a tela para chegar nos pontos principais.
