# HQ 01 — Direção de arte e registro de produção

Data: 22/10/2026. Título: **Quando cinco luzes se encontram**.

## Continuidade e autoria

Universo e idealização: Aldenir Rocha de Oliveira Filho. Roteiro, arte e edição preparados com assistência de inteligência artificial, a pedido do idealizador. Ficção do Reaverso / PLANO D / Projeto 360X.

As identidades, as cores e as transformações dos cinco cavaleiros seguem `dist/dados/cavaleiros.json`, já presente na revisão `332d0fe34993c1f098d4e3fc3c98bacb1a233c80` do GitHub. Novos elementos desta HQ: a máquina que concentra recursos, a oferta das chaves, a primeira missão conjunta e o pacto final. Lúmen reúne os cinco, como consta em sua ficha. Pessoas neurodivergentes participam das decisões sem talento obrigatório, diagnóstico atribuído aos heróis ou cura mágica. O epílogo retrata meses de recuperação ambiental.

## Produção e leitura

Arte criada com a ferramenta integrada `image_gen`. A imagem coletiva existente `dist/assets/cavaleiros-plano-d.png` serviu como referência visual. As oito páginas finais têm 1024 × 1536 pixels, com três quadros em sequência. As páginas 3, 6, 7 e 8 foram recompostas em formato vertical pela mesma ferramenta, para melhorar a leitura em telas pequenas.

As imagens foram apenas convertidas para WebP (qualidade 89) para publicação. Narração e balões são HTML separado, selecionável e ampliável. O leitor enquadra cada região da imagem por CSS, preservando sua proporção; os limites de cada quadro ficam em `art.panels` no roteiro JSON. A arte completa de cada página também pode ser aberta diretamente. A transcrição inclui todas as falas, narrações e descrições das cenas.

## Direção visual comum

```text
Use case: illustration-story.
Asset type: one original comic page for the fictional Brazilian PLANO D / Reaverso saga.
Reference image: the supplied image is CHARACTER DESIGN and material reference only, NOT an edit target. Create a new illustrated sequence, not a crop. Retain these five distinct astronaut-knight identities: Nexo cyan luminous skull and dark silver armor; Raiz green luminous skull with living vines; Brasa orange luminous skull, black armor with orange seams and burgundy cloth; Prisma female cartographer, violet luminous skull, graphite armor, purple cloth; Lúmen ivory/gold armor, golden luminous skull, white cloth. The skulls are clean fantastical faces, not corpses. Humane, gentle protective body language. Futuristic cosmic motorcycles when scene warrants them.
Visual style: cinematic hand-painted graphic novel, expressive ink contours, tactile painted metal, restrained luminous auras, rich dark navy shadows, warm light, sophisticated and readable action, consistent reference identities.
Page format: portrait 1024x1536. EXACTLY THREE equal-height wide horizontal rectangular panels stacked TOP to BOTTOM, each panel uses full width. Thin dark gutters at one-third and two-thirds height. NO fourth panel, no nested panels, no decorative inset. Each panel a distinct sequential moment. Framing must show hands and actions clearly. No written words, no letters, no numbers, no captions, no speech balloons; accessible dialogue is typeset on the website separately. No logos, no watermark, no gore, no threatening violence. Civilians are ordinary living diverse humans, NOT skulls. They have agency and dignity. Full opaque background.
```

## Briefings das cenas

As orientações abaixo registram a composição narrativa de cada página; as falas finais estão em `dist/dados/hq-origem.json`.

### Página 1

```text
PAGE 1 / NEXO'S ORIGIN. Only NEXO among the knights. SETTING: Aurora, an orbital city with suspended pathways, visible starry void and curved blue planet, a cloud of gray mechanical fog obscuring routes.
TOP PANEL: wide shot, Nexo stands alone over a complex projected cyan bridge schematic while distant families wait at disconnected platforms. His incomplete bright straight bridge does not reach everyone. A real problem of access, not a fight.
MIDDLE PANEL: close medium shot, Nexo crouches to LISTEN to a young human girl holding a simple pictogram route map and an older man with walking cane gesturing that they need more crossing time. A young adult with over-ear ear defenders is present. Nexo's hands open, he has lowered his busy holographic schematic. No text in map, only large clear symbols.
BOTTOM PANEL: wide shot, the community and Nexo collaboratively draw a simple accessible route, a safe broad cyan bridge forms with ramps and restful landings, people choose different comfortable paths. Nexo hands the map to the girl while an adult helps another person. Quiet triumph, cyan aura. Include a parked sleek cyan motorcycle to the side, not blocking the ramp.
```

### Página 2

