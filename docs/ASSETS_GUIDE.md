# Guia de Mídias e Assets — ADM Construções e Reformas em Geral

Este documento centraliza as instruções para inserção de fotos e logos oficiais da ADM.
Como boa prática de segurança, estas instruções internas foram migradas para a pasta `docs/` para não ficarem expostas publicamente no servidor web (diretório `public/`).

---

## 1. Logotipo Oficial (`public/assets/logo/`)

- **Arquivo atual:** `public/assets/logo/logo-adm.jpg`
- **Dimensões recomendadas:** Imagem quadrada de alta resolução (ex: 1024x1024 px).
- **Formatos aceitos:** JPEG, PNG ou SVG.
- Caso o arquivo tenha outro nome ou extensão, configure a variável `VITE_LOGO_PATH` no arquivo `.env` ou nas variáveis de ambiente da Vercel.

---

## 2. Fotografias Reais de Obras e Reformas (`public/assets/portfolio/`)

- **Diretório:** `public/assets/portfolio/`
- **Diretriz de autenticidade:** Conforme orientação de Ademir, **não utilize fotos genéricas de bancos de imagens**. Adicione exclusivamente fotografias reais dos trabalhos executados.
- Ao adicionar novas fotos neste diretório, cadastre os caminhos e legendas no arquivo `src/data/portfolio.ts`.
- Formato recomendado: WebP ou JPG otimizado (largura aproximada de 800px a 1200px para desempenho móvel).
