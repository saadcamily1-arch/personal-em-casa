# Pata & Pelo | Página de vendas para pet shop

Este repositório foi adaptado para uma landing page demonstrativa de pet shop. A identidade usa tons de verde, creme e laranja, com foco em produtos, benefícios, sacola de compras e contato.

## Estrutura

```
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── products.js
│   └── app.js
├── assets/
│   └── images/
│       └── README.md
├── media/
│   ├── README.md
│   ├── profile/
│   ├── videos/
│   ├── design/
│   └── identities/
└── README.md
```

As pastas `media/` anteriores foram mantidas para não apagar arquivos ou trabalho já existente. A página atual utiliza os diretórios `css/` e `js/`.

## Visualizar

Abra `index.html` em um navegador ou publique o repositório com GitHub Pages. A página usa imagens remotas do Unsplash e fontes do Google Fonts, então esses elementos precisam de conexão com a internet.

## Personalização antes de publicar

Esta é uma demonstração visual e funcional, não uma loja real já conectada a estoque, pagamentos ou entregas. O nome Pata & Pelo, produtos, imagens, avaliações, preços e condições promocionais são exemplos e precisam ser substituídos ou confirmados pelo responsável pela loja.

### Produtos e preços

Edite `js/products.js`. Cada produto contém:
- `id`: identificador único.
- `name`: nome.
- `category` e `categoryLabel`: categoria para filtros.
- `price` e `oldPrice`: valores em reais.
- `badge`: etiqueta do produto.
- `rating`: texto de avaliação, que deve ser confirmado ou removido se não houver avaliações reais.
- `image` e `alt`: imagem e descrição acessível.

### WhatsApp

Edite `js/app.js` e preencha `WHATSAPP_NUMBER` com o número real da loja, incluindo DDI e DDD, apenas dígitos. Enquanto estiver vazio, o site avisa que o número precisa ser configurado e não cria um contato falso.

### Identidade e textos

Edite os textos em `index.html` e os estilos em `css/styles.css`. Os arquivos estão separados para facilitar a manutenção.

## Funcionalidades

- Layout responsivo para computador e celular.
- Navegação por categorias.
- Catálogo gerado a partir de um arquivo de dados.
- Sacola com inclusão, remoção e alteração de quantidades.
- Cálculo local do subtotal.
- Montagem de pedido para envio ao WhatsApp após configurar o número.
- Estados vazios e mensagens de feedback.
- Preferência de movimento reduzido respeitada.

## Limitações importantes

- Não existe pagamento online nem integração com estoque.
- Frete, prazo e pagamento precisam ser combinados com a loja.
- O checkout depende do número de WhatsApp real.
- Confirme preços, disponibilidade, promoções, avaliações, imagens e políticas antes de publicar.
- Os arquivos de mídia legados foram mantidos, mas não são utilizados pela página de pet shop.
