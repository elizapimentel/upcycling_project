### <div align="center"> **Projeto Final: Imersão Js + AWS - { Reprograma }** </div>

# <div align="center"> Moda Up
## <div align="center"> Atualizando a moda


<br>

## **O Projeto** 

<br>

<p align="justify">

<p align="justify">  

### **Moda up** é um projeto que conecta pessoas envolvidas no reaproveitamento de roupas, promovendo o _upcycling_. Com foco na sustentabilidade da moda e na inclusão social, buscamos transformar peças esquecidas em novas criações, fortalecendo uma comunidade engajada e consciente.

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

## **Como instalar**

### Backend

- Baixe ou clone o repositório do backend usando *git clone* https://github.com/elizapimentel/upcycling_project


## Como executar

Tenha o Docker em sua máquina e execute no terminal `docker-compose up -d --build` para subir as imagens e container no Docker.

## **Implementações futuras** 

- [ ] Inserir segurança ao login;
- [ ] Adicionar migrations ao Docker;
- [ ] Adicionar edição e deleção dos produtos;
- [ ] Adicionar busca por geolocalização;
- [ ] Adicionar tratamento de erros;
- [ ] Adicionar sessão de ofertas de cursos profissionalizantes para comunidades;
