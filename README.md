# FarmTech_2024

Este repositório contém os códigos fonte de um protótipo de Sistema de gestão, desenvolvido no curso Farm Tech em Rio Verde - GO, que consiste em uma aplicação web construída com Angular para o frontend, um backend desenvolvido em Node.js e NestJS, um banco de dados PostgreSQL e o firmware para um dispositivo IoT ESP32 utilizando C++ e PlatformIO.

## Estrutura do Repositório

- **frontend/**: Contém o código fonte do frontend desenvolvido com Angular.
- **backend/**: Contém o código fonte do backend desenvolvido com Node.js e NestJS.
- **db/**: Contém scripts e arquivos relacionados ao banco de dados PostgreSQL.
- **deviceIoT/**: Contém o firmware para o dispositivo IoT ESP32 desenvolvido em C++ com PlatformIO.

## :computer: Frontend

O frontend deste projeto foi desenvolvido utilizando o framework Angular. Nele, você encontrará os componentes, serviços e estilos relacionados à interface do usuário.

### Como Executar

1. Certifique-se de ter o Node.js e o Angular CLI instalados globalmente.
2. Navegue até o diretório frontend/ no terminal.
3. Execute o comando `npm install` para instalar as dependências.
4. Execute o comando `ng serve` para iniciar o servidor de desenvolvimento.
5. Abra o navegador e acesse `http://localhost:4200`.

## :globe_with_meridians: Backend

O backend foi construído utilizando Node.js e NestJS, um framework Node.js para construção de aplicativos eficientes e escaláveis no lado do servidor.

### Como Executar

1. Certifique-se de ter o Node.js instalado.
2. Navegue até o diretório backend/ no terminal.
3. Execute o comando `npm install` para instalar as dependências.
4. Execute o comando `npm run start` para iniciar o servidor.
5. O servidor estará disponível em `http://localhost:3000`.

## :floppy_disk: Banco de Dados

Este diretório contém scripts e arquivos relacionados ao banco de dados PostgreSQL. Aqui estão armazenados os esquemas, consultas e configurações necessárias para o funcionamento do banco de dados.

## :electric_plug: Device IoT

A pasta deviceIoT/ contém o firmware para o dispositivo IoT ESP32, desenvolvido em C++ utilizando PlatformIO. Este firmware controla o comportamento do dispositivo e permite a comunicação com outros componentes do sistema.

### Como Executar

1. Certifique-se de ter o PlatformIO instalado.
2. Abra o projeto usando o PlatformIO IDE ou navegue até o diretório deviceIoT/ no terminal.
3. Compile e faça o upload do firmware para o dispositivo ESP32 usando o PlatformIO.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
