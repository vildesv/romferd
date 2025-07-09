document.addEventListener("DOMContentLoaded", () => {
  const planetData = {
    merkur: {
      navn: "Merkur",
      type: "Steinplanet",
      avstand: "Ca. 58 millioner km fra solen",
      fakta:
        "Merkur er den innerste og minste planeten i solsystemet. Overflaten er grå og full av kratre, noe som gir den et utseende som minner om Månen. Det er oppdaget spor av is i kratre nær polene, der sollys aldri når frem. Merkur har ingen atmosfære som kan holde på varme, noe som fører til ekstreme temperaturforskjeller mellom dag og natt – fra over 400 grader Celsius på dagtid til minus 170 grader om natten. Planeten har ingen måner, og ett år på Merkur er omtrent 88 jorddager. Et døgn på Merkur, det vil si én rotasjon, tilsvarer nesten 59 jorddager. På grunn av den korte avstanden til Sola, er Merkur bare synlig like før soloppgang eller rett etter solnedgang.",
    },
    venus: {
      navn: "Venus",
      type: "Steinplanet",
      avstand: "Ca. 108 millioner km fra solen",
      fakta:
        "Venus er den planeten som er mest lik Jorda i størrelse og sammensetning. Den har en tett atmosfære bestående hovedsakelig av karbondioksid, som skaper en kraftig drivhuseffekt og gir overflatetemperaturer på over 460 grader celsius. Skyene består av svovelsyre og reflekterer sollys så effektivt at Venus er et av de klareste objektene på nattehimmelen. Overflaten er preget av sletter, fjell og vulkaner, og det finnes tegn til geologisk aktivitet. Venus roterer svært sakte og i motsatt retning av de fleste andre planetene. Planeten har ingen måner.",
    },
    jorden: {
      navn: "Jorden",
      type: "Steinplanet",
      avstand: "Ca. 150 millioner km fra solen",
      fakta:
        "Jorda er den eneste planeten vi kjenner til som har liv. Den har en atmosfære rik på nitrogen og oksygen, og overflaten består av hav, kontinenter og isdekte områder. Jorda har et magnetfelt som beskytter mot stråling fra verdensrommet, og et stabilt klima som gjør planeten beboelig. Den roterer rundt sin egen akse på omtrent 24 timer og bruker omtrent 365 dager på en runde rundt Sola. Månen, som er Jordas eneste naturlige satellitt, spiller en viktig rolle for tidevann og stabiliteten i rotasjonen.",
    },
    mars: {
      navn: "Mars",
      type: "Steinplanet",
      avstand: "Ca. 228 millioner km fra solen",
      fakta:
        "Mars er kjent som den røde planeten på grunn av jernoksid i overflaten. Den har en tynn atmosfære som hovedsakelig består av karbondioksid, og temperaturen kan variere sterkt. Mars har fjell, sletter, daler og polare iskapper som inneholder vannis. Det høyeste fjellet og den dypeste dalen i solsystemet finnes her – Olympus Mons og Valles Marineris. Det er store interesser knyttet til Mars på grunn av mulige spor etter tidligere vann og muligheten for liv. Planeten har to små måner, Phobos og Deimos.",
    },
    jupiter: {
      navn: "Jupiter",
      type: "Gasskjempe",
      avstand: "Ca. 778 millioner km fra solen",
      fakta:
        "Jupiter er den største planeten i solsystemet. Den har en tykk atmosfære dominert av hydrogen og helium, og kjennetegnes av sterke stormsystemer – blant annet den store røde flekken, en enorm storm som har vart i flere hundre år. Jupiter har et svakt ringsystem og 95 kjente måner, inkludert de fire store månene Io, Europa, Ganymedes og Callisto. Planeten har et kraftig magnetfelt og påvirker solsystemet gjennom sin enorme masse og gravitasjon.",
    },
    saturn: {
      navn: "Saturn",
      type: "Gasskjempe",
      avstand: "Ca. 1,43 milliarder km fra solen",
      fakta:
        "Saturn er den nest største planeten i solsystemet. Den er mest kjent for sitt spektakulære ringsystem, som består av ispartikler og steinfragmenter. Som Jupiter er Saturn en gasskjempe med en atmosfære av hydrogen og helium. Planeten har mange stormsystemer og kraftige vinder. Saturn har 274 bekreftede måner i bane rundt seg, langt flere enn noen annen planet i solsystemet vårt. I mars 2025 bekreftet astronomer oppdagelsen av 128 små måner rundt Saturn – noe som økte det allerede høye antallet betraktelig. Blant månene er Titan den største, og den skiller seg ut med sin tykke atmosfære og komplekse kjemi. Saturn har lav tetthet og ville kunne flyte i vann om man fant et stort nok basseng.",
    },
    uranus: {
      navn: "Uranus",
      type: "Iskjempe",
      avstand: "Ca. 2,87 milliarder km fra solen",
      fakta:
        "Uranus er den første planeten som ble oppdaget med teleskop. Den er en iskjempe med en blågrønn farge som skyldes metangass i atmosfæren. Planeten har en svært spesiell rotasjonsakse – den roterer nærmest sidelengs, noe som gir ekstreme årstider. Uranus har et svakt, men komplekst ringsystem bestående av mørke partikler som er vanskelig å observere fra Jorda. Ringsystemet ble først oppdaget i 1977 og består av 13 bekreftede ringer. Planeten har 28 bekreftede måner, der mange av dem har fått navn fra figurer i verkene til Shakespeare og Alexander Pope. Flere av månene ble oppdaget i nyere tid, blant annet gjennom observasjoner med Hubble-teleskopet og avanserte bakkebaserte teleskoper. Temperaturen i atmosfæren er blant de laveste i solsystemet, og mye rundt Uranus' indre struktur og dynamikk er fortsatt et mysterium.",
    },
    neptun: {
      navn: "Neptun",
      type: "Iskjempe",
      avstand: "Ca. 4,5 milliarder km fra solen",
      fakta:
        "Neptun er den ytterste planeten i solsystemet. Den er en iskjempe som ligner Uranus i sammensetning, men har en mer aktiv atmosfære med sterke vinder og store stormer, blant annet den mørke flekken som ligner Jupiters røde. Neptun har en dyp blå farge på grunn av metangass i atmosfæren. Planeten har 16 bekreftede måner, hvorav Triton er den største og mest interessante. Triton har en retrograd bane, noe som betyr at den går motsatt vei av planetens rotasjon, og den antas å være en innfanget dvergplanet fra Kuiperbeltet. Flere av Neptuns måner er små og ble oppdaget så sent som i det 21. århundre, og nye oppdagelser har stadig blitt bekreftet etter hvert som teleskopteknologien har blitt bedre.",
    },
  };

  // Planet-info funksjonalitet (kun hvis elementene finnes)
  const infoBox = document.getElementById("planetInfo");
  const planetIcons = document.querySelectorAll(".planet-icon");

  if (infoBox && planetIcons.length > 0) {
    planetIcons.forEach((icon) => {
      icon.addEventListener("click", () => {
        const name = icon.dataset.planet;
        const planet = planetData[name];
        infoBox.innerHTML = `
          <h3>${planet.navn}</h3>
          <p><strong>Type:</strong> ${planet.type}</p>
          <p><strong>Avstand fra solen:</strong> ${planet.avstand}</p>
          <p>${planet.fakta}</p>
        `;
        infoBox.classList.remove("visible");
        void infoBox.offsetWidth; // Trigger reflow for animasjon
        infoBox.classList.add("visible");
      });
    });
  }

  // Til toppen-knapp funksjonalitet
  const toTopBtn = document.getElementById("toTopBtn");
  if (toTopBtn) {
    window.addEventListener("scroll", () => {
      toTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });
    toTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
