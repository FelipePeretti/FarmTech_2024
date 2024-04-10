# FarmTech_2024

Este repositório contém os códigos fonte de um protótipo de Sistema de gestão, desenvolvido no curso Farm Tech em Rio Verde - GO, que consiste em uma aplicação web construída com Angular para o frontend, um backend desenvolvido em Node.js e NestJS, um banco de dados PostgreSQL e o firmware para um dispositivo IoT ESP32 utilizando Micropython.

## Estrutura do Repositório

- **frontend/**: Contém o código fonte do frontend desenvolvido com Angular.
- **backend/**: Contém o código fonte do backend desenvolvido com Node.js e NestJS.
- **db/**: Contém scripts e arquivos relacionados ao banco de dados PostgreSQL.
- **mobile/**: Contém o código fonte do app mobile desenvolvido em Ionic e Angular.
- **deviceIoT/**: Contém o firmware para o dispositivo IoT ESP32 desenvolvido em Micropython.

## :computer: <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="20" height="20" /> Frontend

O frontend deste projeto foi desenvolvido utilizando o framework Angular. Nele, você encontrará os componentes, serviços e estilos relacionados à interface do usuário.

### Como Executar

1. Certifique-se de ter o Node.js e o Angular CLI instalados globalmente.
2. Navegue até o diretório frontend/ no terminal.
3. Execute o comando `npm install` para instalar as dependências.
4. Execute o comando `npm start` para iniciar o servidor de desenvolvimento.
5. Abra o navegador e acesse `http://localhost:4200`.

## :globe_with_meridians: Backend

O backend foi construído utilizando Node.js e NestJS, um framework Node.js para construção de aplicativos eficientes e escaláveis no lado do servidor.

### Como Executar

1. Certifique-se de ter o Node.js instalado.
2. Navegue até o diretório backend/ no terminal.
3. Execute o comando `npm install` para instalar as dependências.
4. Execute o comando `npm start` para iniciar o servidor.
5. Ajuste a configuração do Banco de dados em `backend/src/infra/config.ts`
6. O servidor estará disponível em `http://localhost:3000`.

   OBS.: Para testes, pode-se utilizar uma simulação do backend, disponivel na pasta `backend_simulado`

## :floppy_disk: Banco de Dados

Este diretório contém scripts e arquivos relacionados ao banco de dados PostgreSQL. Aqui estão armazenados os esquemas, consultas e configurações necessárias para o funcionamento do banco de dados.

1. Baixar e instalar o DBeaver.
2. Importar o arquivo de backup do banco disponivel em `database/sensores`.

## :electric_plug: <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Micropython-logo.svg" width="35" height="35" /> Device IoT

A pasta `firmware_iot` contém o firmware para o dispositivo IoT ESP32, desenvolvido em Micropython utilizando Thonny IDE. Este firmware permite ao dispositivo publcar periodicamente dados de temperatura e humidade do sensor fisico para a nuvem.

### Como Executar

1. Baixar e instalar o Thonny IDE.
2. Gravar o Bootloader do Micropython no ESP32 para que seja possível executar instruções python diretamente no microcontrolador.
3. Faça o upload da biblioteca umqttsimple para a memoria flash do dispositivo.
4. Envie o firmware para ser executado no dispositivo.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [Apache License 2.0](LICENSE).
