// ─────────────────────────────────────────────────────────────────────────────
// COPY.JS — Fuente única de TODO el texto visible de la landing.
// Doc §7: cero texto hardcodeado en componentes. Si está en pantalla, está aquí.
// ─────────────────────────────────────────────────────────────────────────────

export const copy = {
  // ── SEO / METADATA (Layout.astro lo lee) ──────────────────────────────────
  metadata: {
    lang: 'pt-BR',
    title: '150 receitas de drinks gourmet',
    description:
      'Receitas de drinks prontas para vender — ingredientes simples, produção rápida e margem de lucro alta. Comece a faturar até R$3.000/mês com bônus exclusivos.',
    canonical: 'https://150receitascopao.netlify.app',
    ogImage: '/og-cover.jpg',
    ogType: 'website',
    siteName: 'MUNDO DOS DRINKS',
  },

  // ── 1. TIMER STICKY ARRIBA ────────────────────────────────────────────────
  timerBar: {
    icon: '⏰',
    label: 'Promoção encerra em:',
    initialMinutes: 9,
    initialSeconds: 57,
  },

  // ── 2. HERO ───────────────────────────────────────────────────────────────
  hero: {
    tag: '🍋 Oferta Exclusiva',
    titleHighlight: '150 Receitas de copão Gourmet',
    titleConnector: 'para Vender',
    titleHighlightGreen: 'R$3.000',
    titleEnd: 'Começando do Zero',
    deliveryLabel: 'Você recebe imediatamente no',
    deliveryChannels: [
      { label: 'WhatsApp', kind: 'whatsapp' },
      { label: 'Email', kind: 'email' },
    ],
    videoAlt: 'Apresentação do kit 150 receitas de drinks gourmet',
    ctaLabel: '✅ QUERO GARANTIR MINHAS RECEITAS AGORA',
    ctaSub: '🔒 Compra 100% segura • Acesso imediato',
  },

  // ── 3. BENEFÍCIOS ─────────────────────────────────────────────────────────
  benefits: {
    intro:
      'Receitas de drinks prontas para vender — ingredientes simples, produção rápida,',
    introStrong: 'alto valor percebido e margem de lucro que vai te surpreender!',
    items: [
      'Qualquer pessoa consegue fazer',
      'Sem cozinha profissional ou equipamentos caros',
      'Receitas prontas, testadas e com custo baixo',
      'Perfeito para vender no WhatsApp, rua ou delivery',
    ],
    ctaLabel: '🍹 QUERO GARANTIR MINHAS RECEITAS AGORA',
  },

  // ── 4. CARRUSEL DE RECETAS ────────────────────────────────────────────────
  carousel: {
    title: '🍹 Algumas das receitas que você irá',
    titleHighlight: 'aprender e lucrar!',
    slides: [
      { caption: 'Copão Beijo Doce', alt: 'Drink Copão Beijo Doce' },
      {
        caption: 'Espanhola de Vinho c/ Maracujá',
        alt: 'Drink Espanhola de Vinho com Maracujá',
      },
      { caption: 'MaracuBeats Cremosa', alt: 'Drink MaracuBeats Cremosa' },
      { caption: 'Batida de Bala Halls', alt: 'Drink Batida de Bala Halls' },
      { caption: 'Drink do Verão', alt: 'Drink do Verão' },
      {
        caption: 'Caipirinha de Maracujá c/ Café',
        alt: 'Drink Caipirinha de Maracujá com Café',
      },
    ],
    prevLabel: 'Slide anterior',
    nextLabel: 'Próximo slide',
    dotLabel: 'Ir para o slide',
  },

  // ── 5. BÔNUS ──────────────────────────────────────────────────────────────
  bonuses: {
    title: '🎁 E ainda tem',
    titleHighlight: 'BÔNUS!',
    items: [
      {
        tag: 'Bônus 1',
        title: '50 Receitas Alcoólicas de Batidas na Garrafa',
        description: 'Receitas prontas para vender, sem os bônus exclusivos.',
        alt: '50 Receitas Alcoólicas de Batidas na Garrafa',
      },
      {
        tag: 'Bônus 2',
        title: 'Tabela de Precificação — Quanto Cobrar em Cada Receita',
        description:
          'Saiba exatamente quanto cobrar para lucrar de verdade em cada drink que vender.',
        alt: 'Tabela de Precificação dos drinks',
      },
      {
        tag: 'Bônus 3',
        title: '✅ Roteiro Pronto: Como Anunciar no WhatsApp e Fechar Vendas',
        description: 'Scripts prontos para você copiar, colar e já começar a vender.',
        alt: 'Roteiro de vendas pelo WhatsApp',
      },
      {
        tag: 'Bônus 4',
        title: 'Videoaula: Como Embalar e Apresentar para Vender Mais',
        description:
          'Aprenda a deixar seus produtos irresistíveis e cobrar mais caro por isso.',
        alt: 'Videoaula sobre embalagem e apresentação',
      },
    ],
  },

  // ── 6. PREÇO ──────────────────────────────────────────────────────────────
  pricing: {
    sectionId: 'precos',
    title: 'Escolha como quer começar hoje:',
    complete: {
      badge: '⭐ Mais Vendido',
      title: 'Kit Completo +150 Receitas de Drinks',
      descriptionLead: '+150 receitas de drinks na garrafa prontas para vender + todos os',
      descriptionStrong: 'bônus exclusivos',
      descriptionTail: 'para você faturar até R$3.000/mês.',
      mockupAlt: 'Mockup do Kit 150 Receitas de Copão Gourmet',
      includesLabel: '🎁 Inclui todos os bônus:',
      items: [
        '+150 receitas de drinks gourmet',
        'Lista de fornecedores baratos para garrefinhas',
        'Tabela de precificação — todos os drinks',
        'Roteiro de vendas pelo WhatsApp',
        'Videoaula: como embalar e vender mais',
      ],
      strikePrice: 'De R$59,90',
      price: 'R$24,90',
      priceNote: 'acesso imediato',
      ctaLabel: '🛒 QUERO O KIT COMPLETO',
      footer: '✅ Acesso imediato · E-mail + WhatsApp · Garantia de 7 dias',
    },
  },

  // ── 7. GARANTIA ───────────────────────────────────────────────────────────
  guarantee: {
    icon: '🛡️',
    title: 'Garantia de 7 dias',
    description:
      'Se por qualquer motivo você não gostar, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.',
  },

  // ── 8. FAQ ────────────────────────────────────────────────────────────────
  faq: {
    title: 'Dúvidas',
    titleHighlight: 'frequentes:',
    items: [
      {
        q: 'Preciso saber cozinhar para comprar?',
        a: 'Não! As receitas são simples e qualquer pessoa consegue fazer, mesmo sem experiência na cozinha.',
      },
      {
        q: 'Preciso de equipamentos caros ou cozinha profissional?',
        a: 'Não precisa. Tudo pode ser feito em casa com utensílios simples que você provavelmente já tem.',
      },
      {
        q: 'Onde vou vender os drinks?',
        a: 'Você pode vender no WhatsApp, nas redes sociais, em festas, por delivery ou até na rua. O bônus 3 te ensina exatamente como fazer isso.',
      },
      {
        q: 'Quanto posso cobrar por cada garrafa?',
        a: 'Com a tabela de precificação incluída, você vai saber exatamente quanto cobrar para ter uma margem de lucro alta em cada venda.',
      },
      {
        q: 'Como recebo após a compra?',
        a: 'O acesso é imediato! Você recebe no e-mail e no WhatsApp assim que o pagamento for confirmado.',
      },
      {
        q: 'Tenho garantia se não gostar?',
        a: 'Sim! Você tem 7 dias de garantia total. Se não gostar por qualquer motivo, devolvemos 100% do valor pago.',
      },
    ],
  },

  // ── 9. URGÊNCIA ──────────────────────────────────────────────────────────
  urgency: {
    text: '⏰ Não fique esperando — cada dia sem vender é dinheiro perdido!',
  },

  // ── 10. CTA FINAL ─────────────────────────────────────────────────────────
  finalCta: {
    ctaLabel: '🍹 QUERO ACESSO ÀS 150 RECEITAS AGORA',
    subText: '🔒 Acesso imediato • Garantia de 7 dias • Pagamento seguro',
  },

  // ── 11. SEGURIDAD (badges) ────────────────────────────────────────────────
  security: {
    items: [
      { icon: '🔒', label: 'SSL Seguro' },
      { icon: '💳', label: 'Pagamento Protegido' },
      { icon: '📲', label: 'Acesso Imediato' },
    ],
  },

  // ── 12. FOOTER ────────────────────────────────────────────────────────────
  footer: {
    text: '© 2026 · MUNDO DOS DRINKS · Todos os direitos reservados',
  },

  // ── A11Y / texto auxiliar (no visible "directamente" pero usado en aria) ──
  a11y: {
    skipToContent: 'Ir para o conteúdo principal',
  },
};
