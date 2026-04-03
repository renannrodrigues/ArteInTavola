// ============================================
// ARTE IN TAVOLA - Cardápio à La Carte JavaScript
// ============================================

import { initMobileMenu, initStickyNav, initSmoothScroll } from './main.js'

// ============================================
// MENU DATA - ARTE IN TAVOLA
// ============================================
const menuData = [
  // ========== ENTRADAS / APPETIZERS ==========
  {
    category: 'entradas',
    name: 'Bala de massa folhada recheada com cogumelos Paris frescos e presunto tipo Parma',
    description: 'Com mostarda Dijon e creme quatro queijos.',
    price: 'R$ 38,00',
    image: '/img/balafolhada.jpg'
  },
  {
    category: 'entradas',
    name: 'Couvert Arte in Tavola',
    description: 'Com baguete e focaccias artesanais com fermentação natural, grissini, salame, queijo colonial e patê',
    price: 'R$ 37,00',
    image: '/img/couvert.png'
  },

  // ========== SALADAS / SALADS ==========
  {
    category: 'saladas',
    name: 'A moda da casa',
    description: 'Mix de folhas, com tahine, azeite de oliva, mel, aceto balsâmico, confit de tomates cereja e lascas de parmesão.',
    price: 'R$ 29,00',
    image: '/img/saladacasa1.png'
  },

  // ========== ADICIONAIS / ADDITIONALS ==========
  {
    category: 'adicionais',
    name: 'Salmão grelhado',
    description: 'Salmão fresco (100g)',
    price: 'R$ 33,00',
    image: '/img/salmao.png'
  },
  {
    category: 'adicionais',
    name: 'Filé mignon grelhado',
    description: 'Escolha o ponto perfeito para você (100g)',
    price: 'R$ 29,00',
    image: '/img/fileadicional.jpg'
  },

  // ========== SOPAS / SOUPS ==========
  {
    category: 'sopas',
    name: 'Sopa de cebola gratinada ao estilo francês',
    description: 'Com pão e queijo colonial.',
    price: 'R$ 55,00',
    image: '/img/sopa de cebola.jpg'
  },
  {
    category: 'sopas',
    name: 'Sopa de capeletti com recheio de frango',
    description: 'Sopa de capeletti com caldo e recheio de frango.',
    price: 'R$ 55,00',
    image: '/img/capeleti.png'
  },

  // ========== PRIMEIRO PRATO / FIRST COURSES (RISOTOS) ==========
  {
    category: 'risotos',
    name: 'Risoto com camarões e abobrinha',
    description: 'Arroz arbóreo com camarões frescos e abobrinha salteada.',
    price: 'R$ 115,00',
    image: '/img/risotocamarao.jpg'
  },
  {
    category: 'risotos',
    name: 'Risoto de tomate seco, rúcula e cogumelos Paris',
    description: 'Risoto de tomate seco, rúcula e cogumelos Paris fresco',
    price: 'R$ 89,00',
    image: '/img/risototomate1.jpeg'
  },
  {
    category: 'risotos',
    name: 'Risoto de aspargos frescos',
    description: 'Risoto com aspargos salteados na manteiga frescos',
    price: 'R$ 74,00',
    image: '/img/risotoaspargo.jpg'
  },

  // ========== MASSAS FRESCAS / FRESH PASTA ==========
  {
    category: 'massas',
    name: 'Ravioli de bacalhau Gomes de Sá',
    description: 'Ravioli de bacalhau ao molho de tomate fresco.',
    price: 'R$ 115,00',
    image: '/img/ravioli.png',
    featured: true
  },
  {
    category: 'massas',
    name: 'Tortelloni de pato ao noccioli',
    description: 'Tortelloni de pato artesanal ao molho de noccioli',
    price: 'R$ 114,00',
    image: '/img/tortei.jpg'
  },
  {
    category: 'massas',
    name: 'Lasanha de coelho',
    description: 'Massa de lasanha artesanal com recheio de coelho desfiado',
    price: 'R$ 89,00',
    image: '/img/lasanha.jpg'
  },
  {
    category: 'massas',
    name: 'Tortéi ao molho de provolone, manjericão e farofa de presunto Parma',
    description: 'Tortéi com massa artesanal com molho provolone, manjericão e farofa de presunto Parma',
    price: 'R$ 88,00',
    image: '/img/tortei.jpg'
  },
  {
    category: 'massas',
    name: 'Tagliarini (bianco ou tricolori) ao molho quatro queijos ou sugo',
    description: 'Tagliarini (bianco ou tricolori) ao molho quatro queijos ou sugo',
    price: 'R$ 82,00',
    image: '/img/tagliarini.jpg'
  },

  // ========== PRATO PRINCIPAL / MAIN COURSES ==========
  {
    category: 'principais',
    name: 'Salmão em crosta de gergelim',
    description: 'Ao molho de ervas finas com purê de batata baroa estilo Bairro.',
    price: 'R$ 115,00',
    image: '/img/salmaomandioquinha1.jpeg',
    featured: true
  },
  {
    category: 'principais',
    name: 'Codorna com massa caseira da Vó Nila',
    description: 'Massa artesanal cortada na faca acompanhada da codorna.',
    price: 'R$ 103,00',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop'
  },
  {
    category: 'principais',
    name: 'Stinco de cordeiro',
    description: 'Com tagliarini bianco aos três cogumelos.',
    price: 'R$ 126,00',
    image: '/img/stinco1.jpg'
  },
  {
    category: 'principais',
    name: 'Ossobuco com risoto de açafrão',
    description: 'Risoto de açafrão com ossobuco cozido lentamente.',
    price: 'R$ 115,00',
    image: '/img/risotoossobuco.jpg'
  },
  {
    category: 'principais',
    name: 'Filé mignon com rúcula ao aceto balsâmico e batata assada',
    description: 'Filé mignon grelhado com rúcula, molho de aceto balsâmico e batata assada na manteiga de ervas finas.',
    price: 'R$ 89,00',
    image: '/img/filecombatata.jpg'
  },
  {
    category: 'principais',
    name: 'Risoto de ervas finas com frango ou alcatra grelhado',
    description: 'Risoto de ervas finas com frango ou alcatra grelhado',
    price: 'R$ 63,00',
    image: '/img/risotoervasfile1.jpeg'
  },

  // ========== SOBREMESAS / DESSERTS ==========
  {
    category: 'sobremesas',
    name: 'Semifredo',
    description: 'Consulte sabores disponíveis.',
    price: 'R$ 29,00',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop'
  },
  {
    category: 'sobremesas',
    name: 'Creme brulée',
    description: 'Açúcar mascavo maçaricado na mesa do cliente',
    price: 'R$ 29,00',
    image: '/img/brulee.jpg'
  },
  {
    category: 'sobremesas',
    name: 'Sorvete natural',
    description: 'Sorvete natural artesanal feito com ingredientes frescos e sem conservantes. Consultar sabores.',
    price: 'R$ 25,00',
    image: '/img/sorvete1.jpg'
  }
]

