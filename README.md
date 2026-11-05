# Modelo de Site & Bio Links - Nathalia Melo | Psicologia Clínica (100% Online)

Este projeto contém a estrutura pronta de um site moderno, elegante e acolhedor para a psicóloga **Nathalia Melo** voltado exclusivamente ao atendimento **100% online** (para todo o Brasil e brasileiros no exterior), além de uma página vertical otimizada para o link da bio das redes sociais (Instagram, TikTok, etc.).

---

## 🎨 Paleta de Cores Utilizada
- **Tom Principal:** `#535548` (Verde oliva terroso sofisticado, transmite calma, acolhimento e profissionalismo)
- **Branco:** `#FFFFFF` (Clareza, respiro visual e leveza)
- **Preto & Tons Escuros:** `#141414` e `#222220` (Contraste elegante e legibilidade)
- **Acento WhatsApp:** `#25D366`

---

## 📁 Estrutura dos Arquivos

```
.
├── index.html     # Página principal completa do site
├── links.html     # Indexador de links para a bio (Linktree personalizado)
├── style.css      # Estilização do site principal
├── links.css      # Estilização da página de links da bio
├── script.js      # Interatividades (FAQ sanfona, menu mobile, etc.)
└── README.md      # Este guia de personalização
```

---

## ✏️ Onde Substituir os Dados Pessoais

### 1. Logo
- No arquivo [`index.html`](file:///Users/danieldouglas/bits/code/progress/pessoal/static-psinath-site/index.html#L38-L48), localize o bloco `logo-area`.
- Substitua a div `.logo-placeholder` pela imagem da sua logo:
  ```html
  <img src="caminho/para/sua-logo.png" alt="Nathalia Melo Psicologia" class="logo-img">
  ```

### 2. Fotos (Principal e Secundária)
- **Foto Principal do Site (`index.html`):** Na seção Hero, está apontando para `assets/img/nathalia.jpg`.
- **Foto Secundária (`index.html`):** Na seção Sobre Mim, localize o comentário:
  ```html
  <!-- ESPAÇO SECUNDÁRIO PARA FOTO PROFISSIONAL OU DO AMBIENTE -->
  <!-- <img src="assets/img/sua-foto-secundaria.jpg" alt="Nathalia Melo" class="about-photo-img"> -->
  ```
  Basta descomentar a tag `<img>` e apontar para o arquivo da foto.
- **Foto do Perfil (`links.html`):** Já configurada apontando para `assets/img/nathalia.jpg`.

### 3. Vídeo de Apresentação (Frame de Celular)
- Na seção `video-section` em [`index.html`](file:///Users/danieldouglas/bits/code/progress/pessoal/static-psinath-site/index.html), você encontra o mockup de celular.
- Para colocar seu vídeo em formato vertical (Reels/Shorts):
  - **Opção 1 (Arquivo MP4 local):**
    ```html
    <video class="phone-video-media" controls poster="assets/img/capa-video.jpg">
      <source src="assets/video/apresentacao.mp4" type="video/mp4">
    </video>
    ```
  - **Opção 2 (Vídeo do YouTube ou Vimeo):**
    ```html
    <iframe class="phone-video-media" src="https://www.youtube.com/embed/SEU_VIDEO_ID" frameborder="0" allowfullscreen></iframe>
    ```

### 3. Número de Telefone e WhatsApp
- Substitua o número mocado `5511999999999` e a máscara `(11) 99999-9999` pelo seu WhatsApp real em todos os links `wa.me` presentes em `index.html` e `links.html`.

### 4. CRP
- Substitua o placeholder `CRP 06/123456` pelo seu registro profissional definitivo.

---

## 🚀 Como Visualizar e Testar Localmente
Você pode abrir os arquivos diretamente em qualquer navegador dando dois cliques em `index.html` ou `links.html`.
