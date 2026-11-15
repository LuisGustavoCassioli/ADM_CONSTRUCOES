# ADM Construções e Reformas em Geral — Site Institucional

Site institucional moderno, responsivo, acessível e otimizado para SEO local, desenvolvido para a **ADM Construções e Reformas em Geral**, marca conduzida pelo profissional autônomo **Ademir** na **Zona Leste de São Paulo — SP**.

---

## 1. Tecnologias Utilizadas

- **React 18** + **TypeScript**
- **Vite** (bundler rápido e otimizado)
- **HTML5 Semântico** e **CSS3 Modules** com Custom Properties (`#F47721`, `#171717`, `#F4F4F4`)
- **SEO Técnico e Local** (Meta tags, Open Graph, Schema.org `HomeAndConstructionBusiness`, `sitemap.xml`, `robots.txt`)
- **Arquitetura para Analytics** (Google Tag Manager, GA4, Microsoft Clarity)
- **Configuração para Deploy na Vercel** (`vercel.json`)

---

## 2. Como Executar Localmente

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Copie o arquivo `.env.example` para `.env`:
   ```bash
   cp .env.example .env
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Para gerar o build de produção:
   ```bash
   npm run build
   ```

---

## 3. Como Configurar os Dados Oficiais Pendentes

Para manter 100% de fidelidade comercial e não exibir dados fictícios, o projeto centraliza as configurações no arquivo `.env` e na pasta `src/data/`:

### 3.1. Número do WhatsApp
Configure no arquivo `.env` (ou nas Environment Variables da Vercel):
```env
VITE_WHATSAPP_NUMBER=55119XXXXXXXX
VITE_DISPLAY_PHONE=(11) 9XXXX-XXXX
```
Assim que configurado, todos os botões de orçamento e o botão flutuante passam a abrir diretamente a conversa no WhatsApp com mensagens personalizadas por serviço.

### 3.2. Logotipo Original da ADM
Coloque o arquivo original da logo em `public/assets/logo/logo-adm.png` (ou defina o caminho em `VITE_LOGO_PATH`). O componente `<Logo />` carregará automaticamente a imagem original.

### 3.3. Fotografias Reais de Obras (Portfólio e Hero)
- **Hero:** adicione a foto em `public/assets/` e preencha `VITE_HERO_IMAGE_PATH`.
- **Portfólio:** adicione as fotos reais das obras executadas por Ademir em `public/assets/portfolio/` e preencha o campo `imageUrl` em `src/data/portfolio.ts`.

### 3.4. Confirmação de Serviços
Em `src/data/services.ts`, cada categoria possui a flag `enabled: true/false` e `scopeNote`, permitindo ajustar rapidamente os serviços confirmados por Ademir.

