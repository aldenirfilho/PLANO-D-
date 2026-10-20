# PLANO D · Site

Site estático de comunidade, cuidado e propósito para Sobral, com biblioteca de 24 leituras e seis temas.

## Uso local

Execute `python3 -m http.server 4173 --directory dist` e abra `http://127.0.0.1:4173`.
Não há instalação de dependências nem etapa de compilação.

## Conteúdo e manutenção

- `dist/index.html`, `styles.css` e `app.js`: interface e interação.
- `dist/dados/catalogo.json`: projeção pública da edição 0.3.0 do acervo bíblico.
- `dist/dados/procedencia.json`: procedência do catálogo, separada da versão do site.
- `dist/biblioteca.html`: alternativa de leitura sem JavaScript.
- `dist/direitos.html`: autoria, fontes, direitos e privacidade.
- `.openai/hosting.json`: identidade do site e diretório publicado.

Os textos completos abrem o site de origem. A busca é local. Favoritos usam o armazenamento deste navegador; não há contas, telemetria ou coleta de relatos.

A revisão teológica independente da origem permanece pendente. Alterações editoriais exigem conferência humana; publicação técnica não equivale a essa revisão.

## Compartilhamento e doações

A página inclui QR estático do endereço público, download em PNG e link de WhatsApp com mensagem revisável. O link não envia mensagens automaticamente.

O diretório de doações aponta para canais oficiais de UNICEF, MSF, Cáritas Brasileira, Pastoral da Criança e Gerando Falcões. QR codes abrem os sites das instituições; não são códigos de pagamento. Chaves Pix só aparecem quando conferidas em fonte oficial. Não há intermediação financeira nem promessa de parceria. As fontes e a data de consulta estão em `dist/dados/doacoes.json`; a atualização é manual.
