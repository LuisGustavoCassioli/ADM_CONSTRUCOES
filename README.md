# ADM Construções e Reformas em Geral — Site Institucional

Site institucional moderno, responsivo, acessível e otimizado para SEO local e Google Search Console, desenvolvido para a **ADM Construções e Reformas em Geral**, marca conduzida pelo profissional autônomo **Ademir** na **Zona Leste de São Paulo — SP**.

---

## 1. Tecnologias Utilizadas

- **React 18** + **TypeScript**
- **Vite** (bundler ultrarrápido com minificação e compressão otimizadas)
- **HTML5 Semântico** e **CSS3 Modules** com Custom Properties (`#F47721`, `#171717`, `#F4F4F4`)
- **SEO Técnico Avançado e Local** (Meta tags, Open Graph, Twitter Cards, Schema.org JSON-LD com `HomeAndConstructionBusiness` e `FAQPage`, `robots.txt`, `sitemap.xml`, `manifest.json`)
- **Arquitetura para Analytics e Marketing** (Google Search Console, Google Tag Manager, GA4, Microsoft Clarity)
- **Configuração para Deploy na Vercel** (`vercel.json` com cache e headers de segurança)

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
4. Para gerar e testar o build de produção:
   ```bash
   npm run build
   npm run preview
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
A logo original já se encontra em `public/assets/logo/logo-adm.jpg`.

### 3.3. Fotografias Reais de Obras (Portfólio e Hero)
- **Hero:** adicione a foto em `public/assets/` e preencha `VITE_HERO_IMAGE_PATH`.
- **Portfólio:** adicione as fotos reais das obras executadas por Ademir em `public/assets/portfolio/` e preencha o campo `imageUrl` em `src/data/portfolio.ts`.

### 3.4. Confirmação de Serviços
Em `src/data/services.ts`, cada categoria possui a flag `enabled: true/false` e `scopeNote`, permitindo ajustar rapidamente os serviços confirmados por Ademir.

---

## 4. Guia de SEO Técnico e Google Search Console

O projeto foi totalmente estruturado para indexação máxima no Google e validação no **Google Search Console**:

### 4.1. Verificação no Google Search Console
Ao cadastrar o domínio no Search Console (por exemplo, `https://admreformasemgeral.com.br`):
1. **Opção 1 (Tag HTML):** O Google fornecerá uma tag como `<meta name="google-site-verification" content="SEU_CODIGO_AQUI" />`. Basta colar o código no atributo `content` em `index.html` ou definir a variável `VITE_GSC_VERIFICATION=SEU_CODIGO_AQUI` no painel da Vercel / `.env`.
2. **Opção 2 (Registro DNS):** Recomendado caso tenha acesso ao painel do domínio (Registro.br, Cloudflare, etc.).

### 4.2. Envio do Sitemap XML
Após verificar o site no Search Console:
- Acesse o menu lateral **Sitemaps**.
- No campo *Adicionar um novo sitemap*, digite apenas: `sitemap.xml`
- Clique em **Enviar**.
- O Google rastreará a URL canônica e indexará as imagens associadas.

### 4.3. Arquivos de Indexação Implementados
- `public/robots.txt`: orienta robôs de busca (Googlebot, Bingbot) e aponta diretamente para o sitemap canônico oficial.
- `public/sitemap.xml`: arquivo XML no padrão oficial (com `lastmod` real e namespace de imagens para indexação visual no Google Imagens).
- `public/manifest.json`: manifesto PWA para navegadores móveis e desktop, com atalhos, tema e ícones.
- `index.html` (JSON-LD): marcação estruturada `HomeAndConstructionBusiness` focada em dados 100% verídicos (nome oficial, URL oficial, logo real, área atendida Zona Leste de SP sem invenção de endereço/coordenadas físicas e catálogo de serviços).
