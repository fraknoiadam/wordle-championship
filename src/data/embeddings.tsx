export interface EmbeddingItem {
  link: string;
  text: string;
  color: string;
  title: string;
  embedding: boolean;
}

export const embeddingsList: EmbeddingItem[] = [
  {
    link: "https://wordleunlimited.org/",
    text: "A bajnokságot kezdjük az eredeti Wordle játékkal! Egy 5 betűs angol szót kell kitalálni, a játék minden tipp után elmondja az összes betűről, hogy melyikek vannak benne a szóban és ezek közül melyek van jó helyen. Sok sikert!",
    color: "#ffff00",
    title: "Wordle",
    embedding: true
  },
  {
    link: "https://wordleplay.com/wordle-2",
    text: "A feladat itt ugyanaz, mint az előbb, de most egy 6 betűs angol szót kell kitalálnod.",
    color: "#ffff00",
    title: "Wordle2",
    embedding: true
  },
  {
    link: "https://septle.com/",
    text: "Most pedig egy 7 betűset.",
    color: "#ffff00",
    title: "Septle",
    embedding: true
  },
  {
    link: "https://gamesrow.com/wordemy",
    text: "Na jó, ahelyett, hogy a betűszámot növelnénk, kezdjünk el lefelé haladni! Itt egy 4 betűs szót kell kitalálnod.",
    color: "#ffff00",
    title: "Wordemy",
    embedding: true
  },
  {
    link: "https://web-dev-dan.github.io/Thirdle/",
    text: "Itt pedig egy 3 betűset, de csak 3 tipped van. Akármilyen betűhármast tipelhetsz, de a megfejtés mindig egy értelmes szó. A narancssárga szín jelzi, hogy egy betű szerepel a megoldásban, csak rossz helyen, a kék pedig azt, ha jó helyen is van.",
    color: "#ffff00",
    title: "Thirdle",
    embedding: true
  },
  {
    link: "https://edjefferson.com/letterle/",
    text: "Itt pedig egy 1 betűs szót… De korlátlan tippből!",
    color: "#ffff00",
    title: "Letterle",
    embedding: true
  },
  {
    link: "https://shuntle.com/?unlimited",
    text: "Kicsit változtassunk a formulán! Ebben a verzióban nem tudod hány betűből áll a megfejtés. A megfejtésben a szó előtt és után is lehetnek szóközök, ezek szintén tippelhető karakterek, melyekről az oldal elárulja ugyanúgy, hogy szerepelnek-e a megfejtésben és ha igen, akkor hol.",
    color: "#ffff00",
    title: "Shuntle",
    embedding: true
  },
  {
    link: "https://jealousmarkup.xyz/szofejto/",
    text: "Vagy inkább szó estét? Lényegében Wordle, csak magyarul. A piros szín azt jelzi, ha egy betű szerepel a szóban csak máshol.",
    color: "#ffff00",
    title: "Szó reggelt!",
    embedding: false
  },
  {
    link: "https://szozat.miklosdanka.com/",
    text: "Olyan, mint a Szó reggelt!, de itt a több karakterből álló betűk csak egy helyet foglalnak csak el, illetve eggyel több tipped van.",
    color: "#ffff00",
    title: "Szózat",
    embedding: true
  },
  {
    link: "https://wordleunlimited.io/murdle",
    text: "Gratulálok! Eljutottál a 10. pályához!   Ebben a verzióban nem a tippjeid száma van korlátozva, hanem az, hogy hány betűt tippelhetsz, ami nem szerepel a megfejtésben. Ha betippelsz 10 ilyet, akkor fel leszel akasztva! Halott betűt lehet újra tippelni életvesztés nélkül!",
    color: "#ffff00",
    title: "Murdle",
    embedding: true
  },
  {
    link: "https://hardle.org/",
    text: "Ez olyan, mint a Wordle (gondoltad volna?), csak nehezebb! Itt a játék csak azt írja ki, hogy hány jól tippelt betű van, azt nem, hogy melyikek.",
    color: "#ffff00",
    title: "Hardle",
    embedding: true
  },
  {
    link: "https://reversle.net/",
    text: "Háhá! Most megfordult a játék! Tudod, hogy mi a megfejtés és, hogy a tippekre érkezett válaszokat. Ezek alapján kell kitalálnod, hogy vajon mik lehettek a tippek.",
    color: "#ffff00",
    title: "Reversle",
    embedding: true
  },
  {
    link: "https://unwordle.org/?daily=1",
    text: "Olyan, mint a Reversle, csak nehezebb. Itt még arra is kell figyelned, hogy minden tipp egy olyan szó legyen, ami az őt megelőző információk alapján akár a megfejtés is lehetett volna. Kérlek menj az Unlimited verzióban a Normalre!",
    color: "#ffff00",
    title: "Unwordle",
    embedding: true
  },
  {
    link: "https://dordlewordle.com/",
    text: "Ebben a verzióban párhuzamosan kell kitalálnod két szót.",
    color: "#ffff00",
    title: "Dordle",
    embedding: true
  },
  {
    link: "https://xordle.org/",
    text: "Na, szóval ezt nehéz lesz elmagyarázni… Szóval itt is két kitalálandó szó van, de ezekre a játék párhuzamosan válaszol. Lényegében azt jeleníti meg, hogy van-e olyan szó, amiben egy adott betű szerepel. Tehát ha például az egyik szóban nem szerepel E, de a másikban igen és a tippedben is, akkor a játék narancssárgát, vagy zöldet fog jelezni (attól függően, hogy a helye jó-e). Ha az egyik szót kitaláltad, kapsz egy extra tipplehetőséget és onnantól a játék úgy megy tovább, mint a sima Wordle. Az oldal tetején már az elején meg van adva egy szó, amire a játék már válaszolt.",
    color: "#ffff00",
    title: "Xordle",
    embedding: true
  },
  {
    link: "https://www.chigozie.co.uk/invisidle/",
    text: "Az eredeti Wordle-höz nagyon hasonlít, de itt nem látod a korábbi tippjeidet.",
    color: "#ffff00",
    title: "Invisidle",
    embedding: true
  },
  {
    link: "https://www.fuedle.com/riddlele/unlimited",
    text: "Ebben a Wordle-játékban meg van adva egy riddle és annak a megfejtését kell kitalálni.",
    color: "#ffff00",
    title: "Riddlele",
    embedding: false
  },
  {
    link: "https://wordly.org/wordle-games/adoptle",
    text: "Olyan, mint a Wordle (továbbra is…) az elrugaszkodott verziók még messze vannak), a fő különbség az, hogy a megfejtés adoptálható. Többnyire egy állat tulajdonneve.",
    color: "#ffff00",
    title: "Adoptle",
    embedding: true
  },
  {
    link: "https://birdle.escism.net/",
    text: "Olyan, mint az Adoptle, de a megfejtés mindig egy madár neve.",
    color: "#ffff00",
    title: "Birdle",
    embedding: true
  },
  {
    link: "https://www.phoodle.net/",
    text: "Üdvözöllek a 20. pályán! Itt egy ételt kell kitalálnod.",
    color: "#ffff00",
    title: "Phoodle",
    embedding: true
  },
  {
    link: "https://horsle.glitch.me/",
    text: "Itt pedig mindig az a megfejtés, hogy \"Horse\".",
    color: "#ffff00",
    title: "Horsle",
    embedding: true
  },
  {
    link: "https://www.easywordle.com/",
    text: "Easy Wordle. Olyan, mint a Wordle, csak Easy. Hajrá!",
    color: "#ffff00",
    title: "Easy Wordle",
    embedding: true
  },
  {
    link: "https://absurdle.online/",
    text: "Na igen, az előző könnyű volt… Itt a tökéletes ellenkezője történik. A játék minden tipped után újraválassza a megfejtést úgy, hogy a lehető legtöbb tippre legyen szükséged a kitalálásához. Olyan, mint az gonosz ellenfél a Barkóbában!",
    color: "#ffff00",
    title: "Abrsurdle",
    embedding: true
  },
  {
    link: "https://passwordle.com/",
    text: "Találd ki a jelszót. Szerintem ez a legnehezebb pálya az egész játékban.",
    color: "#ffff00",
    title: "Passwordle",
    embedding: true
  },
  {
    link: "https://dontwordle.com/",
    text: "Itt az a feladat, hogy ne találd ki a megfejtést 6 tippből! Kizárólag olyat tippelhetsz, ami a korábbi ismereteid alapján még lehetne a megfejtés. Az 5 undo használata engedélyezett a bajnokságon.",
    color: "#ffff00",
    title: "Don't Wordle",
    embedding: true
  },
  {
    link: "https://fibble.xyz/?unlimited",
    text: "Itt pedig soronként egy betűről hazudik neked a játék, a zászlókkal meg tudod jelölni soronként, hogy szerinted melyik volt a hazugság. Tulajdonképpen ki találja ki ezeket? Az oldal tetején már az elején meg van adva egy szó, amire a játék már válaszolt.",
    color: "#ffff00",
    title: "Fibble",
    embedding: true
  },
  {
    link: "https://wordle-unlimited.io/game/trordle/",
    text: "Emlékszel a Dordle-re? Na, ez ugyanolyan, csak 3 szóval. A játék megnyitása után kattints a \"free trordle+\" gombra!",
    color: "#ffff00",
    title: "Trordle",
    embedding: true
  },
  {
    link: "https://www.merriam-webster.com/games/quordle/#/practice",
    text: "Ez pedig 4-gyel.",
    color: "#ffff00",
    title: "Quordle",
    embedding: true
  },
  {
    link: "https://sixordle.com/practice",
    text: "Ismét 4 szót kell kitalálnod párhuzamosan, de ezek 6 betűsek.",
    color: "#ffff00",
    title: "Sixordle",
    embedding: false
  },
  {
    link: "https://hexordle.com/?mode=free",
    text: "30. pálya! Ennek örömére most már 6-szót kell kitalálnod. A játék megnyitása után kattints a \"free hexordle\" gombra!",
    color: "#ffff00",
    title: "Hexordle",
    embedding: true
  },
  {
    link: "https://octordle.org/",
    text: "8 darab 5 betűs szó!!! Ígérem nem lesz ennél sokkal több.",
    color: "#ffff00",
    title: "Octordle",
    embedding: true
  },
  {
    link: "https://www.opensourcefeed.org/puzzles/decordle/?source=landing",
    text: "Ultimate párhuzamos Wordle teszt! 10 szó egyszerre! Sok sikert! Ez az utolsó ezek közül.",
    color: "#ffff00",
    title: "Decordle",
    embedding: false
  },
  {
    link: "https://letroso.com/en/unlimited",
    text: "Az előbbi pályával végigértél a hagyományos szókitalálós Wordle játékokon! Innentől az alternatív szókitalálós játékok jönnek egy darabig! Kezdésként Letroso! Hajrá!",
    color: "#00b050",
    title: "Letroso",
    embedding: true
  },
  {
    link: "https://crosswordle.com/practice",
    text: "Ebben a változatban betűket kell cserélgetned egy keresztrejtvényben úgy, hogy minden szó kijöjjön még azelőtt, hogy kifogynál a cserékből. A sárga szín azt jelenti, hogy egy adott betű jó oszlopban, vagy jó sorban van, de nem jó helyen.",
    color: "#00b050",
    title: "Crosswordle",
    embedding: true
  },
  {
    link: "https://wafflegame.net/daily",
    text: "Ugyanaz, mint Crosswordle, csak gofri!",
    color: "#00b050",
    title: "Waffle",
    embedding: false
  },
  {
    link: "https://wafflegame.net/deluxe",
    text: "Ugyanaz, mint Waffle, csak nagyobb gofri! Akármit is írjon a játék, itt korlátlan mennyiségű tipped van.",
    color: "#00b050",
    title: "Deluxe Waffle",
    embedding: false
  },
  {
    link: "https://thirdle.org/unl",
    text: "Thirdle? Ez nem volt már korábban? Ja… ez egy másik. Mi lesz a következő, egy második Birdle? Ebben a változatban 3 szót kell kitalálnod, amik egy keresztrejtvényben vannak elhelyezve. A lila szín azt jelenti, hogy a tippelt betű szerepel egy másik szóban, mint ahová tippeltél. A narancssárga azt, hogy a megfelelő szóban, csak másik helyen. A zöld pedig azt, hogy jó helyre tippeltél.",
    color: "#00b050",
    title: "Thirdle",
    embedding: false
  },
  {
    link: "https://squareword.org/",
    text: "Squareword: Tippelsz szavakat és ha a kitalálandó 5 szó valamelyikében jó pozícióban is van a tippedben szereplő valamelyik betű, akkor azt be is írja! Továbbá megjeleníti az utolsó oszlopban a rossz pozícióban lévő betűket.",
    color: "#00b050",
    title: "Squareword",
    embedding: false
  },
  {
    link: "https://warmle.org/?unlimited",
    text: "Ebben a játékban azt tudod a betippelt szó betűiről, hogy azok az a megfejtésben azonos helyen lévő betűkhöz közel vannak-e az ábécében. Arról nincs infód, hogy egy adott betű más pozícióba jó-e. Az oldal tetején már az elején meg van adva egy szó, amire a játék már válaszolt.",
    color: "#00b050",
    title: "Warmle",
    embedding: true
  },
  {
    link: "https://warmle.org/?unlimited&warm=2",
    text: "Már a 40. pályánál tartasz!!! Kíváncsi vagyok eljut-e majd bárki ide… És ha igen, akkor mennyi idő után…  Ez a játék ugyanaz, mint Warmle, csak közelebb kell lennie a tippelt betűnek a megfejtésnek ahhoz, hogy warmnak számítson.",
    color: "#00b050",
    title: "Super Warmle",
    embedding: true
  },
  {
    link: "https://warmle.org/?unlimited&warm=1",
    text: "Super Warmle, csak nehezebb.",
    color: "#00b050",
    title: "Super Warmle PLUS",
    embedding: true
  },
  {
    link: "https://semantle.com/",
    text: "Akármilyen szót tippelhetsz. A játék minden tippedről elárulja, hogy mennyire hasonlít a kitalálandó szóra (szóalak szempontjából).",
    color: "#00b050",
    title: "Semantle",
    embedding: true
  },
  {
    link: "https://contexto.me/",
    text: "Olyan, mint Semantle, csak itt nem a szóalak, hanem a jelentés számít.",
    color: "#00b050",
    title: "Contexto",
    embedding: false
  },
  {
    link: "https://nerdlegame.com/s/shuffle/abcd?gp=&st=90",
    text: "Itt a sorokban és az oszlopokban szereplő, még rossz helyen lévő betűket tudod mozgatni. Ha egy rossz helyen lévő betű egyedüli marad a sorában és az oszlopában is, akkor alul a lakattal tudod feloldani a többi betűt.",
    color: "#00b050",
    title: "Shuffle",
    embedding: false
  },
  {
    link: "https://searchle.net/",
    text: "Hogyan egészíti ki a Google automatikusan a keresést? Wordle-szerűen kell kitalálnod.",
    color: "#00b050",
    title: "Searchle",
    embedding: true
  },
  {
    link: "https://www.fuedle.com/unlimited",
    text: "Őszintén szólva nem tudom miben különbözik ez a Searchle-től, de elvileg más.",
    color: "#00b050",
    title: "Feudle",
    embedding: false
  },
  {
    link: "https://wordgames.gg/periodle",
    text: "Itt a periódusos rendszerben szereplő vegyjelekből kell szavakat alkotnod! Igen, ez a játék létezik.",
    color: "#00b050",
    title: "Periodle",
    embedding: true
  },
  {
    link: "https://wordleunlimitedgame.io/double-dabble",
    text: "Utolsó játék az alternatív szókitalálós részről! Itt párokban vannak a betűk, amiket tippelhetsz és a játék azt árulja el, hogy legalább az egyik a párból szerepel-e a szóban. A 32 betűkombináció közül, ami a tippedből kijöhet, legalább egynek értelmesnek kell lennie.",
    color: "#00b050",
    title: "Double-Dabble",
    embedding: true
  },
  {
    link: "https://www.sedecordle.com/?mode=free",
    text: "Emlékszel, amikor azt mondtam, hogy 10-nél több szót nem kell kitalálnod párhuzamosan… Nos hazudtam, itt 16-ot kell!!! De ígérem, ez már tényleg az utolsó.",
    color: "#ffff00",
    title: "Sedecordle",
    embedding: true
  },
  {
    link: "https://dduarte.github.io/numberle/",
    text: "Hihetetlen vagy! Eljutottál az 50. pályára. Az előzőt átugrottad, igaz? Mindegy… Beértél a matekos részlegre, most egy darabig matek feladványok lesznek. Jó szórakozást hozzájuk!  Numberle: Találd ki az 5-jegyű számot Wordle-szerűen.",
    color: "#ff0000",
    title: "Numberle",
    embedding: true
  },
  {
    link: "https://cojofra.github.io/primel/",
    text: "Olyan, mint a Numberle, azzal a különbséggel, hogy itt a megfejtés mindig egy prímszám.",
    color: "#ff0000",
    title: "Primel",
    embedding: true
  },
  {
    link: "https://jamesl.me/bytle/",
    text: "Olyan, mint a Numberle, csak itt 2-es számrendszerben dolgozol.",
    color: "#ff0000",
    title: "Bytle",
    embedding: true
  },
  {
    link: "https://jamesl.me/hexle/",
    text: "Itt pedig 16-osban.",
    color: "#ff0000",
    title: "Hexle",
    embedding: true
  },
  {
    link: "https://numble.wtf/",
    text: "Itt a jobb felső sarokban szereplő számot kell kiíratnod kizárólag a lenti számokat és műveleteket használva.",
    color: "#ff0000",
    title: "Numble",
    embedding: true
  },
  {
    link: "https://segmentle.com",
    text: "Olyan, mint Waffle, csak itt úgy kell cserélgetned, hogy minden oszlopban a fent látható szám legyen az összeg. (A sorokban nem kell annak lennie.)",
    color: "#ff0000",
    title: "Segmentle Easy",
    embedding: false
  },
  {
    link: "https://segmentle.com/daily4x4",
    text: "Ugyanaz, mint az előbb, csak 4x4-es a négyzet.",
    color: "#ff0000",
    title: "Segmentle Medium",
    embedding: false
  },
  {
    link: "https://segmentle.com/daily5x5",
    text: "Itt pedig 5x5-ös.",
    color: "#ff0000",
    title: "Segmentle Hard",
    embedding: false
  },
  {
    link: "https://www.mathler.com/easy",
    text: "Itt azt kell kitalálnod, hogy mi az a műveletsor, aminek a fent látható szám a végeredménye.",
    color: "#ff0000",
    title: "Mathler Easy",
    embedding: true
  },
  {
    link: "https://micro.nerdlegame.com/game?v=2025028007",
    text: "Olyan, mint a Mathler, de itt a teljes műveletsort neked kell kitalálni az eredménnyel együtt. A kommutatív műveleteket felcserélve is elfogadja a játék az eredményt.",
    color: "#ff0000",
    title: "Micro Nerdle",
    embedding: false
  },
  {
    link: "https://mini.nerdlegame.com/game",
    text: "60. pálya. Nem tudom mit tudnék még írni…  Itt ugyanaz a feladat, mint az előbb, csak 5 helyett 6 jegyből áll a műveletsor.",
    color: "#ff0000",
    title: "Mini Nerdle",
    embedding: false
  },
  {
    link: "https://www.mathler.com/normal",
    text: "Mathler 6 jeggyel.",
    color: "#ff0000",
    title: "Mathler",
    embedding: true
  },
  {
    link: "https://midi.nerdlegame.com/game",
    text: "Nerdle 7 jeggyel.",
    color: "#ff0000",
    title: "Midi Nerdle",
    embedding: false
  },
  {
    link: "https://nerdlegame.com/?gp=&st=25&v=2025028007",
    text: "Nerdle 8 jeggyel.",
    color: "#ff0000",
    title: "Nerdle",
    embedding: false
  },
  {
    link: "https://numberle.org/",
    text: "Olyan, mint a Nerdle, csak nem fogadja el a kommutatív műveletek felcserélését. Nem volt már egy másik Numberle korábban?",
    color: "#ff0000",
    title: "Numberle",
    embedding: true
  },
  {
    link: "https://nerdlegame.com/s/2d/level1?gp=&st=10",
    text: "Olyan, mint Waffle, de itt nem értelmes szavakat kell kapnod, hanem helyes végeredményeket.",
    color: "#ff0000",
    title: "2D nerdle",
    embedding: false
  },
  {
    link: "https://mini.bi.nerdlegame.com/game",
    text: "Két 6-jegyű Nerdle párhuzamosan.",
    color: "#ff0000",
    title: "Mini bi nerdle",
    embedding: false
  },
  {
    link: "https://www.mathler.com/hard",
    text: "Mathler 8 jeggyel.",
    color: "#ff0000",
    title: "Mathler Hard",
    embedding: true
  },
  {
    link: "https://bi.nerdlegame.com/game",
    text: "Két 8-jegyű Nerdle párhuzamosan.",
    color: "#ff0000",
    title: "Bi nerdle",
    embedding: false
  },
  {
    link: "https://quad.nerdlegame.com/game",
    text: "Négy 8-jegyű Nerdle párhuzamosan.",
    color: "#ff0000",
    title: "Quad nerdle",
    embedding: false
  },
  {
    link: "https://instant.nerdlegame.com/game",
    text: "Eljutottál 70-hez… Te aztán kitartó vagy!  Ennek örömére itt egy nerdle, de csak 1 tipped van.",
    color: "#ff0000",
    title: "Instant nerdle",
    embedding: false
  },
  {
    link: "https://www.mathler.com/killer",
    text: "Nagyon nehéz Mathler feladvány.",
    color: "#ff0000",
    title: "Mathler Killer",
    embedding: true
  },
  {
    link: "https://maxi.nerdlegame.com/game",
    text: "Nagyon nehéz Nerdle feladvány.",
    color: "#ff0000",
    title: "Maxi Nerdle",
    embedding: false
  },
  {
    link: "https://nerdlegame.com/crossnerdle?gp=&st=85#v=00004",
    text: "Egészítsd ki a táblázatot úgy, hogy minden sorban és oszlopban igaz legyen az egyenlőség. A sor végén balra, vagy alul mindig egy szám áll és a 0, mint szám kizárólag önmagában állhat valamelyik oldalon (nem lehet vele összeadni, vagy szorozni például, de egy szám közepén számjegyként állhat).",
    color: "#ff0000",
    title: "Crossnerdle",
    embedding: false
  },
  {
    link: "https://nerdlegame.com/s/2d/level2?gp=&st=95",
    text: "Ha emlékszel 2D Nerdle-re, akkor ez hasonló, csak a műveleti jeleket is tudod cserélgetni és a számoknál jelezve van, hogy a sorban, vagy az oszlopban van-e jó helyen.",
    color: "#ff0000",
    title: "2D nerdle level 2",
    embedding: false
  },
  {
    link: "https://nerdlegame.com/s/shuffle/1234?gp=&st=90",
    text: "Emlékszel a Shuffle-re? Ez konkrétan ugyanaz, csak számokkal.",
    color: "#ff0000",
    title: "Shuffle",
    embedding: false
  },
  {
    link: "https://nerdlegame.com/s/2d/level3?gp=&st=95",
    text: "Utolsó matekos pálya! Itt már az sincs jelezve, hogy a sor, vagy az oszlop jó-e.",
    color: "#ff0000",
    title: "2D nerdle level 3",
    embedding: false
  },
  {
    link: "https://duotrigordle.com/game/practice/normal",
    text: "Hát… Emlékszel, amikor megígértem, hogy 16 szónál több nem lesz párhuzamosan? Nos, keresztben volt az ujjam… Úgyhogy most 32 következik! HAHAHA!!! (ezek után biztosan nem fogod már elhinni, hogy ez tényleg az utolsó ezekből…) A játék megnyitása után kattints a \"Practice\", majd a \"Practice Duotrigordle\" gombra!",
    color: "#ffff00",
    title: "Duotrigordle",
    embedding: false
  },
  {
    link: "https://www.countryle.com/",
    text: "Eljutottál a földrajzos részhez. Remélem értesz a térképes dolgokhoz, különben ezen már nem fogsz túljutni… (egyáltalán hogyan nem járt még le az időd?)  Countryle-ben ki kell találnod egy országot és a játék minden tipp után elmondja, hogy jó félgömbön vagy-e és még pár extra infót.",
    color: "#4472c4",
    title: "Countryle",
    embedding: true
  },
  {
    link: "https://globle-game.com/practice",
    text: "Ez olyan, mint Countryle, de itt csak azt tudod, hogy a tippelt országok milyen messze van a kitalálandó országtól.",
    color: "#4472c4",
    title: "Globle",
    embedding: true
  },
  {
    link: "https://globle-capitals.com/practice",
    text: "80. pálya! Ha eljutottál ide, kiabáld azt, hogy \"Reszkessetek betörők!\"  Itt a Globle-lel ellentétben, a fővárost kell kitalálnod, nem pedig az országot. A játék során repülővel utazol a városok között és a játék az utad minden pontjáról elmondja, hogy az milyen közel volt a kitalálandó fővároshoz.",
    color: "#4472c4",
    title: "Globle Capitals",
    embedding: true
  },
  {
    link: "https://www.flagdle.org/",
    text: "Találd ki melyik ország zászlaja van a képen.",
    color: "#4472c4",
    title: "Flagdle",
    embedding: true
  },
  {
    link: "https://flagle.gg/",
    text: "Itt is a zászlót kell kitalálnod. Viszont a zászlónak csak annyi hatodát látod, ahányat addig tippeltél (kezdetben 0).",
    color: "#4472c4",
    title: "Flagle",
    embedding: true
  },
  {
    link: "https://www.flaggle.net/free-play/",
    text: "Újabb zászlókitalálás, juhú! Itt minden tipped után azt mutatja meg a játék, hogy az általad tippelt zászló területének mely része volt átfedésben a kitalálandó zászlóéval.",
    color: "#4472c4",
    title: "Flaggle",
    embedding: true
  },
  {
    link: "https://worldle.online/",
    text: "Ismert fel az országot a körvonala alapján! Minden tipped után megtudod, hogy a helyes ország melyik irányban és milyen messze van a tippedtől.",
    color: "#4472c4",
    title: "Worldle",
    embedding: true
  },
  {
    link: "https://kveez.com/en/statele-unlimited/",
    text: "Olyan, mint Worldle, de itt az USA egy tagállamát kell kitalálnod.",
    color: "#4472c4",
    title: "Statele",
    embedding: true
  },
  {
    link: "https://travle.earth/",
    text: "Juss el az egyik országból a másikba kizárólag szárazföldi határokat használva!",
    color: "#4472c4",
    title: "Travle",
    embedding: true
  },
  {
    link: "https://tradle.net/unlimited/",
    text: "Melyik ország exportját látod? A tippjeid után a játék ugyanúgy segít, mint Worldle esetén.",
    color: "#4472c4",
    title: "Tradle",
    embedding: true
  },
  {
    link: "https://oec.world/en/games/connectrade",
    text: "Csoportosítsd az exportcikkeket aszerint, hogy melyik ország fő exporttermékei! Minden tipped után elárulja a játék a tippelt termékekről, hogy azok melyik országhoz lettek volna helyesek.",
    color: "#4472c4",
    title: "Connectrade",
    embedding: false
  },
  {
    link: "https://wheredle.xyz/",
    text: "Geoguessr-szerű játék. Találd ki melyik USA-tagállam streetviewját látod!",
    color: "#4472c4",
    title: "Wheredle",
    embedding: true
  },
  {
    link: "https://citydle.com/",
    text: "90. PÁLYA!!! Úgy látom értesz a földrajzhoz is. Úgyhogy úgy érzem, hogy itt az idő, hogy befejezzük a földrajz részt ezzel a játékkal. Itt egy várost kell kitalálnod és minden tipp után egy Worldle-szerű választ kapsz.",
    color: "#4472c4",
    title: "Citydle",
    embedding: true
  },
  {
    link: "https://64ordle.au/?mode=free",
    text: "Na jó, talán túlzásnak hangzik, de a Sexaginta-quattuordle egy 64 szavas párhuzamos Wordle játék. Úgyis át fogod ugrani ezt, szóval fölösleges bemutatnom.",
    color: "#ffff00",
    title: "Sexaginta-quattuordle",
    embedding: true
  },
  {
    link: "https://quizl.io/vault",
    text: "Eljutottál az utolsó részleghez! Itt olyan Wordle-játékok vannak, amiket egy csoportba se tudtam beilleszteni. Jó szórakozást ezekhez!  A Quizl nevű játékban 5 trivia kérdést kell megválaszolnod. A játék addig megy, amíg mind az öt nem sikerült egymás után. A játék megnyitása után válassz ki egy random feladványt!",
    color: "#ffc000",
    title: "Quizl",
    embedding: true
  },
  {
    link: "https://daydle.com/",
    text: "Melyik évben történt a megadott esemény a megadott napon?",
    color: "#ffc000",
    title: "Daydle",
    embedding: true
  },
  {
    link: "https://histordle.com/yeardle/unlimited/",
    text: "Melyik évben történt a megadott esemény?",
    color: "#ffc000",
    title: "Yeardle",
    embedding: false
  },
  {
    link: "https://histordle.com/songle/",
    text: "Melyik évben jöttek ki a megadott zenék?",
    color: "#ffc000",
    title: "Songle",
    embedding: false
  },
  {
    link: "https://histordle.com/popcultured/unlimited/",
    text: "Melyik évben történtek a megadott Pop-culture események?",
    color: "#ffc000",
    title: "PopCultured",
    embedding: false
  },
  {
    link: "https://solitaired.com/phrazle",
    text: "Találd ki a kifejezést Wordle-szerűen.",
    color: "#ffc000",
    title: "Phrazle",
    embedding: false
  },
  {
    link: "https://emojidle.org/",
    text: "Olyan, mint a Numberle, csak számjegyek helyett emojikkal.",
    color: "#ffc000",
    title: "Emojidle",
    embedding: true
  },
  {
    link: "https://birdle.day/",
    text: "Nem volt már korábban egy másik Birdle? Vagy Thirdle? Vagy Numberle? Tulajdonképpen hány név van többször? Na mindegy, ez olyan, mint Emojidle, de kizárólag madáremojikkal. A narancssárga jelzi a rossz helyet, a kék a jót, a piros pedig, hogy nincs benne.",
    color: "#ffc000",
    title: "Birdle",
    embedding: true
  },
  {
    link: "https://cloudle.app/",
    text: "Gratulálok! Eljutottál a 100. pályához!!! Ezért jutalmat érdemelsz! De nem fogsz kapni :( És nem, nem ez az utolsó játék még.  Itt egy 5 napos időjárás-előrejelzést kell készítened Wordle-szerűen. Ha esetleg tudod, hogy mi a hivatalos előrejelzés a megadott helyen a megadott időre, akkor ez 1 tippből meglesz!",
    color: "#ffc000",
    title: "Cloudle",
    embedding: true
  },
  {
    link: "https://wordgames.gg/unlockle",
    text: "Oldd fel a kijelzőt egy 5 hosszú kóddal! A narancssárga és a zöld szín a tippek után azt jelenti, amit gondolnál, hogy jelent.",
    color: "#ffc000",
    title: "Unlockle",
    embedding: true
  },
  {
    link: "https://www.gamedle.wtf/unlimited#",
    text: "Találd ki melyik videójáték boxartja van pixelesítve neked!",
    color: "#ffc000",
    title: "Gamedle",
    embedding: false
  },
  {
    link: "https://battleshipple.com/",
    text: "25 mezőből 3 egymás mellettin egy hajó van. Melyeken? Korlátlan tipped van.",
    color: "#ffc000",
    title: "Battleshipple",
    embedding: true
  },
  {
    link: "https://jackli.gg/chessle/",
    text: "Találd ki melyik volt az első 6 lépés a sakkjátszmában.",
    color: "#ffc000",
    title: "Chessle",
    embedding: true
  },
  {
    link: "https://www.chessguessr.com/",
    text: "Hogyan folytatódott a sakkjátszma? Ezek valóban lejátszott lépések.",
    color: "#ffc000",
    title: "Chessguessr",
    embedding: true
  },
  {
    link: "https://tryhardguides.com/concludle/",
    text: "Egyre több segítségből jöjj rá arra, amit ki kell találni!",
    color: "#ffc000",
    title: "Concludle",
    embedding: true
  },
  {
    link: "https://frontofficesports.com/trivia/factle/",
    text: "Találd ki a top 5 dolgot valamilyen témában!",
    color: "#ffc000",
    title: "Factle",
    embedding: true
  },
  {
    link: "https://frontofficesports.com/trivia/factle-sports/",
    text: "Olyan, mint a Factle, de kizárólag sport témájú kérdésekkel (gondoltad volna?)",
    color: "#ffc000",
    title: "Factle Sports",
    embedding: true
  },
  {
    link: "https://www.play-birdle.com/",
    text: "Birdle? Nem volt már ez egyszer? Vagy kétszer… Elég random, hogy pont egy \"Birdle\" nevű játék szerepel háromszor…. Na mindegy, itt a képek alapján kell kitalálni a madarat.",
    color: "#ffc000",
    title: "Birdle",
    embedding: false
  },
  {
    link: "https://conexo.ws/en/daily",
    text: "110. pálya!!! Már közel a vége (valószínűleg az órád alapján is)  Oszd a 16 szót 4 darab 4-es csoportba valamilyen szempontok alapján.",
    color: "#ffc000",
    title: "Conexo",
    embedding: true
  },
  {
    link: "https://cardle.uk/",
    text: "Milyen típusú autó van a képen?",
    color: "#ffc000",
    title: "Cardle",
    embedding: true
  },
  {
    link: "https://likewise.com/games/moviedle",
    text: "Melyik film gyorsított verziója van lejátszva? Minden hibás tipp után 1 másodperccel tovább lesz játszva a film.",
    color: "#ffc000",
    title: "Moviedle",
    embedding: true
  },
  {
    link: "https://www.cinenerdle.app/",
    text: "Melyik filmből származik a képkocka? Minden tipped után 1/9 részét fedi fel a játék a képnek.",
    color: "#ffc000",
    title: "CineNerdle",
    embedding: true
  },
  {
    link: "https://www.cinenerdle2.app/puzzles",
    text: "Itt nem értem én sem mit kell. De ha már a végefelé vagyunk, azért feladom nektek. A megnyitás után az original gombra menj!",
    color: "#ffc000",
    title: "Cine2Nerdle",
    embedding: true
  },
  {
    link: "https://likewise.com/games/posterdle",
    text: "A játék úgyis leírja mit kell…",
    color: "#ffc000",
    title: "Posterdle",
    embedding: true
  },
  {
    link: "https://likewise.com/games/nflxdle",
    text: "Itt is leírja. Bocsi, hogy ennyire összecsaptam ezt a részt, de nem gondoltam, hogy még bárki eljut ide.",
    color: "#ffc000",
    title: "NFLXdle",
    embedding: true
  },
  {
    link: "https://likewise.com/games/bookdle",
    text: "Csak olvasd el azt a mondatot, ami oda van írva!",
    color: "#ffc000",
    title: "Bookdle",
    embedding: true
  },
  {
    link: "https://plotwords.com/",
    text: "Menj a play unlimited gombra! Utána valamilyen plotwordok alapján kell kitalálnod szavakat egy megadott témában. Remélhetőleg nem filmet kapsz, mivel abból már túl sok volt…",
    color: "#ffc000",
    title: "Plotwords",
    embedding: true
  },
  {
    link: "https://wordly.org/wordle-games/triplet",
    text: "Ha ismered a SET nevű játékot, akkor ez könnyű lesz. Csak annyi a feladat, hogy találd meg az összes SET-et 3 percen belül. Ez tulajdonképpen miért is Wordle játék?",
    color: "#ffc000",
    title: "Triplet",
    embedding: true
  },
  {
    link: "https://murdle.com/",
    text: "120. játék… Ennek sosem lesz vége?  Itt egy rejtvényt kell kitöltened! Hajrá! Amúgy nem volt már egy másik Murdle úgy 110 pályával ezelőtt?",
    color: "#ffc000",
    title: "Murdle",
    embedding: true
  },
  {
    link: "https://redactle.net/",
    text: "Egy Wikipedia szócikket kell kitalálnod, de ki vannak belőle húzva a szavak. Ha betippelsz egy szót, ami szerepel a cikkben, akkor az onnantól már nem lesz kihúzva. A játék akkor ér véget, ha kitalálod mi a szócikk címe. Korlátlan tipped van.",
    color: "#ffc000",
    title: "Redactle",
    embedding: true
  },
  {
    link: "https://jonesnxt.github.io/kilordle/",
    text: "Valódi tényleges, legutolsó pálya, tényleg-tényleg. 1000 darab 5-betűs szó párhuzamosan! Hajrá! (Ha egy szóból az összes helyről ismered már, hogy milyen betű van ott, a játék automatikusan kitaláltnak veszi.)",
    color: "#ffff00",
    title: "Kilordle",
    embedding: true
  }
];