// ============================================
// FILTER MENU BY CATEGORY
// ============================================
function filterMenu(category) {
  const filteredItems = category === 'todos' 
    ? menuData 
    : menuData.filter(item => item.category === category)
  
  renderMenuItems(filteredItems)
  updateActiveFilter(category)
}

// ============================================
// GET CATEGORY LABEL
// ============================================
function getCategoryLabel(category) {
  const labels = {
    'entradas': 'Entradas',
    'saladas': 'Saladas',
    'sopas': 'Sopas',
    'risotos': 'Risotos',
    'massas': 'Massas Frescas',
    'principais': 'Principais',
    'sobremesas': 'Sobremesas',
    'adicionais': 'Adicionais'
  }
  return labels[category] || category
}

// ============================================
// RENDER MENU ITEMS - ESTILO BOX COM IMAGEM
// ============================================
function renderMenuItems(items) {
  const menuGrid = document.getElementById('menu-grid')
  
  if (!menuGrid) return
  
  // Add fade out animation
  menuGrid.style.opacity = '0'
  
  setTimeout(() => {
    menuGrid.innerHTML = items.map(item => `
      <div class="reveal">
        <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
          <!-- Imagem -->
          <div class="relative h-56 overflow-hidden">
            <img 
              src="${item.image}" 
              alt="${item.name}"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div class="absolute top-4 left-4">
              <span class="inline-block bg-tavola-green/90 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide shadow-lg">
                ${getCategoryLabel(item.category)}
              </span>
            </div>
          </div>
          
          <!-- Conteúdo -->
          <div class="p-6 flex-grow flex flex-col">
            <h3 class="text-xl font-display font-bold text-tavola-green mb-3 leading-tight">
              ${item.name}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
              ${item.description}
            </p>
            <div class="pt-4 border-t border-gray-200">
              <span class="text-3xl font-bold text-tavola-green">
                ${item.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    `).join('')
    
    // Fade in animation
    menuGrid.style.opacity = '1'
    
    // Re-initialize reveal animations
    const reveals = menuGrid.querySelectorAll('.reveal')
    reveals.forEach((reveal, index) => {
      setTimeout(() => {
        reveal.classList.add('active')
      }, index * 50)
    })
  }, 300)
}

// ============================================
// UPDATE ACTIVE FILTER BUTTON
// ============================================
function updateActiveFilter(activeCategory) {
  const filterButtons = document.querySelectorAll('.filter-btn')
  
  filterButtons.forEach(btn => {
    const category = btn.dataset.category
    
    if (category === activeCategory) {
      btn.classList.remove('bg-white', 'text-tavola-green', 'hover:bg-gray-50')
      btn.classList.add('bg-tavola-green', 'text-white')
    } else {
      btn.classList.remove('bg-tavola-green', 'text-white')
      btn.classList.add('bg-white', 'text-tavola-green', 'hover:bg-gray-50')
    }
  })
}

// ============================================
// INITIALIZE MENU PAGE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize common functions
  initMobileMenu()
  initStickyNav()
  initSmoothScroll()
  
  // Render all menu items initially
  renderMenuItems(menuData)
  
  // Setup filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn')
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category
      filterMenu(category)
    })
  })
  
  // Reveal animations for initial items
  setTimeout(() => {
    const reveals = document.querySelectorAll('.reveal')
    reveals.forEach((reveal, index) => {
      setTimeout(() => {
        reveal.classList.add('active')
      }, index * 50)
    })
  }, 100)
  
  console.log('🍽 Página de Cardápio à La Carte carregada!')
  console.log(`${menuData.length} itens no menu`)
})