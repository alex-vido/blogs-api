# Blogs API

Este é um projeto de API backend para gerenciar blogs, desenvolvido utilizando Docker, SQL, Node.js, Express e Sequelize. O objetivo principal é oferecer um serviço para criar, atualizar, visualizar e deletar postagens de blog.


## Instalação

Certifique-se de ter o Docker instalado na sua máquina antes de começar.

1. Clone este repositório:

https://github.com/alex-vido/blogs-api

2. Execute o Docker Compose para configurar o ambiente:

docker-compose up -d --build


3. Execute o comando Docker para ter acesso ao terminal interativo do container:

docker exec -it blogs_api bash.

4. Instale as dependências:

npm install


## Uso

Após a instalação e configuração, você pode iniciar o servidor local com o seguinte comando:

npm start


## Testes

Foram desenvolvidos testes para as principais funções da API. Você pode executar os testes com o seguinte comando:

npm test


## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar solicitações de pull request.
Licença

Este projeto está licenciado sob a MIT License.