# 🎬 Movies App

Um sistema completo para **cadastro e gerenciamento de filmes**, desenvolvido como parte de um desafio técnico.  
A aplicação permite adicionar filmes, incluir imagens, trailers, gêneros e outras informações detalhadas, com autenticação segura e interface moderna.

---

## 🚀 Funcionalidades

✅ **Autenticação segura**
- Login com token JWT e validação automática de sessão.  

✅ **Gerenciamento de filmes**
- Criação, edição e exclusão de filmes.  
- Upload de imagens (pôster e background) diretamente para a AWS S3.  
- Campos personalizados: título, título original, sinopse, orçamento, duração, gênero, classificação e trailer.  

✅ **Listagem com filtros**
- Filtros por nome, gênero, duração e data de lançamento.  
- Paginação com controle dinâmico.  

✅ **Visualização detalhada**
- Página individual com capa do filme, sinopse, informações técnicas e trailer incorporado (YouTube).  

✅ **Interface moderna e responsiva**
- Desenvolvida com **React**, **styled-components** e **Vite**, com suporte a tema escuro/claro.

---

## 🧠 Tecnologias utilizadas

### **Frontend**
- ⚛️ [React](https://reactjs.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 💅 [styled-components](https://styled-components.com/)
- 🪄 [Axios](https://axios-http.com/)
- 🔐 JWT Authentication
- 🌗 Theme Provider (modo claro e escuro)

### **Backend**
- 🧱 [NestJS](https://nestjs.com/)
- 🐘 [PostgreSQL](https://www.postgresql.org/)
- 🪣 [AWS S3](https://aws.amazon.com/s3/) — upload e armazenamento de imagens
- 🔒 Autenticação com Passport + JWT
- 🧩 Prisma ORM
- 📘 Swagger para documentação da API
