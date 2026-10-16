# Saad Designer | Portfólio

Portfólio de página única para apresentar os trabalhos de design gráfico, identidade visual e audiovisual. A página atual usa HTML, CSS e JavaScript nativos, sem etapa de build.

## Estrutura do projeto

```
.
├── index.html
├── media/
│   ├── README.md
│   ├── profile/
│   ├── videos/
│   ├── design/
│   └── identities/
└── README.md
```

As pastas de mídia já estão versionadas no GitHub. Adicione os arquivos reais dentro delas.

## Como visualizar

Abra `index.html` no navegador ou publique a página com GitHub Pages. Para trabalhar pelo Lovable, conecte este repositório à sua conta e confirme a estrutura que o Lovable importar antes de publicar.

## Personalizar o conteúdo

Os textos, links e dados dos projetos ficam no bloco de configuração e nos arrays no final de `index.html`.

- **Foto de perfil:** adicione `media/profile/saad.jpg` e configure `PROFILE_IMAGE` com o caminho correspondente.
- **Vídeos:** adicione arquivos e capas em `media/videos/`, depois atualize o array `videos` com `title`, `category`, `cover`, `video` e `description`.
- **Design gráfico:** adicione as imagens em `media/design/` e atualize o array `designs`.
- **Identidades visuais:** adicione logos e aplicações em `media/identities/` e atualize o array `identities`.
- **WhatsApp:** configure `WHATSAPP_NUMBER` com código do país, DDD e número, somente dígitos.
- **Instagram:** atualize `CONFIG.INSTAGRAM_URL` e os links visíveis correspondentes.

Use caminhos consistentes com o local onde o site será publicado. Em GitHub Pages, um site publicado em uma URL de projeto pode precisar de caminhos relativos em vez de caminhos iniciados por `/`.

## Recursos atuais

- Layout responsivo.
- Navegação por seções e navegação inferior em telas pequenas.
- Grade de projetos audiovisuais com prévia sob demanda quando um vídeo estiver configurado.
- Carrossel de design gráfico com visualização ampliada.
- Seção para identidades visuais reais.
- Modal com fechamento por botão, clique fora e tecla Escape.
- Respeito à preferência por movimento reduzido.
- Link de WhatsApp preparado para ser configurado.

Os espaços visuais de demonstração são placeholders, não trabalhos reais. Substitua-os pelos projetos e materiais autorizados antes de divulgar o portfólio.