```text
PAGE 2 / RAIZ'S ORIGIN. Only RAIZ among the knights. SETTING: orbital botanical sanctuary of the Brazilian Caatinga, mandacaru cactus, thorny drought-adapted shrubs, seed pods, earthen paths under a starry transparent dome.
TOP PANEL: Raiz inside locked ornate garden gate holding a seed jar; ordinary community members stand outside. Green plants within, desolate mechanical urban edge outside. Raiz realizes the isolation, reflective not hostile.
MIDDLE PANEL: Raiz opens the gate and kneels beside residents in a collaborative discussion about tending the garden. An adult woman offers a simple pictogram garden plan, a young adult with headphones chooses seedlings, another person rests on a shaded bench. Warm gentle green aura, a living seed in a gloved open palm.
BOTTOM PANEL: wide view of the garden opened as a community space, residents voluntarily choosing seed planting, watering, observing or resting. Clear wide accessible paths, plants of the Caatinga, protected small water channel, no exotic rainforest. Raiz tends seedlings alongside a resident rather than directing from above, green motorcycle parked beyond garden. No magic instant full forest, careful living cultivation.
```

### Página 3

```text
PAGE 3 / BRASA'S ORIGIN. Only BRASA among the knights. SETTING: an orbital industrial furnace district. BRASA has black armor, orange luminous skull, burgundy scarf, gentle amber fire, never white armor. No weapons.
TOP PANEL: cold blue industrial corridor with motionless closed heating pipes and families in coats, a woman cradles a dog with blanket. Brasa stands holding a small contained ember in one open gauntlet, sees the cold affecting residents. Closed heat stores loom behind him, stars through windows.
MIDDLE PANEL: close medium shot of Brasa at same height listening to residents instead of directing. A woman points to an area sheltered from glare while another resident uses large simple pictograms to show their needs; a seated neurodivergent adult with ear defenders can choose space. No text. The orange ember softly illuminates their ordinary human faces; no bodies on fire.
BOTTOM PANEL: community distributing reusable warm lanterns and blankets to households and a rescued dog, Brasa powers a safe communal warmth shelter using a soft orange dome. People choose more and less light, shade and space. The original black/orange cosmic motorcycle parks outside. Quiet caring solidarity; every flame controlled and harmless, no fire in vegetation.
```

### Página 4

```text
PAGE 4 / PRISMA'S ORIGIN. Only PRISMA among the knights. She is a female cosmic cartographer with violet glowing stylized skull, dark graphite astronaut-knight armor, purple cloth, subtle rainbow facets. Ordinary residents all human.
TOP PANEL: an orbital city plaza imposing a single rigid arrow route lit by harsh overhead white spotlights. Some people shield their eyes or wait to the side. Prisma looks at her uniform holographic road map, realizes it leaves people behind.
MIDDLE PANEL: medium quiet scene, Prisma has lowered her map, listens to a young adult with over-ear ear defenders and a mother with a young adult daughter. People express preferences with large pictograms (ear, pause, path) and gestures; one resident chooses to rest nearby. No medical devices or diagnostic labels. Emphasize voluntary co-design, open hands, dignity.
BOTTOM PANEL: a welcoming plaza redesigned with several visible violet routes, soft adjustable light pools, a calm sheltered rest corner, clear simple pictographic arrows. Residents choose to walk, rest or watch, while Prisma draws routes with them on a shared map. Her violet motorcycle is parked unobtrusively. Beautiful prismatic glow, belonging and autonomy.
```

### Página 5

```text
PAGE 5 / LÚMEN'S ORIGIN. Only LÚMEN among the knights, ivory WHITE and GOLD armor, golden luminous skull, flowing white cloth. SETTING: an orbital lighthouse, dormant dark star and inhabited neighborhood, blue planet and stars beyond.
TOP PANEL: contemplative wide scene. Lúmen on the high balcony of an unlit lighthouse looking up at dark sky, hands gently clasped, seeking purpose, subtle tiny cross-shaped star. Below, an unlit uneven pedestrian street and small human homes; white/gold motorcycle by tower base. No religious authority or throne.
MIDDLE PANEL: intimate scene at street level. Lúmen WALKING BESIDE an older human neighbor with cane, a humble warm gold lantern lowered to light uneven ground. The neighbor points the way to his own home, both walk at his pace. No carrying, no kneeling crowd. Care in ordinary action.
BOTTOM PANEL: wide view of Lúmen at the base of the lighthouse with neighbors, lifting a lantern. Golden beacon rises into the stars and FOUR distinct incoming paths of cyan, green, orange, violet light lead toward it (distant trails, not additional gold knights). In the far background a dark mechanical reservoir tower hoards water and heat. A warm hopeful invitation, not a military call.
```

### Página 6

