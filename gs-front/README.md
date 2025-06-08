# ✅ Fluxo de Funcionamento da Aplicação — Cadastro da Chuva

## ✅ Abertura da Aplicação

- O usuário acessa a aplicação diretamente pelo navegador.
- A **página inicial** é carregada, contendo:
  - **Navbar (menu de navegação)** com links para as principais páginas.
  - **Conteúdo principal**: título do sistema, texto introdutório, funcionalidades e botões de acesso rápido.
  - **Footer** com direitos autorais e informações finais (se implementado).

---

## 🧭 Navegação pelo Menu

Através da barra de navegação (Navbar), o usuário pode acessar:

- **Página Home (`/`)**: apresenta a proposta do sistema e suas principais funcionalidades.
- **Página de Registro (`/registrar`)**: formulário para cadastrar novos dados pluviométricos.
- **Dashboard (`/dashboard`)**: visualização de dados analíticos, gráficos e registros recentes.
- **Página de Integrantes (`/integrantes`)**: exibe informações dos membros do projeto.

---

## 📄 Página de Listagem de Registros (Dashboard)

- Esta página faz a leitura dos dados cadastrados.
- Os registros são exibidos em **cards ou tabela**, com:
  - **Data da ocorrência**.
  - **Localidade**.
  - **Volume de chuva**.
  - **Usuário responsável**.
- Também são exibidas:
  - **Métricas globais** (ex: volume mensal, registros do dia).
  - **Locais mais ativos**.
  - **Gráfico de chuvas (últimos 10 dias)**.

---

## 🔍 Página de Detalhes (Opcional - para expansão)

> Não implementada atualmente, mas pode ser adicionada com rotas dinâmicas (`/registro/[id]`) para exibir detalhes completos de um registro específico:
- Descrição detalhada.
- Observações adicionais.
- Dados meteorológicos complementares.
- Botões de ação como "editar", "voltar" ou "excluir".

---

## 🔐 Formulário de Registro de Dados

- A página `/registrar` apresenta um **formulário completo**, com os campos:
  - Data da ocorrência.
  - Local (cidade, estado).
  - Volume de chuva (mm).
  - Observações adicionais.
- O formulário inclui **validações básicas**:
  - Campos obrigatórios.
  - Volume numérico.
- Após o envio, os dados são salvos localmente (ou enviados à API, se integrada).

---

## 📱 Responsividade e Acessibilidade

- O sistema é **totalmente responsivo**, se adaptando a:
  - Smartphones.
  - Tablets.
  - Monitores e desktops.
- Elementos seguem boas práticas de acessibilidade:
  - Contrastes visuais adequados.
  - Textos legíveis.
  - Estrutura semântica clara.

---

## 🚪 Logout / Encerramento

- A navegação pode ser encerrada a qualquer momento.
- O usuário pode retornar à página inicial ou sair via botão "Logout" (caso a funcionalidade de autenticação esteja implementada).

---

