# Saad Designer — Portfólio

Portfólio de página única para apresentar os trabalhos de design gráfico e audiovisual de Saad. Construído com HTML, CSS e JavaScript nativos, sem build step ou dependências de interface.

## Como visualizar
Abra `index.html` no navegador ou publique o repositório com GitHub Pages. As fontes Manrope e DM Mono são carregadas do Google Fonts; se estiver offline, entram fontes de sistema como alternativa.

## Personalizar o conteúdo
Todo o conteúdo editável fica no bloco de configuração e dados do portfólio, no fim de `index.html`.

- **Foto de perfil:** coloque a foto em `public/media/profile/saad.jpg` e defina `PROFILE_IMAGE: "/media/profile/saad.jpg"` em `CONFIG`. Se preferir, use outro caminho.
- **Vídeos:** edite o array `videos`. Cada item aceita `title`, `category`, `cover`, `video` e `description`. Use caminhos como `/media/videos/projeto-01.webp` e `/media/videos/projeto-01.mp4`.
- **Artes:** edite o array `designs`. Cada item aceita `title`, `category` e `image`. Os carrosséis mantêm a proporção das artes e permitem abrir uma visualização ampliada.
- **Identidades visuais:** adicione itens reais ao array `identities`, com `name`, `description`, `logoImage` opcional e `colors` opcional. A seção não exibe marcas fictícias como trabalhos reais.
- **WhatsApp:** preencha `WHATSAPP_NUMBER` com código do país, DDD e número, somente dígitos, por exemplo o formato `55DDDNÚMERO`. Não deixe o valor de exemplo no código.
- **Instagram:** o link está centralizado em `CONFIG.INSTAGRAM_URL`; atualize também os links visíveis no HTML se trocar o perfil.

## Estrutura de mídia sugerida
```
public/
  media/
    profile/
    videos/
    design/
    identities/
```
Crie essas pastas ao adicionar arquivos. Os placeholders atuais são gráficos de interface e estão identificados como conteúdo a substituir, não são projetos reais.

## Recursos incluídos
- Layout responsivo mobile-first.
- Navegação por seções e barra inferior em telas pequenas.
- Oito posições de audiovisual com prévia silenciosa sob demanda quando houver vídeo configurado.
- Dez posições de design com carrossel horizontal e abertura ampliada.
- Seção independente e flexível para identidades visuais.
- Modal com fechamento por botão, clique fora e tecla Escape.
- Respeito a `prefers-reduced-motion` e preferência de economia de dados para prévias.
- Link de WhatsApp preparado sem inventar telefone.

## Observação
O repositório não continha uma aplicação front-end reconhecível nos caminhos convencionais quando foi inspecionado. A implementação foi criada como página estática para reduzir dependências e permitir publicação direta.