```text
PAGE 6 / THE FIRST MEETING AND THE TEMPTATION. ALL FIVE established knights together, preserve exact colors and proportions, humans ordinary. SETTING: community courtyard at base of gold lighthouse, dark industrial reservoir tower distant. Cobiça/Greed is an abstract nonhuman smoke shadow emitted by a machine, not a real politician or racial/religious figure.
TOP PANEL: wide egalitarian circle of Nexo cyan, Raiz green, Brasa orange, Prisma violet and Lúmen ivory/gold LISTENING to ordinary residents around a shared pictographic water-and-heating route map. Five colored motorcycles safely parked far back. Diverse adult residents active in planning; one seated in quiet space, another uses ear defenders. None worships heroes.
MIDDLE PANEL: close on a confident middle-aged human woman pointing to an underground WATER SPRING and old canal on a simple drawing; Brasa lowers an impulsively raised hand, Raiz listens carefully, Nexo and Prisma revise the path with her, Lúmen looks on. Water source beneath tower must be saved, not destroyed. Map symbols only, no words.
BOTTOM PANEL: dramatic offer. From distant dark tower an ABSTRACT SMOKE HAND offers FIVE symbolic metallic keys above an EMPTY single command chair. Five knights and nearby residents face the temptation without kneeling; the keys/chair represent centralized power. Heads and armor clearly colored cyan/green/orange/violet/whitegold. No attacker or physical violence, dark magical smoke not gore. The nearby community map and a person choosing to rest remain visible.
```

### Página 7

```text
PAGE 7 / OPENING THE MACHINE TOGETHER. A complete sequential cooperative action scene. Preserve five knight identities from reference. SETTING: old open industrial canal leading into a tower hoarding water, heat and seed stores. Cobiça/Greed is abstract machine-smoke, no human villain. No explosions, no combat with people.
TOP PANEL: NEXO cyan creates a broad safe luminous bridge over canal while PRISMA violet projects a quiet alternative pathway. Human residents voluntarily move in small groups, one rests at the side. They have refused a single throne of power: the command chair stands EMPTY in background. Routes wide with handrails. Both knights identifiable, clean stylized skulls.
MIDDLE PANEL: BRASA in BLACK armor with orange light stabilizes heat piping with controlled warm magic; RAIZ green/vines protects seed containers and a small bird nest safely beside an old canal bank. A capable middle-aged human woman slowly turns a large valve wheel while another watches water level. Careful engineering cooperation, not destruction. No fire touching plants, no rushing dangerous flooding.
BOTTOM PANEL: LÚMEN ivory/gold gently lights a central mechanism with SEVERAL INDEPENDENT VALVES now controlled by different residents. Water and orange heat lines flow outward to neighborhoods. The other four colored knights help at separate positions, exactly five different knights. Abstract dark hoarding smoke thins out and fades in background. Show victory as shared operation, not new ruler. Warm, hopeful epic light.
```

### Página 8

```text
PAGE 8 / THE BEGINNING OF CARE. Closing page, hopeful mature graphic novel. Preserve all five knight identities and human community. Setting mixes cosmic orbital city with Brazilian Caatinga garden and a small restored water spring, golden lighthouse nearby.
TOP PANEL: resources newly flowing: people fill vessels at an open modest fountain, carry seed trays, share blankets and water with a dog. Five knights assist at ground level with community, no worship or pedestal. The industrial tower in background is repaired public infrastructure with accessible open doors, not a destroyed ruin. Small plants, water returns calmly, no instant ecosystem miracle.
MIDDLE PANEL: MONTHS LATER conveyed visually by modest growth and repaired terraces, not written words. RAIZ green/vines and residents tending SMALL Caatinga seedlings beside a water channel, PRISMA violet shows a simple pictogram task board. Human people choose tasks or take a quiet rest under shade; a person uses ear defenders, others rest without them. Plants only knee high, restoration still in progress. Compassionate everyday persistence.
BOTTOM PANEL: wide cinematic dawn farewell. EXACTLY FIVE KNIGHTS on their FIVE individual futuristic motorcycles, arranged left to right NEXO cyan, RAIZ green, BRASA black/orange, PRISMA violet, LÚMEN white/gold. Ready to depart, NOT firing or threatening. Behind/to side, community residents continue a round-table meeting with shared map and multiple valve keys, no hero at head. Small spring, growing seedlings and lighted beacon visible. Warm faith and hope, tiny distant cross-shaped star over dawn. Heroic solidarity, no words, no slogan.
```

## Recomposição vertical

### Página 3

