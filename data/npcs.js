const npcs = [
    // Ferreiros
    {
        "name": "Andre de Astora",
        "img": "http://darksouls.wikidot.com/local--files/npcs/andre-of-astora-large.jpg",
        "description": "Um ferreiro que reside no antigo edifício da igreja em Undead Parish. Especializado em aprimoramentos de armas físicas e mágicas usando Fé.",
    },

    {
        "name": "Ferreiro Gigante",
        "img": "http://darksouls.wikidot.com/local--files/npcs/giant-blacksmith-large.jpg",
        "description": "Um grande ferreiro residente no edifício principal da catedral de Anor Londo. Ele é um conhecido de Hawkeye Gough, mantendo o Anel do Falcão de Gough após a aposentadoria deste dos Quatro Cavaleiros de Gwyn. Especializado em forjar armas únicas.",

    },

    {
        "name": "Rickert",
        "img": "http://darksouls.wikidot.com/local--files/npcs/rickert-of-vinheim-large.jpg",
        "description": "Um ferreiro mago da Escola do Dragão de Vinheim. De algum modo, está preso em uma cela nas Ruínas de New Londo e não parece se importar. Especializado em encantamentos de armas mágicas.",

    },

    {
        "name": "Vamos",
        "img": "http://darksouls.wikidot.com/local--files/npcs/vamos-large.jpg",
        "description": "Um ferreiro esquelético residente nas Catacumbas. Especializado em encantamentos de fogo.",

    },
    // Mercadores / Treinadores
    {
        "name": "Anastacia",
        "img": "http://darksouls.wikidot.com/local--files/npcs/anastacia-of-astora-large.jpg",
        "description": "Uma mulher muda de uma vila em Astora, com a língua removida para que não possa profanar o nome de nenhum deus. Anastacia é a Guardiã do Fogo do Firelink Shrine, ligada ao bonfire para mantê-lo aceso.",
       
    },

    {
        "name": "Logan do Grande Chapéu",
        "img": "http://darksouls.wdfiles.com/local--files/npcs/big-hat-logan-large.jpg",
        "description": "Considerado o maior mago da Vinheim Dragon School, 'Big Hat' Logan deixou a Dragon School para Lordran em busca dos lendários Regal Archives, que guardam o conhecimento do Pai das Magias.",

    },

    {
        "name": "Cavaleiro Berenike",
        "img": "http://darksouls.wikidot.com/local--files/npcs/berenike-knight-large.jpg",
        "description": "Um cavaleiro de Berenike, ele se aventura na Sen's Fortress para chegar a Anor Londo, assim como outros cavaleiros antes dele. Mas os fracassos de figuras lendárias como Rendal de Balder e Black Iron Tarkus o fazem duvidar do 'Destino dos Mortos-vivos'. Agora ele vende equipamentos retirados dos corpos dos cavaleiros encontrados na Fortaleza.",
        "location": "Undead Parish, Sen's Fortress, Painted World of Ariamis"
    },

    {
        "name": "Kaathe",
        "img": "http://darksouls.wikidot.com/local--files/npcs/kaathe-large.jpg",
        "description": "Assim como Kingseeker Frampt, Kaathe é uma serpente primordial, mas suas intenções são muito diferentes das de Frampt. Ele é o líder dos Darkwraiths e quer ver o plano do Furtive Pygmy se concretizar recrutando mortos-vivos com o Darksign para que possam se tornar o novo Senhor das Trevas, anunciando a Era das Trevas. Sugere-se que ele tenha manipulado o povo de Oolacile para despertar Manus e oferecido a arte de drenagem de vida aos Reis de New Londo, tornando-o indiretamente responsável pela destruição de Oolacile e New Londo.",
        "location": "The Abyss"
    },

    {
        "name": "Domhnall de Zena",
        "img": "http://darksouls.wikidot.com/local--files/npcs/domhnall-of-zena-large.jpg",
        "description": "Um mercador muito peculiar e o único personagem da antiga terra de Zena que o jogador encontra. As peças de sua armadura simbolizam sabedoria, glória, um vencedor e um explorador, mas nada específico sobre Domhnall é conhecido. Os itens de cristal que ele vende sugerem que ele pode ter explorado os Arquivos do Duque.",

    },

    {
        "name": "Dusk",
        "img": "http://darksouls.wdfiles.com/local--files/npcs/dusk-of-oolacile-darkroot.jpg",
        "description": "Dusk é uma princesa-feiticeira da terra há muito caída de Oolacile, onde feitiçarias únicas foram criadas. Em algum momento no passado, sua cidade natal foi destruída, e é incerto o que causou a queda da cidade. Ela foi aprisionada em um Golem de Cristal Dourado, resultado das experiências de Seath, o Escamoso. Após o despertar de Manus, Pai do Abismo, e a corrupção de Artorias, Dusk é finalmente resgatada pelo jogador após a derrota de Manus, embora marcada mentalmente e incoerente de sua experiência.",

    },

    {
        "name": "Eingyi",
        "img": "http://darksouls.wikidot.com/local--files/npcs/eingyi-large.jpg",
        "description": "Eingyi era um pirocinético do Grande Pântano, banido por criar pirocnias venenosas. Depois de ser infectado por parasitas em Blighttown, a Fair Lady o ajudou sugando a peste dele, o que a deixou doente. Em troca, Eingyi se tornou seu servo e carrega um ovo como sinal de devoção.",

    },

    {
        "name": "Elizabeth",
        "img": "http://darksouls.wikidot.com/local--files/npcs/elizabeth-large.jpg",
        "description": "Elizabeth é um gigantesco cogumelo senciente que atua como guardiã do Santuário de Oolacile. Ao contrário dos Pais Cogumelos em outros lugares, ela não tem braços. Ela provavelmente foi a cuidadora da Princesa Dusk quando ela era pequena. Elizabeth reconhece o jogador como o salvador de Dusk no futuro e pede ao jogador que resgate a Princesa Dusk mais uma vez, pois o Cavaleiro Artorias parece ter falhado em sua missão.",

    },

    {
        "name": "Griggs of Vinheim",
        "img": "http://darksouls.wikidot.com/local--files/npcs/griggs-of-vinheim-large.jpg",
        "description": "Um feiticeiro da Escola de Dragões de Vinheim. Ele veio para Lordran em busca de seu mestre, Big Hat Logan, que partiu de Vinheim em busca de conhecimento.",

    },

    {
        "name": "Hawkeye Gough",
        "img": "http://darksouls.wikidot.com/local--files/npcs/hawkeye-gough-large.jpg",
        "description": "Hawkeye Gough é um dos Quatro Cavaleiros de Gwyn e é conhecido por seu grande poder e habilidade com o arco. Ele é um personagem importante na história e ajuda o jogador em sua jornada.",

    },

    {
        "name": "Ingward",
        "img": "http://darksouls.wikidot.com/local--files/npcs/ingward-large.jpg",
        "description": "Um dos Seladores que inundou New Londo para conter os Darkwraiths, agora vigia o selo para impedir a expansão do Abismo. É o único sobrevivente conhecido entre os três Seladores.",

    },

    {
        "name": "Kingseeker Frampt",
        "img": "http://darksouls.wikidot.com/local--files/npcs/kingseeker-frampt-large.jpg",
        "description": "Kingseeker Frampt, amigo de Gwyn, busca um novo Grande Lorde para prolongar a Era do Fogo e guia o Undead escolhido para tomar o lugar de Gwyn.",

    },

    {
        "name": "Darkmoon Knightess",
        "img": "http://darksouls.wikidot.com/local--files/npcs/lady-of-the-darkling-large.jpg",
        "description": "A Cavaleira Darkmoon, Guardiã da Fogueira em Anor Londo, serve ao Sol Escuro Gwyndolin, mantém a chama acesa e guia o Undead Escolhido, usando a armadura Brass Set para esconder sua forma.Lady of the Darkling é uma figura misteriosa associada às forças das trevas. Ela é uma personagem que influencia a jornada do jogador e está ligada aos eventos sombrios do jogo.",

    },

    {
        "name": "Laurentius of the Great Swamp",
        "img": "http://darksouls.wikidot.com/local--files/npcs/laurentius-of-the-great-swamp-large.jpg",
        "description": "Laurentius está preso em um barril em uma sala à esquerda, perto do segundo açougueiro. Libere-o rolando nos barris.",

    },

    {
        "name": "Marvellous Chester",
        "img": "http://darksouls.wikidot.com/local--files/npcs/marvellous-chester-large.jpg",
        "description": "Marvellous Chester é um personagem enigmático e excêntrico que pode ser encontrado em diversos locais. Ele é conhecido por suas ações e palavras enigmáticas.",

    },

    {
        "name": "Oswald of Carim",
        "img": "http://darksouls.wikidot.com/local--files/npcs/oswald-of-carim-large.jpg",
        "description": "Oswald é um sacerdote de Carim, especializado em questões de pecados e absolvições. Ele oferece serviços ao jogador relacionados a absolvições e itens especiais.",

    },

    {
        "name": "Patches",
        "img": "http://darksouls.wikidot.com/local--files/npcs/patches-large.jpg",
        "description": "Patches é um personagem traiçoeiro e oportunista conhecido por suas ações enganosas e traiçoeiras. Ele é um personagem que pode enganar o jogador em várias ocasiões.",

    },

    {
        "name": "Petrus of Thorolund",
        "img": "http://darksouls.wikidot.com/local--files/npcs/petrus-of-thorolund-large.jpg",
        "description": "Petrus é um sacerdote de Thorolund, conhecido por seu papel em ajudar o jogador e suas habilidades em cura e bênçãos. Ele é uma figura importante na área de Undead Burg.",

    },

    {
        "name": "Quelana of Izalith",
        "img": "http://darksouls.wikidot.com/local--files/npcs/quelana-of-izalith-large.jpg",
        "description": "Quelana é uma das filhas da bruxa de Izalith e é conhecida por seu conhecimento em feitiçarias e magias. Ela pode ajudar o jogador com seu conhecimento.",

    },

    {
        "name": "Rhea of Thorolund",
        "img": "http://darksouls.wikidot.com/local--files/npcs/rhea-of-thorolund-large.jpg",
        "description": "Rhea é uma sacerdotisa de Thorolund que está em uma missão para salvar sua família e restaurar a ordem em Lordran. Ela é um personagem importante que pode oferecer assistência ao jogador.",

    },

    {
        "name": "Shiva of the East",
        "img": "http://darksouls.wikidot.com/local--files/npcs/shiva-of-the-east-large.jpg",
        "description": "Shiva é um mercador que viaja pelo mundo em busca de tesouros e itens raros. Ele é conhecido por sua habilidade em negociar e encontrar itens valiosos.",

    },

    {
        "name": "Snuggly the Crow",
        "img": "http://darksouls.wikidot.com/local--files/npcs/snuggly-the-crow-large.jpg",
        "description": "Snuggly é um corvo mágico que vive em um ninho e oferece trocas de itens ao jogador. Ele é um personagem que permite ao jogador trocar itens raros e valiosos.",

    },

    {
        "name": "Undead Merchant (Female)",
        "img": "http://darksouls.wikidot.com/local--files/npcs/undead-merchant-female-large.jpg",
        "description": "A Mercadora Morta (Feminina) é uma comerciante encontrada em Undead Burg e é conhecida por seu comércio de itens e equipamentos úteis para o jogador.",

    },

    {
        "name": "Undead Merchant (Male)",
        "img": "http://darksouls.wikidot.com/local--files/npcs/undead-merchant-male-large.jpg",
        "description": "O Mercador Morto (Masculino) é um comerciante encontrado em Undead Burg. Ele oferece itens e equipamentos úteis ao jogador em troca de almas.",

    }
];
