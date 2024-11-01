### <div align="center"> **Projeto Final: Imersão Js + AWS - { Reprograma }** </div>

# <div align="center"> Moda Up
## <div align="center"> Atualizando a moda


<br>

## **O Projeto** 

<br>

<p align="justify">

<p align="justify">  

### **Moda up** é um projeto que conecta pessoas envolvidas no reaproveitamento de roupas, promovendo o _upcycling_. Com foco na sustentabilidade da moda e na inclusão social, buscando transformar peças esquecidas em novas criações, fortalecendo uma comunidade engajada e consciente.

</p>

<p align="justify">  

### A aplicação conecta artesãos, doadores de materiais, brechós e empresas interessadas, facilitando a comunicação para a troca e venda de produtos. Além disso, tem como objetivo futuro, oferecer cursos e treinamentos para quem deseja se especializar no mercado de upcycling.

</p>


## **Funcionalidades** 
<br>

- [x] Efetuar cadastro dos membros participantes e seus produtos.
- [x] Listar produtos por membro participante.
- [x] Buscar membros por tipo cadastrado (Arteãos, doadores, dono de loja).

##  **Rotas** 
<br>

### Métodos POST/GET/PUT/DELETE - *Usuários* (`members`)
<br>

<div align = "center">

|  Método  |                  Rota                       |                     Descrição                                |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|  `POST`  | localhost:3000/members                 |    Cadastra novos usuários                  |
|  `GET`   | localhost:3000/members:type                    |    Lista de todos os usuários por tipo de cadastro                       |                             |
|   `PUT`  |  localhost:3000/members/:id        |       Atualiza os dados dos usuários buscando por ID                  |             |
| `DELETE` |  localhost:3000/members/:id      |                      Deleta registro de usuário por ID          |

</div>
<br>

### Métodos POST/GET - *Produtos* (`products`)
<br>

<div align = "center">

|  Método  |                  Rota                       |                     Descrição                                |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|  `POST`  | localhost:3000/products                 |    Cadastra produtos                  |
|  `GET`   | localhost:3000/products/member/:memberId                    |    Lista os pordutos de um usuário                        |


</div>
<br>

## **Tecnologias/Ferramentas** 
<br>

- Node 20.3.1
- TypeScript
- Nestjs
- TypeOrm
- Postgres
- Bcrypt
- Axios
- Dotenv
- Docker
- [Swagger](http://localhost:3000/api)
- Ngrok

## **Como instalar**

### Backend

- Baixe ou clone o repositório do backend usando *git clone* https://github.com/elizapimentel/upcycling_project


## Deploy

- Após baixar o repositório, instale em sua máquina o *Ngrok* através do [setup](https://dashboard.ngrok.com/get-started/setup) indicado para sua máquina.

- Após instalação será gerado um *authtoken* pessoal. No arquivo _ngrok,yml_, que se encontra na raiz do projeto, insira seu token diretamente.


## Como executar


- Tenha o Docker em sua máquina e execute no terminal `docker-compose up -d --build` para subir as imagens e container no Docker.

- Ao final, clique no [link](http://localhost:8081) gerado pelo ngrok e siga as instruções da página.


## **Implementações futuras** 

- [ ] Inserir segurança ao login;
- [ ] Adicionar migrations ao Docker;
- [ ] Adicionar edição e deleção dos produtos;
- [ ] Adicionar busca por geolocalização;
- [ ] Adicionar tratamento de erros;
- [ ] Adicionar sessão de ofertas de cursos profissionalizantes para comunidades;
