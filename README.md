<div align="center">
  <img src="public/logo.png" alt="Buscador de Preços Logo" width="150"/>
  <h1>Buscador de Preços</h1>
  <p>Uma aplicação web moderna e responsiva para busca, comparação e monitoramento de preços de produtos.</p>

  <p>
    <a href="#-recursos">Recursos</a> •
    <a href="#-tecnologias">Tecnologias</a> •
    <a href="#-como-executar">Como Executar</a> •
    <a href="#-estrutura-do-projeto">Estrutura</a>
  </p>
</div>

---

## ✨ Recursos

- **Busca Avançada**: Pesquise produtos em tempo real integrando com a API [DummyJSON](https://dummyjson.com/).
- **Filtros e Ordenação**: Filtre produtos por categoria e ordene por preço (maior, menor) ou relevância.
- **Paginação Inteligente**: Carregue mais resultados progressivamente sem recarregar a página (estilo *infinite-scroll* manual).
- **Sistema de Favoritos**: Salve seus produtos favoritos com um clique para acessá-los mais tarde.
- **Histórico de Buscas**: O aplicativo memoriza suas buscas recentes, permitindo repeti-las rapidamente.
- **Modo Escuro (Dark Mode)**: Alterne entre os temas Claro e Escuro com transições suaves para uma melhor experiência visual.
- **Design Premium**: Interface elegante construída do zero, inspirada em painéis de controle modernos, com micro-interações e ícones de alta qualidade (Phosphor Icons).

## 🚀 Tecnologias

Este projeto foi construído utilizando as ferramentas mais modernas do ecossistema web:

- **[Angular 19](https://angular.dev/)**: Framework principal, utilizando as novas funcionalidades como Signals, Standalone Components e Zoneless Change Detection.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para um código mais seguro e escalável.
- **[CSS3 (Vanilla)](https://developer.mozilla.org/en-US/docs/Web/CSS)**: Estilização customizada focada em performance, flexibilidade e variáveis nativas (CSS Tokens), sem dependência de frameworks pesados.
- **[Phosphor Icons](https://phosphoricons.com/)**: Biblioteca de ícones consistente e minimalista.
- **[RxJS](https://rxjs.dev/)**: Gerenciamento de fluxos assíncronos e requisições HTTP.

## ⚙️ Como Executar

Siga os passos abaixo para rodar o projeto localmente na sua máquina:

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [Angular CLI](https://angular.dev/tools/cli) instalado globalmente (`npm install -g @angular/cli`)

### Instalação

1. Clone o repositório ou faça o download do código-fonte:
```bash
git clone https://github.com/seu-usuario/buscador-de-preco.git
```

2. Acesse a pasta do projeto:
```bash
cd buscador-de-preco
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor de desenvolvimento:
```bash
npm start
```
*(Se a porta 4200 estiver em uso, você pode usar `npm start -- --port 4201`)*

5. Abra o navegador e acesse: **[http://localhost:4200](http://localhost:4200)**

## 📂 Estrutura do Projeto

A arquitetura do projeto foi pensada para ser escalável e modularizada:

```text
src/
├── app/
│   ├── core/              # Serviços globais (Busca, Histórico, Favoritos) e Componentes base (Sidebar, Header)
│   ├── features/          # Telas principais (Busca, Favoritos, Histórico, Alertas, Relatórios)
│   ├── shared/            # Componentes reutilizáveis (Formulário de Busca, Cards de Produtos)
│   ├── app.ts             # Componente raiz
│   └── app.routes.ts      # Configuração de rotas da aplicação
├── styles.css             # Estilos globais e Design System (Tokens de Cores, Tipografia, Modo Escuro)
└── ...
```

---

<div align="center">
  <sub>Desenvolvido com paixão por UI/UX e código limpo.</sub>
</div>
