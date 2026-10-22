#!/usr/bin/env python3
"""Gera as cinco fichas estáticas e os cartões, sem dependências externas."""
from pathlib import Path
from html import escape
import json
import re

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
characters = json.loads((DIST / 'dados/cavaleiros.json').read_text())
assert [c['id'] for c in characters] == ['nexo', 'raiz', 'brasa', 'prisma', 'lumen']
assert all(len(c['powers']) == 3 for c in characters)
e = lambda value: escape(str(value), quote=True)
brand = '<span class="brand-mark" aria-hidden="true">P<span>↗</span>D</span><span class="brand-name">PLANO D<small>360 X · SOBRAL–CEARÁ</small></span>'
alts = {
    'nexo': 'Nexo, cavaleiro cósmico de armadura escura, crânio luminoso e aura flamejante ciano, com sua moto espacial',
    'raiz': 'Raiz, cavaleiro cósmico com armadura, vegetação e aura flamejante verde, junto de sua moto espacial',
    'brasa': 'Brasa, cavaleiro cósmico de armadura negra, crânio luminoso e fogo laranja, com sua moto flamejante',
    'prisma': 'Prisma, cavaleira cósmica de armadura escura e aura violeta com luzes prismáticas e sua moto espacial',
    'lumen': 'Lúmen, cavaleiro cósmico de armadura branca e dourada, crânio luminoso e aura de fogo dourado, com sua moto espacial',
}
cards = []
(DIST / 'cavaleiros').mkdir(exist_ok=True)
for index, c in enumerate(characters):
    ident, name, aura = c['id'], e(c['name']), e(c['color'])
    image = f'../assets/cavaleiros/{ident}.webp'
    powers = ''.join(f'<article class="power-card"><p class="tiny-label">PODER {n:02d}</p><h3>{e(p["name"])}</h3><p>{e(p["description"])}</p></article>' for n, p in enumerate(c['powers'], 1))
    causes = ''.join(f'<a class="button button-secondary" href="../{e(cause["href"])}">{e(cause["label"])} ↗</a>' for cause in c['causes'])
    team = ''.join(f'<a href="{e(other["id"])}.html"'+(' aria-current="page"' if other['id'] == ident else '')+f'>{e(other["name"])}</a>' for other in characters)
    previous, following = characters[(index - 1) % 5], characters[(index + 1) % 5]
    history = ''.join(f'<p>{e(p)}</p>' for p in c['history'].split('\n\n'))
    html = f'''<!doctype html>
<html lang="pt-BR">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#080d18">
<title>{name} · Os cinco cavaleiros · PLANO D</title><meta name="description" content="{e(c['tagline'])} Conheça a história, os três poderes e a missão de {name}, personagem do universo ficcional do PLANO D.">
<link rel="icon" href="../assets/marca.svg" type="image/svg+xml"><link rel="stylesheet" href="../styles.css"><link rel="stylesheet" href="../cavaleiros.css">
<link rel="canonical" href="https://plano-d-comunidade.aldenirmed.chatgpt.site/cavaleiros/{ident}.html">
<meta property="og:title" content="{name} · PLANO D"><meta property="og:description" content="{e(c['tagline'])}"><meta property="og:type" content="article"><meta property="og:image" content="https://plano-d-comunidade.aldenirmed.chatgpt.site/assets/cavaleiros/{ident}.webp">
</head>
<body class="character-page" style="--aura:{aura}">
<a class="skip-link" href="#conteudo">Ir para a ficha</a>
<header class="site-header profile-header"><div class="container header-inner"><a class="brand" href="../index.html" aria-label="PLANO D, início">{brand}</a><a class="text-link profile-back" href="../index.html#cavaleiros">← Voltar aos cinco cavaleiros</a></div></header>
<main id="conteudo" class="profile-main"><div class="container">
<nav class="profile-path" aria-label="Caminho da página"><a href="../index.html">PLANO D</a><span aria-hidden="true">/</span><a href="../index.html#cavaleiros">Cavaleiros</a><span aria-hidden="true">/</span><span aria-current="page">{name}</span></nav>
<section class="profile-hero" aria-labelledby="profile-title">
  <figure class="profile-art"><a href="{image}" target="_blank" rel="noopener noreferrer" aria-label="Abrir retrato completo de {name}"><img src="{image}" width="1024" height="1536" alt="{e(alts[ident])}" fetchpriority="high"></a><figcaption>Retrato conceitual gerado com assistência de IA. <a href="{image}" download="{ident}-plano-d.webp">Baixar retrato ↓</a></figcaption></figure>
  <div class="profile-copy"><p class="eyebrow">ARQUIVO DOS CAVALEIROS · {index+1:02d} / 05</p><h1 id="profile-title">{name}</h1><p class="profile-tagline">{e(c['tagline'])}</p><p class="profile-virtue">{e(c['virtue'])}</p><div class="hero-actions"><a class="button button-primary" href="#historia">Conhecer a história ↓</a><a class="text-link" href="#missao">Da missão à vida real ↓</a></div><p class="profile-note">Personagem e poderes ficcionais do universo PLANO D. Fé, neurodiversidade e cuidado socioambiental inspiram sua jornada.</p></div>
</section>
<section class="profile-section profile-history" id="historia" aria-labelledby="history-title"><div><p class="eyebrow">ORIGEM E TRANSFORMAÇÃO</p><h2 id="history-title">Como nasceu<br>essa chama.</h2></div><div class="profile-prose">{history}</div></section>
<section class="profile-section" id="poderes" aria-labelledby="powers-title"><div class="powers-heading"><h2 id="powers-title">Poderes<br>do cavaleiro.</h2><p>Na ficção, a força de {name} ganha forma nestas três habilidades. Cada poder expressa um compromisso de cuidado.</p></div><div class="power-grid">{powers}</div></section>
<section class="profile-section profile-mission" id="missao" aria-label="Missão e gesto na vida real"><article class="mission-panel"><p class="eyebrow">NO UNIVERSO DA HISTÓRIA</p><h2>A missão de {name}</h2><p>{e(c['mission'])}</p></article><article class="mission-panel"><p class="eyebrow">UM PASSO POSSÍVEL HOJE</p><h2>Na vida real</h2><p>{e(c['realAction'])}</p></article></section>
<section class="profile-section profile-causes" aria-labelledby="causes-title"><div><h2 id="causes-title">Causas para conhecer.</h2><p>Explore a atuação, os canais oficiais de apoio e a transparência no diretório do PLANO D. A história é uma inspiração; estas instituições reais atuam de forma independente do universo ficcional.</p></div><div class="cause-links">{causes}</div></section>
<section class="profile-section" aria-labelledby="hq-title"><p class="eyebrow">HQ 01 · A ORIGEM DOS CINCO</p><h2 id="hq-title">Quando cinco luzes<br>se encontram.</h2><p class="profile-prose">Descubra como {name} se uniu aos outros cavaleiros para enfrentar a Cobiça, partilhar decisões e proteger a vida. Oito páginas, 24 quadros e uma versão em texto para ler no seu ritmo.</p><div class="hero-actions"><a class="button button-primary" href="../hq/">Ler a HQ de origem ↗</a><a class="text-link" href="../hq/texto.html">Ler em texto ↗</a></div></section>
<section class="profile-section" aria-labelledby="team-title"><p class="eyebrow">CINCO CAMINHOS · UM PROPÓSITO</p><h2 id="team-title">Conheça a equipe.</h2><nav class="profile-team-nav" aria-label="Fichas dos cinco cavaleiros">{team}</nav><nav class="profile-turn-page" aria-label="Explorar outras fichas"><a href="{e(previous['id'])}.html">← {e(previous['name'])}</a><a href="{e(following['id'])}.html">{e(following['name'])} →</a></nav></section>
<p class="profile-note">Narrativa autoral preparada com assistência de IA por solicitação do idealizador. Os cavaleiros são alegorias dos valores do PLANO D. <a class="text-link" href="../direitos.html">Direitos e créditos ↗</a></p>
</div></main>
<footer class="site-footer profile-footer"><div class="container footer-bottom"><p>PLANO D · 360 X · Sobral, Ceará<br>Idealização: Aldenir Rocha de Oliveira Filho</p><div><a href="../index.html#biblioteca">Biblioteca</a><a href="../index.html#doacoes">Doações e transparência</a><a href="../index.html#fontes">Fontes e privacidade</a></div></div></footer>
</body></html>
'''
    (DIST / 'cavaleiros' / f'{ident}.html').write_text(html)
    cards.append(f'''<article class="guardian-card" style="--aura:{aura}" aria-labelledby="guardian-{ident}"><img class="guardian-portrait" src="assets/cavaleiros/{ident}-card.webp" width="480" height="720" alt="{e(alts[ident])}" loading="lazy"><p class="guardian-value">{e(c['virtue'])}</p><h3 id="guardian-{ident}">{name}</h3><p>{e(c['tagline'])}</p><a class="text-link guardian-open" href="cavaleiros/{ident}.html">Conhecer {name} ↗</a></article>''')

index_path = DIST / 'index.html'
index_html = index_path.read_text()
index_html, count = re.subn(r'(<div class="guardians-grid">).*?(</div>\s*<div class="guardians-footer">)', lambda m: m[1]+'\n'+ '\n'.join(cards)+'\n'+m[2], index_html, count=1, flags=re.S)
assert count == 1, 'Grade dos cavaleiros não encontrada'
index_path.write_text(index_html)
print('Cinco fichas e cinco cartões gerados.')
