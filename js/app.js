(() => {
  "use strict";
  // Configure o telefone real da loja com DDI + DDD + número, somente dígitos.
  // Exemplo de formato: "55DDDNÚMERO". Mantenha vazio até receber o contato correto.
  const WHATSAPP_NUMBER = "";
  const WHATSAPP_GREETING = "Olá! Vim pelo site da Pata & Pelo e gostaria de saber mais sobre os produtos.";
  const products = Array.isArray(window.PETSHOP_PRODUCTS) ? window.PETSHOP_PRODUCTS : [];
  const state = {filter:"todos", cart:new Map()};
  const $ = (selector,root=document) => root.querySelector(selector);
  const $$ = (selector,root=document) => [...root.querySelectorAll(selector)];
  const money = value => new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(value);
  const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  let toastTimer;
  function toast(message){const el=$("#toast");el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2800);}
  function renderProducts(){
    const list=products.filter(p=>state.filter==="todos"||p.category===state.filter);
    $("#product-total").textContent=String(list.length).padStart(2,"0")+" produto"+(list.length===1?"":"s");
    $("#product-grid").innerHTML=list.length?list.map(p=>'<article class="product-card"><div class="product-image"><img src="'+escapeHTML(p.image)+'" alt="'+escapeHTML(p.alt||p.name)+'" loading="lazy"><span class="product-label">'+escapeHTML(p.badge||p.categoryLabel)+'</span><button class="quick-add" data-add="'+escapeHTML(p.id)+'" aria-label="Adicionar '+escapeHTML(p.name)+' à sacola">+</button></div><div class="product-info"><div class="product-category">'+escapeHTML(p.categoryLabel)+'</div><h3 class="product-title">'+escapeHTML(p.name)+'</h3><div class="product-price-row"><span class="product-price">'+money(p.price)+'</span>'+(p.oldPrice?'<span class="product-old-price">'+money(p.oldPrice)+'</span>':'')+'<span class="product-rating">'+escapeHTML(p.rating||"")+'</span></div></div></article>').join(""):'<p class="no-products">Nenhum produto nesta categoria por enquanto.</p>';
  }
  function addToCart(id){const p=products.find(item=>item.id===id);if(!p)return;const row=state.cart.get(id)||{product:p,quantity:0};row.quantity++;state.cart.set(id,row);renderCart();toast(p.name+" foi para sua sacolinha.");}
  function changeQuantity(id,delta){const row=state.cart.get(id);if(!row)return;row.quantity+=delta;if(row.quantity<=0)state.cart.delete(id);else state.cart.set(id,row);renderCart();}
  function renderCart(){
    const items=[...state.cart.values()];
    const count=items.reduce((sum,item)=>sum+item.quantity,0);
    const subtotal=items.reduce((sum,item)=>sum+item.product.price*item.quantity,0);
    $("#cart-count").textContent=count>99?"99+":count;
    $("#cart-summary").hidden=!items.length;
    if(!items.length){$("#cart-items").innerHTML='<div class="cart-empty"><span>🐾</span><h3>Sua sacolinha está vazia.</h3><p>Tem muita coisa boa esperando por vocês.</p><button class="button button-dark" id="continue-shopping">Explorar produtos</button></div>';$("#cart-subtotal").textContent=money(0);return;}
    $("#cart-items").innerHTML=items.map(({product:p,quantity})=>'<article class="cart-item"><img src="'+escapeHTML(p.image)+'" alt="'+escapeHTML(p.alt||p.name)+'"><div><h3>'+escapeHTML(p.name)+'</h3><div class="cart-item-price">'+money(p.price)+'</div><div class="quantity-controls"><button data-quantity="'+escapeHTML(p.id)+'" data-delta="-1" aria-label="Diminuir quantidade">−</button><span>'+quantity+'</span><button data-quantity="'+escapeHTML(p.id)+'" data-delta="1" aria-label="Aumentar quantidade">+</button></div></div><button class="remove-item" data-remove="'+escapeHTML(p.id)+'" aria-label="Remover '+escapeHTML(p.name)+'">×</button></article>').join("");
    $("#cart-subtotal").textContent=money(subtotal);
  }
  function openCart(){closeMenu();$("#cart-overlay").hidden=false;requestAnimationFrame(()=>$("#cart-overlay").classList.add("visible"));$("#cart-drawer").classList.add("open");$("#cart-drawer").setAttribute("aria-hidden","false");document.body.classList.add("drawer-open");$("#cart-close").focus();}
  function closeCart(){$("#cart-drawer").classList.remove("open");$("#cart-drawer").setAttribute("aria-hidden","true");$("#cart-overlay").classList.remove("visible");$("#cart-overlay").hidden=true;document.body.classList.remove("drawer-open");}
  function closeMenu(){const menu=$("#mobile-menu");if(menu){menu.classList.remove("open");$("#menu-toggle").setAttribute("aria-expanded","false");}}
  function whatsappUrl(message){const number=WHATSAPP_NUMBER.replace(/\D/g,"");return number?"https://wa.me/"+number+"?text="+encodeURIComponent(message):"";}
  function contact(message){const url=whatsappUrl(message);if(url){window.open(url,"_blank","noopener,noreferrer");return;}toast("Para ativar o WhatsApp, configure o número real em js/app.js.");}
  $("#product-grid").addEventListener("click",e=>{const btn=e.target.closest("[data-add]");if(btn)addToCart(btn.dataset.add);});
  $$(".filter-chip").forEach(btn=>btn.addEventListener("click",()=>{state.filter=btn.dataset.filter;$$(".filter-chip").forEach(chip=>chip.classList.toggle("active",chip===btn));renderProducts();}));
  $$("[data-category-link]").forEach(link=>link.addEventListener("click",()=>{state.filter=link.dataset.categoryLink;$$(".filter-chip").forEach(chip=>chip.classList.toggle("active",chip.dataset.filter===state.filter));renderProducts();}));
  $("#show-all").addEventListener("click",()=>{state.filter="todos";$$(".filter-chip").forEach(chip=>chip.classList.toggle("active",chip.dataset.filter==="todos"));renderProducts();});
  $("#cart-toggle").addEventListener("click",openCart);$("#cart-close").addEventListener("click",closeCart);$("#cart-overlay").addEventListener("click",closeCart);
  $("#cart-items").addEventListener("click",e=>{const q=e.target.closest("[data-quantity]");const rm=e.target.closest("[data-remove]");if(q)changeQuantity(q.dataset.quantity,Number(q.dataset.delta));if(rm)changeQuantity(rm.dataset.remove,-999);if(e.target.closest("#continue-shopping"))closeCart();});
  $("#checkout-button").addEventListener("click",()=>{if(!state.cart.size){toast("Adicione um produto antes de continuar.");return;}const lines=[...state.cart.values()].map(({product:p,quantity})=>quantity+"x "+p.name+" - "+money(p.price*quantity));const total=[...state.cart.values()].reduce((sum,row)=>sum+row.product.price*row.quantity,0);contact(WHATSAPP_GREETING+"\n\nMeu pedido:\n"+lines.join("\n")+"\n\nSubtotal: "+money(total)+"\nPode me informar as opções de entrega e pagamento?");});
  $("#contact-button").addEventListener("click",e=>{e.preventDefault();contact(WHATSAPP_GREETING);});
  $("#menu-toggle").addEventListener("click",()=>{const open=$("#mobile-menu").classList.toggle("open");$("#menu-toggle").setAttribute("aria-expanded",String(open));});
  $("#current-year").textContent=new Date().getFullYear();
  document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeCart();closeMenu();}});
  // Menu mobile injetado separadamente para manter a navegação acessível em telas pequenas.
  const mobile=document.createElement("nav");mobile.id="mobile-menu";mobile.className="mobile-nav";mobile.setAttribute("aria-label","Navegação móvel");mobile.innerHTML='<a href="#produtos">Produtos</a><a href="#beneficios">Por que a gente?</a><a href="#sobre">Nossa essência</a><a class="mobile-contact" href="#contato">Fale com a gente ↗</a>';$(".site-header").insertAdjacentElement("afterend",mobile);
  $$("a[href^='#']",mobile).forEach(a=>a.addEventListener("click",closeMenu));
  renderProducts();renderCart();
})();