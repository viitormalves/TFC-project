<h2>TFC - Project</h2>

Este é um sistema web para gerenciamento de jogos de um campeonato e a classificação do mesmo. O sistema permite que os usuários adicionem informações sobre cada jogo, como o time que jogou em casa, o time visitante, a pontuação, a data e a hora do jogo.

Além disso, o sistema fornece uma interface para gerenciar a classificação do campeonato, permitindo que os usuários visualizem a pontuação dos times, o número de jogos disputados, vitórias, empates e derrotas, além do saldo de gols.

O projeto utiliza as tecnologias Node.js, React, TypeScript e MySQL para construir a aplicação. Além disso, utiliza a tecnologia JWT para autenticação de usuários e garantir que apenas usuários autenticados tenham acesso às funcionalidades de gerenciamento de jogos e classificação.

A interface do usuário é construída com React e utiliza a biblioteca Material-UI para a estilização. Já o backend é construído com Node.js e utiliza o ORM Sequelize para realizar as operações de banco de dados com o MySQL.

<h3>Tecnologias</h3>
Linguagem de programação: Node.js, TypeScript e JavaScript.
Biblioteca frontend: React
Banco de dados: MySQL
ORM: Sequelize
Docker / Docker-compose
Autenticação: JWT

<h3>Instalação Local</h3>

Para executar o projeto localmente, siga os seguintes passos:

Clone o repositório para o seu computador:
git clone https://github.com/viitormalves/TFC-project.git

Instale as dependências do projeto para o frontend e o backend com o seguinte comando na raiz do projeto:
npm install

Alimente o banco de dados executando as migrações com o seguinte comando na raiz do projeto:
npx sequelize-cli db:migrate

Configure as variáveis de ambiente necessárias.
Para isso, copie o arquivo .env.example para .env e configure as variáveis de acordo com o seu ambiente.

Inicie o servidor de desenvolvimento do backend com o seguinte comando na raiz do projeto:
npm run start

Observação: O backend estará disponível na porta 3001. Certifique-se de que a porta esteja disponível em sua máquina.

Abra outro terminal e inicie o servidor de desenvolvimento do frontend com o seguinte comando na raiz do projeto:
npm run start

O projeto estará disponível em http://localhost:3000. Faça o login com um usuário criado ou crie um novo usuário para começar a utilizar a aplicação.
Observação: certifique-se de que o MySQL esteja instalado e em execução em sua máquina para que o banco de dados possa ser criado e alimentado corretamente durante o processo de migração.