```text
Use case: illustration-story. RECOMPOSE THE ATTACHED COMIC PAGE INTO A TALL PORTRAIT PAGE, 1024 pixels wide by 1536 pixels high. This is an edit of image 1, not a request to reproduce its landscape aspect ratio. Width:height MUST be 2:3. Make EXACTLY THREE stacked horizontal story panels, each approximately 1024x500, equal height. The resulting page is taller than wide. Repaint/reframe the same THREE MOMENTS and same characters for this tall layout. Preserve the exact storyline, figures, costumes, colors, setting and actions of the attached page. Enlarge the important characters and hands so panels are comfortably readable on a phone. Do not simply stretch the original landscape image, and do not put it with blank margins inside a portrait page. Entire new portrait surface contains the three newly recomposed painted panels. Clean narrow dark separators at y=512 and y=1024. Cinematic painted comic with expressive ink contours as original. No words, captions, speech bubbles, letters or watermark. All humans remain ordinary living humans with agency; skull-faced knights remain heroic, not gory. Only Brasa, orange skull / black armor / burgundy cloth; 1 cold station and neighbors, 2 listening to preferences, 3 shared warm shelter.
```

### Página 6

```text
Use case: illustration-story. RECOMPOSE THE ATTACHED COMIC PAGE INTO A TALL PORTRAIT PAGE, 1024 pixels wide by 1536 pixels high. This is an edit of image 1, not a request to reproduce its landscape aspect ratio. Width:height MUST be 2:3. Make EXACTLY THREE stacked horizontal story panels, each approximately 1024x500, equal height. The resulting page is taller than wide. Repaint/reframe the same THREE MOMENTS and same characters for this tall layout. Preserve the exact storyline, figures, costumes, colors, setting and actions of the attached page. Enlarge the important characters and hands so panels are comfortably readable on a phone. Do not simply stretch the original landscape image, and do not put it with blank margins inside a portrait page. Entire new portrait surface contains the three newly recomposed painted panels. Clean narrow dark separators at y=512 and y=1024. Cinematic painted comic with expressive ink contours as original. No words, captions, speech bubbles, letters or watermark. All humans remain ordinary living humans with agency; skull-faced knights remain heroic, not gory. All five knights cyan, green, orange, violet, white-gold; 1 round-table with community, 2 woman explains water map, 3 abstract smoke Greed offers five keys and empty control chair.
```

### Página 7

```text
Edit the supplied three-panel comic page into a true PORTRAIT comic page, width 1024 and height 1536, aspect ratio 2:3. Repaint and reframe the artwork to use the taller page; do not stretch. Exactly THREE horizontal story panels stacked top to bottom, each about one third of the page height, separated by thin straight dark gutters. Preserve the characters and story of this reference. TOP: cyan Nexo guides residents along a safe bridge while violet female Prisma shows multiple accessible routes and a rest area near the water tower. MIDDLE: orange Brasa works beside a woman on the warmth machinery while green Raiz protects seed jars and a bird nest. BOTTOM: all five skull-faced luminous cosmic knights, cyan Nexo, green Raiz, orange Brasa, violet female Prisma and ivory-and-gold Lumen, cooperate with community members who operate valves; dark greed smoke dissipates as water and warmth return. Lumen illuminates the mechanism, not a throne. Keep residents visibly active and autonomous. Heroic, hopeful, detailed painterly sci-fi comic, no gore. NO text, letters, captions, balloons or logos. Keep three panels readable and large on a phone. Output portrait 1024x1536.
```

### Página 8

```text
Use case: illustration-story. RECOMPOSE THE ATTACHED COMIC PAGE INTO A TALL PORTRAIT PAGE, 1024 pixels wide by 1536 pixels high. This is an edit of image 1, not a request to reproduce its landscape aspect ratio. Width:height MUST be 2:3. Make EXACTLY THREE stacked horizontal story panels, each approximately 1024x500, equal height. The resulting page is taller than wide. Repaint/reframe the same THREE MOMENTS and same characters for this tall layout. Preserve the exact storyline, figures, costumes, colors, setting and actions of the attached page. Enlarge the important characters and hands so panels are comfortably readable on a phone. Do not simply stretch the original landscape image, and do not put it with blank margins inside a portrait page. Entire new portrait surface contains the three newly recomposed painted panels. Clean narrow dark separators at y=512 and y=1024. Cinematic painted comic with expressive ink contours as original. No words, captions, speech bubbles, letters or watermark. All humans remain ordinary living humans with agency; skull-faced knights remain heroic, not gory. 1 resources shared at fountain, 2 months of care, small seedlings and rest, 3 five knights on their motorcycles departing at dawn while community decides together.
```

## Manutenção

- Edite o roteiro em `dist/dados/hq-origem.json` e execute `python3 scripts/gerar-hq.py`.
- Preserve a ordem das páginas e dos quadros ao substituir imagens e suas descrições.
- Os arquivos WebP finais fazem parte do código publicado; não dependem de links temporários de geração.
- O registro técnico dos arquivos finais está em `ARTES-HQ.json`, com dimensões, tamanho e hashes SHA-256.

