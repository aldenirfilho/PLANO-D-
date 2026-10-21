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

O diretório de doações aponta para canais oficiais de Associação Caatinga, Projeto Tamar, SOS Mata Atlântica, APAE Fortaleza, Instituto Verdeluz, UNICEF, MSF, Cáritas Brasileira, Pastoral da Criança e Gerando Falcões. QR codes abrem os sites das instituições; não são códigos de pagamento. Chaves Pix só aparecem quando conferidas em fonte oficial. Não há intermediação financeira nem promessa de parceria. As fontes e a data de consulta estão em `dist/dados/doacoes.json`; a atualização é manual.

A APAE Fortaleza publica expressamente seu CNPJ como chave Pix; o valor copiável usa os mesmos dígitos sem pontuação. Para o Instituto Verdeluz, não foi reproduzida chave fixa sem confirmação atual: o cartão distingue o canal geral de contribuição e o canal Asaas com Pix, que exibia doação única de R$ 30 na consulta de 20/10/2026. Relatórios vinculados não foram auditados. O site não publica registros pessoais de doação.

## Identidade aeroespacial e causas ambientais

A interface usa uma identidade aeroespacial escura com guardião conceitual original, preservando fé, liberdade de consciência e cuidado. Caatinga e SOS Mata Atlântica exibem Pix publicado em suas páginas oficiais. O Projeto Tamar é apresentado com suas formas oficiais de apoio e transparência; não foi inventada chave Pix nem convertido seu CNPJ em chave de pagamento. O diretório reúne dez instituições e oportunidades de apoio.


### Cinco cavaleiros do universo PLANO D

Arte de ficção criada com a ferramenta integrada de geração de imagens, em 20/10/2026, a pedido do idealizador. A versão PNG original está em `dist/assets/cavaleiros-plano-d.png`; a versão WebP usada na hero preserva a composição 1536×1024 e reduz o peso para 481.518 bytes. A página apresenta Nexo, Raiz, Brasa, Prisma e Lúmen como alegorias dos valores do projeto, com crédito da arte e distinção do texto bíblico. O arquivo SVG anterior permanece preservado.
