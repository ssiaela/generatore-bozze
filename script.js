/* =========================
   DEFINIZIONE CATEGORIE + ERRORI
   ========================= */

const CATEGORIES = [
  /* 1 – Dati cliente / intestatario (BOTH) */
  {
    id: 1,
    title: "1. Dati cliente / intestatario",
    section: "both",
    tag: "Dati anagrafici",
    errors: [
      "Codice fiscale mancante.",
      "Codice fiscale incompleto.",
      "Codice fiscale errato.",
      "Partita IVA mancante, se il cliente è titolare di P.IVA.",
      "Partita IVA incompleta.",
      "Partita IVA errata.",
      "Dati dell'intestatario (ragione sociale / nome e cognome) mancanti o incompleti.",
      "Indirizzo della sede legale errato o incompleto (via, numero civico, CAP, comune).",
      "Dati del legale rappresentante mancanti.",
      "Codice fiscale del legale rappresentante mancante.",
      "Codice fiscale del legale rappresentante errato.",
      "Mail del referente amministrativo mancante (dato obbligatorio per fatture di cortesia).",
      "Mail del referente amministrativo errata.",
      "PEC inserita al posto di una mail ordinaria per il referente amministrativo.",
      "Nome e cognome del referente tecnico mancanti.",
      "Cellulare del referente tecnico mancante.",
      "Codice SDI mancante per la fatturazione elettronica.",
      "PEC per fatturazione elettronica mancante.",
      "Codice SDI o PEC indicati ma non validi o non corretti.",
      "IBAN mancante.",
      "IBAN incompleto.",
      "IBAN errato.",
      "IBAN estero (accettiamo solo IBAN italiani).",
      "Mancanza dei dati del titolare del conto bancario quando richiesto."
    ]
  },

  /* 2 – Modalità di pagamento (BOTH) */
  {
    id: 2,
    title: "2. Modalità di pagamento",
    section: "both",
    tag: "Pagamenti",
    errors: [
      "Richiesta modalità di pagamento tramite bonifico bancario senza preventiva autorizzazione del reparto (richiesta da inviare a servizioclienti@voipvoice.it)."
    ]
  },

  /* 3 – Documenti d'identità (BOTH) */
  {
    id: 3,
    title: "3. Documenti d'identità",
    section: "both",
    tag: "Documentazione",
    errors: [
      "Manca il documento d'identità del legale rappresentante.",
      "Manca il documento d'identità del firmatario del conto bancario (quando diverso dal legale rappresentante)."
    ]
  },

  /* 4 – Documentazione operatore attuale / fattura (PRESALES) */
  {
    id: 4,
    title: "4. Documentazione operatore attuale / fattura",
    section: "presales",
    tag: "Fattura operatore uscente",
    errors: [
      "Mancanza della fattura dell'operatore attuale in caso di richiesta di portabilità.",
      "Nella fattura allegata non è riportata la numerazione da portare.",
      "Nella fattura allegata non è riportato il codice di migrazione.",
      "La fattura allegata non è completa di tutte le pagine.",
      "La fattura non è recente (serve fattura emessa negli ultimi 6 mesi).",
      "La fattura è intestata ad una partita IVA diversa rispetto a quella del modulo di attivazione (necessario modulo di subentro contestuale).",
      "Il codice di migrazione riportato in fattura non è corretto o coerente con la numerazione indicata."
    ]
  },

  /* 5 – Codici di migrazione / portabilità numerazioni (PRESALES) */
  {
    id: 5,
    title: "5. Codici di migrazione e portabilità numerazioni",
    section: "presales",
    tag: "Portabilità",
    errors: [
      "Codice di migrazione mancante nel modulo di portabilità.",
      "Codice di migrazione errato.",
      "Prefisso della numerazione non coerente con il comune dell'indirizzo di attivazione.",
      "Presenza di una connettività associata alla numerazione da portare, che potrebbe decadere con la portabilità.",
      "Numerazione ISDN multinumero: il cliente deve indicare se intende perdere la numerazione associata o portarla anch'essa."
    ]
  },

  /* 6 – Contratti / struttura, firme e timbri (BOTH) */
  {
    id: 6,
    title: "6. Contratti / struttura, firme e timbri",
    section: "both",
    tag: "Contratti",
    errors: [
      "Manca il contratto allegato sulla pratica.",
      "Il contratto allegato manca di una o più pagine.",
      "Manca la firma nella sezione 'Modalità di pagamento'.",
      "Manca una delle firme previste nella sezione 'Dichiarazioni e firme'.",
      "Manca una delle firme previste nella sezione 'Consenso al trattamento dei dati personali'.",
      "Manca la firma nella pagina dell'offerta commerciale.",
      "Manca la firma nella sezione 'Allegato 4' quando prevista.",
      "Manca almeno un timbro dell'azienda sul contratto/modulo.",
      "Modulo cartaceo ancora in formato editabile (non consentito).",
      "Nel contratto di manutenzione manca il canone mensile.",
      "Nel contratto di manutenzione manca la data di inizio validità."
    ]
  },

  /* 7 – Servizi di connettività (PRESALES) */
  {
    id: 7,
    title: "7. Servizi di connettività",
    section: "presales",
    tag: "Connettività",
    errors: [
      "Indirizzo di attivazione non coperto dalla tecnologia di connettività richiesta.",
      "Velocità FTTC richiesta superiore alla velocità stimata sull'indirizzo.",
      "Velocità VoipAir richiesta superiore alla velocità stimata sull'indirizzo.",
      "Indirizzo non censito nei sistemi di copertura.",
      "Indirizzo errato o incompleto: necessarie maggiori specifiche (via, civico, interno, scala…)."
    ]
  },

  /* 8 – Numerazioni nuove e portate (PRESALES) */
  {
    id: 8,
    title: "8. Numerazioni – nuove e portate",
    section: "presales",
    tag: "Numerazioni",
    errors: [
      "Per numerazioni nuove: prefisso non corrispondente al comune dell'indirizzo di attivazione.",
      "Per numerazioni nuove: costi indicati non corretti (canone, attivazione…).",
      "Per numerazioni in portabilità: prefisso non corrispondente al comune dell'indirizzo di attivazione.",
      "Per numerazioni in portabilità: costi indicati non corretti.",
      "Per numerazioni in portabilità: codice di migrazione sbagliato.",
      "Per numerazioni in portabilità: numerazione ISDN multinumero, da confermare se portare anche la numerazione associata."
    ]
  },

  /* 9 – GNR, domini SIP, Flat Inbound (PRESALES) */
  {
  id: 9,
  title: "9. GNR, domini SIP e servizi collegati",
  section: "presales",
  tag: "VoIP / SIP",
  errors: [
    "Attivazione di un GNR su trunk.voipvoice.it senza indicare l'IP per la configurazione peer-to-peer.",
    "Richiesta attivazione numero con servizio Flat Inbound su dominio diverso da sip.voipvoicetel.it (dominio da correggere)."
  ]
},


  /* 10 – Easy Solution (PRESALES) */
  {
    id: 10,
    title: "10. Easy Solution – router e altri apparati",
    section: "presales",
    tag: "Easy Solution",
    errors: [
      "Per Easy Solution (telefono, router, cuffie…): modello non indicato quando sono disponibili più modelli.",
      "Per Easy Solution: indirizzo di spedizione apparato non indicato.",
      "Easy Solution Router Small Level: manca la scelta tra Fritzbox 7530AX e TP-LINK EB431V.",
      "Easy Solution Router Medium Level: manca la scelta tra Fritzbox 7690, Draytek 2765 o Draytek 2765AC.",
      "Easy Solution Router High Level: manca la scelta tra Draytek 2865, 2865AC, 2927, 2927AC o Mikrotik RB4011."
    ]
  },

  /* 11 – VoipFax (PRESALES) */
  {
    id: 11,
    title: "11. VoipFax",
    section: "presales",
    tag: "VoipFax",
    errors: [
      "Per il servizio VoipFax manca la mail su cui devono essere recapitati i fax."
    ]
  },

  /* 12 – Numeri verdi (PRESALES) */
  {
    id: 12,
    title: "12. Numeri verdi",
    section: "presales",
    tag: "800",
    errors: [
      "Per l'attivazione del numero verde non è stato indicato il numero nero.",
      "Per numero verde in portabilità manca il modulo specifico per la portabilità dei numeri verdi."
    ]
  },

  /* 13 – Business Continuity (PRESALES) */
  {
    id: 13,
    title: "13. Business Continuity",
    section: "presales",
    tag: "BC",
    errors: [
      "Business Continuity Plus: non viene indicato quale router si desidera tra Draytek 2865 e Draytek 2927.",
      "Business Continuity Plus: manca l'indirizzo di spedizione del router.",
      "Business Continuity Plus AC: non viene indicato quale router si desidera tra Draytek 2865AC e Draytek 2927AC.",
      "Business Continuity Plus AC: manca l'indirizzo di spedizione del router."
    ]
  },

  /* 14 – Servizi aggiuntivi: Forward, Backup, Pubblicazione elenchi (PRESALES) */
  {
    id: 14,
    title: "14. Servizi aggiuntivi: Forward, Backup, Pubblicazione elenchi",
    section: "presales",
    tag: "Servizi aggiuntivi",
    errors: [
      "Servizio Forward: manca il numero su cui deviare le chiamate.",
      "Servizio Backup: manca il numero su cui deviare le chiamate in caso di backup.",
      "Servizio di pubblicazione negli elenchi telefonici: richiesta senza l'apposito modulo dedicato."
    ]
  },

  /* 15 – Business Monitoring (PRESALES) */
  {
    id: 15,
    title: "15. Business Monitoring (extra connettività)",
    section: "presales",
    tag: "Monitoring",
    errors: [
      "Business Monitoring Information: manca la mail del referente tecnico.",
      "Business Monitoring Warning: manca la mail del referente tecnico.",
      "Business Monitoring Warning: manca il cellulare del referente tecnico.",
      "Business Monitoring High: manca la mail del referente tecnico.",
      "Business Monitoring High: manca il cellulare del referente tecnico.",
      "Business Monitoring High: manca il cellulare del cliente."
    ]
  },

  /* 16 – Microsoft 365 (PRESALES) */
  {
    id: 16,
    title: "16. Microsoft 365 (Easy Solution 365)",
    section: "presales",
    tag: "Microsoft 365",
    errors: [
      "Microsoft 365 – dominio esistente o da creare (verifica necessaria)."
    ]
  },

  /* 17 – Together e Office Elite (PRESALES) */
  {
    id: 17,
    title: "17. Together e Office Elite",
    section: "presales",
    tag: "Listini commerciali",
    errors: [
      "Applicazione contemporanea di Together e Office Elite sullo stesso servizio (non consentito).",
      "Together richiesto con un servizio voce a consumo (Together applicabile solo su servizi voce flat).",
      "Costi con Together non corretti rispetto al listino dedicato.",
      "Dicitura 'Together' non riportata sulla modulistica, pur avendo applicato il listino corrispondente.",
      "Office Elite applicato su servizi non ammessi (es. Backup, Forward, VoIP Continuity, ecc.).",
      "Dicitura 'Office Elite' non riportata sulla modulistica nonostante l'applicazione di un prezzo maggiorato."
    ]
  },

  /* 18 – Moduli cartacei – Allegati (PRESALES) */
  {
    id: 18,
    title: "18. Moduli cartacei – Allegati 1 / 2 / 3",
    section: "presales",
    tag: "Allegati",
    errors: [
      "Modulo cartaceo in formato editabile (non deve esserlo).",
      "Mancanza Allegato 1 per servizi voce o extra voce (nuovo o in portabilità).",
      "Mancanza Allegato 2 per connettività, indirizzi IP, Business Continuity, Business Monitoring o VoipSim.",
      "Mancanza Allegato 3 per Easy Solution router (Cloud, Security, DNS filter, 365, SMS) e VoipFax.",
      "Nel modulo di variazione: richiesta nuova attivazione numero nuovo senza Allegato 1.",
      "Nel modulo di variazione: richiesta nuova attivazione numero in portabilità senza Allegato 1 e Allegato 4.",
      "Nel modulo di variazione: richiesta attivazione connettività senza Allegato 2."
    ]
  },

  /* 19 – Modulo di subentro – Dati cliente (PROVISIONING) */
  {
    id: 19,
    title: "19. Modulo di subentro – Dati cliente",
    section: "provisioning",
    tag: "Subentro – dati",
    errors: [
      "Nel modulo di subentro non sono stati compilati tutti i dati obbligatori nella sezione 'Dati cliente'.",
      "Mancanza del codice fiscale del nuovo intestatario.",
      "Mancanza della partita IVA del nuovo intestatario (se soggetto IVA).",
      "Mancanza della mail amministrativa del nuovo intestatario.",
      "Mancanza di altri dati obbligatori (indirizzo, telefono, referenti) previsti dal modulo di subentro."
    ]
  },

  /* 20 – Modulo di subentro – Offerta commerciale (PROVISIONING) */
  {
    id: 20,
    title: "20. Modulo di subentro – Offerta commerciale",
    section: "provisioning",
    tag: "Subentro – offerta",
    errors: [
      "Canoni riportati nel modulo di subentro non corretti rispetto alla fattura del cedente.",
      "Mancanza del codice connettività per uno o più servizi da volturare.",
      "Mancanza della numerazione per uno o più servizi voce da volturare.",
      "Non sono riportati tutti i servizi attivi del cliente; da verificare se i servizi non indicati devono rimanere attivi al cedente.",
      "Mancanza dicitura 'Together' sul modulo, pur in presenza di listino Together sul cliente.",
      "Mancanza dicitura 'SWP' quando presente sulla fattura del cedente.",
      "Mancanza dicitura 'Office Elite' quando è presente un prezzo maggiorato sulla fattura del cedente."
    ]
  },

  /* 21 – Modulo di subentro – Firme, timbri, dichiarazione di cessione (PROVISIONING) */
  {
    id: 21,
    title: "21. Modulo di subentro – Firme, timbri e dichiarazione di cessione",
    section: "provisioning",
    tag: "Subentro – firme",
    errors: [
      "Nel modulo di subentro mancano una o più firme obbligatorie.",
      "Nel modulo di subentro mancano i timbri richiesti.",
      "La dichiarazione di cessione risulta firmata dal subentrante anziché dal cedente.",
      "La dichiarazione di cessione risulta intestata al subentrante anziché al cedente.",
      "Nella dichiarazione di cessione non sono riportati tutti i servizi da volturare con i relativi codici.",
      "Nella dichiarazione di cessione mancano i codici dei servizi (evincibili dalla fattura).",
      "Nella dichiarazione di cessione mancano firma e timbro del cedente.",
      "CC cliente per mancanza di timbri sul contratto.",
      "Manca la dichiarazione di cessione."
    ]
  },

  /* 22 – Modulo di variazione (PRESALES) */
  {
    id: 22,
    title: "22. Modulo di variazione",
    section: "presales",
    tag: "Variazioni",
    errors: [
      "Nel modulo di variazione manca la partita IVA nei dati del cliente.",
      "Nel modulo di variazione manca il codice fiscale nei dati del cliente.",
      "Nel modulo di variazione manca il cellulare del referente tecnico.",
      "Nel modulo di variazione manca la mail del referente amministrativo.",
      "Nel modulo di variazione manca il codice della connettività da variare.",
      "Nel modulo di variazione manca la numerazione soggetta a variazione.",
      "Nel modulo di variazione manca il canone attualmente pagato dal cliente.",
      "Nella sezione 'Richiesta modifica/attivazione' non è riportato il costo di attivazione per un nuovo servizio.",
      "Il costo di attivazione indicato non è corretto.",
      "Il canone del servizio indicato non è corretto.",
      "Servizio extra inserito non compatibile con il servizio già attivo.",
      "Upgrade richiesto senza indicazione del costo una tantum di upgrade (49,90 €)."
    ]
  },

  /* 23 – Moduli di attivazione – cliente già attivo (PRESALES) */
  {
    id: 23,
    title: "23. Moduli di attivazione per cliente già attivo (secondo modulo)",
    section: "presales",
    tag: "Cliente già attivo",
    errors: [
      "Nel modulo di attivazione l'IBAN è diverso rispetto a quello già presente a sistema: chiedere se la variazione vale solo per la nuova pratica o anche per i servizi già attivi.",
      "Nel modulo di attivazione la partita IVA è diversa: chiedere se il cliente intende procedere con un subentro/voltura.",
      "Nel secondo modulo di attivazione il codice fiscale è diverso: chiedere se il cliente intende procedere con un subentro/voltura.",
      "Per le Pubbliche Amministrazioni: variazione del CIG rispetto alle pratiche precedenti, chiedere se il nuovo CIG vale solo per la nuova pratica o anche per gli altri servizi attivi."
    ]
  },

  /* 24 – Moduli di attivazione – coesistenza con connettività attiva (PRESALES) */
  {
    id: 24,
    title: "24. Moduli di attivazione – coesistenza con connettività già attiva",
    section: "presales",
    tag: "Cambio tecnologia",
    errors: [
      "Richiesta una nuova attivazione di connettività su un indirizzo in cui il cliente ha già una connettività attiva di tecnologia diversa: verificare se si intende effettuare un cambio tecnologia."

    ]
  },

  /* 25 – Modulo di cambio tecnologia (PRESALES) */
  {
    id: 25,
    title: "25. Modulo di cambio tecnologia",
    section: "presales",
    tag: "Cambio tecnologia – modulo",
    errors: [
      "Nel modulo di cambio tecnologia manca il codice del servizio nella sezione 'Codice servizio'.",
      "Nel modulo di cambio tecnologia manca l'indirizzo di attivazione.",
      "Nel modulo di cambio tecnologia l'indirizzo di attivazione è diverso rispetto a quello su cui è attiva la vecchia connettività.",
      "Nel modulo di cambio tecnologia manca il costo di attivazione.",
      "Nel modulo di cambio tecnologia il costo di attivazione indicato non è corretto.",
      "Nel modulo di cambio tecnologia manca il canone della nuova connettività.",
      "Nel modulo di cambio tecnologia il canone indicato non è corretto.",
      "Nel modulo di cambio tecnologia mancano una o più firme.",
      "Nel modulo di cambio tecnologia mancano i timbri richiesti.",
      "Modulo di cambio tecnologia usato per una semplice variazione di servizio (non corretto).",
      "Modulo di cambio tecnologia usato per una nuova attivazione aggiuntiva: in questo caso la vecchia connettività dovrà essere disdetta con procedura ordinaria."
    ]
  },

  /* 26 – Procedure e tempi – mancata integrazione (PRESALES) */
  {
    id: 26,
    title: "26. Procedure e tempi – mancata integrazione",
    section: "presales",
    tag: "Tempi / annullamenti",
    errors: [
      "Dopo una richiesta di integrazione, se entro circa tre settimane non perviene la documentazione corretta, a fine mese la pratica viene annullata.",
      "In caso di annullamento per mancata integrazione viene inviata una comunicazione PEC al cliente.",
      "Occorre inviare una mail per informare dell'annullamento del modulo per mancata integrazione."
    ]
  },

  /* 27 – Partner – stato anagrafico / listino (PRESALES) */
  {
    id: 27,
    title: "27. Partner – stato anagrafico e listino",
    section: "presales",
    tag: "Partner",
    errors: [
      "Contratto inviato dal partner per sé stesso senza rispetto dei costi minimi di listino (autocontrattualizzazione): necessario richiedere l'adeguamento ai minimi previsti."
    ]
  }
];

/* =========================
   INTRO / OUTRO TEMPLATES
   ========================= */

const INTRO_TEMPLATES = {
  partner_lei: {
    formale: "Gentile Partner,\n\nin riferimento alla pratica relativa al cliente {{cliente}}, desideriamo segnalarLe alcune integrazioni necessarie per poter procedere.",
    collaborativo: "Gentile Partner,\n\nLa contattiamo in merito alla pratica relativa al cliente {{cliente}} per riepilogare alcune correzioni e integrazioni richieste ai fini della corretta lavorazione della pratica.",
    diretto: "Gentile Partner,\n\nper la pratica relativa al cliente {{cliente}} risultano alcune integrazioni necessarie prima di poter procedere."
  },
  partner_tu: {
    formale: "Buongiorno,\n\nin merito alla pratica relativa al cliente {{cliente}} ti segnaliamo di seguito alcune integrazioni necessarie per poter procedere.",
    collaborativo: "Salve,\n\nti scriviamo per la pratica relativa al cliente {{cliente}}: di seguito trovi un riepilogo delle correzioni e integrazioni che ci servono per andare avanti.",
    diretto: "Salve,\n\nper la pratica del cliente {{cliente}} mancano alcune integrazioni: le trovi riepilogate qui sotto."
  },
  cliente_lei: {
    formale: "Gentile Cliente,\n\nin riferimento alla Sua pratica con VoipVoice, desideriamo segnalarLe alcune integrazioni necessarie per poter procedere.",
    collaborativo: "Gentile Cliente,\n\nLa contattiamo in merito alla Sua pratica per riepilogare alcune correzioni e integrazioni richieste ai fini della corretta lavorazione.",
    diretto: "Gentile Cliente,\n\nper la Sua pratica risultano alcune integrazioni necessarie prima di poter procedere."
  },
  cliente_tu: {
    formale: "Buongiorno,\n\nin merito alla tua pratica con VoipVoice ti segnaliamo alcune integrazioni necessarie per poter procedere.",
    collaborativo: "Salve,\n\nti scriviamo in merito alla tua pratica con VoipVoice per riepilogare in modo chiaro le correzioni e le integrazioni di cui abbiamo bisogno per proseguire.",
    diretto: "Salve,\n\nper la tua pratica con VoipVoice mancano alcune integrazioni: te le riassumiamo qui sotto."
  }
};

const OUTRO_TEMPLATES = {
  partner_lei: {
    formale: "\n\nRestiamo a disposizione per qualsiasi chiarimento e La ringraziamo per la collaborazione.\n\nCordiali saluti",
    collaborativo: "\n\nPer qualsiasi dubbio o necessità può contattarci: saremo lieti di supportarLa nella gestione della pratica.\n\nCordiali saluti",
    diretto: "\n\nIn attesa del modulo aggiornato, porgiamo cordiali saluti."
  },
  partner_tu: {
    formale: "\n\nRimaniamo a disposizione per eventuali chiarimenti.\n\nCordiali saluti",
    collaborativo: "\n\nSe hai bisogno di supporto sulla compilazione, siamo a disposizione.\n\nGrazie e buona giornata",
    diretto: "\n\nAttendiamo il modulo aggiornato.\n\nGrazie"
  },
  cliente_lei: {
    formale: "\n\nRestiamo a Sua completa disposizione per eventuali chiarimenti.\n\nCordiali saluti",
    collaborativo: "\n\nQualora avesse bisogno di supporto nella compilazione, non esiti a contattarci.\n\nCordiali saluti",
    diretto: "\n\nUna volta ricevute le integrazioni potremo procedere con la lavorazione della Sua pratica.\n\nCordiali saluti"
  },
  cliente_tu: {
    formale: "\n\nRimaniamo a disposizione per eventuali chiarimenti.\n\nCordiali saluti",
    collaborativo: "\n\nSe hai bisogno di aiuto nella compilazione, contattaci pure.\n\nUn saluto",
    diretto: "\n\nNon appena riceveremo le integrazioni potremo procedere con la tua pratica.\n\nGrazie"
  }
};

const ERROR_TEMPLATES = {
  "Codice fiscale mancante.": {
    partner_lei: "nel modulo che ci ha trasmesso non è stato indicato il codice fiscale del cliente, dato obbligatorio ai fini della corretta intestazione contrattuale e della fatturazione.",
    partner_tu: "nel modulo che ci hai trasmesso non è stato indicato il codice fiscale del cliente, dato obbligatorio per la corretta intestazione e la fatturazione.",
    cliente_lei: "nel modulo che ci ha inviato non è stato indicato il codice fiscale, dato obbligatorio ai fini della corretta intestazione del contratto e della fatturazione.",
    cliente_tu: "nel modulo che ci hai inviato non è stato indicato il codice fiscale, dato obbligatorio ai fini della corretta intestazione e della fatturazione."
  },
  "Codice fiscale errato.": {
    partner_lei: "il codice fiscale indicato per il cliente non risulta corretto. Le chiediamo di verificarlo e comunicarci il dato corretto.",
    partner_tu: "il codice fiscale indicato per il cliente non risulta corretto. Ti chiediamo di verificarlo e comunicarci il dato corretto.",
    cliente_lei: "il codice fiscale indicato nel modulo non risulta corretto. Le chiediamo di verificarlo e comunicarci il dato corretto.",
    cliente_tu: "il codice fiscale indicato nel modulo non risulta corretto. Ti chiediamo di verificarlo e comunicarci il dato corretto."
  },
  "Partita IVA mancante, se il cliente è titolare di P.IVA.": {
    partner_lei: "risulta indicato che il cliente è titolare di partita IVA, ma nel modulo non è riportata. Le chiediamo di inserirla in modo completo e corretto.",
    partner_tu: "risulta indicato che il cliente è titolare di partita IVA, ma nel modulo non è riportata. Ti chiediamo di inserirla in modo completo e corretto.",
    cliente_lei: "risulta indicato che Lei è titolare di partita IVA, ma nel modulo non è riportato il numero. Le chiediamo di comunicarci quello corretto.",
    cliente_tu: "risulta indicato che sei titolare di partita IVA, ma nel modulo non è riportato il numero. Ti chiediamo di comunicarci quello corretto."
  },
  "Partita IVA incompleta.": {
    partner_lei: "la partita IVA del cliente non risulta completa. Le chiediamo cortesemente di indicarci tale dato completo.", 
    partner_tu: "la partita IVA del cliente non risulta completa. Ti chiediamo gentilmente di indicarci il dato completo.",
    cliente_lei: "la partita iva indicataci non risulta completa, le chiediamo cortesmente di indicarci tale dato completo.",
    cliente_tu: "la partita indicataci non risulta completa. Ti chiediamo gentilmente di indicarci il dato completo."
  },
  "Partita IVA errata.": {
    partner_lei: "a seguito di una verifica la partita IVA non risulta corretta, ricordiamo che per procedere abbiamo necessità di una partita IVA attiva. Attendiamo il dato aggiornato.",
    partner_tu: "a seguito di una verifica la partita IVA non risulta corretta, ricordiamo che per procedere abbiamo necessità di una partita IVA attiva. Attendiamo il dato aggiornato.",
    cliente_lei: "a seguito di una verifica la partita IVA non risulta corretta, per procedere abbiamo necessità di una partita IVA attiva. Attendiamo il dato aggiornato.",
    cliente_tu: "a seguito di una verifica la partita IVA non risulta corretta, per procedere abbiamo necessità di una partita IVA attiva. Attendiamo il dato aggiornato."
  },
  "Dati dell'intestatario (ragione sociale / nome e cognome) mancanti o incompleti.": {
    partner_lei: "i dati dell'intestatario del contratto (ragione sociale o nome e cognome) risultano mancanti o incompleti. Le chiediamo di indicarci in modo completo i dati anagrafici del cliente, così da poter procedere.",
    partner_tu: "i dati dell'intestatario del contratto (ragione sociale o nome e cognome) risultano mancanti o incompleti. Ti chiediamo di indicarci in modo completo i dati anagrafici del cliente, così da poter procedere.",
    cliente_lei: "i Suoi dati anagrafici (ragione sociale o nome e cognome) risultano mancanti o incompleti. Le chiediamo di indicarci i dati completi, così da poter procedere con la lavorazione della pratica.",
    cliente_tu: "i tuoi dati anagrafici (ragione sociale o nome e cognome) risultano mancanti o incompleti. Ti chiediamo di indicarci i dati completi, così da poter procedere con la lavorazione della pratica."
  },
"Indirizzo della sede legale errato o incompleto (via, numero civico, CAP, comune).": {
    partner_lei: "l'indirizzo della sede legale indicato per il cliente risulta errato o incompleto (via, numero civico, CAP o comune mancanti). Le chiediamo di comunicarci l'indirizzo completo e corretto.",
    partner_tu: "l'indirizzo della sede legale indicato per il cliente risulta errato o incompleto (via, numero civico, CAP o comune mancanti). Ti chiediamo di comunicarci l'indirizzo completo e corretto.",
    cliente_lei: "l'indirizzo della Sua sede legale risulta errato o incompleto (via, numero civico, CAP o comune mancanti). Le chiediamo di indicarci l'indirizzo completo e corretto.",
    cliente_tu: "l'indirizzo della tua sede legale risulta errato o incompleto (via, numero civico, CAP o comune mancanti). Ti chiediamo di indicarci l'indirizzo completo e corretto."
  },
  "Dati del legale rappresentante mancanti.": {
    partner_lei: "nel modulo non risultano compilati i dati del legale rappresentante del cliente. Le chiediamo di inserirli in modo completo, così da poter procedere con la corretta validità contrattuale.",
    partner_tu: "nel modulo non risultano compilati i dati del legale rappresentante del cliente. Ti chiediamo di inserirli in modo completo, così da poter procedere con la corretta validità contrattuale.",
    cliente_lei: "nel modulo non risultano compilati i dati del legale rappresentante. Le chiediamo di indicarci i dati completi, così da poter procedere con la corretta validità del contratto.",
    cliente_tu: "nel modulo non risultano compilati i dati del legale rappresentante. Ti chiediamo di indicarci i dati completi, così da poter procedere con la corretta validità del contratto."
  },
  "Codice fiscale del legale rappresentante mancante.": {
    partner_lei: "manca il codice fiscale del legale rappresentante del cliente. Le chiediamo di integrarci il dato, così da poter procedere con la corretta registrazione contrattuale.",
    partner_tu: "manca il codice fiscale del legale rappresentante del cliente. Ti chiediamo di integrarci il dato, così da poter procedere con la corretta registrazione contrattuale.",
    cliente_lei: "nel modulo non è indicato il codice fiscale del legale rappresentante. Le chiediamo di comunicarci il dato, così da poter procedere correttamente.",
    cliente_tu: "nel modulo non è indicato il codice fiscale del legale rappresentante. Ti chiediamo di comunicarci il dato, così da poter procedere correttamente."
  },
  "Codice fiscale del legale rappresentante errato.": {
    partner_lei: "il codice fiscale indicato per il legale rappresentante non risulta corretto. Le chiediamo di verificarlo e di comunicarci il dato corretto, così da poter procedere con la registrazione della pratica.",
    partner_tu: "il codice fiscale indicato per il legale rappresentante non risulta corretto. Ti chiediamo di verificarlo e di comunicarci il dato corretto, così da poter procedere con la registrazione della pratica.",
    cliente_lei: "il codice fiscale indicato per il legale rappresentante non risulta corretto. Le chiediamo di verificarlo e di comunicarci il dato corretto, così da poter procedere con la pratica.",
    cliente_tu: "il codice fiscale indicato per il legale rappresentante non risulta corretto. Ti chiediamo di verificarlo e di comunicarci il dato corretto, così da poter procedere con la pratica."
  },
  "Mail del referente amministrativo mancante (dato obbligatorio per fatture di cortesia).": {
    partner_lei: "non è stata indicata la mail del referente amministrativo, necessaria per l'invio delle fatture di cortesia e delle comunicazioni amministrative. Le chiediamo di indicarci un indirizzo mail ordinario valido.",
    partner_tu: "non è stata indicata la mail del referente amministrativo, necessaria per l'invio delle fatture di cortesia e delle comunicazioni amministrative. Ti chiediamo di indicarci un indirizzo mail ordinario valido.",
    cliente_lei: "non è stata indicata la mail del referente amministrativo, necessaria per l'invio delle fatture di cortesia e delle comunicazioni amministrative. Le chiediamo di comunicarci un indirizzo mail ordinario valido.",
    cliente_tu: "non è stata indicata la mail del referente amministrativo, necessaria per l'invio delle fatture di cortesia e delle comunicazioni amministrative. Ti chiediamo di comunicarci un indirizzo mail ordinario valido."
  },
  "Mail del referente amministrativo errata.": {
    partner_lei: "l'indirizzo mail del referente amministrativo non risulta valido. Le chiediamo di indicarci un indirizzo mail corretto, su cui inviare le fatture di cortesia e le comunicazioni amministrative.",
    partner_tu: "l'indirizzo mail del referente amministrativo non risulta valido. Ti chiediamo di indicarci un indirizzo mail corretto, su cui inviare le fatture di cortesia e le comunicazioni amministrative.",
    cliente_lei: "l'indirizzo mail indicato per il referente amministrativo non risulta valido. Le chiediamo di comunicarci un indirizzo mail corretto, su cui inviare le fatture di cortesia e le comunicazioni amministrative.",
    cliente_tu: "l'indirizzo mail indicato per il referente amministrativo non risulta valido. Ti chiediamo di comunicarci un indirizzo mail corretto, su cui inviare le fatture di cortesia e le comunicazioni amministrative."
  },
  "PEC inserita al posto di una mail ordinaria per il referente amministrativo.": {
    partner_lei: "per il referente amministrativo è stata indicata una PEC anziché una mail ordinaria. Le chiediamo di indicarci un indirizzo mail ordinario da utilizzare per le fatture di cortesia e le comunicazioni amministrative.",
    partner_tu: "per il referente amministrativo è stata indicata una PEC anziché una mail ordinaria. Ti chiediamo di indicarci un indirizzo mail ordinario da utilizzare per le fatture di cortesia e le comunicazioni amministrative.",
    cliente_lei: "per il referente amministrativo è stata indicata una PEC anziché una mail ordinaria. Le chiediamo di comunicarci un indirizzo mail ordinario da utilizzare per le fatture di cortesia e le comunicazioni amministrative.",
    cliente_tu: "per il referente amministrativo è stata indicata una PEC anziché una mail ordinaria. Ti chiediamo di comunicarci un indirizzo mail ordinario da utilizzare per le fatture di cortesia e le comunicazioni amministrative."
  },
  "Nome e cognome del referente tecnico mancanti.": {
    partner_lei: "nel modulo non sono indicati nome e cognome del referente tecnico. Le chiediamo di specificare un referente tecnico con i relativi dati, così da avere un contatto chiaro per eventuali comunicazioni operative.",
    partner_tu: "nel modulo non sono indicati nome e cognome del referente tecnico. Ti chiediamo di specificare un referente tecnico con i relativi dati, così da avere un contatto chiaro per eventuali comunicazioni operative.",
    cliente_lei: "nel modulo non sono indicati nome e cognome del referente tecnico. Le chiediamo di indicarci un referente tecnico con i relativi dati per le comunicazioni operative.",
    cliente_tu: "nel modulo non sono indicati nome e cognome del referente tecnico. Ti chiediamo di indicarci un referente tecnico con i relativi dati per le comunicazioni operative."
  },
  "Cellulare del referente tecnico mancante.": {
    partner_lei: "non è stato indicato il numero di cellulare del referente tecnico. Le chiediamo di comunicarci un recapito mobile, così da poterlo contattare in caso di necessità durante l'attivazione o la gestione del servizio.",
    partner_tu: "non è stato indicato il numero di cellulare del referente tecnico. Ti chiediamo di comunicarci un recapito mobile, così da poterlo contattare in caso di necessità durante l'attivazione o la gestione del servizio.",
    cliente_lei: "non è stato indicato il numero di cellulare del referente tecnico. Le chiediamo di comunicarci un recapito mobile, così da poterLa contattare in caso di necessità durante l'attivazione o la gestione del servizio.",
    cliente_tu: "non è stato indicato il numero di cellulare del referente tecnico. Ti chiediamo di comunicarci un recapito mobile, così da poterti contattare in caso di necessità durante l'attivazione o la gestione del servizio."
  },
  "Codice SDI mancante per la fatturazione elettronica.": {
    partner_lei: "non è stato indicato alcun codice SDI per la fatturazione elettronica. Le chiediamo di indicarci un codice destinatario SDI valido oppure, in alternativa, una PEC da utilizzare per la fatturazione elettronica.",
    partner_tu: "non è stato indicato alcun codice SDI per la fatturazione elettronica. Ti chiediamo di indicarci un codice destinatario SDI valido oppure, in alternativa, una PEC da utilizzare per la fatturazione elettronica.",
    cliente_lei: "non è stato indicato alcun codice SDI per la fatturazione elettronica. Le chiediamo di comunicarci un codice destinatario SDI valido oppure, in alternativa, una PEC da utilizzare per la fatturazione elettronica.",
    cliente_tu: "non è stato indicato alcun codice SDI per la fatturazione elettronica. Ti chiediamo di comunicarci un codice destinatario SDI valido oppure, in alternativa, una PEC da utilizzare per la fatturazione elettronica."
  },
  "PEC per fatturazione elettronica mancante.": {
    partner_lei: "non è stata indicata alcuna PEC da utilizzare per la fatturazione elettronica. Le chiediamo di indicarci una PEC valida oppure, in alternativa, un codice destinatario SDI.",
    partner_tu: "non è stata indicata alcuna PEC da utilizzare per la fatturazione elettronica. Ti chiediamo di indicarci una PEC valida oppure, in alternativa, un codice destinatario SDI.",
    cliente_lei: "non è stata indicata alcuna PEC da utilizzare per la fatturazione elettronica. Le chiediamo di comunicarci una PEC valida oppure, in alternativa, un codice destinatario SDI.",
    cliente_tu: "non è stata indicata alcuna PEC da utilizzare per la fatturazione elettronica. Ti chiediamo di comunicarci una PEC valida oppure, in alternativa, un codice destinatario SDI."
  },
  "Codice SDI o PEC indicati ma non validi o non corretti.": {
    partner_lei: "il canale indicato per la fatturazione elettronica (codice SDI o PEC) non risulta valido. Le chiediamo di verificarlo e di comunicarci un codice SDI o una PEC corretti, così da poter emettere regolarmente le fatture.",
    partner_tu: "il canale indicato per la fatturazione elettronica (codice SDI o PEC) non risulta valido. Ti chiediamo di verificarlo e di comunicarci un codice SDI o una PEC corretti, così da poter emettere regolarmente le fatture.",
    cliente_lei: "il canale indicato per la fatturazione elettronica (codice SDI o PEC) non risulta valido. Le chiediamo di verificarlo e di comunicarci un codice SDI o una PEC corretti, così da poter emettere regolarmente le fatture.",
    cliente_tu: "il canale indicato per la fatturazione elettronica (codice SDI o PEC) non risulta valido. Ti chiediamo di verificarlo e di comunicarci un codice SDI o una PEC corretti, così da poter emettere regolarmente le fatture."
  },
  "IBAN mancante.": {
    partner_lei: "nel modulo non è stato indicato alcun IBAN per l'addebito. Le chiediamo di indicarci un IBAN italiano valido, così da poter procedere con l'attivazione della modalità di pagamento.",
    partner_tu: "nel modulo non è stato indicato alcun IBAN per l'addebito. Ti chiediamo di indicarci un IBAN italiano valido, così da poter procedere con l'attivazione della modalità di pagamento.",
    cliente_lei: "nel modulo non è stato indicato alcun IBAN per l'addebito. Le chiediamo di indicarci un IBAN italiano valido, così da poter procedere con l'attivazione della modalità di pagamento.",
    cliente_tu: "nel modulo non è stato indicato alcun IBAN per l'addebito. Ti chiediamo di indicarci un IBAN italiano valido, così da poter procedere con l'attivazione della modalità di pagamento."
  },
  "IBAN incompleto.": {
    partner_lei: "l'IBAN indicato risulta incompleto. Le chiediamo di verificarlo e di comunicarci l'IBAN completo, così da poter procedere con la corretta attivazione della modalità di pagamento.",
    partner_tu: "l'IBAN indicato risulta incompleto. Ti chiediamo di verificarlo e di comunicarci l'IBAN completo, così da poter procedere con la corretta attivazione della modalità di pagamento.",
    cliente_lei: "l'IBAN indicato risulta incompleto. Le chiediamo di verificarlo e di comunicarci l'IBAN completo, così da poter procedere con la corretta attivazione della modalità di pagamento.",
    cliente_tu: "l'IBAN indicato risulta incompleto. Ti chiediamo di verificarlo e di comunicarci l'IBAN completo, così da poter procedere con la corretta attivazione della modalità di pagamento."
  },
  "IBAN errato.": {
    partner_lei: "l'IBAN indicato non risulta corretto. Le chiediamo di verificarlo e di comunicarci un IBAN italiano valido, così da poter procedere con la corretta attivazione della modalità di pagamento.",
    partner_tu: "l'IBAN indicato non risulta corretto. Ti chiediamo di verificarlo e di comunicarci un IBAN italiano valido, così da poter procedere con la corretta attivazione della modalità di pagamento.",
    cliente_lei: "l'IBAN indicato non risulta corretto. Le chiediamo di verificarlo e di comunicarci un IBAN italiano valido, così da poter procedere con la corretta attivazione della modalità di pagamento.",
    cliente_tu: "l'IBAN indicato non risulta corretto. Ti chiediamo di verificarlo e di comunicarci un IBAN italiano valido, così da poter procedere con la corretta attivazione della modalità di pagamento."
  },
  "IBAN estero (accettiamo solo IBAN italiani).": {
    partner_lei: "l'IBAN indicato risulta estero; Le ricordiamo che possiamo accettare esclusivamente IBAN italiani. Le chiediamo quindi di comunicarci un IBAN italiano valido.",
    partner_tu: "l'IBAN indicato risulta estero; ti ricordiamo che possiamo accettare esclusivamente IBAN italiani. Ti chiediamo quindi di comunicarci un IBAN italiano valido.",
    cliente_lei: "l'IBAN indicato risulta estero; Le ricordiamo che possiamo accettare esclusivamente IBAN italiani. Le chiediamo quindi di comunicarci un IBAN italiano valido.",
    cliente_tu: "l'IBAN indicato risulta estero; ti ricordiamo che possiamo accettare esclusivamente IBAN italiani. Ti chiediamo quindi di comunicarci un IBAN italiano valido."
  },
  "Mancanza dei dati del titolare del conto bancario quando richiesto.": {
    partner_lei: "nel modulo non risultano compilati i dati del titolare del conto bancario, richiesti per l'attivazione dell'addebito. Le chiediamo di indicarci nome, cognome e, se previsto, codice fiscale del titolare del conto.",
    partner_tu: "nel modulo non risultano compilati i dati del titolare del conto bancario, richiesti per l'attivazione dell'addebito. Ti chiediamo di indicarci nome, cognome e, se previsto, codice fiscale del titolare del conto.",
    cliente_lei: "nel modulo non risultano compilati i dati del titolare del conto bancario, richiesti per l'attivazione dell'addebito. Le chiediamo di indicarci nome, cognome e, se previsto, codice fiscale del titolare del conto.",
    cliente_tu: "nel modulo non risultano compilati i dati del titolare del conto bancario, richiesti per l'attivazione dell'addebito. Ti chiediamo di indicarci nome, cognome e, se previsto, codice fiscale del titolare del conto."
  },
  "Richiesta modalità di pagamento tramite bonifico bancario senza preventiva autorizzazione del reparto (richiesta da inviare a servizioclienti@voipvoice.it).": {
    partner_lei: "è stata richiesta la modalità di pagamento tramite bonifico bancario. Tale modalità richiede una preventiva autorizzazione da parte del nostro reparto: La invitiamo pertanto a inviare una richiesta a servizioclienti@voipvoice.it, indicando i dati anagrafici del cliente per il quale si desidera abilitare il bonifico. Dopo le verifiche procederemo con l'abilitazione, in caso di esito positivo.",
    partner_tu: "è stata richiesta la modalità di pagamento tramite bonifico bancario. Questa modalità richiede una preventiva autorizzazione da parte nostra: ti chiediamo quindi di inviare una mail a servizioclienti@voipvoice.it, indicando i dati anagrafici del cliente per il quale desideri abilitare il bonifico. Dopo le verifiche procederemo con l'abilitazione, se possibile.",
    cliente_lei: "è stata richiesta la modalità di pagamento tramite bonifico bancario. Tale modalità richiede una nostra autorizzazione preventiva: La invitiamo pertanto a inviarci una richiesta a servizioclienti@voipvoice.it, indicando i Suoi dati anagrafici. Dopo le verifiche procederemo con l'eventuale abilitazione del bonifico come metodo di pagamento.",
    cliente_tu: "hai richiesto la modalità di pagamento tramite bonifico bancario. Questa modalità richiede una nostra autorizzazione preventiva: ti chiediamo quindi di scrivere a servizioclienti@voipvoice.it, indicando i tuoi dati anagrafici. Dopo le verifiche procederemo con l'eventuale abilitazione del bonifico come metodo di pagamento."
  },
  "Manca il documento d'identità del legale rappresentante.": {
    partner_lei: "nel modulo non risulta allegato il documento d'identità del legale rappresentante. Le chiediamo di inviarci copia di un documento in corso di validità, così da poter procedere con la lavorazione della pratica.",
    partner_tu: "nel modulo non risulta allegato il documento d'identità del legale rappresentante. Ti chiediamo di inviarci copia di un documento in corso di validità, così da poter procedere con la lavorazione della pratica.",
    cliente_lei: "nel modulo che ci ha inviato non risulta allegato il documento d'identità del legale rappresentante. Le chiediamo di inviarci copia di un documento in corso di validità, così da poter procedere con la lavorazione della Sua pratica.",
    cliente_tu: "nel modulo che ci hai inviato non risulta allegato il documento d'identità del legale rappresentante. Ti chiediamo di inviarci copia di un documento in corso di validità, così da poter procedere con la lavorazione della tua pratica."
  },
  "Manca il documento d'identità del firmatario del conto bancario (quando diverso dal legale rappresentante).": {
    partner_lei: "nel modulo che ci ha trasmesso non risulta allegato il documento d'identità del firmatario del conto bancario, diverso dal legale rappresentante. Le chiediamo di inviarci copia del documento in corso di validità, così da poter completare le verifiche sulla modalità di pagamento.",
    partner_tu: "nel modulo che ci hai trasmesso non risulta allegato il documento d'identità del firmatario del conto bancario, diverso dal legale rappresentante. Ti chiediamo di inviarci copia del documento in corso di validità, così da poter completare le verifiche sulla modalità di pagamento.",
    cliente_lei: "nel modulo che ci ha inviato non risulta allegato il documento d'identità del firmatario del conto bancario, diverso dal legale rappresentante. Le chiediamo di inviarci copia del documento in corso di validità, così da poter completare le verifiche sulla modalità di pagamento.",
    cliente_tu: "nel modulo che ci hai inviato non risulta allegato il documento d'identità del firmatario del conto bancario, diverso dal legale rappresentante. Ti chiediamo di inviarci copia del documento in corso di validità, così da poter completare le verifiche sulla modalità di pagamento."
  },
"Manca la fattura dell'operatore attuale.": {
    partner_lei: "per procedere con la richiesta di portabilità è necessario allegare una copia della fattura dell'attuale operatore. Le chiediamo di inviarci una fattura recente in cui sia presente la numerazione da portare.",
    partner_tu: "per procedere con la richiesta di portabilità è necessario allegare una copia della fattura dell'attuale operatore. Ti chiediamo di inviarci una fattura recente in cui sia presente la numerazione da portare.",
    cliente_lei: "per procedere con la Sua richiesta di portabilità è necessario che ci fornisca una copia della fattura dell'attuale operatore riportante la numerazione da trasferire. Le chiediamo di inoltrarci una copia recente.",
    cliente_tu: "per procedere con la portabilità è necessario che tu ci invii una copia della fattura del tuo operatore, dove sia indicata la numerazione da portare."
  },
  "La fattura allegata non è recente (emessa da oltre 6 mesi).": {
    partner_lei: "la fattura allegata non risulta recente: per la portabilità è necessario fornire una fattura emessa negli ultimi sei mesi. Le chiediamo di inviarci un documento aggiornato.",
    partner_tu: "la fattura allegata non è recente: per la portabilità serve una fattura emessa negli ultimi sei mesi. Ti chiediamo di inviarcene una aggiornata.",
    cliente_lei: "la fattura allegata non risulta recente. Per la portabilità è necessario fornirne una emessa negli ultimi sei mesi. Le chiediamo di inviarci una copia aggiornata.",
    cliente_tu: "la fattura allegata non è recente: per la portabilità serve una fattura emessa negli ultimi sei mesi. Ti chiediamo di inviarci un documento aggiornato."
  },
  "La fattura allegata è incompleta (mancano una o più pagine).": {
    partner_lei: "la fattura allegata risulta incompleta: mancano una o più pagine necessarie per verificare correttamente la numerazione e il codice di migrazione. Le chiediamo di inviarci la copia completa.",
    partner_tu: "la fattura allegata non è completa: mancano alcune pagine utili alla verifica della numerazione e del codice di migrazione. Ti chiediamo di inviarci la copia completa.",
    cliente_lei: "la fattura che ci ha inviato non è completa: mancano alcune pagine necessarie alla verifica della numerazione e del codice di migrazione. Le chiediamo di inoltrarci la copia completa.",
    cliente_tu: "la fattura che hai inviato non è completa: mancano alcune pagine. Ti chiediamo di mandarci la copia completa del documento."
  },
  "La numerazione non è presente nella fattura allegata.": {
    partner_lei: "nella fattura allegata non risulta presente la numerazione per la quale è stata richiesta la portabilità. Le chiediamo di inviarci una fattura in cui sia chiaramente riportato il numero da portare.",
    partner_tu: "nella fattura allegata non è presente la numerazione da portare. Ti chiediamo di inviarci una fattura in cui sia indicato il numero corretto.",
    cliente_lei: "nella fattura allegata non risulta presente la numerazione oggetto della richiesta di portabilità. Le chiediamo di inviarci una copia in cui il numero sia chiaramente riportato.",
    cliente_tu: "nella fattura allegata non è presente la numerazione che vuoi portare. Ti chiediamo di inviarci una fattura dove il numero sia indicato."
  },
  "Il codice di migrazione non è presente nella fattura allegata.": {
    partner_lei: "nella fattura allegata non risulta riportato il codice di migrazione, necessario per completare la portabilità. Le chiediamo di verificare il documento o di richiederlo all'operatore attuale.",
    partner_tu: "la fattura allegata non riporta il codice di migrazione. Ti chiediamo di cercarlo sulla fattura completa o di richiederlo al tuo operatore.",
    cliente_lei: "nella fattura allegata non è presente il codice di migrazione. Le chiediamo di verificarlo sulla fattura completa o di richiederlo al Suo attuale operatore.",
    cliente_tu: "nella fattura allegata non c'è il codice di migrazione. Ti chiediamo di verificarlo nella versione completa della fattura o di richiederlo al tuo operatore."
  },
  "La fattura è intestata a una partita IVA diversa da quella del modulo.": {
    partner_lei: "la fattura allegata risulta intestata a una partita IVA diversa da quella indicata nel modulo. In questi casi è necessario compilare un modulo di subentro contestuale, che può trovare nella Sua area riservata Partner. Le chiediamo di trasmettercelo compilato e firmato.",
    partner_tu: "la fattura allegata è intestata a una partita IVA diversa da quella presente nel modulo. In questi casi è necessario compilare un modulo di subentro contestuale, che trovi nella tua area riservata Partner. Ti chiediamo di inviarcelo compilato e firmato.",
    cliente_lei: "la fattura allegata risulta intestata a una partita IVA differente da quella riportata nella richiesta. In questi casi è necessario compilare un modulo di subentro contestuale. Le chiediamo di inoltrarci la documentazione completa secondo le indicazioni del Partner.",
    cliente_tu: "la fattura allegata è intestata a una partita IVA diversa dalla tua. In questi casi serve un modulo di subentro contestuale: ti chiediamo di compilarlo, tramite il tuo Partner, e inviarcelo."
  },
  "Il documento allegato non è una fattura dell'operatore attuale.": {
    partner_lei: "il documento allegato non risulta essere una fattura dell'operatore di provenienza. Per procedere con la portabilità è necessario inviarci una fattura completa e recente, in cui siano riportati la numerazione e il codice di migrazione.",
    partner_tu: "il documento che ci hai inviato non è una fattura del tuo operatore. Per procedere con la portabilità è necessario inviarci una fattura completa e recente, con numero e codice di migrazione.",
    cliente_lei: "il documento allegato non è una fattura dell'operatore attuale. Per procedere con la portabilità è necessaria una fattura completa e recente riportante la numerazione oggetto di portabilità.",
    cliente_tu: "il documento che ci hai inviato non è una fattura del tuo operatore. Per procedere con la portabilità abbiamo bisogno di una fattura recente in cui sia riportata la numerazione da portare."
  },
  "Il documento allegato è un preventivo o una distinta, non una fattura.": {
    partner_lei: "il documento allegato non è una fattura, ma un preventivo o una distinta di pagamento. Per procedere è necessaria una fattura dell'operatore attuale che riporti numerazione e codice di migrazione.",
    partner_tu: "il documento inviato non è una fattura ma un preventivo/distinta. Per procedere abbiamo bisogno di una fattura dell'operatore con numero e codice di migrazione.",
    cliente_lei: "il documento allegato non è una fattura ma un preventivo o una distinta. Le chiediamo di inviarci una fattura dell'operatore attuale riportante la numerazione.",
    cliente_tu: "il documento che hai inviato non è una fattura ma un preventivo/distinta. Ti chiediamo di inviarci una fattura con la numerazione corretta."
  },
  "La fattura è troppo datata (oltre 12 mesi).": {
    partner_lei: "la fattura allegata risulta molto datata. Le chiediamo di inviarci una fattura più recente, entro gli ultimi sei mesi, come previsto per le richieste di portabilità.",
    partner_tu: "la fattura allegata è troppo vecchia. Ti chiediamo di inviarci una fattura più recente, emessa negli ultimi sei mesi.",
    cliente_lei: "la fattura allegata risulta troppo datata. Le chiediamo di inviarci una copia più recente, emessa entro gli ultimi sei mesi.",
    cliente_tu: "la fattura che hai inviato è troppo vecchia: serve una copia più recente (degli ultimi sei mesi). Ti chiediamo di inviarcela."
  },
  "Il codice di migrazione riportato in fattura risulta errato.": {
    partner_lei: "il codice di migrazione riportato nella fattura risulta errato o non coerente con la numerazione indicata. Le chiediamo di verificare il codice direttamente con l'operatore attuale e di comunicarci quello corretto.",
    partner_tu: "il codice di migrazione riportato in fattura risulta errato o non coerente con il numero indicato. Ti chiediamo di verificarlo con il tuo operatore e comunicarci quello corretto.",
    cliente_lei: "il codice di migrazione riportato nella fattura risulta errato o non associato alla numerazione indicata nella richiesta. Le chiediamo di verificarlo con il Suo operatore e di comunicarci il codice corretto.",
    cliente_tu: "il codice di migrazione indicato in fattura risulta errato o non associato al numero che vuole portare. Ti chiediamo di verificarlo con il tuo operatore e inviarci il codice corretto."
  },
  "Codice di migrazione errato o non coerente con l'operatore di provenienza.": {
    partner_lei: "il codice di migrazione indicato non risulta corretto o coerente con l'operatore di provenienza. Le chiediamo di verificarlo direttamente in fattura o con l'attuale operatore e di comunicarci il codice corretto.",
    partner_tu: "il codice di migrazione indicato non risulta corretto o coerente con l'operatore di provenienza. Ti chiediamo di verificarlo in fattura o con l'operatore attuale e di comunicarci il codice corretto.",
    cliente_lei: "il codice di migrazione indicato nel modulo non risulta corretto o coerente con l'operatore di provenienza. Le chiediamo di verificarlo direttamente in fattura o con il Suo operatore e di comunicarci il codice corretto.",
    cliente_tu: "il codice di migrazione indicato nel modulo non risulta corretto o coerente con l'operatore di provenienza. Ti chiediamo di verificarlo in fattura o con il tuo operatore e di inviarci il codice corretto."
  },
  "Codice di migrazione formalmente corretto ma non associato alla numerazione indicata.": {
    partner_lei: "il codice di migrazione indicato risulta formalmente corretto, ma non risulta associato alla numerazione per la quale è stata richiesta la portabilità. Le chiediamo di verificarlo con l'operatore attuale e di comunicarci il codice corretto.",
    partner_tu: "il codice di migrazione indicato è formalmente corretto, ma non risulta associato al numero che desideri portare. Ti chiediamo di verificarlo con il tuo operatore e di comunicarci il codice corretto.",
    cliente_lei: "il codice di migrazione fornito risulta formalmente corretto, ma non è associato alla numerazione indicata nella richiesta. Le chiediamo di verificarlo con il Suo operatore e di comunicarci il codice corretto.",
    cliente_tu: "il codice di migrazione che hai indicato è formalmente corretto, ma non risulta associato al numero che vuoi portare. Ti chiediamo di verificarlo con il tuo operatore e di inviarci il codice corretto."
  },
  "Codice di migrazione riferito a un servizio differente rispetto a quello richiesto (es. ADSL/ISDN).": {
    partner_lei: "il codice di migrazione indicato risulta associato a un servizio differente rispetto a quello richiesto (ad esempio ADSL o ISDN). Le chiediamo di verificare il codice corretto in fattura oppure direttamente con l'operatore di provenienza.",
    partner_tu: "il codice di migrazione che ci hai fornito risulta associato a un servizio diverso da quello richiesto (es. ADSL/ISDN). Ti chiediamo di verificare il codice corretto in fattura o con il tuo operatore.",
    cliente_lei: "il codice di migrazione fornito risulta associato a un servizio differente rispetto a quello indicato nella richiesta. Le chiediamo di verificarlo direttamente con il Suo operatore e di comunicarci il codice corretto.",
    cliente_tu: "il codice di migrazione che hai indicato risulta associato a un servizio diverso da quello richiesto. Ti chiediamo di verificarlo con il tuo operatore e di inviarci il codice corretto."
  },
  "Codice di migrazione associato a più numerazioni (richiesta conferma su quale portare).": {
    partner_lei: "dal codice di migrazione indicato risultano associate più numerazioni. Le chiediamo di confermarci per iscritto quale numero debba essere oggetto di portabilità.",
    partner_tu: "il codice di migrazione indicato risulta associato a più numerazioni. Ti chiediamo di confermarci per iscritto quale numero vuoi portare in portabilità.",
    cliente_lei: "il codice di migrazione fornito risulta associato a più numerazioni. Le chiediamo di indicarci esplicitamente quale numero desidera trasferire verso VoipVoice.",
    cliente_tu: "il codice di migrazione che hai fornito è associato a più numeri. Ti chiediamo di indicarci chiaramente quale numero vuoi portare verso VoipVoice."
  },
  "Codice di migrazione riferito a una numerazione disattivata.": {
    partner_lei: "il codice di migrazione indicato risulta associato a una numerazione disattivata. Le chiediamo di verificare la situazione con l'operatore attuale e di comunicarci, se possibile, il codice corretto riferito a una linea attiva.",
    partner_tu: "il codice di migrazione che ci hai fornito risulta associato a un numero disattivato. Ti chiediamo di verificare con il tuo operatore e di inviarci il codice corretto relativo a una numerazione attiva.",
    cliente_lei: "il codice di migrazione indicato risulta associato a una numerazione disattivata. Le chiediamo di verificare con il Suo operatore e di comunicarci un codice valido riferito a una linea attiva.",
    cliente_tu: "il codice di migrazione indicato risulta associato a un numero disattivato. Ti chiediamo di verificare con il tuo operatore e di inviarci un codice valido relativo a una numerazione attiva."
  },
  "Manca il contratto allegato alla pratica.": {
    partner_lei: "nella pratica non risulta allegato il contratto firmato. Le chiediamo di caricare o inviarci il contratto completo e sottoscritto, così da poter procedere con la lavorazione.",
    partner_tu: "nella pratica non risulta allegato il contratto firmato. Ti chiediamo di caricare o inviarci il contratto completo e sottoscritto, così da poter procedere con la lavorazione.",
    cliente_lei: "nella pratica non risulta allegato il contratto firmato. Le chiediamo di inviarci il contratto completo e sottoscritto, così da poter procedere con la lavorazione della Sua richiesta.",
    cliente_tu: "nella pratica non risulta allegato il contratto firmato. Ti chiediamo di inviarci il contratto completo e sottoscritto, così da poter procedere con la lavorazione della tua richiesta."
  },
  "Il contratto caricato manca di una o più pagine.": {
    partner_lei: "il contratto caricato risulta incompleto: mancano una o più pagine. Le chiediamo di inviarci il documento completo di tutte le pagine, così da poter effettuare le verifiche necessarie.",
    partner_tu: "il contratto caricato risulta incompleto: mancano una o più pagine. Ti chiediamo di inviarci il documento completo di tutte le pagine, così da poter effettuare le verifiche necessarie.",
    cliente_lei: "il contratto che ci ha inviato risulta incompleto: mancano una o più pagine. Le chiediamo di inoltrarci il documento completo, così da poter procedere con la lavorazione.",
    cliente_tu: "il contratto che ci hai inviato risulta incompleto: mancano una o più pagine. Ti chiediamo di mandarci il documento completo, così da poter procedere con la lavorazione."
  },
  "Manca la firma nella sezione 'Modalità di pagamento'.": {
    partner_lei: "nel contratto non risulta apposta la firma nella sezione 'Modalità di pagamento'. Le chiediamo di far firmare nuovamente quella sezione e di inviarci il contratto aggiornato.",
    partner_tu: "nel contratto non risulta apposta la firma nella sezione 'Modalità di pagamento'. Ti chiediamo di far firmare quella sezione e di inviarci il contratto aggiornato.",
    cliente_lei: "nel contratto non risulta apposta la firma nella sezione 'Modalità di pagamento'. Le chiediamo di firmare tale sezione e di rinviarci il contratto aggiornato.",
    cliente_tu: "nel contratto non risulta apposta la firma nella sezione 'Modalità di pagamento'. Ti chiediamo di firmare quella sezione e rinviarci il contratto aggiornato."
  },
  "Manca una firma nella sezione 'Dichiarazioni e firme'.": {
    partner_lei: "nella sezione 'Dichiarazioni e firme' risulta mancare almeno una delle firme previste. Le chiediamo di verificare e far completare tutte le firme richieste, quindi di inviarci il contratto aggiornato.",
    partner_tu: "nella sezione 'Dichiarazioni e firme' manca almeno una delle firme previste. Ti chiediamo di far completare tutte le firme richieste e inviarci il contratto aggiornato.",
    cliente_lei: "nella sezione 'Dichiarazioni e firme' manca almeno una delle firme richieste. Le chiediamo di completare la firma nella sezione indicata e di rinviarci il contratto.",
    cliente_tu: "nella sezione 'Dichiarazioni e firme' manca almeno una delle firme richieste. Ti chiediamo di completare la firma nella sezione indicata e rinviarci il contratto."
  },
  "Manca una firma nella sezione 'Consenso al trattamento dei dati personali'.": {
    partner_lei: "nella sezione 'Consenso al trattamento dei dati personali' risulta mancare almeno una firma. Le chiediamo di far firmare correttamente la sezione privacy e di inviarci il contratto aggiornato.",
    partner_tu: "nella sezione 'Consenso al trattamento dei dati personali' manca almeno una firma. Ti chiediamo di far firmare correttamente la sezione privacy e di inviarci il contratto aggiornato.",
    cliente_lei: "nella sezione 'Consenso al trattamento dei dati personali' manca almeno una firma. Le chiediamo di completare la firma nella sezione privacy e di rinviarci il contratto aggiornato.",
    cliente_tu: "nella sezione 'Consenso al trattamento dei dati personali' manca almeno una firma. Ti chiediamo di completare la firma nella sezione privacy e rinviarci il contratto aggiornato."
  },
  "Manca la firma nella pagina dell'offerta commerciale.": {
    partner_lei: "nella pagina relativa all'offerta commerciale non risulta apposta la firma del cliente. Le chiediamo di far firmare tale pagina e di inviarci il contratto aggiornato.",
    partner_tu: "nella pagina dell'offerta commerciale non risulta apposta la firma del cliente. Ti chiediamo di far firmare quella pagina e inviarci il contratto aggiornato.",
    cliente_lei: "nella pagina relativa all'offerta commerciale non risulta apposta la Sua firma. Le chiediamo di firmare tale pagina e rinviarci il contratto.",
    cliente_tu: "nella pagina dell'offerta commerciale non risulta apposta la tua firma. Ti chiediamo di firmare quella pagina e rinviarci il contratto."
  },
  "Manca la firma nella sezione 'Allegato 4'.": {
    partner_lei: "nella sezione 'Allegato 4' non risulta presente la firma del cliente. Le chiediamo di far firmare l'allegato e di inviarci il contratto completo.",
    partner_tu: "nella sezione 'Allegato 4' non risulta presente la firma del cliente. Ti chiediamo di far firmare l'allegato e inviarci il contratto completo.",
    cliente_lei: "nell''Allegato 4' non risulta presente la Sua firma. Le chiediamo di firmare l'allegato e rinviarci il contratto completo.",
    cliente_tu: "nell''Allegato 4' non risulta presente la tua firma. Ti chiediamo di firmare l'allegato e rinviarci il contratto completo."
  },
  "Mancano una o più firme obbligatorie sul modulo.": {
    partner_lei: "dal controllo del modulo risultano mancanti una o più firme obbligatorie. Le chiediamo di verificare tutte le sezioni previste e di inviarci il documento nuovamente firmato in ogni parte richiesta.",
    partner_tu: "dal controllo del modulo risultano mancanti una o più firme obbligatorie. Ti chiediamo di verificare tutte le sezioni previste e di inviarci il documento nuovamente firmato in ogni parte richiesta.",
    cliente_lei: "dal controllo del modulo risultano mancanti una o più firme obbligatorie. Le chiediamo di verificare le sezioni indicate e di rinviarci il documento firmato in tutte le parti richieste.",
    cliente_tu: "dal controllo del modulo risultano mancanti una o più firme obbligatorie. Ti chiediamo di verificare le sezioni indicate e rinviarci il documento firmato in tutte le parti richieste."
  },
  "Manca il timbro dell'azienda sul modulo.": {
    partner_lei: "nel modulo non risulta apposto il timbro dell'azienda. Qualora non fosse possibile inserirlo, La invitiamo a reinviare il contratto via mail inserendo in copia conoscenza il cliente, così da poter procedere comunque con la lavorazione.",
    partner_tu: "nel modulo non risulta apposto il timbro dell'azienda. Se non puoi inserirlo, ti chiediamo di reinviare il contratto via mail inserendo in copia il cliente, così da poter procedere comunque con la lavorazione.",
    cliente_lei: "nel modulo non risulta apposto il timbro dell'azienda. Qualora non fosse possibile inserirlo, Le chiediamo di confermare via mail il contenuto del contratto, così da poter procedere con la lavorazione.",
    cliente_tu: "nel modulo non risulta apposto il timbro dell'azienda. Se non puoi inserirlo, ti chiediamo di confermare via mail il contenuto del contratto, così da poter procedere con la lavorazione."
  },
  "Il modulo è stato compilato in formato editabile (non ammesso).": {
    partner_lei: "il modulo che ci ha inviato risulta ancora in formato editabile. Per motivi procedurali accettiamo esclusivamente moduli compilati e salvati in formato non modificabile (es. PDF). Le chiediamo di inviarci nuovamente il documento in formato corretto.",
    partner_tu: "il modulo che ci hai inviato risulta in formato editabile. Per motivi procedurali possiamo accettare solo moduli compilati e salvati in formato non modificabile (es. PDF). Ti chiediamo di rinviarci il documento nel formato corretto.",
    cliente_lei: "il modulo che ci ha trasmesso risulta ancora in formato editabile. Per motivi procedurali accettiamo solo moduli compilati e salvati in formato non modificabile (ad esempio PDF). Le chiediamo di rinviarci il documento nel formato corretto.",
    cliente_tu: "il modulo che ci hai trasmesso è ancora in formato editabile. Per motivi procedurali possiamo accettare solo moduli compilati e salvati in formato non modificabile (PDF). Ti chiediamo di rinviarci il documento nel formato corretto."
  },
  "Nel contratto di manutenzione manca l'indicazione del canone mensile.": {
    partner_lei: "nel contratto di manutenzione non risulta indicato il canone mensile previsto. Le chiediamo di aggiornare il modulo inserendo l'importo del canone e di inviarci nuovamente il documento.",
    partner_tu: "nel contratto di manutenzione non è indicato il canone mensile previsto. Ti chiediamo di aggiornare il modulo inserendo l'importo del canone e di inviarci nuovamente il documento.",
    cliente_lei: "nel contratto di manutenzione non è riportato il canone mensile previsto. Le chiediamo di completare il modulo indicando l'importo e di rinviarci il documento aggiornato.",
    cliente_tu: "nel contratto di manutenzione non è riportato il canone mensile previsto. Ti chiediamo di completare il modulo indicando l'importo e rinviarci il documento aggiornato."
  },
  "Nel contratto di manutenzione manca la data di inizio validità.": {
    partner_lei: "nel contratto di manutenzione non è indicata la data di inizio validità del modulo. Le chiediamo di aggiornare il documento inserendo la data corretta e di inviarcelo nuovamente.",
    partner_tu: "nel contratto di manutenzione non è indicata la data di inizio validità. Ti chiediamo di aggiornare il documento inserendo la data corretta e di inviarcelo nuovamente.",
    cliente_lei: "nel contratto di manutenzione non è indicata la data di inizio validità del servizio. Le chiediamo di completare il modulo inserendo tale data e di rinviarci il documento aggiornato.",
    cliente_tu: "nel contratto di manutenzione non è indicata la data di inizio validità del servizio. Ti chiediamo di completare il modulo inserendo questa data e rinviarci il documento aggiornato."
  },
  "Indirizzo non coperto dalla connettività richiesta": {
    partner_lei: "dalla verifica di copertura, l'indirizzo indicato non risulta coperto dalla tipologia di connettività richiesta. Le chiediamo di confrontarsi con il Suo referente commerciale per individuare la soluzione alternativa più idonea oppure di indicarci un diverso indirizzo di attivazione.",
    partner_tu: "dalla verifica di copertura l'indirizzo indicato non risulta coperto dalla connettività richiesta. Ti chiediamo di confrontarti con il tuo referente commerciale per valutare una soluzione alternativa o di indicarci un altro indirizzo di attivazione.",
    cliente_lei: "dalla verifica di copertura l'indirizzo indicato non risulta coperto dalla connettività richiesta. Le chiediamo di confrontarsi con il Suo referente commerciale oppure di indicarci un diverso indirizzo di attivazione.",
    cliente_tu: "la verifica di copertura mostra che l'indirizzo indicato non è coperto dalla connettività richiesta. Ti chiediamo di confrontarti con il tuo referente commerciale o di indicarci un altro indirizzo di attivazione."
  },
  "Indirizzo non censito nei sistemi di copertura": {
    partner_lei: "l'indirizzo indicato non risulta censito nei sistemi di copertura. Le chiediamo di verificarne la correttezza e, se necessario, di fornirci maggiori dettagli come scala, interno o coordinate esatte.",
    partner_tu: "l'indirizzo che hai inserito non risulta censito. Ti chiediamo di verificarne la correttezza e di fornirci eventuali dettagli aggiuntivi (scala, interno, coordinate).",
    cliente_lei: "l'indirizzo indicato non risulta censito nei sistemi di copertura. Le chiediamo di verificarne la correttezza o di fornirci maggiori dettagli, come scala, interno o coordinate.",
    cliente_tu: "l'indirizzo indicato non risulta censito. Ti chiediamo di verificarlo o di fornirci maggiori dettagli come scala, interno o coordinate."
  },
  "Indirizzo errato o incompleto: richieste maggiori specifiche": {
    partner_lei: "l'indirizzo indicato risulta incompleto o non sufficiente a effettuare la verifica di copertura. Le chiediamo di fornirci maggiori dettagli (scala, interno, civico preciso o eventuali riferimenti aggiuntivi).",
    partner_tu: "l'indirizzo indicato risulta incompleto. Ti chiediamo di fornirci maggiori dettagli (scala, interno, civico corretto o altri riferimenti utili).",
    cliente_lei: "l'indirizzo indicato risulta incompleto e non consente la verifica di copertura. Le chiediamo di fornirci maggiori dettagli come scala, interno o civico preciso.",
    cliente_tu: "l'indirizzo indicato risulta incompleto. Ti chiediamo di fornirci maggiori dettagli (es. scala, interno, civico esatto)."
  },
  "Velocità FTTC richiesta superiore a quella stimata in copertura": {
    partner_lei: "la velocità FTTC richiesta risulta superiore rispetto a quella stimata dall'analisi di copertura. Le chiediamo di valutare un taglio inferiore oppure di confrontarsi con il Suo referente commerciale per una soluzione alternativa.",
    partner_tu: "la velocità FTTC richiesta risulta superiore rispetto a quella stimata. Ti chiediamo di valutare un taglio inferiore o confrontarti con il commerciale.",
    cliente_lei: "la velocità FTTC richiesta supera i valori stimati per il Suo indirizzo. Le chiediamo di valutare un taglio inferiore o di confrontarsi con il Suo referente commerciale.",
    cliente_tu: "la velocità FTTC richiesta è superiore a quella stimata in copertura. Ti chiediamo di valutare un taglio inferiore o confrontarti con il tuo referente commerciale."
  },
  "Velocità FTTC richiesta inferiore rispetto alla copertura disponibile (possibile ottimizzazione)": {
    partner_lei: "la velocità FTTC richiesta risulta inferiore rispetto a quella disponibile all'indirizzo indicato. Se desidera, possiamo adeguare l'offerta al taglio superiore compatibile. In caso contrario confermi il mantenimento del taglio richiesto.",
    partner_tu: "la velocità FTTC richiesta è inferiore rispetto a quella disponibile. Possiamo adeguare l'offerta a un taglio superiore se lo desideri, oppure lasciarla invariata.",
    cliente_lei: "la velocità FTTC richiesta risulta inferiore rispetto a quella disponibile per il Suo indirizzo. Se desidera, possiamo adeguare il taglio alla velocità ottimale.",
    cliente_tu: "la velocità FTTC richiesta è inferiore rispetto a quella disponibile. Possiamo adeguare la velocità a quella ottimale, se vuoi."
  },
  "Velocità VoipAir richiesta superiore rispetto alla copertura stimata": {
    partner_lei: "la velocità VoipAir richiesta risulta superiore rispetto alla copertura stimata sull'indirizzo indicato. Le chiediamo di valutare un taglio inferiore o di confrontarsi con il Suo referente commerciale per soluzioni alternative.",
    partner_tu: "la velocità VoipAir richiesta risulta superiore a quella stimata per l'indirizzo indicato. Ti chiediamo di valutare un taglio inferiore o di confrontarti con il commerciale.",
    cliente_lei: "la velocità VoipAir richiesta risulta superiore rispetto alla copertura disponibile per il Suo indirizzo. Le chiediamo di valutare un taglio inferiore.",
    cliente_tu: "la velocità VoipAir richiesta risulta superiore rispetto a ciò che la copertura consente. Ti chiediamo di valutare un taglio inferiore."
  },
  "Velocità VoipAir richiesta inferiore rispetto alla copertura disponibile": {
    partner_lei: "la tipologia di VoipAir richiesta risulta inferiore rispetto al potenziale disponibile. Se desidera, possiamo aggiornare l'offerta al taglio più performante compatibile.",
    partner_tu: "la tipologia di VoipAir scelta è inferiore al potenziale disponibile. Se vuoi, possiamo aggiornare l'offerta al taglio più performante.",
    cliente_lei: "la velocità VoipAir richiesta risulta inferiore rispetto alla copertura disponibile. Se lo desidera, possiamo proporle un profilo più performante.",
    cliente_tu: "la velocità VoipAir richiesta è inferiore rispetto a quella disponibile. Se vuoi, possiamo proporti un taglio superiore compatibile."
  },
  "Numerazione nuova: il prefisso non corrisponde al comune dell'indirizzo di attivazione.": {
    partner_lei: "per la numerazione nuova richiesta il prefisso indicato non corrisponde al comune dell'indirizzo di attivazione. Le chiediamo di indicarci un indirizzo con comune coerente con il prefisso scelto oppure di adeguare il prefisso al comune corretto.",
    partner_tu: "per la numerazione nuova richiesta il prefisso inserito non corrisponde al comune dell'indirizzo di attivazione. Ti chiediamo di indicarci un indirizzo con comune coerente con il prefisso scelto oppure di adeguare il prefisso al comune corretto.",
    cliente_lei: "per la numerazione nuova richiesta il prefisso indicato non corrisponde al comune dell'indirizzo di attivazione. Le chiediamo di confermare il comune corretto o, in alternativa, di adeguare il prefisso in modo coerente.",
    cliente_tu: "per la numerazione nuova richiesta il prefisso indicato non corrisponde al comune dell'indirizzo di attivazione. Ti chiediamo di confermarci il comune corretto o di adeguare il prefisso di conseguenza."
  },
  "Numerazione nuova: costi errati per il servizio voce.": {
    partner_lei: "per la numerazione nuova richiesta i costi indicati non risultano corretti rispetto al listino in vigore. Le chiediamo di verificare le condizioni economiche e di aggiornare il contratto con i canoni corretti.",
    partner_tu: "per la numerazione nuova richiesta i costi indicati non risultano corretti rispetto al listino in vigore. Ti chiediamo di verificare i prezzi e aggiornare il contratto con i canoni corretti.",
    cliente_lei: "per la numerazione nuova richiesta i costi indicati non risultano allineati alle condizioni economiche previste. Le chiediamo di verificare con il Suo Partner commerciale e di inviarci il modulo aggiornato.",
    cliente_tu: "per la numerazione nuova richiesta i costi indicati non risultano allineati alle condizioni previste. Ti chiediamo di verificare con il tuo Partner commerciale e di inviarci il modulo aggiornato."
  },
  "Numerazione in portabilità: il prefisso non corrisponde al comune dell'indirizzo di attivazione.": {
    partner_lei: "per la numerazione in portabilità il prefisso indicato non risulta coerente con il comune dell'indirizzo di attivazione. Le chiediamo di indicarci un indirizzo con comune coerente oppure di verificare la correttezza della numerazione.",
    partner_tu: "per la numerazione in portabilità il prefisso indicato non è coerente con il comune di attivazione. Ti chiediamo di indicarci un indirizzo con comune coerente oppure di verificare la numerazione.",
    cliente_lei: "per la numerazione in portabilità il prefisso indicato non risulta coerente con il comune dell'indirizzo di attivazione. Le chiediamo di confermare il comune corretto o, se necessario, di adeguare la numerazione.",
    cliente_tu: "per la numerazione in portabilità il prefisso non risulta coerente con il comune dell'indirizzo di attivazione. Ti chiediamo di confermarci il comune corretto o di adeguare la numerazione se necessario."
  },
  "Numerazione in portabilità: costi errati per il servizio voce.": {
    partner_lei: "per la numerazione in portabilità i costi indicati non risultano corretti rispetto al listino e alle condizioni previste. Le chiediamo di verificare i canoni e aggiornare il modulo con i valori corretti.",
    partner_tu: "per la numerazione in portabilità i costi indicati non sono corretti rispetto al listino. Ti chiediamo di verificare i canoni e aggiornare il modulo con i valori corretti.",
    cliente_lei: "per la numerazione in portabilità i costi indicati non risultano allineati alle condizioni previste. Le chiediamo di confrontarsi con il Suo Partner commerciale per l'invio di un modulo aggiornato.",
    cliente_tu: "per la numerazione in portabilità i costi indicati non risultano allineati alle condizioni previste. Ti chiediamo di confrontarti con il tuo Partner commerciale per l'invio di un modulo aggiornato."
  },
  "Numerazione in portabilità: linea ISDN multinumero con numerazione associata.": {
    partner_lei: "dai dati risulta che la numerazione in portabilità è associata a una linea ISDN multinumero. Le chiediamo di farci sapere se il cliente intende mantenere anche la numerazione associata o se accetta di perderla. In caso desideri mantenerla, sarà necessario inserire nel contratto un ulteriore servizio voce in portabilità per tale numerazione.",
    partner_tu: "dai dati risulta che la numerazione richiesta in portabilità è su linea ISDN multinumero. Ti chiediamo di indicarci se il cliente intende mantenere la numerazione associata o se accetta di perderla. Se vuole mantenerla, sarà necessario aggiungere un ulteriore servizio voce in portabilità nel contratto.",
    cliente_lei: "dai dati risulta che la numerazione richiesta in portabilità è associata a una linea ISDN multinumero. Le chiediamo di indicarci se desidera mantenere anche la numerazione associata o se accetta la sua cessazione; in caso di mantenimento sarà necessario prevedere un ulteriore servizio voce in portabilità.",
    cliente_tu: "dai controlli risulta che la numerazione in portabilità è su linea ISDN multinumero, con una numerazione associata. Ti chiediamo di dirci se vuoi mantenere anche quella numerazione o se accetti di perderla: se vuoi mantenerla, andrà aggiunto un altro servizio voce in portabilità nel contratto."
  },
  "Attivazione GNR su dominio trunk.voipvoice.it senza indicazione dell'IP per la configurazione peer to peer.": {
    partner_lei: "per l'attivazione del GNR sul dominio trunk.voipvoice.it non è stato indicato l'indirizzo IP necessario per la configurazione in modalità peer to peer. Le chiediamo di comunicarci l'IP corretto su cui instradare il traffico, così da poter procedere con la lavorazione.",
    partner_tu: "per l'attivazione del GNR sul dominio trunk.voipvoice.it non ci hai indicato l'indirizzo IP necessario per la configurazione peer to peer. Ti chiediamo di comunicarci l'IP corretto su cui instradare il traffico, così da poter procedere con la lavorazione.",
    cliente_lei: "per l'attivazione del GNR sul dominio trunk.voipvoice.it non risulta indicato l'indirizzo IP necessario per la configurazione in modalità peer to peer. Le chiediamo di comunicarci l'IP corretto su cui instradare il traffico, così da poter procedere con la lavorazione della Sua pratica.",
    cliente_tu: "per l'attivazione del GNR sul dominio trunk.voipvoice.it non è stato indicato l'indirizzo IP necessario per la configurazione peer to peer. Ti chiediamo di comunicarci l'IP corretto su cui instradare il traffico, così da poter procedere con la lavorazione."
  },
  "Numero con servizio Flat Inbound richiesto su dominio diverso da sip.voipvoicetel.it.": {
    partner_lei: "per il numero su cui è stato richiesto il servizio Flat Inbound è stato indicato un dominio diverso da sip.voipvoicetel.it. Le ricordiamo che, in presenza del servizio Flat Inbound, il dominio di attivazione deve necessariamente essere sip.voipvoicetel.it. Le chiediamo quindi di correggere il dominio nel contratto e inviarci la versione aggiornata.",
    partner_tu: "per il numero su cui è stato richiesto il servizio Flat Inbound è stato indicato un dominio diverso da sip.voipvoicetel.it. In questi casi il dominio di attivazione deve essere necessariamente sip.voipvoicetel.it. Ti chiediamo di correggere il dominio nel contratto e inviarci il modulo aggiornato.",
    cliente_lei: "per il numero su cui è stato richiesto il servizio Flat Inbound è stato indicato un dominio non corretto. Le segnaliamo che, con il servizio Flat Inbound, il dominio di attivazione deve essere sip.voipvoicetel.it. Le chiediamo di far aggiornare il contratto al Partner di riferimento con il dominio corretto.",
    cliente_tu: "per il numero su cui è stato richiesto il servizio Flat Inbound è stato indicato un dominio non corretto. Con il servizio Flat Inbound il dominio di attivazione deve essere sip.voipvoicetel.it. Ti chiediamo di far aggiornare il contratto al tuo Partner con il dominio corretto."
  },
"Easy Solution: modello di apparato non indicato (telefono/router/cuffie ecc.).": {
    partner_lei: "per l'Easy Solution richiesta non è stato indicato il modello di apparato da fornire (telefono, router, cuffie o altro). Le chiediamo di specificare il modello desiderato, così da poter procedere con l'evasione corretta dell'ordine.",
    partner_tu: "per l'Easy Solution richiesta non hai indicato il modello di apparato da fornire (telefono, router, cuffie o altro). Ti chiediamo di specificare il modello desiderato, così da poter procedere con l'evasione dell'ordine.",
    cliente_lei: "per l'Easy Solution richiesta non è stato indicato il modello di apparato da fornire. Le chiediamo di confrontarsi con il Suo Partner commerciale per specificare il modello desiderato.",
    cliente_tu: "per l'Easy Solution che hai richiesto non è stato indicato il modello di apparato. Ti chiediamo di confrontarti con il tuo Partner commerciale per specificare il modello desiderato."
  },
  "Easy Solution: indirizzo di spedizione dell'apparato non indicato.": {
    partner_lei: "per l'Easy Solution richiesta non è stato indicato l'indirizzo di spedizione dell'apparato. Le chiediamo di comunicarci l'indirizzo completo (via, civico, CAP, città e eventuali riferimenti) a cui effettuare la consegna.",
    partner_tu: "per l'Easy Solution richiesta non hai indicato l'indirizzo di spedizione dell'apparato. Ti chiediamo di comunicarci l'indirizzo completo (via, civico, CAP, città e eventuali riferimenti) a cui effettuare la consegna.",
    cliente_lei: "per l'Easy Solution richiesta non è stato indicato l'indirizzo di spedizione dell'apparato. Le chiediamo di fornire l'indirizzo completo a cui desidera ricevere il materiale, tramite il Suo Partner di riferimento.",
    cliente_tu: "per l'Easy Solution richiesta non è stato indicato l'indirizzo di spedizione dell'apparato. Ti chiediamo di fornire l'indirizzo completo a cui desideri ricevere il materiale, tramite il tuo Partner di riferimento."
  },
  "Easy Solution Router SMALL LEVEL: modello non indicato.": {
    partner_lei: "per l'Easy Solution Router SMALL LEVEL richiesta non è stato indicato il modello di router da fornire. Le chiediamo di specificare se desidera Fritz!Box 7530AX oppure TP-LINK EB431V, così da poter procedere con l'evasione dell'ordine.",
    partner_tu: "per l'Easy Solution Router SMALL LEVEL non hai indicato il modello di router da fornire. Ti chiediamo di specificare se desideri Fritz!Box 7530AX oppure TP-LINK EB431V, così da poter procedere con l'evasione dell'ordine.",
    cliente_lei: "per l'Easy Solution Router SMALL LEVEL non è stato indicato il modello di router da fornire. Le chiediamo di confrontarsi con il Suo Partner commerciale per scegliere tra Fritz!Box 7530AX e TP-LINK EB431V.",
    cliente_tu: "per l'Easy Solution Router SMALL LEVEL non è stato indicato il modello. Ti chiediamo di confrontarti con il tuo Partner commerciale per scegliere tra Fritz!Box 7530AX e TP-LINK EB431V."
  },
  "Easy Solution Router MEDIUM LEVEL: modello non indicato.": {
    partner_lei: "per l'Easy Solution Router MEDIUM LEVEL richiesta non è stato indicato il modello di router da fornire. Le chiediamo di specificare se desidera Fritz!Box 7690, Draytek 2765 oppure Draytek 2765AC, così da poter procedere con l'evasione dell'ordine.",
    partner_tu: "per l'Easy Solution Router MEDIUM LEVEL non hai indicato il modello di router da fornire. Ti chiediamo di specificare se desideri Fritz!Box 7690, Draytek 2765 oppure Draytek 2765AC, così da poter procedere con l'evasione dell'ordine.",
    cliente_lei: "per l'Easy Solution Router MEDIUM LEVEL non è stato indicato il modello di router da fornire. Le chiediamo di confrontarsi con il Suo Partner commerciale per scegliere tra Fritz!Box 7690, Draytek 2765 e Draytek 2765AC.",
    cliente_tu: "per l'Easy Solution Router MEDIUM LEVEL non è stato indicato il modello. Ti chiediamo di confrontarti con il tuo Partner commerciale per scegliere tra Fritz!Box 7690, Draytek 2765 e Draytek 2765AC."
  },
  "Easy Solution Router HIGH LEVEL: modello non indicato.": {
    partner_lei: "per l'Easy Solution Router HIGH LEVEL richiesta non è stato indicato il modello di router da fornire. Le chiediamo di specificare se desidera Draytek 2865, Draytek 2865AC, Draytek 2927, Draytek 2927AC oppure Mikrotik RB4011, così da poter procedere con l'evasione dell'ordine.",
    partner_tu: "per l'Easy Solution Router HIGH LEVEL non hai indicato il modello di router da fornire. Ti chiediamo di specificare se desideri Draytek 2865, Draytek 2865AC, Draytek 2927, Draytek 2927AC oppure Mikrotik RB4011, così da poter procedere con l'evasione dell'ordine.",
    cliente_lei: "per l'Easy Solution Router HIGH LEVEL non è stato indicato il modello di router da fornire. Le chiediamo di confrontarsi con il Suo Partner commerciale per scegliere tra Draytek 2865, 2865AC, 2927, 2927AC o Mikrotik RB4011.",
    cliente_tu: "per l'Easy Solution Router HIGH LEVEL non è stato indicato il modello. Ti chiediamo di confrontarti con il tuo Partner commerciale per scegliere tra Draytek 2865, 2865AC, 2927, 2927AC o Mikrotik RB4011."
  },
  "Easy Solution Router ENTERPRISE: modello non indicato.": {
    partner_lei: "per l'Easy Solution Router ENTERPRISE non è stato indicato il modello di router da fornire. In questa categoria è previsto il Mikrotik Cloud Core Router: Le chiediamo di confermare questa scelta, così da poter procedere con l'evasione dell'ordine.",
    partner_tu: "per l'Easy Solution Router ENTERPRISE non è stato indicato il modello di router da fornire. In questa categoria è previsto il Mikrotik Cloud Core Router: ti chiediamo di confermare questa scelta, così da poter procedere con l'evasione dell'ordine.",
    cliente_lei: "per l'Easy Solution Router ENTERPRISE non è stato indicato il modello di router da fornire. In questa categoria è previsto il Mikrotik Cloud Core Router: Le chiediamo di confermare con il Suo Partner la fornitura di tale modello.",
    cliente_tu: "per l'Easy Solution Router ENTERPRISE non è stato indicato il modello. In questa categoria è previsto il Mikrotik Cloud Core Router: ti chiediamo di confermare con il tuo Partner questa fornitura."
  },
  "VoipFax: manca l'indirizzo mail su cui recapitare i fax.": {
    partner_lei: "per il servizio VoipFax richiesto non è stato indicato l'indirizzo mail su cui recapitare i fax in arrivo. Le chiediamo di comunicarci un indirizzo mail valido dedicato alla ricezione dei fax, così da poter procedere con l'attivazione del servizio.",
    partner_tu: "per il servizio VoipFax richiesto non hai indicato l'indirizzo mail su cui recapitare i fax in arrivo. Ti chiediamo di indicarci un indirizzo mail valido dedicato alla ricezione dei fax, così da poter procedere con l'attivazione del servizio.",
    cliente_lei: "per il servizio VoipFax richiesto non è stato indicato l'indirizzo mail su cui recapitare i fax in arrivo. Le chiediamo di fornirci un indirizzo mail valido dedicato alla ricezione dei fax, così da poter procedere con l'attivazione.",
    cliente_tu: "per il servizio VoipFax richiesto non hai indicato l'indirizzo mail su cui recapitare i fax in arrivo. Ti chiediamo di fornirci un indirizzo mail valido dedicato alla ricezione dei fax, così da poter procedere con l'attivazione."
  },
  "Numero Verde: manca il numero nero associato.": {
    partner_lei: "per il numero verde richiesto non è stato indicato il numero geografico associato (numero nero), necessario per procedere con l'attivazione del servizio. Le chiediamo di comunicarci il numero nero da associare, come previsto dalla normativa.",
    partner_tu: "per il numero verde richiesto non hai indicato il numero geografico associato (numero nero), necessario per procedere con l'attivazione. Ti chiediamo di comunicarci il numero nero da associare.",
    cliente_lei: "per il numero verde richiesto non è stato indicato il numero geografico associato (numero nero), necessario per procedere. Le chiediamo di comunicarci il numero nero da associare al servizio.",
    cliente_tu: "per il numero verde richiesto non hai indicato il numero geografico associato (numero nero). Ti chiediamo di comunicarci il numero nero da associare al servizio."
  },
  "Numero Verde in portabilità: manca il modulo di portabilità dedicato.": {
    partner_lei: "per la richiesta di portabilità del numero verde non risulta allegato il modulo di portabilità dedicato, necessario per procedere con la lavorazione. Le chiediamo di inviarci il modulo specifico compilato e firmato, disponibile nella Sua area Partner.",
    partner_tu: "per la portabilità del numero verde non hai allegato il modulo dedicato, necessario per procedere. Ti chiediamo di inviarci il modulo specifico compilato e firmato, che trovi nella tua area Partner.",
    cliente_lei: "per la portabilità del numero verde non risulta allegato il modulo specifico richiesto per la lavorazione. Le chiediamo di contattare il Suo Partner per compilare e inviarci il modulo corretto.",
    cliente_tu: "per la portabilità del numero verde non hai allegato il modulo dedicato. Ti chiediamo di contattare il tuo Partner per compilare e inviarci il modulo corretto."
  },
  "Business Continuity Plus/Plus AC: modello di router non indicato.": {
    partner_lei: "per il servizio di Business Continuity Plus/Plus AC richiesto non è stato indicato il modello di router da fornire. Le ricordiamo che per il profilo Plus sono disponibili Draytek 2865 e Draytek 2927, mentre per il profilo Plus AC sono disponibili Draytek 2865AC e Draytek 2927AC. Le chiediamo di indicarci il modello scelto, così da poter procedere con la lavorazione.",
    partner_tu: "per il servizio di Business Continuity Plus/Plus AC richiesto non hai indicato il modello di router da fornire. Ti ricordiamo che per il profilo Plus sono disponibili Draytek 2865 e Draytek 2927, mentre per il profilo Plus AC sono disponibili Draytek 2865AC e Draytek 2927AC. Ti chiediamo di indicarci il modello scelto, così da poter procedere con la lavorazione.",
    cliente_lei: "per il servizio di Business Continuity Plus/Plus AC richiesto non risulta indicato il modello di router da fornire. Le chiediamo di confrontarsi con il Suo Partner commerciale per scegliere uno dei modelli disponibili e di farci pervenire la scelta effettuata.",
    cliente_tu: "per il servizio di Business Continuity Plus/Plus AC richiesto non risulta indicato il modello di router da fornire. Ti chiediamo di confrontarti con il tuo Partner commerciale per scegliere uno dei modelli disponibili e comunicarci la scelta."
  },
  "Business Continuity Plus/Plus AC: indirizzo di spedizione del router mancante.": {
    partner_lei: "per il servizio di Business Continuity Plus/Plus AC richiesto non è stato indicato l'indirizzo di spedizione del router. Le chiediamo di comunicarci l'indirizzo completo (via, civico, CAP, città ed eventuali riferimenti) a cui desidera ricevere l'apparato.",
    partner_tu: "per il servizio di Business Continuity Plus/Plus AC richiesto non hai indicato l'indirizzo di spedizione del router. Ti chiediamo di comunicarci l'indirizzo completo (via, civico, CAP, città ed eventuali riferimenti) a cui spedire l'apparato.",
    cliente_lei: "per il servizio di Business Continuity Plus/Plus AC richiesto non è stato indicato l'indirizzo di spedizione del router. Le chiediamo di fornire, tramite il Suo Partner, l'indirizzo completo a cui desidera ricevere l'apparato.",
    cliente_tu: "per il servizio di Business Continuity Plus/Plus AC richiesto non è stato indicato l'indirizzo di spedizione del router. Ti chiediamo di comunicare, tramite il tuo Partner, l'indirizzo completo a cui desideri ricevere l'apparato."
  },
  "Servizio Forward: manca il numero su cui deviare le chiamate.": {
    partner_lei: "per il servizio aggiuntivo di Forward richiesto non è stato indicato il numero su cui deviare le chiamate. Le chiediamo di comunicarci il numero di instradamento desiderato, così da poter procedere con l'attivazione del servizio.",
    partner_tu: "per il servizio di Forward richiesto non hai indicato il numero su cui deviare le chiamate. Ti chiediamo di comunicarci il numero di instradamento desiderato, così da poter procedere con l'attivazione.",
    cliente_lei: "per il servizio di Forward richiesto non è stato indicato il numero su cui deviare le chiamate. Le chiediamo di comunicarci il numero di destinazione desiderato, tramite il Suo Partner, così da poter procedere con l'attivazione.",
    cliente_tu: "per il servizio di Forward richiesto non hai indicato il numero su cui deviare le chiamate. Ti chiediamo di comunicarci, tramite il tuo Partner, il numero di destinazione desiderato così da poter procedere con l'attivazione."
  },
  "Servizio Backup: manca il numero su cui deviare le chiamate.": {
    partner_lei: "per il servizio di Backup richiesto non è stato indicato il numero su cui deviare le chiamate in caso di indisponibilità della linea principale. Le chiediamo di comunicarci il numero di destinazione, così da poter completare la configurazione del servizio.",
    partner_tu: "per il servizio di Backup richiesto non hai indicato il numero su cui deviare le chiamate in caso di indisponibilità della linea principale. Ti chiediamo di comunicarci il numero di destinazione, così da poter completare la configurazione del servizio.",
    cliente_lei: "per il servizio di Backup richiesto non è stato indicato il numero su cui deviare le chiamate in caso di indisponibilità della linea principale. Le chiediamo di comunicarci il numero di destinazione, tramite il Suo Partner, per completare la configurazione.",
    cliente_tu: "per il servizio di Backup richiesto non hai indicato il numero su cui deviare le chiamate in caso di indisponibilità della linea principale. Ti chiediamo di comunicarci, tramite il tuo Partner, il numero di destinazione così da completare la configurazione."
  },
  "Pubblicazione elenchi: manca il modulo dedicato alla richiesta.": {
    partner_lei: "per il servizio di pubblicazione negli elenchi telefonici è necessario compilare l'apposito modulo dedicato. Al momento non risulta allegata tale modulistica: Le chiediamo di scaricare, compilare e inviarci il modulo specifico per la pubblicazione, disponibile nella Sua area Partner.",
    partner_tu: "per il servizio di pubblicazione negli elenchi telefonici è obbligatorio utilizzare l'apposito modulo dedicato. Al momento non risulta allegato: ti chiediamo di scaricare, compilare e inviarci il modulo specifico per la pubblicazione, che trovi nella tua area Partner.",
    cliente_lei: "per il servizio di pubblicazione negli elenchi telefonici è necessario utilizzare un modulo dedicato che al momento non risulta allegato. Le chiediamo di rivolgersi al Suo Partner affinché compili e ci trasmetta il modulo specifico per la pubblicazione.",
    cliente_tu: "per il servizio di pubblicazione negli elenchi telefonici è necessario un modulo dedicato, che al momento non risulta allegato. Ti chiediamo di rivolgerti al tuo Partner affinché compili e ci invii il modulo specifico per la pubblicazione."
  },
  "Business Monitoring Information: manca la mail del referente tecnico.": {
    partner_lei: "per il servizio Business Monitoring Information associato alla connettività non è stata indicata la mail del referente tecnico. Le chiediamo di comunicarci un indirizzo mail valido del referente tecnico, così da poter inviare correttamente le notifiche informative sullo stato della linea.",
    partner_tu: "per il servizio Business Monitoring Information associato alla connettività non hai indicato la mail del referente tecnico. Ti chiediamo di comunicarci un indirizzo mail valido del referente tecnico, così da poter inviare le notifiche informative sullo stato della linea.",
    cliente_lei: "per il servizio Business Monitoring Information non risulta indicata la mail del referente tecnico. Le chiediamo di fornirci un indirizzo mail valido del referente tecnico, tramite il Suo Partner, così da poterle inviare le notifiche informative sullo stato della connettività.",
    cliente_tu: "per il servizio Business Monitoring Information non è stata indicata la mail del referente tecnico. Ti chiediamo di comunicarci, tramite il tuo Partner, un indirizzo mail valido del referente tecnico per ricevere le notifiche informative sullo stato della linea."
  },
  "Business Monitoring Warning: mancano mail e/o cellulare del referente tecnico.": {
    partner_lei: "per il servizio Business Monitoring Warning associato alla connettività non risultano completi i dati del referente tecnico: sono necessari sia la mail sia il numero di cellulare. Le chiediamo di comunicarci entrambi i dati, così da poter inviare correttamente gli avvisi di warning relativi alla linea.",
    partner_tu: "per il servizio Business Monitoring Warning non risultano completi i dati del referente tecnico: servono sia la mail sia il numero di cellulare. Ti chiediamo di indicarci entrambi i dati, così da poter inviare correttamente gli avvisi di warning sulla linea.",
    cliente_lei: "per il servizio Business Monitoring Warning non risultano completi i dati del referente tecnico (mail e numero di cellulare). Le chiediamo di fornirci, tramite il Suo Partner, entrambi i dati, così da poter inviare gli avvisi di warning relativi alla connettività.",
    cliente_tu: "per il servizio Business Monitoring Warning non sono completi i dati del referente tecnico: servono mail e cellulare. Ti chiediamo di fornire, tramite il tuo Partner, entrambi i dati, così da poter inviare gli avvisi di warning sulla linea."
  },
  "Business Monitoring High: mancano mail e/o cellulare del referente tecnico e/o cellulare del cliente.": {
    partner_lei: "per il servizio Business Monitoring High associato alla connettività non risultano completi i dati di contatto richiesti: sono necessari la mail e il cellulare del referente tecnico, oltre al cellulare del cliente. Le chiediamo di comunicarci tutti questi dati, così da poter inviare correttamente le notifiche di allerta alta.",
    partner_tu: "per il servizio Business Monitoring High non risultano completi i dati di contatto: servono mail e cellulare del referente tecnico, oltre al cellulare del cliente. Ti chiediamo di indicarci tutti questi dati, così da poter inviare correttamente le notifiche di allerta alta.",
    cliente_lei: "per il servizio Business Monitoring High non risultano completi i dati di contatto (mail e cellulare del referente tecnico e cellulare del cliente). Le chiediamo di fornire, tramite il Suo Partner, tutti questi dati per permetterci di inviare le notifiche di allerta alta sulla connettività.",
    cliente_tu: "per il servizio Business Monitoring High non sono completi i dati richiesti: servono mail e cellulare del referente tecnico e il tuo cellulare. Ti chiediamo di fornire, tramite il tuo Partner, tutti questi dati, così da poter inviare le notifiche di allerta alta sulla linea."
  },
  "Together e Office Elite applicati contemporaneamente (non ammesso).": {
    partner_lei: "nel modulo è stata indicata contemporaneamente l'applicazione del listino Together e della maggiorazione Office Elite. Le ricordiamo che le due condizioni non sono cumulabili: è necessario scegliere esclusivamente una delle due opzioni. La invitiamo quindi ad aggiornare il modulo selezionando solo la condizione commerciale corretta.",
    partner_tu: "nel modulo hai indicato sia il listino Together sia l'Office Elite, ma queste due condizioni non possono essere applicate insieme. Ti chiediamo di aggiornare il modulo selezionando solamente la condizione commerciale corretta.",
    cliente_lei: "nel modulo risultano applicate sia la condizione Together sia l'Office Elite, ma queste due condizioni non possono essere utilizzate contemporaneamente. Le chiediamo di confrontarsi con il Suo Partner per aggiornare correttamente il modulo.",
    cliente_tu: "nel modulo risultano applicati sia Together che Office Elite, ma non è possibile utilizzarli insieme. Ti chiediamo di confrontarti con il tuo Partner per aggiornare il modulo correttamente."
  },
  "Together richiesto con servizio voce a consumo (non compatibile).": {
    partner_lei: "nel modulo è stato richiesto il listino Together su un servizio voce a consumo. La informiamo che il Together è applicabile esclusivamente ai servizi voce flat associati a una connettività. La invitiamo a correggere il modulo indicando un servizio voce flat oppure rimuovendo la richiesta di Together.",
    partner_tu: "nel modulo hai richiesto il Together su un servizio voce a consumo, ma non è possibile: il Together è applicabile solo ai servizi voce flat associati a una connettività. Ti chiediamo di correggere il modulo di conseguenza.",
    cliente_lei: "nel modulo è stato richiesto il Together, ma il servizio voce scelto è a consumo. Le informiamo che il Together è applicabile solo ai servizi voce flat: La invitiamo a confrontarsi con il Suo Partner per aggiornare il modulo.",
    cliente_tu: "nel modulo hai richiesto il Together, ma il servizio voce indicato è a consumo. Il Together è applicabile solo ai servizi voce flat: ti chiediamo di confrontarti con il tuo Partner per aggiornare il modulo."
  },
  "Together: dicitura mancante sul modulo.": {
    partner_lei: "il cliente ha diritto al listino Together, ma nel modulo non risulta riportata la relativa dicitura. Per poter applicare correttamente le condizioni economiche dedicate, La invitiamo a integrare il modulo indicando chiaramente la dicitura Together.",
    partner_tu: "il cliente ha diritto al Together, ma nel modulo non hai riportato la dicitura. Ti chiediamo di aggiornare il modulo inserendo chiaramente la dicitura Together per applicare le corrette condizioni economiche.",
    cliente_lei: "il Suo contratto può essere attivato con listino Together, ma nel modulo non risulta riportata la relativa dicitura. Le chiediamo di confrontarsi con il Suo Partner per integrare correttamente il documento.",
    cliente_tu: "il tuo contratto può essere attivato con listino Together, ma nel modulo non risulta indicata la dicitura. Ti chiediamo di confrontarti con il tuo Partner per aggiungerla correttamente."
  },
  "Office Elite: dicitura mancante sul modulo.": {
    partner_lei: "nel modulo non risulta riportata la dicitura Office Elite, pur essendo stata selezionata un'offerta che prevede tale condizione economica. Le chiediamo di integrare il modulo indicando chiaramente la dicitura Office Elite affinché il contratto possa essere lavorato correttamente.",
    partner_tu: "nel modulo non hai indicato la dicitura Office Elite, anche se il servizio prevede questa condizione economica. Ti chiediamo di aggiornare il modulo inserendo la dicitura Office Elite.",
    cliente_lei: "nel modulo non risulta riportata la dicitura Office Elite pur essendo prevista dalla Sua offerta. Le chiediamo di confrontarsi con il Suo Partner per aggiornare correttamente il documento.",
    cliente_tu: "nel modulo non è indicata la dicitura Office Elite pur essendo prevista dal servizio selezionato. Ti chiediamo di confrontarti con il tuo Partner per aggiornare il modulo."
  },
  "Modulo cartaceo: formato editabile non accettato.": {
    partner_lei: "il modulo cartaceo che ci ha trasmesso risulta in formato editabile. Le ricordiamo che per la corretta vidimazione è necessario inviarci il documento in formato non modificabile (PDF definitivo). La invitiamo pertanto a reinviare il modulo in formato conforme.",
    partner_tu: "il modulo cartaceo che ci hai inviato risulta in formato editabile. Per procedere dobbiamo riceverlo in formato non modificabile (PDF definitivo). Ti chiediamo quindi di reinviarlo nel formato corretto.",
    cliente_lei: "il modulo che ci ha trasmesso risulta in formato editabile. Per poter procedere è necessario riceverlo in formato non modificabile (PDF definitivo). La invitiamo a reinviarlo nel formato corretto tramite il Suo Partner.",
    cliente_tu: "il modulo che hai inviato risulta in formato editabile. Per procedere dobbiamo riceverlo in formato non modificabile (PDF definitivo). Ti chiediamo di reinviarlo tramite il tuo Partner."
  },
  "Modulo cartaceo: manca l'Allegato 1 (servizi voce, portabilità, GNR, extra voce).": {
    partner_lei: "per la lavorazione del servizio voce indicato nel modulo non risulta allegato l'Allegato 1, necessario per procedere. La invitiamo a compilare e trasmetterci l'Allegato 1 dedicato al servizio richiesto.",
    partner_tu: "per il servizio voce indicato nel modulo non risulta allegato l'Allegato 1, necessario per la lavorazione. Ti chiediamo di compilarlo e inviarcelo.",
    cliente_lei: "per il servizio voce richiesto non risulta allegato l'Allegato 1, necessario per la lavorazione. La invitiamo a contattare il Suo Partner per compilare e trasmetterci l'Allegato corretto.",
    cliente_tu: "per il servizio voce richiesto non è allegato l'Allegato 1, necessario per procedere. Ti chiediamo di contattare il tuo Partner per completare la modulistica."
  },
  "Modulo cartaceo: manca l'Allegato 2 (connettività, indirizzi IP, Business Continuity, Business Monitoring, VoipSim).": {
    partner_lei: "per la connettività o il servizio extra richiesto non risulta allegato l'Allegato 2, necessario per la lavorazione della pratica. La invitiamo a compilare e inviarci l'Allegato 2 relativo al servizio indicato nel modulo.",
    partner_tu: "per la connettività o il servizio extra richiesto non hai allegato l'Allegato 2, necessario per procedere. Ti chiediamo di compilarlo e inviarcelo.",
    cliente_lei: "per il servizio richiesto non risulta allegato l'Allegato 2, necessario per la lavorazione. Le chiediamo di confrontarsi con il Suo Partner per compilare e inviarci il documento richiesto.",
    cliente_tu: "per il servizio richiesto manca l'Allegato 2, necessario per procedere. Ti chiediamo di contattare il tuo Partner per completare la documentazione."
  },
  "Modulo cartaceo: manca l'Allegato 3 (Easy Solution router, Cloud, Security, DNS Filter, 365, SMS, VoipFax).": {
    partner_lei: "al modulo trasmesso non risulta allegato l'Allegato 3, necessario per la lavorazione del servizio richiesto. La invitiamo a compilare e inoltrarci l'Allegato 3 dedicato.",
    partner_tu: "nel modulo che hai inviato manca l'Allegato 3, necessario per la lavorazione del servizio. Ti chiediamo di compilarlo e inviarcelo.",
    cliente_lei: "non risulta allegato l'Allegato 3, necessario per la lavorazione del servizio indicato. La invitiamo a rivolgersi al Suo Partner per completare la modulistica.",
    cliente_tu: "non hai allegato l'Allegato 3, necessario per il servizio richiesto. Ti chiediamo di contattare il tuo Partner per inviarci il documento corretto."
  },
  "Variazione: manca la Partita IVA.": {
    partner_lei: "nel modulo di variazione non è stata indicata la Partita IVA del cliente, dato obbligatorio ai fini della corretta gestione amministrativa. Le chiediamo di inviarci il modulo aggiornato con la Partita IVA completa.",
    partner_tu: "nel modulo di variazione non hai indicato la Partita IVA del cliente, che è obbligatoria. Ti chiediamo di reinviarci il modulo con la Partita IVA completa.",
    cliente_lei: "nel modulo di variazione non è stata riportata la Sua Partita IVA. Le chiediamo di inviarci il modulo aggiornato tramite il Suo Partner.",
    cliente_tu: "nel modulo di variazione non hai riportato la tua Partita IVA. Ti chiediamo di inviarci il modulo aggiornato tramite il tuo Partner."
  },
  "Variazione: manca il Codice Fiscale.": {
    partner_lei: "nel modulo di variazione non è stato indicato il Codice Fiscale del cliente, dato obbligatorio per la corretta variazione del servizio. Le chiediamo di aggiornare il modulo con il Codice Fiscale completo.",
    partner_tu: "nel modulo di variazione non hai indicato il Codice Fiscale del cliente. Ti chiediamo di reinviare il modulo aggiornato con il Codice Fiscale completo.",
    cliente_lei: "nel modulo di variazione non risulta indicato il Suo Codice Fiscale. La invitiamo a reinviare il documento corretto tramite il Suo Partner.",
    cliente_tu: "nel modulo di variazione non hai indicato il tuo Codice Fiscale. Ti chiediamo di reinviare il documento aggiornato tramite il tuo Partner."
  },
  "Variazione: manca il cellulare del referente tecnico.": {
    partner_lei: "nel modulo di variazione non è stato indicato il numero di cellulare del referente tecnico, necessario per eventuali comunicazioni operative. Le chiediamo di completare il modulo con tale dato.",
    partner_tu: "nel modulo di variazione non hai indicato il cellulare del referente tecnico. Ti chiediamo di aggiornarlo e reinviarlo.",
    cliente_lei: "nel modulo non è stato riportato il numero di cellulare del referente tecnico. Le chiediamo di aggiornare il documento tramite il Suo Partner.",
    cliente_tu: "nel modulo non è stato indicato il cellulare del referente tecnico. Ti chiediamo di aggiornare il documento tramite il tuo Partner."
  },
  "Variazione: manca la mail del referente amministrativo.": {
    partner_lei: "nel modulo non è stata riportata la mail del referente amministrativo, obbligatoria per l'invio delle fatture di cortesia. Le chiediamo di aggiornare il modulo inserendo un indirizzo mail ordinario (non PEC).",
    partner_tu: "nel modulo manca la mail del referente amministrativo. Ti chiediamo di aggiornarlo inserendo un indirizzo mail ordinario.",
    cliente_lei: "nel modulo non è stata riportata la mail del referente amministrativo. Le chiediamo di comunicare tramite il Suo Partner un indirizzo mail ordinario.",
    cliente_tu: "nel modulo manca la mail del referente amministrativo. Ti chiediamo di comunicarne una tramite il tuo Partner."
  },
  "Variazione: manca il codice della connettività da variare.": {
    partner_lei: "nel modulo di variazione non è stato indicato il codice della connettività oggetto della modifica. Le chiediamo di aggiornare il modulo riportando il codice completo, reperibile nella fattura del cliente.",
    partner_tu: "nel modulo di variazione non hai indicato il codice della connettività da modificare. Ti chiediamo di aggiungerlo e reinviare il modulo.",
    cliente_lei: "nel modulo non risulta indicato il codice della connettività da variare. Le chiediamo di aggiornarlo tramite il Suo Partner.",
    cliente_tu: "nel modulo non hai indicato il codice della connettività che vuoi modificare. Ti chiediamo di reinviare il modulo corretto tramite il tuo Partner."
  },
  "Variazione: manca la numerazione soggetta a modifica.": {
    partner_lei: "nel modulo di variazione non è stata indicata la numerazione soggetta alla modifica. Le chiediamo di aggiornare il documento riportando la numerazione completa.",
    partner_tu: "nel modulo non hai riportato la numerazione da modificare. Ti chiediamo di reinviare il modulo integrato.",
    cliente_lei: "nel modulo non risulta indicata la numerazione per cui è stata richiesta la variazione. La invitiamo a completare il modulo tramite il Suo Partner.",
    cliente_tu: "nel modulo non hai indicato la numerazione che vuoi modificare. Ti chiediamo di reinviare il modulo corretto tramite il tuo Partner."
  },
  "Variazione: manca il canone attualmente pagato.": {
    partner_lei: "nel modulo di variazione non è stato riportato il canone attualmente pagato dal cliente. Le chiediamo di integrare il modulo indicando il canone attivo riscontrabile in fattura.",
    partner_tu: "nel modulo non hai riportato il canone attualmente pagato dal cliente. Ti chiediamo di integrarlo e reinviarlo.",
    cliente_lei: "il modulo non riporta il canone del servizio attualmente attivo. Le chiediamo di aggiornare la documentazione tramite il Suo Partner.",
    cliente_tu: "nel modulo non hai riportato il canone attuale del servizio. Ti chiediamo di reinviare il modulo aggiornato tramite il tuo Partner."
  },
  "Variazione: manca il costo di attivazione del nuovo servizio.": {
    partner_lei: "nella sezione 'Richiesta modifica/attivazione' non è stato indicato il costo di attivazione previsto per il nuovo servizio. La invitiamo ad aggiornare il modulo riportando il costo corretto.",
    partner_tu: "non hai indicato il costo di attivazione per il nuovo servizio richiesto. Ti chiediamo di reinviare il modulo aggiornato.",
    cliente_lei: "nel modulo non risulta indicato il costo di attivazione del servizio richiesto. Le chiediamo di aggiornare la documentazione tramite il Suo Partner.",
    cliente_tu: "nel modulo non hai indicato il costo di attivazione previsto. Ti chiediamo di integrarlo tramite il tuo Partner."
  },
  "Variazione: costo di attivazione errato.": {
    partner_lei: "nel modulo è stato indicato un costo di attivazione non corretto rispetto al servizio richiesto. Le chiediamo di verificare il listino e aggiornare il modulo con il costo corretto.",
    partner_tu: "hai indicato un costo di attivazione non corretto. Ti chiediamo di verificarlo e reinviare il modulo aggiornato.",
    cliente_lei: "nel modulo risulta riportato un costo di attivazione non corretto. Le chiediamo di aggiornare la documentazione tramite il Suo Partner.",
    cliente_tu: "nel modulo hai riportato un costo di attivazione non corretto. Ti chiediamo di confrontarti con il tuo Partner per correggere il valore."
  },
  "Variazione: servizio extra non compatibile con il servizio attivo.": {
    partner_lei: "nel modulo di variazione è stato richiesto un servizio extra non compatibile con il servizio già attivo. Le chiediamo di verificare la compatibilità e aggiornare il modulo in base alla configurazione corretta.",
    partner_tu: "nel modulo hai richiesto un servizio extra non compatibile con il servizio già attivo. Ti chiediamo di verificare e correggere il modulo.",
    cliente_lei: "il servizio extra richiesto non risulta compatibile con il servizio attivo. La invitiamo a verificare la configurazione tramite il Suo Partner.",
    cliente_tu: "il servizio extra richiesto non è compatibile. Ti chiediamo di confrontarti con il tuo Partner per aggiornare la richiesta."
  },
  "Variazione: canone indicato errato.": {
    partner_lei: "nel modulo è stato indicato un canone non corretto rispetto al servizio richiesto o attualmente attivo. Le chiediamo di verificare il valore corretto in fattura e aggiornare il modulo.",
    partner_tu: "nel modulo hai indicato un canone errato. Ti chiediamo di verificare il valore corretto e reinviare il modulo aggiornato.",
    cliente_lei: "nel modulo risulta riportato un canone non corretto. Le chiediamo di aggiornarlo tramite il Suo Partner.",
    cliente_tu: "nel modulo hai riportato un canone errato. Ti chiediamo di confrontarti con il tuo Partner per correggere il valore."
  },
  "Variazione: nuova numerazione richiesta, manca l'Allegato 1.": {
    partner_lei: "per l'attivazione della nuova numerazione richiesta non risulta allegato l'Allegato 1, necessario per procedere. Le chiediamo di inviarci l'Allegato 1 compilato e firmato.",
    partner_tu: "per la nuova numerazione richiesta non hai allegato l'Allegato 1. Ti chiediamo di compilarlo e inviarcelo.",
    cliente_lei: "per la nuova numerazione richiesta non è stato allegato l'Allegato 1. Le chiediamo di rivolgersi al Suo Partner per completare la documentazione.",
    cliente_tu: "manca l'Allegato 1 per la nuova numerazione richiesta. Ti chiediamo di contattare il tuo Partner per inviarci il documento corretto."
  },
  "Variazione: portabilità numero richiesta, mancano Allegato 1 e Allegato 4.": {
    partner_lei: "per la richiesta di portabilità della numerazione non risultano allegati l'Allegato 1 e l'Allegato 4, entrambi necessari per procedere. La invitiamo a trasmetterci entrambe le schede compilate e firmate.",
    partner_tu: "per la portabilità della numerazione non hai allegato l'Allegato 1 e l'Allegato 4. Ti chiediamo di compilarli e inviarceli.",
    cliente_lei: "per la portabilità della numerazione mancano gli Allegati 1 e 4. La invitiamo a confrontarsi con il Suo Partner per completare la modulistica.",
    cliente_tu: "per la portabilità del numero mancano Allegato 1 e 4. Ti chiediamo di contattare il tuo Partner per completare la documentazione."
  },
  "Variazione: connettività richiesta, manca Allegato 2.": {
    partner_lei: "per la connettività richiesta non risulta allegato l'Allegato 2, necessario per procedere. La invitiamo a trasmetterci l'Allegato corretto compilato e firmato.",
    partner_tu: "per la connettività richiesta non hai allegato l'Allegato 2. Ti chiediamo di compilarlo e inviarcelo.",
    cliente_lei: "per la connettività richiesta manca l'Allegato 2. Le chiediamo di completare la documentazione tramite il Suo Partner.",
    cliente_tu: "manca l'Allegato 2 per la connettività richiesta. Ti chiediamo di contattare il tuo Partner per inviarci il documento corretto."
  },
  "Variazione: upgrade richiesto senza inserire costo upgrade (49,90 €).": {
    partner_lei: "per l'upgrade della connettività non è stato riportato il costo una tantum previsto pari a 49,90 €. Le chiediamo di aggiornare il modulo inserendo il costo corretto.",
    partner_tu: "per l'upgrade della connettività non hai riportato il costo una tantum di 49,90 €. Ti chiediamo di aggiornare il modulo.",
    cliente_lei: "nel modulo non risulta riportato il costo di upgrade previsto pari a 49,90 €. Le chiediamo di aggiornare la documentazione tramite il Suo Partner.",
    cliente_tu: "non hai indicato il costo di upgrade (49,90 €). Ti chiediamo di confrontarti con il tuo Partner per aggiornare il modulo."
  },
  "Cliente già attivo: IBAN indicato diverso rispetto alle pratiche precedenti.": {
    partner_lei: "per il cliente risulta già attivo almeno un altro servizio e l'IBAN indicato in questo nuovo modulo è diverso da quello presente a sistema. Le chiediamo di confermarci se la variazione di IBAN debba essere applicata esclusivamente a questa pratica oppure anche a tutti i servizi già attivi intestati allo stesso cliente.",
    partner_tu: "per questo cliente ci sono già altri servizi attivi e l'IBAN indicato nel nuovo modulo è diverso da quello che abbiamo a sistema. Ti chiediamo di confermarci se il nuovo IBAN vale solo per questa pratica oppure anche per tutti i servizi già attivi.",
    cliente_lei: "risultano già attivi altri servizi a Lei intestati e l'IBAN indicato in questo nuovo modulo è diverso da quello che abbiamo a sistema. Le chiediamo di confermarci se il nuovo IBAN debba valere solo per questa pratica oppure anche per tutti i servizi già attivi.",
    cliente_tu: "hai già altri servizi attivi e nel nuovo modulo hai indicato un IBAN diverso rispetto a quello che abbiamo a sistema. Ti chiediamo di dirci se il nuovo IBAN deve valere solo per questa pratica oppure anche per tutti i servizi già attivi."
  },
  "Cliente già attivo: Partita IVA diversa rispetto a quella presente a sistema (possibile subentro).": {
    partner_lei: "per il cliente risultano già attivi altri servizi con una Partita IVA diversa rispetto a quella indicata in questo nuovo modulo. Le chiediamo di confermarci se il cliente intenda effettuare un subentro, così da poter fornire la modulistica corretta per la voltura dei servizi già attivi.",
    partner_tu: "ci sono già servizi attivi con una Partita IVA diversa da quella indicata nel nuovo modulo. Ti chiediamo di confermarci se il cliente vuole effettuare un subentro, in modo da potervi fornire la modulistica per la voltura dei servizi già attivi.",
    cliente_lei: "per i servizi già attivi a Suo nome risulta una Partita IVA diversa da quella indicata in questo nuovo modulo. Le chiediamo di comunicarci se desidera procedere con un subentro, così da poterle fornire la modulistica necessaria per volturare i servizi già esistenti.",
    cliente_tu: "per i servizi che hai già attivi risulta una Partita IVA diversa da quella indicata nel nuovo modulo. Ti chiediamo di dirci se vuoi procedere con un subentro, così da poterti fornire la modulistica necessaria per volturare i servizi già esistenti."
  },
  "Cliente già attivo: Codice Fiscale diverso rispetto a quello presente a sistema (possibile subentro).": {
    partner_lei: "per questo cliente risultano già attivi altri servizi con un Codice Fiscale diverso rispetto a quello riportato nel nuovo modulo. Le chiediamo di confermarci se il cliente intenda effettuare un subentro, così da procedere con la corretta voltura dei servizi già esistenti.",
    partner_tu: "per questo cliente ci sono altri servizi attivi con un Codice Fiscale diverso da quello indicato nel nuovo modulo. Ti chiediamo di confermarci se il cliente vuole fare un subentro, in modo da procedere con la voltura dei servizi già attivi.",
    cliente_lei: "per i servizi già attivi risulta un Codice Fiscale diverso da quello riportato nel nuovo modulo. Le chiediamo di comunicarci se desidera procedere con un subentro, così da poter aggiornare correttamente l'intestazione dei servizi esistenti.",
    cliente_tu: "per i servizi che hai già attivi risulta un Codice Fiscale diverso da quello indicato nel nuovo modulo. Ti chiediamo di dirci se vuoi procedere con un subentro, così da aggiornare correttamente l'intestazione dei servizi già esistenti."
  },
  "Cliente PA già attivo: CIG diverso rispetto a quello presente a sistema.": {
    partner_lei: "per questo cliente Pubblica Amministrazione risultano già servizi attivi con un CIG diverso rispetto a quello indicato nel nuovo modulo. Le chiediamo di confermarci se il nuovo CIG debba essere utilizzato esclusivamente per questa pratica oppure se debba essere applicato anche agli altri servizi già attivi.",
    partner_tu: "per questa PA ci sono già servizi attivi con un CIG diverso rispetto a quello riportato nel nuovo modulo. Ti chiediamo di confermarci se il nuovo CIG vale solo per questa pratica oppure anche per tutti i servizi già attivi.",
    cliente_lei: "per la Sua amministrazione risultano già servizi attivi con un CIG diverso rispetto a quello indicato nel nuovo modulo. Le chiediamo di indicarci se il nuovo CIG debba essere utilizzato solo per questa attivazione oppure anche per gli altri servizi già attivi.",
    cliente_tu: "per la tua amministrazione sono già attivi altri servizi con un CIG diverso da quello indicato nel nuovo modulo. Ti chiediamo di dirci se il nuovo CIG deve valere solo per questa pratica oppure anche per gli altri servizi già attivi."
  },
  "Richiesta nuova attivazione su indirizzo già coperto da una connettività attiva – possibile cambio tecnologia": {
    partner_lei: "dalla verifica dei dati risulta che, sull'indirizzo indicato, il cliente ha già una connettività attiva. Le chiediamo cortesemente di indicarci se l'intenzione è quella di procedere con un cambio tecnologia rispetto al servizio esistente, così da fornirLe le indicazioni corrette e procedere con l'invio della modulistica appropriata.",
    partner_tu: "dalla verifica risulta che, sull'indirizzo indicato, il cliente ha già una connettività attiva. Puoi indicarci se si tratta di un cambio tecnologia rispetto al servizio esistente? In questo modo potremo fornirti la modulistica corretta.",
    cliente_lei: "dalla verifica risulta che, sull'indirizzo indicato, ha già una connettività attiva. Le chiediamo gentilmente di indicarci se l'intenzione è quella di effettuare un cambio tecnologia rispetto al servizio esistente, così da procedere con la corretta modulistica.",
    cliente_tu: "abbiamo verificato che, sull'indirizzo indicato, hai già una connettività attiva. Puoi indicarci se desideri effettuare un cambio tecnologia rispetto al servizio esistente? In questo modo possiamo inviarti la modulistica corretta."
  },
  "Cambio tecnologia necessario – richiesta compilazione modulo dedicato": {
    partner_lei: "per procedere con il cambio tecnologia richiesto è necessario utilizzare l'apposito modulo di cambio tecnologia. Le chiediamo di compilare e reinviarci il modulo corretto così da poter avviare la lavorazione.",
    partner_tu: "per procedere con il cambio tecnologia richiesto è necessario compilare l'apposito modulo di cambio tecnologia. Ti chiediamo di inviarci il modulo corretto così da poter procedere.",
    cliente_lei: "per procedere con il cambio tecnologia richiesto è necessario utilizzare l'apposito modulo di cambio tecnologia. Le chiediamo di inviarci il modulo compilato così da poter proseguire con l'attivazione.",
    cliente_tu: "per procedere con il cambio tecnologia è necessario compilare il modulo specifico di cambio tecnologia. Ti chiediamo di reinviarci il modulo corretto così da poter procedere."
  },
  "Cambio tecnologia – disattivazione vecchia linea automatica e senza costi": {
    partner_lei: "La informiamo che, in caso di cambio tecnologia, la disattivazione della connettività precedente avviene automaticamente al momento dell'attivazione della nuova linea, senza costi aggiuntivi e senza necessità di PEC o raccomandata da parte del cliente.",
    partner_tu: "ti informiamo che, in caso di cambio tecnologia, la vecchia connettività viene disattivata automaticamente al momento dell'attivazione della nuova linea, senza costi aggiuntivi e senza necessità che il cliente invii PEC o raccomandate.",
    cliente_lei: "La informiamo che, in caso di cambio tecnologia, la precedente connettività verrà disattivata automaticamente al momento dell'attivazione della nuova linea, senza costi e senza necessità di inviare una PEC o una raccomandata.",
    cliente_tu: "ti informiamo che, in caso di cambio tecnologia, la tua precedente connettività verrà disattivata automaticamente al momento dell'attivazione della nuova linea, senza costi e senza necessità di inviare PEC o raccomandate."
  },
  "Manca il codice del servizio nella sezione 'Codice servizio'": {
    partner_lei: "nel modulo di cambio tecnologia non è stato indicato il codice del servizio nella sezione dedicata. Tale dato è indispensabile per identificare correttamente la connettività oggetto della richiesta; La invitiamo pertanto a integrarli e a reinviare il modulo aggiornato.",
    partner_tu: "nel modulo di cambio tecnologia non è stato indicato il codice del servizio nella sezione dedicata. Ti chiediamo di integrarlo e reinviare il modulo aggiornato per poter procedere.",
    cliente_lei: "nel modulo di cambio tecnologia non è stato indicato il codice del servizio nella sezione dedicata. Le chiediamo gentilmente di integrarlo e reinviarci il modulo aggiornato, così da poter procedere con la lavorazione.",
    cliente_tu: "nel modulo di cambio tecnologia non hai indicato il codice del servizio nella sezione prevista. Ti chiediamo di aggiungerlo e reinviare il modulo aggiornato."
  },
  "Manca l'indirizzo di attivazione": {
    partner_lei: "nel modulo non è stato riportato l'indirizzo di attivazione della nuova connettività. Le chiediamo di indicarlo in modo completo (via, numero civico, CAP e comune) così da poter procedere con le verifiche di copertura.",
    partner_tu: "nel modulo non è stato indicato l'indirizzo di attivazione della connettività. Ti chiediamo di inserirlo in modo completo così da poter procedere con le verifiche.",
    cliente_lei: "nel modulo non risulta indicato l'indirizzo di attivazione della nuova connettività. Le chiediamo di fornirlo in modo completo per consentirci le verifiche necessarie.",
    cliente_tu: "nel modulo non hai indicato l'indirizzo di attivazione della nuova connettività. Ti chiediamo di comunicarcelo in modo completo così da procedere."
  },
  "Indirizzo di attivazione diverso rispetto a quello della vecchia connettività": {
    partner_lei: "abbiamo rilevato che l'indirizzo di attivazione indicato nel modulo non corrisponde a quello su cui attualmente risulta attiva la connettività da sostituire. In caso di cambio tecnologia l'indirizzo deve rimanere invariato: La invitiamo a verificare e correggere il dato.",
    partner_tu: "l'indirizzo di attivazione riportato nel modulo è diverso da quello su cui è attiva la connettività attuale. Per un cambio tecnologia l'indirizzo deve coincidere: ti chiediamo di correggere il dato.",
    cliente_lei: "l'indirizzo di attivazione indicato nel modulo è diverso da quello su cui è attiva la Sua attuale connettività. Per un cambio tecnologia l'indirizzo deve essere lo stesso: Le chiediamo di verificare e rettificare il dato.",
    cliente_tu: "l'indirizzo indicato nel modulo non coincide con quello della tua connettività attuale. Per un cambio tecnologia devono combaciare: ti chiediamo di correggere."
  },
  "Manca il costo di attivazione": {
    partner_lei: "nel modulo di cambio tecnologia non è riportato il costo di attivazione previsto. Le chiediamo di integrarlo secondo il listino vigente e reinviarci il modulo aggiornato.",
    partner_tu: "nel modulo non è indicato il costo di attivazione previsto. Ti chiediamo di inserirlo secondo listino e reinviare il modulo aggiornato.",
    cliente_lei: "nel modulo non risulta indicato il costo di attivazione previsto. Le chiediamo di inserirlo e reinviare la documentazione aggiornata.",
    cliente_tu: "nel modulo non hai riportato il costo di attivazione. Ti chiediamo di inserirlo e inviare il modulo aggiornato."
  },
  "Costo di attivazione errato": {
    partner_lei: "il costo di attivazione indicato nel modulo non risulta corretto rispetto alle condizioni economiche previste. La invitiamo a verificarlo e aggiornare il modulo con l'importo corretto.",
    partner_tu: "il costo di attivazione inserito nel modulo non è corretto. Ti chiediamo di aggiornarlo in base al listino previsto.",
    cliente_lei: "l'importo inserito come costo di attivazione non è corretto. Le chiediamo di verificare e reinviarci il modulo aggiornato.",
    cliente_tu: "il costo di attivazione inserito non è corretto. Ti chiediamo di aggiornarlo e reinviare il modulo."
  },
  "Manca il canone della nuova connettività": {
    partner_lei: "nel modulo non è stato indicato il canone mensile previsto per la nuova connettività. La invitiamo a integrare il dato e reinviare il documento aggiornato.",
    partner_tu: "nel modulo non è riportato il canone della nuova connettività. Ti chiediamo di inserirlo e rinviare il modulo completo.",
    cliente_lei: "nel modulo non è indicato il canone della nuova connettività. Le chiediamo di inserirlo per poter procedere con la lavorazione.",
    cliente_tu: "nel modulo manca il canone della nuova connettività. Ti chiediamo di aggiungerlo e reinviare il modulo."
  },
  "Canone della nuova connettività errato": {
    partner_lei: "il canone mensile indicato per la nuova connettività non risulta corretto rispetto al listino vigente. La invitiamo a verificare e correggere il valore indicato.",
    partner_tu: "il canone mensile inserito nel modulo non è corretto. Ti chiediamo di aggiornarlo secondo il listino.",
    cliente_lei: "il canone mensile riportato per la nuova connettività non è corretto. Le chiediamo di verificare e reinviare il modulo aggiornato.",
    cliente_tu: "il canone indicato non è corretto. Ti chiediamo di aggiornarlo e reinviare il modulo."
  },
  "Mancano una o più firme sul modulo di cambio tecnologia": {
    partner_lei: "il modulo di cambio tecnologia risulta privo di una o più firme obbligatorie. Per poter procedere è necessario che venga firmato in tutte le sezioni previste.",
    partner_tu: "nel modulo mancano una o più firme obbligatorie. Ti chiediamo di completare tutte le firme richieste e reinviare il documento.",
    cliente_lei: "nel modulo mancano una o più firme obbligatorie. Le chiediamo di completarle per consentirci di procedere.",
    cliente_tu: "sono presenti firme mancanti nel modulo. Ti chiediamo di completarle e rinviare il documento."
  },
  "Mancano i timbri richiesti": {
    partner_lei: "il modulo di cambio tecnologia non presenta i timbri richiesti. Le chiediamo di apporli e di reinviare il documento aggiornato.",
    partner_tu: "il modulo non presenta i timbri aziendali richiesti. Ti chiediamo di inserirli e reinviare il modulo.",
    cliente_lei: "il modulo non presenta i timbri richiesti. Le chiediamo di apporli e inviarci nuovamente il documento.",
    cliente_tu: "nel modulo mancano i timbri richiesti. Ti chiediamo di inserirli e rinviare il modulo."
  },
  "Uso scorretto del modulo di cambio tecnologia per semplice variazione di servizio": {
    partner_lei: "dalla documentazione risulta che la richiesta non configura un cambio tecnologia, ma una semplice variazione del servizio attivo. In questi casi deve essere utilizzato il modulo di variazione: La invitiamo a compilare il documento corretto.",
    partner_tu: "la richiesta non è un cambio tecnologia ma una variazione di servizio: occorre utilizzare il modulo di variazione. Ti chiediamo di compilare il modulo corretto.",
    cliente_lei: "la richiesta non risulta essere un cambio tecnologia, ma una variazione del servizio esistente. In questi casi è necessario utilizzare il modulo di variazione: Le chiediamo di inviarci quello corretto.",
    cliente_tu: "la richiesta non è un cambio tecnologia ma una variazione del servizio: devi usare il modulo di variazione. Ti chiediamo di inviarci quello corretto."
  },
  "Uso del modulo di cambio tecnologia per nuova attivazione aggiuntiva": {
    partner_lei: "la richiesta riportata non è un cambio tecnologia, bensì una nuova attivazione aggiuntiva. In questi casi la vecchia connettività rimane attiva e dovrà essere disdetta con procedura ordinaria (PEC o raccomandata). La invitiamo a utilizzare il modulo corretto per l'attivazione.",
    partner_tu: "la richiesta non è un cambio tecnologia ma una nuova attivazione aggiuntiva. In questo caso la vecchia linea rimane attiva e va disdetta con procedura ordinaria. Ti chiediamo di utilizzare la modulistica corretta.",
    cliente_lei: "la richiesta risulta essere una nuova attivazione aggiuntiva e non un cambio tecnologia. La vecchia connettività rimarrà attiva finché non verrà disdetta tramite PEC o raccomandata. Le chiediamo di utilizzare il modulo corretto.",
    cliente_tu: "la richiesta è una nuova attivazione, non un cambio tecnologia. La vecchia linea rimarrà attiva finché non viene disdetta con procedura ordinaria. Ti chiediamo di usare il modulo corretto."
  },
  "Mancata integrazione dopo nostra richiesta: annullamento della pratica": {
    partner_lei: "nonostante la nostra precedente richiesta di integrazione, non abbiamo ancora ricevuto la documentazione corretta per procedere con la pratica. Trattandosi di una richiesta pendente da diverse settimane, La informiamo che a fine mese procederemo ad annullare il modulo e a inviare comunicazione tramite PEC al cliente.",
    partner_tu: "nonostante la nostra precedente richiesta di integrazione, non abbiamo ancora ricevuto la documentazione necessaria per procedere. Poiché la pratica è ferma da diverse settimane, ti informiamo che a fine mese provvederemo ad annullare il modulo e ad avvisare il cliente tramite PEC.",
    cliente_lei: "nonostante la precedente richiesta di integrazione, non abbiamo ancora ricevuto la documentazione corretta per proseguire con la Sua pratica. Trattandosi di una richiesta pendente da diverse settimane, La informiamo che a fine mese procederemo con l'annullamento del modulo e con l'invio di comunicazione tramite PEC.",
    cliente_tu: "nonostante la precedente richiesta di integrazione, non abbiamo ancora ricevuto la documentazione necessaria per proseguire con la tua pratica. Poiché la richiesta è pendente da diverse settimane, ti informiamo che a fine mese annulleremo il modulo e invieremo comunicazione tramite PEC."
  },
  "Annullamento pratica per mancata integrazione: invio PEC al cliente": {
    partner_lei: "La informiamo che, in caso di annullamento della pratica per mancata integrazione, provvederemo a inviare apposita comunicazione tramite PEC al cliente, come previsto dalle procedure interne.",
    partner_tu: "ti informiamo che, in caso di annullamento della pratica per mancata integrazione, invieremo comunicazione tramite PEC al cliente secondo procedura.",
    cliente_lei: "La informiamo che, in caso di annullamento della pratica per mancata integrazione, riceverà apposita comunicazione tramite PEC secondo le procedure previste.",
    cliente_tu: "ti informiamo che, in caso di annullamento della pratica per mancata integrazione, riceverai una comunicazione tramite PEC come previsto dalla procedura."
  },
  "Necessità di inviare mail al partner per avvisare dell'annullamento del modulo": {
    partner_lei: "La informiamo che, non avendo ricevuto la documentazione richiesta nei tempi previsti, provvederemo ad annullare la pratica a fine mese. Con la presente desideriamo anticiparLe tale informazione per evitare eventuali disguidi.",
    partner_tu: "ti informiamo che, non avendo ricevuto la documentazione richiesta nei tempi previsti, annulleremo la pratica a fine mese. Ti inviamo questa comunicazione per avvisarti preventivamente.",
    cliente_lei: "La informiamo che la pratica sarà annullata a fine mese a seguito della mancata ricezione della documentazione richiesta nei tempi previsti.",
    cliente_tu: "ti informiamo che la tua pratica sarà annullata a fine mese, non avendo ricevuto nei tempi previsti la documentazione richiesta."
  },
  "Partner sospeso – gestione interna, nessuna azione richiesta": {
    partner_lei: "La informiamo che il partner risulta attualmente sospeso, ma questo non è bloccante per l'invio dei contratti. La gestione di tali casi è completamente interna, pertanto non è necessaria alcuna integrazione da parte Sua.",
    partner_tu: "ti informiamo che il partner risulta sospeso, ma questo non impedisce l'invio dei contratti. La gestione di questi casi è interna e non sono richieste azioni da parte tua.",
    cliente_lei: "La informiamo che il partner risulta attualmente sospeso. La gestione di questa situazione è completamente interna e non richiede ulteriori azioni da parte Sua.",
    cliente_tu: "ti informiamo che il partner risulta sospeso. La gestione è interna e non richiede ulteriori azioni da parte tua."
  },
  "Partner cessato o in blacklist – gestione da parte del reparto commerciale": {
    partner_lei: "dalle nostre verifiche risulta che il partner è cessato o inserito in blacklist. In questi casi la gestione è in carico al reparto commerciale, che prenderà contatto diretto per la valutazione della pratica.",
    partner_tu: "il partner risulta cessato o in blacklist. La gestione passa al reparto commerciale, che si occuperà di valutare la pratica.",
    cliente_lei: "il partner risulta cessato o in blacklist. La gestione della pratica è affidata al reparto commerciale, che prenderà accordi per la corretta valutazione.",
    cliente_tu: "il partner risulta cessato o in blacklist. Il reparto commerciale si occuperà della pratica."
  },
  "Partner non attivo – gestione interna senza notifica al partner": {
    partner_lei: "il partner risulta non attivo. In questi casi la gestione della pratica è completamente interna e non è necessario inviare comunicazioni al partner.",
    partner_tu: "il partner risulta non attivo. La gestione rimane interna e non serve inviare comunicazioni al partner.",
    cliente_lei: "il partner risulta non attivo. La gestione della pratica è interna e non richiede ulteriori passaggi da parte Sua.",
    cliente_tu: "il partner risulta non attivo. La gestione è interna e non richiede azioni da parte tua."
  },
  "Contratto inviato dal partner per sé stesso senza rispetto dei costi minimi di listino": {
    partner_lei: "dal contratto risulta che l'offerta è stata compilata per la Sua stessa azienda, ma i costi indicati non rispettano il listino minimo previsto. La invitiamo ad aggiornare i prezzi applicando i valori minimi stabiliti, così da consentirci di procedere con la corretta vidimazione.",
    partner_tu: "dal contratto risulta che l'offerta è stata compilata per la tua stessa azienda, ma i costi non rispettano il listino minimo previsto. Ti chiediamo di aggiornare i prezzi secondo i minimi stabiliti, così da poter procedere.",
    cliente_lei: "dal contratto risulta che l'offerta è stata predisposta dal partner per la propria azienda, ma i costi applicati non rispettano il listino minimo previsto. Sarà necessario aggiornare i prezzi prima di procedere con la lavorazione.",
    cliente_tu: "il contratto è stato predisposto dal partner per sé stesso, ma i costi applicati non rispettano il listino minimo previsto. È necessario aggiornare i prezzi prima di poter procedere."
  },
  "La fattura non è recente (serve fattura emessa negli ultimi 6 mesi)": {
    partner_lei: "la fattura inviata risulta essere più datata di sei mesi, le chiediamo cortesemente di inoltrarcene una più recente.",
    partner_tu: "la fattura inviata risulta essere più datata di sei mesi, ti chiediamo cortesemente di inoltrarcene una più recente.",
    cliente_lei: "la fattura inviata risulta essere più datata di sei mesi, le chiediamo cortesemente di inoltrarcene una più recente.",
    cliente_tu: "la fattura inviata risulta essere più datata di sei mesi, le chiediamo cortesemente di inoltrarcene una più recente."
  },
  "Manca il contratto allegato sulla pratica": {
    partner_lei: "il modulo pdf firmato dal cliente risulta mancante. Le chiediamo cortesemente di reinoltrarcelo.",
    partner_tu: "il modulo pdf firmato dal cliente risulta mancante. Ti chiediamo cortesemente di reinoltrarcelo.",
    cliente_lei: "il modulo pdf firmato risulta mancante. Le chiediamo cortesemente di reinoltrarcelo.",
    cliente_tu: "il modulo pdf firmato risulta mancante. Ti chiediamo cortesemente di reinoltrarcelo."
  },
  "Manca il contratto allegato sulla pratica": {
    partner_lei: "il modulo firmato dal cliente non risulta essere stato allegato alla pratica, le chiediamo dunque cortesemente di rimandarci il PDF firmato.",
    partner_tu: "il modulo firmato dal cliente non risulta essere stato allegato alla pratica, ti chiediamo dunque cortesemente di rimandarci il PDF firmato.",
    cliente_lei: "non ci risulta allegato il contratto firmato, le chiediamo cortesemente di reinoltrarcelo per poter procedere correttamente con la lavorazione.",
    cliente_tu: "non ci risulta allegato il contratto firmato, ti chiediamo cortesemente di reinoltrarcelo per poter procedere correttamente con la lavorazione."
  },
  "Mancanza della fattura dell'operatore attuale in caso di richiesta di portabilità.": {
    partner_lei: "per la richiesta di portabilità non è stata allegata la fattura dell'attuale operatore. Tale documento è obbligatorio per verificare la correttezza dei dati e procedere con la migrazione della numerazione.",
    partner_tu: "per la richiesta di portabilità non è stata allegata la fattura dell'attuale operatore. Il documento è obbligatorio per verificare i dati e procedere con la migrazione.",
    cliente_lei: "per la richiesta di portabilità non è stata allegata la fattura dell'attuale operatore. È necessaria per poter verificare i dati e procedere con la migrazione.",
    cliente_tu: "per la richiesta di portabilità non è stata allegata la fattura dell'attuale operatore. È necessaria per verificare i dati e procedere con la migrazione."
  },
  "Nella fattura allegata non è riportata la numerazione da portare.": {
    partner_lei: "nella fattura allegata non è riportata la numerazione da portare. Abbiamo bisogno di una fattura recente (ultimi sei mesi) con numerazione e codice di migrazione visibili, oppure screenshot del portale del fornitore/PEC/autodichiarazione con gli stessi dati.",
    partner_tu: "nella fattura allegata non è riportata la numerazione da portare. Serve una fattura recente con numerazione e codice di migrazione, oppure screenshot del portale del fornitore/PEC/autodichiarazione che riportino tali dati.",
    cliente_lei: "nella fattura inviata non è presente la numerazione da portare. È necessario inviare una fattura recente con numerazione e codice di migrazione visibili, oppure screenshot del portale del fornitore/PEC/autodichiarazione con gli stessi dati.",
    cliente_tu: "nella fattura che ci hai inviato non c'è la numerazione da portare. Inviaci una fattura recente con numerazione e codice di migrazione, oppure screenshot del portale del fornitore/PEC/autodichiarazione contenente questi dati."
  },
  "Nella fattura allegata non è riportato il codice di migrazione.": {
    partner_lei: "nella fattura allegata non è riportato il codice di migrazione. Abbiamo bisogno di una fattura recente con codice di migrazione visibile, oppure screenshot del fornitore/PEC/autodichiarazione con gli stessi dati.",
    partner_tu: "nella fattura allegata non è riportato il codice di migrazione. Serve una fattura recente con il codice visibile, oppure screenshot del fornitore/PEC/autodichiarazione con tali dati.",
    cliente_lei: "nella fattura inviata non è presente il codice di migrazione. È necessario inviare una fattura recente con il codice visibile, oppure screenshot del fornitore/PEC/autodichiarazione con gli stessi dati.",
    cliente_tu: "nella fattura che ci hai inviato non c'è il codice di migrazione. Inviaci una fattura recente con il codice visibile, oppure screenshot del fornitore/PEC/autodichiarazione contenente questo dato."
  },
  "La fattura allegata non è completa di tutte le pagine.": {
    partner_lei: "la fattura allegata non risulta essere completa di tutte le pagine. Per poter procedere avremmo necessità di ricevere una copia completa.",
    partner_tu: "la fattura allegata non risulta essere completa di tutte le pagine. Per poter procedere avremmo necessità di ricevere una copia completa.",
    cliente_lei: "la fattura allegata non risulta essere completa di tutte le pagine. Per poter procedere avremmo necessità di ricevere una copia completa.",
    cliente_tu: "la fattura allegata non risulta essere completa di tutte le pagine. Per poter procedere avremmo necessità di ricevere una copia completa."
  },
  "La fattura non è recente (serve fattura emessa negli ultimi 6 mesi).": {
    partner_lei: "la fattura allegata risulta più datata di 6 mesi. Per poter processare la portabilità avremmo necessità di ricevere un documento aggiornato e recente almeno 6 mesi.",
    partner_tu: "la fattura allegata risulta più datata di 6 mesi. Per poter processare la portabilità avremmo necessità di ricevere un documento aggiornato e recente almeno 6 mesi.",
    cliente_lei: "la fattura allegata risulta più datata di 6 mesi. Per poter processare la portabilità avremmo necessità di ricevere un documento aggiornato e recente almeno 6 mesi.",
    cliente_tu: "la fattura allegata risulta più datata di 6 mesi. Per poter processare la portabilità avremmo necessità di ricevere un documento aggiornato e recente almeno 6 mesi."
  },
  "La fattura è intestata ad una partita IVA diversa rispetto a quella del modulo di attivazione (necessario modulo di subentro contestuale).": {
    partner_lei: "da un controllo della fattura risulta che sia intestata ad un'altra partita IVA. Sarà dunque necessario inviare un modulo di subentro contestuale, firmato e timbrato dal cedente della numerazione.",
    partner_tu: "da un controllo della fattura risulta che sia intestata ad un'altra partita IVA. Sarà dunque necessario inviare un modulo di subentro contestuale, firmato e timbrato dal cedente della numerazione.",
    cliente_lei: "da un controllo della fattura risulta che sia intestata ad un'altra partita IVA. Sarà dunque necessario inviare un modulo di subentro contestuale, firmato e timbrato dal cedente della numerazione.",
    cliente_tu: "da un controllo della fattura risulta che sia intestata ad un'altra partita IVA. Sarà dunque necessario inviare un modulo di subentro contestuale, firmato e timbrato dal cedente della numerazione."
  },
  "Il codice di migrazione riportato in fattura non è corretto o coerente con la numerazione indicata.": {
    partner_lei: "da un controllo del codice di migrazione risulta che quest'ultimo non sia corretto o coerente con la numerazione. La invitiamo dunque ad inviarci un'altra copia della fattura o a richiedere al fornitore il codice di migrazione corretto.",
    partner_tu: "da un controllo del codice di migrazione risulta che quest'ultimo non sia corretto o coerente con la numerazione. Ti chiediamo dunque di inviarci un'altra copia della fattura o a richiedere al fornitore il codice di migrazione corretto.",
    cliente_lei: "da un controllo del codice di migrazione risulta che quest'ultimo non sia corretto o coerente con la numerazione. La invitiamo dunque ad inviarci un'altra copia della fattura o a richiedere al fornitore il codice di migrazione corretto.",
    cliente_tu: "da un controllo del codice di migrazione risulta che quest'ultimo non sia corretto o coerente con la numerazione. Ti chiediamo dunque di inviarci un'altra copia della fattura o a richiedere al fornitore il codice di migrazione corretto."
  },
  "Mancanza del codice fiscale del nuovo intestatario.": {
    partner_lei: "nel modulo non è presente il codice fiscale del nuovo intestatario. È necessario inserirlo per procedere correttamente con la pratica.",
    partner_tu: "nel modulo manca il codice fiscale del nuovo intestatario. Serve inserirlo per poter procedere con la pratica.",
    cliente_lei: "nel modulo non è stato indicato il codice fiscale del nuovo intestatario. La preghiamo di comunicarlo per poter procedere.",
    cliente_tu: "nel modulo manca il codice fiscale del nuovo intestatario. Ti chiediamo di inviarlo così possiamo procedere."
  },
  "Mancanza della partita IVA del nuovo intestatario (se soggetto IVA).": {
    partner_lei: "nel modulo non è indicata la partita IVA del nuovo intestatario. Se è un soggetto IVA, è necessario inserirla per procedere con la pratica.",
    partner_tu: "nel modulo manca la partita IVA del nuovo intestatario. Se è un soggetto IVA, va inserita per poter procedere.",
    cliente_lei: "nel modulo non è stata indicata la partita IVA del nuovo intestatario. Se è un soggetto IVA, la invitiamo a comunicarla per procedere.",
    cliente_tu: "nel modulo manca la partita IVA del nuovo intestatario. Se è un soggetto IVA, ti chiediamo di inviarla così possiamo procedere."
  },
  "Mancanza della mail amministrativa del nuovo intestatario.": {
    partner_lei: "nel modulo non è indicata la mail amministrativa del nuovo intestatario. È necessario inserirla per procedere con la pratica.",
    partner_tu: "nel modulo manca la mail amministrativa del nuovo intestatario. Serve inserirla per poter procedere.",
    cliente_lei: "nel modulo non è stata indicata la mail amministrativa del nuovo intestatario. La invitiamo a comunicarla per poter procedere.",
    cliente_tu: "nel modulo manca la mail amministrativa del nuovo intestatario. Ti chiediamo di inviarla così possiamo procedere."
  },
  "Mancanza di altri dati obbligatori (indirizzo, telefono, referenti) previsti dal modulo di subentro.": {
    partner_lei: "nel modulo di subentro mancano alcuni dati obbligatori (indirizzo, telefono, referenti). È necessario integrarli per procedere con la pratica.",
    partner_tu: "nel modulo di subentro mancano alcuni dati obbligatori (indirizzo, telefono, referenti). Serve integrarli per poter procedere.",
    cliente_lei: "nel modulo di subentro non sono stati indicati tutti i dati obbligatori (indirizzo, telefono, referenti). La preghiamo di integrarli per procedere.",
    cliente_tu: "nel modulo di subentro mancano alcuni dati obbligatori (indirizzo, telefono, referenti). Ti chiediamo di completarli così possiamo procedere."
  },
  "Nel modulo di subentro non sono stati compilati tutti i dati obbligatori nella sezione 'Dati cliente'.": {
    partner_lei: "nel modulo di subentro non risultano compilati tutti i dati obbligatori nella sezione 'Dati cliente'. È necessario integrare le informazioni mancanti per procedere.",
    partner_tu: "nel modulo di subentro non hai compilato tutti i dati obbligatori nella sezione 'Dati cliente'. Serve integrare le informazioni mancanti per poter procedere.",
    cliente_lei: "nel modulo di subentro non sono stati inseriti tutti i dati obbligatori nella sezione 'Dati cliente'. La preghiamo di integrare le informazioni mancanti per procedere.",
    cliente_tu: "nel modulo di subentro mancano alcuni dati obbligatori nella sezione 'Dati cliente'. Ti chiediamo di integrarli per poter procedere."
  },
  "Canoni riportati nel modulo di subentro non corretti rispetto alla fattura del cedente.": {
    partner_lei: "i canoni indicati nel modulo di subentro non coincidono con quelli presenti nella fattura del cedente. È necessario correggerli per procedere con la pratica.",
    partner_tu: "i canoni riportati nel modulo di subentro non corrispondono alla fattura del cedente. Serve allinearli per poter procedere.",
    cliente_lei: "i canoni inseriti nel modulo di subentro non risultano corretti rispetto alla fattura del cedente. La invitiamo ad aggiornarli per procedere.",
    cliente_tu: "i canoni indicati nel modulo di subentro non sono corretti rispetto alla fattura del cedente. Ti chiediamo di aggiornarli così possiamo procedere."
  },
  "Mancanza del codice connettività per uno o più servizi da volturare.": {
    partner_lei: "manca il codice connettività per uno o più servizi da volturare. È necessario indicarlo per procedere con la pratica.",
    partner_tu: "manca il codice connettività per uno o più servizi da volturare. Serve inserirlo per poter procedere.",
    cliente_lei: "non è stato indicato il codice connettività per uno o più servizi da volturare. La invitiamo a fornirlo per procedere. Potrà visionarlo in fattura.",
    cliente_tu: "manca il codice connettività per uno o più servizi da volturare. Ti chiediamo di inviarlo così possiamo procedere. Potrai visionarlo in fattura"
  },
  "Mancanza della numerazione per uno o più servizi voce da volturare.": {
    partner_lei: "manca la numerazione per uno o più servizi voce da volturare. È necessario indicarla per procedere con la pratica.",
    partner_tu: "manca la numerazione per uno o più servizi voce da volturare. Serve inserirla per poter procedere.",
    cliente_lei: "non è stata indicata la numerazione per uno o più servizi voce da volturare. La invitiamo a fornirla per procedere.",
    cliente_tu: "manca la numerazione per uno o più servizi voce da volturare. Ti chiediamo di inviarla così possiamo procedere."
  },
  "Non sono riportati tutti i servizi attivi del cliente; da verificare se i servizi non indicati devono rimanere attivi al cedente.": {
    partner_lei: "nel modulo non sono riportati tutti i servizi attivi. Chiediamo conferma se quelli mancanti devono restare al cedente.",
    partner_tu: "nel modulo non sono indicati tutti i servizi attivi. Serve confermare se quelli mancanti devono rimanere al cedente.",
    cliente_lei: "non risultano indicati tutti i servizi attivi. La preghiamo di confermare se quelli mancanti devono restare al cedente.",
    cliente_tu: "non hai indicato tutti i servizi attivi. Puoi confermare se quelli mancanti devono restare al cedente?"
  },
  "Mancanza dicitura 'Together' sul modulo, pur in presenza di listino Together sul cliente.": {
    partner_lei: "nel modulo non è presente la dicitura 'Together', necessaria in quanto il cliente risulta attivo con listino Together. Chiediamo di aggiornarla.",
    partner_tu: "nel modulo manca la dicitura 'Together', richiesta perché il cliente ha listino Together. Serve aggiornarla.",
    cliente_lei: "nel modulo non risulta indicata la dicitura 'Together', richiesta poiché il suo contratto prevede il listino Together. La invitiamo ad aggiornarla.",
    cliente_tu: "nel modulo manca la dicitura 'Together', necessaria perché hai un listino Together attivo. Ti chiediamo di aggiornarla"
  },
  "Mancanza dicitura 'SWP' quando presente sulla fattura del cedente.": {
    partner_lei: "nel modulo non è indicata la dicitura 'SWP', presente invece nella fattura del cedente. È necessario aggiornarla per procedere.",
    partner_tu: "nel modulo manca la dicitura 'SWP', riportata nella fattura del cedente. Serve aggiornarla per poter procedere.",
    cliente_lei: "nel modulo non è stata inserita la dicitura 'SWP', presente nella fattura del cedente. La invitiamo ad aggiornarla per procedere.",
    cliente_tu: "nel modulo manca la dicitura 'SWP', che risulta nella fattura del cedente. Ti chiediamo di aggiornarla così possiamo procedere."
  },
  "Mancanza dicitura 'Office Elite' quando è presente un prezzo maggiorato sulla fattura del cedente.": {
    partner_lei: "nel modulo non è indicata la dicitura 'Office Elite', necessaria poiché sulla fattura del cedente è presente un prezzo maggiorato. Chiediamo di aggiornarla.",
    partner_tu: "nel modulo manca la dicitura 'Office Elite', richiesta perché in fattura del cedente risulta un prezzo maggiorato. Serve aggiornarla.",
    cliente_lei: "nel modulo non è riportata la dicitura 'Office Elite', necessaria poiché la fattura del cedente evidenzia un prezzo maggiorato. La invitiamo ad aggiornarla.",
    cliente_tu: "nel modulo manca la dicitura 'Office Elite', necessaria perché in fattura del cedente c'è un prezzo maggiorato. Ti chiediamo di aggiornarla."
  },
  "Occorre inviare una mail per informare dell'annullamento del modulo per mancata integrazione.": {
    partner_lei: "la informiamo che il modulo è stato annullato per mancata integrazione della documentazione richiesta.",
    partner_tu: "ti informiamo che il modulo è stato annullato per mancata integrazione della documentazione richiesta.",
    cliente_lei: "la informiamo che il modulo è stato annullato per mancata integrazione della documentazione richiesta.",
    cliente_tu: "ti informiamo che il modulo è stato annullato per mancata integrazione della documentazione richiesta."
  },
  "Dopo una richiesta di integrazione, se entro circa tre settimane non perviene la documentazione corretta, a fine mese la pratica viene annullata.": {
    partner_lei: "non abbiamo ancora ricevuto la documentazione richiesta. In assenza di integrazioni entro tre settimane, la pratica verrà annullata a fine mese.",
    partner_tu: "non abbiamo ancora ricevuto la documentazione richiesta. Se non arriva entro tre settimane, la pratica sarà annullata a fine mese.",
    cliente_lei: "non abbiamo ancora ricevuto la documentazione richiesta. In mancanza di integrazioni entro tre settimane, la pratica verrà annullata a fine mese.",
    cliente_tu: "non abbiamo ancora ricevuto la documentazione richiesta. Se non la invii entro tre settimane, la pratica verrà annullata a fine mese."
  },
  "In caso di annullamento per mancata integrazione viene inviata una comunicazione PEC al cliente.": {
    partner_lei: "in caso di annullamento per mancata integrazione, al cliente verrà inviata una comunicazione PEC. Si prega di completare la documentazione per evitarlo.",
    partner_tu: "se la pratica viene annullata per mancata integrazione, al cliente sarà inviata una PEC. Completa la documentazione per evitarlo.",
    cliente_lei: "in caso di annullamento per mancata integrazione, riceverà una comunicazione PEC. La invitiamo a inviare la documentazione richiesta per evitarlo.",
    cliente_tu: "se la pratica viene annullata per mancata integrazione, ti arriverà una PEC. Inviaci la documentazione richiesta così evitiamo l'annullamento."
  },
  "Contratto inviato dal partner per sé stesso senza rispetto dei costi minimi di listino (autocontrattualizzazione): necessario richiedere l'adeguamento ai minimi previsti.": {
    partner_lei: "trattandosi di un attivazione richiesta per voi stessi è necessario inserire nel contratto i costi minimi dei servizi. Le chiediamo cortesemente di correggere il modulo e di rimandarcelo.",
    partner_tu: "trattandosi di un attivazione richiesta per voi stessi è necessario inserire nel contratto i costi minimi dei servizi. Ti chiediamo cortesemente di correggere il modulo e di rimandarcelo.",
    cliente_lei: "trattandosi di un attivazione richiesta per voi stessi è necessario inserire nel contratto i costi minimi dei servizi. Le chiediamo cortesemente di correggere il modulo e di rimandarcelo.",
    cliente_tu: "trattandosi di un attivazione richiesta per voi stessi è necessario inserire nel contratto i costi minimi dei servizi. Ti chiediamo cortesemente di correggere il modulo e di rimandarcelo."
  },
  "Codice di migrazione mancante nel modulo di portabilità.": {
    partner_lei: "nel modulo di portabilità non è indicato il codice di migrazione. È necessario inserirlo per procedere.",
    partner_tu: "nel modulo di portabilità manca il codice di migrazione. Serve inserirlo per poter procedere.",
    cliente_lei: "nel modulo di portabilità non è stato indicato il codice di migrazione. La invitiamo a comunicarlo per procedere.",
    cliente_tu: "nel modulo di portabilità manca il codice di migrazione. Ti chiediamo di inviarlo così possiamo procedere."
  },
  "Codice di migrazione errato.": {
    partner_lei: "da un controllo risulta che il codice di migrazione fornitoci non sia corretto. Le chiediamo cortesemente di inviarci una fattura più recente o di interfacciarsi con l'operatore di provenienza per richiedere il dato corretto.",
    partner_tu: "da un controllo risulta che il codice di migrazione fornitoci non sia corretto. Ti chiediamo cortesemente di inviarci una fattura più recente o di interfacciarti con l'operatore di provenienza per richiedere il dato corretto.",
    cliente_lei: "da un controllo risulta che il codice di migrazione fornitoci non sia corretto. Ti chiediamo cortesemente di inviarci una fattura più recente o di interfacciarti con l'operatore di provenienza per richiedere il dato corretto.",
    cliente_tu: "da un controllo risulta che il codice di migrazione fornitoci non sia corretto. Le chiediamo cortesemente di inviarci una fattura più recente o di interfacciarsi con l'operatore di provenienza per richiedere il dato corretto."
  },
  "Prefisso della numerazione non coerente con il comune dell'indirizzo di attivazione.": {
    partner_lei: "il prefisso della numerazione non risulta coerente con il comune indicato per l'attivazione. È necessario verificare e correggere il dato.",
    partner_tu: "il prefisso della numerazione non è coerente con il comune di attivazione. Serve verificarlo e aggiornarlo.",
    cliente_lei: "il prefisso della numerazione non risulta coerente con il comune indicato per l'attivazione. La invitiamo a verificare e comunicare il dato corretto.",
    cliente_tu: "il prefisso della numerazione non è coerente con il comune di attivazione. Puoi verificarlo e mandarci quello corretto?"
  },
  "Presenza di una connettività associata alla numerazione da portare, che potrebbe decadere con la portabilità.": {
    partner_lei: "la numerazione da portare risulta associata a una connettività che potrebbe decadere con la portabilità. Chiediamo conferma per procedere correttamente.",
    partner_tu: "la numerazione da portare è associata a una connettività che potrebbe decadere con la portabilità. Serve una conferma per procedere.",
    cliente_lei: "la numerazione che intende portare risulta associata a una connettività che potrebbe decadere con la portabilità. La invitiamo a confermare come procedere.",
    cliente_tu: "la numerazione che vuoi portare è legata a una connettività che potrebbe decadere con la portabilità. Puoi confermarci come procedere?"
  },
  "Numerazione ISDN multinumero: il cliente deve indicare se intende perdere la numerazione associata o portarla anch'essa.": {
    partner_lei: "la numerazione è ISDN multinumero. Chiediamo di indicare se la numerazione associata deve essere persa o portata anch'essa.",
    partner_tu: "la numerazione è ISDN multinumero. Serve indicare se la numerazione associata va persa o portata anch'essa.",
    cliente_lei: "la numerazione è ISDN multinumero. La invitiamo a indicare se desidera perdere la numerazione associata o portarla anch'essa.",
    cliente_tu: "la numerazione è ISDN multinumero. Puoi indicarci se vuoi perdere la numerazione associata o portarla anch'essa?"
  },
  "Codice fiscale incompleto.": {
    partner_lei: "da un controllo il codice fiscale risulta non completo di tutti i caratteri. Le chiediamo gentilmente di indicarci un codice fiscale completo e corretto per poter procedere.",
    partner_tu: "da un controllo il codice fiscale risulta non completo di tutti i caratteri. Ti chiediamo gentilmente di indicarci un codice fiscale completo e corretto per poter procedere.",
    cliente_lei: "da un controllo il codice fiscale risulta non completo di tutti i caratteri. Le chiediamo gentilmente di indicarci un codice fiscale completo e corretto per poter procedere.",
    cliente_tu: "da un controllo il codice fiscale risulta non completo di tutti i caratteri. Ti chiediamo gentilmente di indicarci un codice fiscale completo e corretto per poter procedere."
  },
  "Manca il contratto allegato sulla pratica.": {
    partner_lei: "non risulta allegato il contratto alla pratica. È necessario inviarlo per procedere.",
    partner_tu: "non risulta allegato il contratto alla pratica. È necessario inviarlo per procedere.",
    cliente_lei: "non risulta esserci stato inoltrato il contratto firmato. Le chiediamo cortesemente di inoltrarcelo per poter procedere.",
    cliente_tu: "non risulta esserci stato inoltrato il contratto firmato. Ti chiediamo cortesemente di inoltrarcelo per poter procedere."
  },
  "Il contratto allegato manca di una o più pagine.": {
    partner_lei: "il contratto allegato risulta incompleto di una o più pagine. È necessario inviare la copia integrale per procedere.",
    partner_tu: "il contratto allegato manca di una o più pagine. Serve inviare la copia completa per poter procedere.",
    cliente_lei: "il contratto inviato risulta mancante di una o più pagine. La invitiamo a trasmettere la copia integrale per procedere.",
    cliente_tu: "il contratto che ci hai inviato manca di una o più pagine. Puoi inviarci la versione completa così possiamo procedere?"
  },
  "Manca una delle firme previste nella sezione 'Dichiarazioni e firme'.": {
    partner_lei: "nel contratto manca una delle firme previste nella sezione 'Dichiarazioni e firme'. È necessario integrare per procedere.",
    partner_tu: "nel contratto manca una delle firme richieste nella sezione 'Dichiarazioni e firme'. Serve integrarla per poter procedere.",
    cliente_lei: "nel contratto non risulta una delle firme previste nella sezione 'Dichiarazioni e firme'. La invitiamo a integrare per procedere.",
    cliente_tu: "nel contratto manca una delle firme previste nella sezione 'Dichiarazioni e firme'. Puoi aggiungerla così possiamo procedere?"
  },
  "Manca una delle firme previste nella sezione 'Consenso al trattamento dei dati personali'.": {
    partner_lei: "nel contratto manca una delle firme previste nella sezione 'Consenso al trattamento dei dati personali'. È necessario integrarla per procedere.",
    partner_tu: "nel contratto manca una delle firme nella sezione 'Consenso al trattamento dei dati personali'. Serve integrarla per poter procedere.",
    cliente_lei: "nel contratto non risulta una delle firme previste nella sezione 'Consenso al trattamento dei dati personali'. La invitiamo a integrarla per poter procedere.",
    cliente_tu: "nel contratto manca una delle firme nella sezione 'Consenso al trattamento dei dati personali'. Puoi aggiungerla così possiamo procedere?"
  },
  "Manca la firma nella sezione 'Allegato 4' quando prevista.": {
    partner_lei: "nel contratto manca la firma prevista nella sezione 'Allegato 4'. È necessario integrarla per procedere.",
    partner_tu: "nel contratto manca la firma richiesta nella sezione 'Allegato 4'. Serve integrarla per poter procedere.",
    cliente_lei: "nel contratto non risulta la firma prevista nella sezione 'Allegato 4'. La invitiamo a integrarla per procedere.",
    cliente_tu: "nel contratto manca la firma nella sezione 'Allegato 4'. Puoi aggiungerla così possiamo procedere?"
  },
  "Manca almeno un timbro dell'azienda sul contratto/modulo.": {
    partner_lei: "nel modulo manca almeno un timbro dell'azienda. È necessario integrarlo per procedere. In alternativa le chiediamo cortesemente di rimandarci il contratto con copia conoscenza del cliente.",
    partner_tu: "nel modulo manca almeno un timbro dell'azienda. È necessario integrarlo per procedere. In alternativa ti chiediamo cortesemente di rimandarci il contratto con copia conoscenza del cliente.",
    cliente_lei: "no",
    cliente_tu: "no"
  },
  "Modulo cartaceo ancora in formato editabile (non consentito).": {
    partner_lei: "il modulo è stato inviato in formato editabile. Per poter procedere avremmo bisogno di riceverlo in formato non editabile.",
    partner_tu: "il modulo è stato inviato in formato editabile. Per poter procedere avremmo bisogno di riceverlo in formato non editabile.",
    cliente_lei: "il modulo è stato inviato in formato editabile. Per poter procedere avremmo bisogno di riceverlo in formato non editabile.",
    cliente_tu: "il modulo è stato inviato in formato editabile. Per poter procedere avremmo bisogno di riceverlo in formato non editabile."
  },
  "Nel contratto di manutenzione manca il canone mensile.": {
    partner_lei: "nel contratto di manutenzione non è indicato il canone mensile. È necessario inserirlo per procedere.",
    partner_tu: "nel contratto di manutenzione non è indicato il canone mensile. È necessario inserirlo per procedere.",
    cliente_lei: "nel contratto di manutenzione non è indicato il canone mensile. È necessario inserirlo per procedere.",
    cliente_tu: "nel contratto di manutenzione non è indicato il canone mensile. È necessario inserirlo per procedere."
  },
  "Applicazione contemporanea di Together e Office Elite sullo stesso servizio (non consentito).": {
    partner_lei: "su uno stesso servizio risultano applicati sia Together che Office Elite, due listini che non possono essere richiesti insieme. Le chiediamo cortesemente di procedere con uno dei due.",
    partner_tu: "su uno stesso servizio risultano applicati sia Together che Office Elite, due listini che non possono essere richiesti insieme. Ti chiediamo cortesemente di procedere con uno dei due.",
    cliente_lei: "su uno stesso servizio risultano applicati sia Together che Office Elite, due listini che non possono essere richiesti insieme. Le chiediamo cortesemente di procedere con uno dei due.",
    cliente_tu: "su uno stesso servizio risultano applicati sia Together che Office Elite, due listini che non possono essere richiesti insieme. Ti chiediamo cortesemente di procedere con uno dei due."
  },
  "Together richiesto con un servizio voce a consumo (Together applicabile solo su servizi voce flat).": {
    partner_lei: "il Together risulta richiesto su un servizio voce a consumo, tuttavia tale listino è applicabile solo sulle numerazioni Flat. Le chiediamo dunque cortesemente di rimuovere tale dicitura.",
    partner_tu: "il Together risulta richiesto su un servizio voce a consumo, tuttavia tale listino è applicabile solo sulle numerazioni Flat. Ti chiediamo dunque cortesemente di rimuovere tale dicitura.",
    cliente_lei: "il Together risulta richiesto su un servizio voce a consumo, tuttavia tale listino è applicabile solo sulle numerazioni Flat. Le chiediamo dunque cortesemente di rimuovere tale dicitura.",
    cliente_tu: "il Together risulta richiesto su un servizio voce a consumo, tuttavia tale listino è applicabile solo sulle numerazioni Flat. Ti chiediamo dunque cortesemente di rimuovere tale dicitura."
  },
  "Costi con Together non corretti rispetto al listino dedicato.": {
    partner_lei: "i costi indicati con Together non risultano corretti rispetto al listino dedicato. È necessario correggerli per procedere.",
    partner_tu: "i costi indicati con Together non risultano corretti rispetto al listino dedicato. È necessario correggerli per procedere.",
    cliente_lei: "i costi indicati con Together non risultano corretti rispetto al listino dedicato. È necessario correggerli per procedere.",
    cliente_tu: "i costi indicati con Together non risultano corretti rispetto al listino dedicato. È necessario correggerli per procedere."
  },
  "Dicitura 'Together' non riportata sulla modulistica, pur avendo applicato il listino corrispondente.": {
    partner_lei: "nella modulistica non è presente la dicitura 'Together', necessaria poiché è stato applicato il relativo listino. È necessario inserire la dicitura vicino al servizio.",
    partner_tu: "nella modulistica non è presente la dicitura 'Together', necessaria poiché è stato applicato il relativo listino. È necessario inserire la dicitura vicino al servizio.",
    cliente_lei: "nella modulistica non è presente la dicitura 'Together', necessaria poiché è stato applicato il relativo listino. È necessario inserire la dicitura vicino al servizio.",
    cliente_tu: "nella modulistica non è presente la dicitura 'Together', necessaria poiché è stato applicato il relativo listino. È necessario inserire la dicitura vicino al servizio."
  },
  "Office Elite applicato su servizi non ammessi (es. Backup, Forward, VoIP Continuity, ecc.).": {
    partner_lei: "L'opzione Office Elite risulta associata a servizi aggiuntivi (Backup, Forward, VoIP Continuity) per i quali non è prevista tale applicazione. È necessario aggiornare il costo e rimuovere la dicitura 'Office Elite' dal contratto.",
    partner_tu: "L'opzione Office Elite risulta associata a servizi aggiuntivi (Backup, Forward, VoIP Continuity) per i quali non è prevista tale applicazione. È necessario aggiornare il costo e rimuovere la dicitura 'Office Elite' dal contratto.",
    cliente_lei: "L'opzione Office Elite risulta associata a servizi aggiuntivi (Backup, Forward, VoIP Continuity) per i quali non è prevista tale applicazione. È necessario aggiornare il costo e rimuovere la dicitura 'Office Elite' dal contratto.",
    cliente_tu: "L'opzione Office Elite risulta associata a servizi aggiuntivi (Backup, Forward, VoIP Continuity) per i quali non è prevista tale applicazione. È necessario aggiornare il costo e rimuovere la dicitura 'Office Elite' dal contratto."
  },
  "Dicitura 'Office Elite' non riportata sulla modulistica nonostante l'applicazione di un prezzo maggiorato.": {
    partner_lei: "nella modulistica non è indicata la dicitura 'Office Elite', necessaria poiché è stato applicato un prezzo maggiorato. È necessario inserire tale dicitura vicino al servizio.",
    partner_tu: "nella modulistica non è indicata la dicitura 'Office Elite', necessaria poiché è stato applicato un prezzo maggiorato. È necessario inserire tale dicitura vicino al servizio.",
    cliente_lei: "nella modulistica non è indicata la dicitura 'Office Elite', necessaria poiché è stato applicato un prezzo maggiorato. È necessario inserire tale dicitura vicino al servizio.",
    cliente_tu: "nella modulistica non è indicata la dicitura 'Office Elite', necessaria poiché è stato applicato un prezzo maggiorato. È necessario inserire tale dicitura vicino al servizio."
  },
  "Modulo cartaceo in formato editabile (non deve esserlo).": {
    partner_lei: "il contratto risulta in formato editabile. Per poter essere accettato dovrà esserci rimandato in formato non editabile.",
    partner_tu: "il contratto risulta in formato editabile. Per poter essere accettato dovrà esserci rimandato in formato non editabile.",
    cliente_lei: "il contratto risulta in formato editabile. Per poter essere accettato dovrà esserci rimandato in formato non editabile.",
    cliente_tu: "il contratto risulta in formato editabile. Per poter essere accettato dovrà esserci rimandato in formato non editabile."
  },
  "Mancanza Allegato 1 per servizi voce o extra voce (nuovo o in portabilità).": {
    partner_lei: "non risulta essere stato compilato l'allegato 1, necessario per contrattualizzare i servizi voce e i relativi extra.",
    partner_tu: "non risulta essere stato compilato l'allegato 1, necessario per contrattualizzare i servizi voce e i relativi extra.",
    cliente_lei: "non risulta essere stato compilato l'allegato 1, necessario per contrattualizzare i servizi voce e i relativi extra.",
    cliente_tu: "non risulta essere stato compilato l'allegato 1, necessario per contrattualizzare i servizi voce e i relativi extra."
  },
  "Mancanza Allegato 2 per connettività, indirizzi IP, Business Continuity, Business Monitoring o VoipSim.": {
    partner_lei: "non risulta essere stato compilato l'allegato 2, necessario per contrattualizzare i servizi connettività e i relativi extra.",
    partner_tu: "non risulta essere stato compilato l'allegato 2, necessario per contrattualizzare i servizi connettività e i relativi extra.",
    cliente_lei: "non risulta essere stato compilato l'allegato 2, necessario per contrattualizzare i servizi connettività e i relativi extra.",
    cliente_tu: "non risulta essere stato compilato l'allegato 2, necessario per contrattualizzare i servizi connettività e i relativi extra."
  },
  "Mancanza Allegato 3 per Easy Solution router (Cloud, Security, DNS filter, 365, SMS) e VoipFax.": {
    partner_lei: "non risulta essere stato compilato l'allegato 3, necessario per contrattualizzare eventuali extra.",
    partner_tu: "non risulta essere stato compilato l'allegato 3, necessario per contrattualizzare eventuali extra.",
    cliente_lei: "non risulta essere stato compilato l'allegato 3, necessario per contrattualizzare eventuali extra",
    cliente_tu: "non risulta essere stato compilato l'allegato 3, necessario per contrattualizzare eventuali extra"
  },
  "Nel modulo di variazione: richiesta nuova attivazione numero nuovo senza Allegato 1.": {
    partner_lei: "nel modulo di variazione è stata richiesta l'attivazione di un servizio voce, ma per poter procedere occorre compilare anche l'Allegato 1. Attendiamo il modulo completo.",
    partner_tu: "nel modulo di variazione è stata richiesta l'attivazione di un servizio voce, ma per poter procedere occorre compilare anche l'Allegato 1. Attendiamo il modulo completo.",
    cliente_lei: "nel modulo di variazione è stata richiesta l'attivazione di un servizio voce, ma per poter procedere occorre compilare anche l'Allegato 1. Attendiamo il modulo completo.",
    cliente_tu: "nel modulo di variazione è stata richiesta l'attivazione di un servizio voce, ma per poter procedere occorre compilare anche l'Allegato 1. Attendiamo il modulo completo."
  },
  "Nel modulo di variazione: richiesta nuova attivazione numero in portabilità senza Allegato 1 e Allegato 4.": {
    partner_lei: "nel modulo di variazione è richiesta una nuova attivazione in portabilità, ma mancano Allegato 1 e Allegato 4. È necessario inviarli per procedere.",
    partner_tu: "nel modulo di variazione hai richiesto una nuova attivazione in portabilità, ma mancano Allegato 1 e Allegato 4. Serve inviarli per poter procedere.",
    cliente_lei: "nel modulo di variazione è stata richiesta una nuova attivazione in portabilità, ma mancano Allegato 1 e Allegato 4. La invitiamo a trasmetterli per procedere.",
    cliente_tu: "nel modulo di variazione hai richiesto una nuova attivazione in portabilità, ma mancano Allegato 1 e Allegato 4. Puoi inviarceli così possiamo procedere?"
  },
  "Nel modulo di variazione: richiesta attivazione connettività senza Allegato 2.": {
    partner_lei: "nel modulo di variazione è richiesta un'attivazione di connettività, ma manca l'Allegato 2. È necessario inviarlo per procedere.",
    partner_tu: "nel modulo di variazione hai richiesto un'attivazione di connettività, ma manca l'Allegato 2. Serve inviarlo per poter procedere.",
    cliente_lei: "nel modulo di variazione è stata richiesta un'attivazione di connettività, ma manca l'Allegato 2. La invitiamo a trasmetterlo per procedere.",
    cliente_tu: "nel modulo di variazione hai richiesto un'attivazione di connettività, ma manca l'Allegato 2. Puoi inviarcelo così possiamo procedere?"
  },
  "Nel modulo di variazione manca la partita IVA nei dati del cliente.": {
    partner_lei: "nel modulo di variazione manca la partita IVA nei dati del cliente. È necessario integrarla per procedere.",
    partner_tu: "nel modulo di variazione manca la partita IVA nei dati del cliente. Serve inserirla per poter procedere.",
    cliente_lei: "nel modulo di variazione non risulta indicata la partita IVA nei dati del cliente. La invitiamo a integrarla per procedere.",
    cliente_tu: "nel modulo di variazione manca la partita IVA nei dati del cliente. Puoi aggiungerla così possiamo procedere?"
  },
  "Nel modulo di variazione manca il codice fiscale nei dati del cliente.": {
    partner_lei: "nel modulo di variazione manca il codice fiscale nei dati del cliente. È necessario integrarlo per procedere.",
    partner_tu: "nel modulo di variazione manca il codice fiscale nei dati del cliente. Serve inserirlo per poter procedere.",
    cliente_lei: "nel modulo di variazione non risulta indicato il codice fiscale nei dati del cliente. La invitiamo a integrarlo per procedere.",
    cliente_tu: "nel modulo di variazione manca il codice fiscale nei dati del cliente. Puoi aggiungerlo così possiamo procedere?"
  },
  "Nel modulo di variazione manca il cellulare del referente tecnico.": {
    partner_lei: "nel modulo di variazione manca il cellulare del referente tecnico. È necessario inserirlo per procedere.",
    partner_tu: "nel modulo di variazione manca il cellulare del referente tecnico. Serve aggiungerlo per poter procedere.",
    cliente_lei: "nel modulo di variazione non risulta indicato il cellulare del referente tecnico. La invitiamo a integrarlo per procedere.",
    cliente_tu: "nel modulo di variazione manca il cellulare del referente tecnico. Puoi aggiungerlo così possiamo procedere?"
  },
  "Nel modulo di variazione manca la mail del referente amministrativo.": {
    partner_lei: "nel modulo di variazione manca la mail del referente amministrativo. È necessario inserirla per procedere.",
    partner_tu: "nel modulo di variazione manca la mail del referente amministrativo. Serve aggiungerla per poter procedere.",
    cliente_lei: "nel modulo di variazione non risulta indicata la mail del referente amministrativo. La invitiamo a integrarla per procedere.",
    cliente_tu: "nel modulo di variazione manca la mail del referente amministrativo. Puoi aggiungerla così possiamo procedere?"
  },
  "Nel modulo di variazione manca il codice della connettività da variare.": {
    partner_lei: "nel modulo di variazione manca il codice della connettività da variare. È necessario indicarlo per procedere.",
    partner_tu: "nel modulo di variazione manca il codice della connettività da variare. Serve inserirlo per poter procedere.",
    cliente_lei: "nel modulo di variazione non risulta indicato il codice della connettività da variare. La invitiamo a integrarlo per procedere.",
    cliente_tu: "nel modulo di variazione manca il codice della connettività da variare. Puoi aggiungerlo così possiamo procedere"
  },
  "Nel modulo di variazione manca la numerazione soggetta a variazione.": {
    partner_lei: "nel modulo di variazione manca la numerazione soggetta a variazione. È necessario indicarla per procedere.",
    partner_tu: "nel modulo di variazione manca la numerazione da variare. Serve inserirla per poter procedere.",
    cliente_lei: "nel modulo di variazione non risulta indicata la numerazione soggetta a variazione. La invitiamo a integrarla per procedere.",
    cliente_tu: "nel modulo di variazione deve essere indicata la numerazione da variare. Puoi aggiungerla così possiamo procedere?"
  },
  "Nel modulo di variazione manca il canone attualmente pagato dal cliente.": {
    partner_lei: "nel modulo di variazione manca il canone attualmente pagato dal cliente. È necessario indicarlo per procedere.",
    partner_tu: "nel modulo di variazione manca il canone attualmente pagato dal cliente. Serve inserirlo per poter procedere.",
    cliente_lei: "nel modulo di variazione non risulta indicato il canone attualmente pagato. La invitiamo a integrarlo per procedere.",
    cliente_tu: "nel modulo di variazione manca il canone che stai attualmente pagando. Puoi aggiungerlo così possiamo procedere?"
  },
  "Nella sezione 'Richiesta modifica/attivazione' non è riportato il costo di attivazione per un nuovo servizio.": {
    partner_lei: "nella sezione 'Richiesta modifica/attivazione' non è indicato il costo di attivazione del nuovo servizio. È necessario inserirlo per procedere.",
    partner_tu: "Richiesta modifica/attivazione' manca il costo di attivazione del nuovo servizio. Serve aggiungerlo per poter procedere.",
    cliente_lei: "nella sezione 'Richiesta modifica/attivazione' non risulta indicato il costo di attivazione del nuovo servizio. La invitiamo a integrarlo per procedere.",
    cliente_tu: "nella sezione 'Richiesta modifica/attivazione' manca il costo di attivazione del nuovo servizio. Puoi aggiungerlo così possiamo procedere?"
  },
  "Il costo di attivazione indicato non è corretto.": {
    partner_lei: "il costo di attivazione indicato non risulta corretto da un confronto col listino. È necessario aggiornarlo per procedere.",
    partner_tu: "il costo di attivazione indicato non risulta corretto da un confronto col listino. È necessario aggiornarlo per procedere.",
    cliente_lei: "il costo di attivazione indicato non risulta corretto da un confronto col listino. È necessario aggiornarlo per procedere.",
    cliente_tu: "il costo di attivazione indicato non risulta corretto da un confronto col listino. È necessario aggiornarlo per procedere."
  },
  "Il canone del servizio indicato non è corretto.": {
    partner_lei: "il canone indicato per il servizio non risulta corretto da un confronto con listino. È necessario aggiornarlo per procedere.",
    partner_tu: "il canone indicato per il servizio non risulta corretto da un confronto con listino. È necessario aggiornarlo per procedere.",
    cliente_lei: "il canone indicato per il servizio non risulta corretto da un confronto con listino. È necessario aggiornarlo per procedere.",
    cliente_tu: "il canone indicato per il servizio non risulta corretto da un confronto con listino. È necessario aggiornarlo per procedere."
  },
  "Servizio extra inserito non compatibile con il servizio già attivo.": {
    partner_lei: "il servizio extra richiesto non è compatibile con il servizio già attivo. È necessario modificarlo per procedere.",
    partner_tu: "il servizio extra inserito non è compatibile con quello già attivo. Serve modificarlo per poter procedere.",
    cliente_lei: "il servizio extra richiesto non risulta compatibile con il servizio già attivo. La invitiamo a modificarlo per poter procedere.",
    cliente_tu: "il servizio extra che hai inserito non è compatibile con quello già attivo. Puoi modificarlo così possiamo procedere?"
  },
  "Upgrade richiesto senza indicazione del costo una tantum di upgrade (49,90 €).": {
    partner_lei: "nel modulo è richiesto un upgrade, ma non è indicato il costo una tantum di 49,90 €. È necessario inserirlo per procedere.",
    partner_tu: "nel modulo è richiesto un upgrade, ma non è indicato il costo una tantum di 49,90 €. È necessario inserirlo per procedere.",
    cliente_lei: "nel modulo è richiesto un upgrade, ma non è indicato il costo una tantum di 49,90 €. È necessario inserirlo per procedere.",
    cliente_tu: "nel modulo è richiesto un upgrade, ma non è indicato il costo una tantum di 49,90 €. È necessario inserirlo per procedere."
  },
  "Nel modulo di attivazione l'IBAN è diverso rispetto a quello già presente a sistema: chiedere se la variazione vale solo per la nuova pratica o anche per i servizi già attivi.": {
    partner_lei: "nel modulo l'IBAN risulta diverso da quello registrato sull'anagrafica del cliente. La invitiamo a indicarci se la variazione si applica solo alla nuova pratica o anche ai servizi già attivi.",
    partner_tu: "nel modulo l'IBAN è diverso da quello che abbiamo sull'anagrafica del cliente. Puoi dirci se la variazione vale solo per questa pratica o anche per i servizi già attivi?",
    cliente_lei: "nel modulo l'IBAN risulta diverso da quello registrato sull'anagrafica del cliente. La invitiamo a indicarci se la variazione si applica solo alla nuova pratica o anche ai servizi già attivi.",
    cliente_tu: "nel modulo l'IBAN è diverso da quello che abbiamo sull'anagrafica del cliente. Puoi dirci se la variazione vale solo per questa pratica o anche per i servizi già attivi?"
  },
  "Nel modulo di attivazione la partita IVA è diversa: chiedere se il cliente intende procedere con un subentro/voltura.": {
    partner_lei: "nel modulo la partita IVA risulta diversa da quella registrata a sistema. La invitiamo a indicarci se il cliente desideri procedere con un subentro.",
    partner_tu: "nel modulo la partita IVA è diversa da quella che abbiamo a sistema. Puoi dirci se il cliente voglia procedere con un subentro?",
    cliente_lei: "nel modulo la partita IVA risulta diversa da quella registrata a sistema. La invitiamo a indicarci se desidera procedere con un subentro.",
    cliente_tu: "nel modulo la partita IVA è diversa da quella che abbiamo a sistema. Puoi dirci se vuoi procedere con un subentro?"
  },
  "Nel secondo modulo di attivazione il codice fiscale è diverso: chiedere se il cliente intende procedere con un subentro/voltura.": {
    partner_lei: "nel secondo modulo il codice fiscale indicato risulta diverso da quello registrato a sistema. La invitiamo a indicarci se il cliente desideri procedere con un subentro.",
    partner_tu: "nel secondo modulo il codice fiscale indicato risulta diverso da quello registrato a sistema. Puoi dirci se il cliente voglia procedere con un subentro?",
    cliente_lei: "nel secondo modulo il codice fiscale indicato risulta diverso da quello registrato a sistema. La invitiamo a indicarci se il cliente desideri procedere con un subentro.",
    cliente_tu: "nel secondo modulo il codice fiscale indicato risulta diverso da quello registrato a sistema. Puoi dirci se il cliente voglia procedere con un subentro?"
  },
  "Per le Pubbliche Amministrazioni: variazione del CIG rispetto alle pratiche precedenti, chiedere se il nuovo CIG vale solo per la nuova pratica o anche per gli altri servizi attivi.": {
    partner_lei: "il CIG indicato è diverso rispetto a quello indicato per le precedenti pratiche. Chiediamo conferma se questo nuovo CIG valga solo per la nuova pratica o anche per i servizi già attivi.",
    partner_tu: "il CIG indicato è diverso rispetto a quello indicato per le precedenti pratiche. Chiediamo conferma se questo nuovo CIG valga solo per la nuova pratica o anche per i servizi già attivi.",
    cliente_lei: "il CIG indicato è diverso rispetto a quello indicato per le precedenti pratiche. Chiediamo conferma se questo nuovo CIG valga solo per la nuova pratica o anche per i servizi già attivi.",
    cliente_tu: "il CIG indicato è diverso rispetto a quello indicato per le precedenti pratiche. Chiediamo conferma se questo nuovo CIG valga solo per la nuova pratica o anche per i servizi già attivi."
  },
  "Nel modulo di subentro mancano una o più firme obbligatorie.": {
    partner_lei: "nel modulo di subentro mancano una o più firme obbligatorie. È necessario integrarle per procedere.",
    partner_tu: "nel modulo di subentro mancano una o più firme obbligatorie. Serve aggiungerle per poter procedere.",
    cliente_lei: "nel modulo di subentro non risultano una o più firme obbligatorie. La invitiamo a integrarle per procedere.",
    cliente_tu: "nel modulo di subentro mancano una o più firme obbligatorie. Puoi aggiungerle così possiamo procedere?"
  },
  "Nel modulo di subentro mancano i timbri richiesti.": {
    partner_lei: "nel modulo di subentro mancano i timbri richiesti. È necessario integrarli per procedere.",
    partner_tu: "nel modulo di subentro mancano i timbri richiesti. Serve aggiungerli per poter procedere.",
    cliente_lei: "nel modulo di subentro non risultano i timbri richiesti. La invitiamo a integrarli per procedere.",
    cliente_tu: "nel modulo di subentro mancano i timbri richiesti. Puoi aggiungerli così possiamo procedere?"
  },
  "La dichiarazione di cessione risulta firmata dal subentrante anziché dal cedente.": {
    partner_lei: "la dichiarazione di cessione risulta firmata dal subentrante invece che dal cedente. È necessario correggerla per procedere.",
    partner_tu: "la dichiarazione di cessione è firmata dal subentrante invece che dal cedente. Serve correggerla per poter procedere.",
    cliente_lei: "la dichiarazione di cessione risulta firmata dal subentrante anziché dal cedente. La invitiamo a correggerla per procedere.",
    cliente_tu: "la dichiarazione di cessione è firmata o intestata a te invece che al cedente. Puoi correggerla così possiamo procedere?"
  },
  "La dichiarazione di cessione risulta intestata al subentrante anziché al cedente.": {
    partner_lei: "la dichiarazione di cessione risulta intesta al subentrante invece che al cedente. È necessario correggerla per procedere.",
    partner_tu: "la dichiarazione di cessione risulta intesta al subentrante invece che al cedente. Serve correggerla per poter procedere.",
    cliente_lei: "la dichiarazione di cessione risulta intesta al subentrante invece che al cedente. La invitiamo a correggerla per procedere.",
    cliente_tu: "la dichiarazione di cessione risulta intesta al subentrante invece che al cedente. Puoi correggerla così possiamo procedere?"
  },
  "Nella dichiarazione di cessione non sono riportati tutti i servizi da volturare con i relativi codici.": {
    partner_lei: "nella dichiarazione di cessione non sono indicati tutti i servizi da volturare con i relativi codici. È necessario integrarli per procedere.",
    partner_tu: "nella dichiarazione di cessione mancano alcuni servizi da volturare con i relativi codici. Serve integrarli per poter procedere.",
    cliente_lei: "nella dichiarazione di cessione non risultano indicati tutti i servizi da volturare con i relativi codici. La invitiamo a integrarli per procedere.",
    cliente_tu: "nella dichiarazione di cessione mancano alcuni servizi da volturare con i codici. Puoi integrarli così possiamo procedere?"
  },
  "Nella dichiarazione di cessione mancano i codici dei servizi (evincibili dalla fattura).": {
    partner_lei: "nella dichiarazione di cessione mancano i codici dei servizi, recuperabili dalla fattura. È necessario integrarli per procedere.",
    partner_tu: "nella dichiarazione di cessione mancano i codici dei servizi, che si possono prendere dalla fattura. Serve integrarli per poter procedere.",
    cliente_lei: "nella dichiarazione di cessione non risultano indicati i codici dei servizi, reperibili dalla fattura. La invitiamo a integrarli per procedere.",
    cliente_tu: "nella dichiarazione di cessione mancano i codici dei servizi, che puoi trovare in fattura. Puoi aggiungerli così possiamo procedere?"
  },
  "Nella dichiarazione di cessione mancano firma e timbro del cedente.": {
    partner_lei: "nella dichiarazione di cessione mancano firma e timbro del cedente. È necessario integrarli per procedere.",
    partner_tu: "nella dichiarazione di cessione mancano firma e timbro del cedente. È necessario integrarli per procedere.",
    cliente_lei: "nella dichiarazione di cessione mancano firma e timbro del cedente. È necessario integrarli per procedere.",
    cliente_tu: "nella dichiarazione di cessione mancano firma e timbro del cedente. È necessario integrarli per procedere."
  },
  "CC cliente per mancanza di timbri sul contratto.": {
    partner_lei: "In mancanza di timbro può essere accettata la copia conoscenza del cliente via mail, secondo le procedure interne",
    partner_tu: "In mancanza di timbro può essere accettata la copia conoscenza del cliente via mail, secondo le procedure interne",
    cliente_lei: "In mancanza di timbro può essere accettata la copia conoscenza del cliente via mail, secondo le procedure interne",
    cliente_tu: "In mancanza di timbro può essere accettata la copia conoscenza del cliente via mail, secondo le procedure interne"
  },
  "Nel modulo di cambio tecnologia manca il codice del servizio nella sezione 'Codice servizio'.": {
    partner_lei: "nel modulo di cambio tecnologia manca il codice del servizio nella sezione 'Codice servizio'. Potrà trovare tale codice nella sua Area Partner. Le chiediamo gentilmente di integrarlo nel modulo.",
    partner_tu: "nel modulo di cambio tecnologia manca il codice del servizio nella sezione 'Codice servizio'. Potrai trovare tale codice nella tua Area Partner. Ti chiediamo gentilmente di integrarlo nel modulo.",
    cliente_lei: "nel modulo di cambio tecnologia manca il codice del servizio nella sezione 'Codice servizio'. Potrà trovare tale codice in fattura. Le chiediamo gentilmente di integrarlo nel modulo.",
    cliente_tu: "nel modulo di cambio tecnologia manca il codice del servizio nella sezione 'Codice servizio'. Potrai trovare tale codice in fattura. Ti chiediamo gentilmente di integrarlo nel modulo."
  },
  "Nel modulo di cambio tecnologia manca l'indirizzo di attivazione.": {
    partner_lei: "nel modulo di cambio tecnologia manca l'indirizzo di attivazione. È necessario indicarlo per procedere.",
    partner_tu: "nel modulo di cambio tecnologia manca l'indirizzo di attivazione. Serve aggiungerlo per poter procedere.",
    cliente_lei: "nel modulo di cambio tecnologia non risulta indicato l'indirizzo di attivazione. La invitiamo a integrarlo per procedere.",
    cliente_tu: "nel modulo di cambio tecnologia manca l'indirizzo di attivazione. È necessario indicarlo per procedere."
  },
  "Nel modulo di cambio tecnologia l'indirizzo di attivazione è diverso rispetto a quello su cui è attiva la vecchia connettività.": {
    partner_lei: "nel modulo di cambio tecnologia l'indirizzo indicato è diverso da quello della connettività attiva. Chiediamo conferma dell'indirizzo corretto per procedere.",
    partner_tu: "nel modulo di cambio tecnologia l'indirizzo indicato è diverso da quello della connettività attiva. Chiediamo conferma dell'indirizzo corretto per procedere.",
    cliente_lei: "nel modulo di cambio tecnologia l'indirizzo indicato è diverso da quello della connettività attiva. Chiediamo conferma dell'indirizzo corretto per procedere.",
    cliente_tu: "nel modulo di cambio tecnologia l'indirizzo indicato è diverso da quello della connettività attiva. Chiediamo conferma dell'indirizzo corretto per procedere."
  },
  "Nel modulo di cambio tecnologia manca il costo di attivazione.": {
    partner_lei: "nel modulo di cambio tecnologia manca il costo di attivazione. È necessario inserirlo per procedere.",
    partner_tu: "nel modulo di cambio tecnologia manca il costo di attivazione. Serve aggiungerlo per poter procedere.",
    cliente_lei: "nel modulo di cambio tecnologia non risulta indicato il costo di attivazione. La invitiamo a integrarlo per procedere.",
    cliente_tu: "nel modulo di cambio tecnologia manca il costo di attivazione. Puoi aggiungerlo così possiamo procedere?"
  },
  "Nel modulo di cambio tecnologia il costo di attivazione indicato non è corretto.": {
    partner_lei: "nel modulo di cambio tecnologia il costo di attivazione indicato non risulta corretto con gli attuali costi a listino. Le chiediamo cortesemente di verificare i costi e correggerli.",
    partner_tu: "nel modulo di cambio tecnologia il costo di attivazione indicato non risulta corretto con gli attuali costi a listino. Ti chiediamo gentilmente di verificare i costi e correggerli.",
    cliente_lei: "nel modulo di cambio tecnologia il costo di attivazione indicato non risulta corretto con gli attuali costi a listino. Le chiediamo cortesemente di verificare i costi e correggerli.",
    cliente_tu: "nel modulo di cambio tecnologia il costo di attivazione indicato non risulta corretto con gli attuali costi a listino. Ti chiediamo gentilmente di verificare i costi e correggerli."
  },
  "Nel modulo di cambio tecnologia manca il canone della nuova connettività.": {
    partner_lei: "nel modulo di cambio tecnologia non è stato indicato il canone della nuova connettività. È necessario inserirlo per procedere.",
    partner_tu: "nel modulo di cambio tecnologia non è stato indicato il canone della nuova connettività. Ti chiediamo gentilmente di inserirlo nel modulo.",
    cliente_lei: "nel modulo di cambio tecnologia non è stato indicato il canone della nuova connettività. Le chiediamo gentilmente di inserirlo nel modulo.",
    cliente_tu: "nel modulo di cambio tecnologia non è stato indicato il canone della nuova connettività. Ti chiediamo gentilmente di inserirlo nel modulo."
  },
  "Nel modulo di cambio tecnologia il canone indicato non è corretto.": {
    partner_lei: "nel modulo di cambio tecnologia il canone indicato non risulta corretto. Le chiediamo cortesemente di correggerlo per poter mandare avanti la pratica.",
    partner_tu: "nel modulo di cambio tecnologia il canone indicato non risulta corretto. Ti chiediamo cortesemente di correggerlo per poter mandare avanti la pratica.",
    cliente_lei: "nel modulo di cambio tecnologia il canone indicato non risulta corretto. Le chiediamo cortesemente di correggerlo per poter mandare avanti la pratica.",
    cliente_tu: "nel modulo di cambio tecnologia il canone indicato non risulta corretto. Ti chiediamo cortesemente di correggerlo per poter mandare avanti la pratica."
  },
  "Nel modulo di cambio tecnologia mancano una o più firme.": {
    partner_lei: "nel modulo di cambio tecnologia mancano una o più firme obbligatorie. È necessario integrarle per procedere.",
    partner_tu: "nel modulo di cambio tecnologia mancano una o più firme. Serve aggiungerle per poter procedere.",
    cliente_lei: "nel modulo di cambio tecnologia non risultano una o più firme obbligatorie. La invitiamo a integrarle per procedere.",
    cliente_tu: "nel modulo di cambio tecnologia mancano una o più firme. Puoi aggiungerle così possiamo procedere?"
  },
  "Nel modulo di cambio tecnologia mancano i timbri richiesti.": {
    partner_lei: "nel modulo di cambio tecnologia non risultano essere stati applicati tutti i timbri richiesti. È necessario integrarli o mandarci il contratto via mail con copia conoscenza del cliente per poter procedere con la lavorazione.",
    partner_tu: "nel modulo di cambio tecnologia non risultano essere stati applicati tutti i timbri richiesti. È necessario integrarli o mandarci il contratto via mail con copia conoscenza del cliente per poter procedere con la lavorazione.",
    cliente_lei: "nel modulo di cambio tecnologia non risultano essere stati applicati tutti i timbri richiesti. È necessario integrarli o mandarci il contratto via mail con copia conoscenza del cliente per poter procedere con la lavorazione.",
    cliente_tu: "nel modulo di cambio tecnologia non risultano essere stati applicati tutti i timbri richiesti. È necessario integrarli o mandarci il contratto via mail con copia conoscenza del cliente per poter procedere con la lavorazione."
  },
  "Modulo di cambio tecnologia usato per una semplice variazione di servizio (non corretto).": {
    partner_lei: "è stato utilizzato il modulo di cambio tecnologia, tuttavia in questo caso si tratta di variazione. Le chiediamo gentilmente di compilare la modulistica di variazione prevista.",
    partner_tu: "è stato utilizzato il modulo di cambio tecnologia, tuttavia in questo caso si tratta di variazione. Ti chiediamo gentilmente di compilare la modulistica di variazione prevista.",
    cliente_lei: "è stato utilizzato il modulo di cambio tecnologia per una semplice variazione di servizio. La invitiamo a compilare il modulo corretto per procedere.",
    cliente_tu: "è stato utilizzato il modulo di cambio tecnologia, tuttavia in questo caso si tratta di variazione. Le chiediamo gentilmente di compilare la modulistica di variazione prevista."
  },
  "Modulo di cambio tecnologia usato per una nuova attivazione aggiuntiva: in questo caso la vecchia connettività dovrà essere disdetta con procedura ordinaria.": {
    partner_lei: "in questo caso non si tratta di cambio tecnologia, ma di attivazione di un nuovo servizio. Le chiediamo dunque gentilmente di compilare un modulo di attivazione. La connettività da sostituire dovrà essere cessata tramite ordinaria procedura di disdetta.",
    partner_tu: "in questo caso non si tratta di cambio tecnologia, ma di attivazione di un nuovo servizio. Ti chiediamo dunque gentilmente di compilare un modulo di attivazione. La connettività da sostituire dovrà essere cessata tramite ordinaria procedura di disdetta.",
    cliente_lei: "in questo caso non si tratta di cambio tecnologia, ma di attivazione di un nuovo servizio. Le chiediamo dunque gentilmente di compilare un modulo di attivazione. La connettività da sostituire dovrà essere cessata tramite ordinaria procedura di disdetta.",
    cliente_tu: "in questo caso non si tratta di cambio tecnologia, ma di attivazione di un nuovo servizio. Ti chiediamo dunque gentilmente di compilare un modulo di attivazione. La connettività da sostituire dovrà essere cessata tramite ordinaria procedura di disdetta."
  },
  "Per il servizio VoipFax manca la mail su cui devono essere recapitati i fax.": {
    partner_lei: "per il servizio VoipFax manca la mail su cui devono essere recapitati i fax. È necessario indicarla per procedere.",
    partner_tu: "per il servizio VoipFax manca la mail dove devono arrivare i fax. Serve inserirla per poter procedere.",
    cliente_lei: "per il servizio VoipFax non risulta indicata la mail su cui devono essere recapitati i fax. La invitiamo a comunicarla per procedere.",
    cliente_tu: "per il servizio VoipFax manca la mail dove devono arrivare i fax. Potresti gentilmente indicarcela?"
  },
  "Per l'attivazione del numero verde non è stato indicato il numero nero.": {
    partner_lei: "per l'attivazione del numero verde non è stato indicato il numero nero. Le chiediamo cortesemente di indicarcelo al fine di poter mandare avanti la pratica.",
    partner_tu: "per l'attivazione del numero verde non è stato indicato il numero nero. Ti chiediamo cortesemente di indicarcelo al fine di poter mandare avanti la pratica.",
    cliente_lei: "per l'attivazione del numero verde non è stato indicato il numero nero. Le chiediamo cortesemente di indicarcelo al fine di poter mandare avanti la sua pratica.",
    cliente_tu: "per l'attivazione del numero verde non è stato indicato il numero nero. Ti chiediamo cortesemente di indicarcelo al fine di poter mandare avanti la tua pratica."
  },
  "Per il numero verde in portabilità manca il modulo specifico per la portabilità dei numeri verdi.": {
    partner_lei: "per il numero verde in portabilità manca il modulo specifico dedicato. Le chiediamo cortesemente di compilarlo e inoltrarcelo.",
    partner_tu: "per il numero verde in portabilità manca il modulo specifico dedicato. Potresti gentilmente inoltrarcelo?",
    cliente_lei: "per il numero verde in portabilità manca il modulo specifico dedicato. Le chiediamo cortesemente di compilarlo e inoltrarcelo.",
    cliente_tu: "per il numero verde in portabilità manca il modulo specifico dedicato. Potresti gentilmente inoltrarcelo?"
  },
  "Business Continuity Plus: non viene indicato quale router si desidera tra Draytek 2865 e Draytek 2927.": {
    partner_lei: "per il servizio Business Continuity Plus non è indicato se si desidera il router Draytek 2865 o Draytek 2927. Le chiediamo cortesemente di indicarcelo.",
    partner_tu: "per il servizio Business Continuity Plus non è indicato se si desidera il router Draytek 2865 o Draytek 2927. Potresti gentilmente indicarcelo?",
    cliente_lei: "per il servizio Business Continuity Plus non è indicato se si desidera il router Draytek 2865 o Draytek 2927. Le chiediamo cortesemente di indicarcelo.",
    cliente_tu: "per il servizio Business Continuity Plus non è indicato se si desidera il router Draytek 2865 o Draytek 2927. Potresti gentilmente indicarcelo?"
  },
  "Business Continuity Plus: manca l'indirizzo di spedizione del router.": {
    partner_lei: "per il servizio Business Continuity Plus manca l'indirizzo di spedizione del router. Potrebbe gentilmente indicarcelo?",
    partner_tu: "per il servizio Business Continuity Plus manca l'indirizzo di spedizione del router. Ce lo potresti gentilmente indicare?",
    cliente_lei: "per il servizio Business Continuity Plus manca l'indirizzo di spedizione del router. Potrebbe gentilmente indicarcelo?",
    cliente_tu: "per il servizio Business Continuity Plus manca l'indirizzo di spedizione del router. Ce lo potresti gentilmente indicare?"
  },
  "Business Continuity Plus AC: non viene indicato quale router si desidera tra Draytek 2865AC e Draytek 2927AC.": {
    partner_lei: "per il servizio Business Continuity Plus AC non è indicato se si desidera il router Draytek 2865 AC o Draytek 2927 AC. Le chiediamo cortesemente di indicarcelo.",
    partner_tu: "per il servizio Business Continuity Plus AC non è indicato se si desidera il router Draytek 2865 AC o Draytek 2927 AC. Potresti gentilmente indicarcelo?",
    cliente_lei: "per il servizio Business Continuity Plus AC non è indicato se si desidera il router Draytek 2865 AC o Draytek 2927 AC. Le chiediamo cortesemente di indicarcelo.",
    cliente_tu: "per il servizio Business Continuity Plus AC non è indicato se si desidera il router Draytek 2865 AC o Draytek 2927 AC. Potresti gentilmente indicarcelo?"
  },
  "Business Continuity Plus AC: manca l'indirizzo di spedizione del router.": {
    partner_lei: "per il servizio Business Continuity Plus AC manca l'indirizzo di spedizione del router. Potrebbe gentilmente indicarcelo?",
    partner_tu: "per il servizio Business Continuity Plus manca l'indirizzo di spedizione del router. Ce lo potresti gentilmente indicare?",
    cliente_lei: "per il servizio Business Continuity Plus AC manca l'indirizzo di spedizione del router. Potrebbe gentilmente indicarcelo?",
    cliente_tu: "per il servizio Business Continuity Plus manca l'indirizzo di spedizione del router. Ce lo potresti gentilmente indicare?"
  },
  "Servizio Backup: manca il numero su cui deviare le chiamate in caso di backup.": {
    partner_lei: "per il servizio Backup manca il numero su cui deviare le chiamate in caso di attivazione. È necessario indicarlo per procedere.",
    partner_tu: "per il servizio Backup manca il numero su cui deviare le chiamate in caso di backup. Potresti indicarcelo?",
    cliente_lei: "per il servizio Backup manca il numero su cui deviare le chiamate in caso di attivazione. È necessario indicarlo per procedere.",
    cliente_tu: "per il servizio Backup manca il numero su cui deviare le chiamate in caso di backup. Potresti indicarcelo?"
  },
  "Servizio di pubblicazione negli elenchi telefonici: richiesta senza l'apposito modulo dedicato.": {
    partner_lei: "per il servizio Pubblicazione negli elenchi telefonici manca il modulo apposito. Le chiediamo cortesemente di inoltrarcelo.",
    partner_tu: "per il servizio Pubblicazione negli elenchi telefonici manca il modulo apposito. Ti chiediamo cortesemente di inoltrarcelo.",
    cliente_lei: "per il servizio Pubblicazione negli elenchi telefonici manca il modulo apposito. Le chiediamo cortesemente di inoltrarcelo.",
    cliente_tu: "per il servizio Pubblicazione negli elenchi telefonici manca il modulo apposito. Ti chiediamo cortesemente di inoltrarcelo."
  },
  "Business Monitoring Warning: manca la mail del referente tecnico.": {
    partner_lei: "per il Business Monitoring Warning manca la mail del referente tecnico. È necessario indicarla per procedere.",
    partner_tu: "per il Business Monitoring Warning manca la mail del referente tecnico. Ti chiediamo gentilmente di indicarcela.",
    cliente_lei: "per il Business Monitoring Warning non risulta indicata la mail del referente tecnico. La invitiamo a comunicarla per procedere.",
    cliente_tu: "per il Business Monitoring Warning manca la mail del referente tecnico. Ti chiediamo gentilmente di indicarcela."
  },
  "Manca la dichiarazione di cessione.": {
    partner_lei: "da un controllo non risulta essere stata allegata la dichiarazione di cessione. Ricordiamo che dovrà pervenirci firmata e timbrata dal cedente dei servizi e dovranno essere riportati tutti i servizi soggetti a voltura, completi del codice di servizio (evincibile dal portale partner).",
    partner_tu: "da un controllo non risulta essere stata allegata la dichiarazione di cessione. Ricordiamo che dovrà pervenirci firmata e timbrata dal cedente dei servizi e dovranno essere riportati tutti i servizi soggetti a voltura, completi del codice di servizio (evincibile dal portale partner).",
    cliente_lei: "da un controllo non risulta essere stata allegata la dichiarazione di cessione. Ricordiamo che dovrà pervenirci firmata e timbrata dal cedente dei servizi e dovranno essere riportati tutti i servizi soggetti a voltura, completi del codice di servizio (evincibile dalla fattura).",
    cliente_tu: "da un controllo non risulta essere stata allegata la dichiarazione di cessione. Ricordiamo che dovrà pervenirci firmata e timbrata dal cedente dei servizi e dovranno essere riportati tutti i servizi soggetti a voltura, completi del codice di servizio (evincibile dalla fattura)."
  },
  "Richiesta una nuova attivazione di connettività su un indirizzo in cui il cliente ha già una connettività attiva di tecnologia diversa: verificare se si intende effettuare un cambio tecnologia.": {
    partner_lei: "è stata richiesta l'attivazione di una nuova connettività su un indirizzo presso cui risulta essere già presente una connettività, però di tecnologia differente. Il cliente intende mantenere entrambe le connettività attive? Qualora il cliente intendesse cessare l'altra connettività sarà necessario compilare un modulo di Cambio Tecnologia. La connettività da sostituire verrà cessata a costo zero e senza necessità di disdetta una volta che la nuova connettività sarà attiva.",
    partner_tu: "è stata richiesta l'attivazione di una nuova connettività su un indirizzo presso cui risulta essere già presente una connettività, però di tecnologia differente. Il cliente intende mantenere entrambe le connettività attive? Qualora il cliente intendesse cessare l'altra connettività sarà necessario compilare un modulo di Cambio Tecnologia. La connettività da sostituire verrà cessata a costo zero e senza necessità di disdetta una volta che la nuova connettività sarà attiva.",
    cliente_lei: "è stata richiesta l'attivazione di una nuova connettività su un indirizzo presso cui risulta essere già presente una connettività, però di tecnologia differente. Intende mantenere entrambe le connettività attive? Qualora intendesse cessare l'altra connettività sarà necessario compilare un modulo di Cambio Tecnologia. La connettività da sostituire verrà cessata a costo zero e senza necessità di disdetta una volta che la nuova connettività sarà attiva.",
    cliente_tu: "è stata richiesta l'attivazione di una nuova connettività su un indirizzo presso cui risulta essere già presente una connettività, però di tecnologia differente. Intende mantenere entrambe le connettività attive? Qualora intendesse cessare l'altra connettività sarà necessario compilare un modulo di Cambio Tecnologia. La connettività da sostituire verrà cessata a costo zero e senza necessità di disdetta una volta che la nuova connettività sarà attiva."
  },
  "Per il numero verde in portabilità manca il modulo specifico per la portabilità dei numeri verdi.": {
    partner_lei: "da un controllo non risulta essere stato allegato il modulo specifico richiesto per la portabilità dei numeri verdi. La inviatiamo a scaricarlo dalla sua Area Riservata e allegarlo firmato alla pratica.",
    partner_tu: "da un controllo non risulta essere stato allegato il modulo specifico richiesto per la portabilità dei numeri verdi. Potresti gentilmente scaricarlo dalla tua Area Riservata e allegarlo firmato alla pratica?",
    cliente_lei: "da un controllo non risulta essere stato allegato il modulo specifico richiesto per la portabilità dei numeri verdi. Le lasciamo in allegato il modulo da compilare, le chiediamo cortesemente di rimandarcelo correttamente compilato e firmato.",
    cliente_tu: "da un controllo non risulta essere stato allegato il modulo specifico richiesto per la portabilità dei numeri verdi. Ti lasciamo in allegato il modulo da compilare e ti chiediamo cortesemente di rimandarcelo correttamente compilato e firmato."
  },
  "Business Monitoring Warning: manca il cellulare del referente tecnico.": {
    partner_lei: "per il Business Monitoring Warning manca il cellulare del referente tecnico. È necessario indicarlo per procedere.",
    partner_tu: "per il Business Monitoring Warning manca il cellulare del referente tecnico. È necessario indicarlo per procedere.",
    cliente_lei: "per il Business Monitoring Warning manca il cellulare del referente tecnico. È necessario indicarlo per procedere.",
    cliente_tu: "per il Business Monitoring Warning manca il cellulare del referente tecnico. È necessario indicarlo per procedere."
  },
  "Business Monitoring High: manca la mail del referente tecnico.": {
    partner_lei: "per il Business Monitoring High manca la mail del referente tecnico. È necessario indicarla per procedere.",
    partner_tu: "per il Business Monitoring High manca la mail del referente tecnico. È necessario indicarla per procedere.",
    cliente_lei: "per il Business Monitoring High manca la mail del referente tecnico. È necessario indicarla per procedere.",
    cliente_tu: "per il Business Monitoring High manca la mail del referente tecnico. È necessario indicarla per procedere."
  },
  "Business Monitoring High: manca il cellulare del referente tecnico.": {
    partner_lei: "per il Business Monitoring High manca il cellulare del referente tecnico. È necessario indicarlo per procedere.",
    partner_tu: "per il Business Monitoring High manca il cellulare del referente tecnico. È necessario indicarlo per procedere.",
    cliente_lei: "per il Business Monitoring High manca il cellulare del referente tecnico. È necessario indicarlo per procedere.",
    cliente_tu: "per il Business Monitoring High manca il cellulare del referente tecnico. È necessario indicarlo per procedere."
  },
  "Business Monitoring High: manca il cellulare del cliente.": {
    partner_lei: "per il Business Monitoring High manca il cellulare del cliente. È necessario indicarlo per procedere.",
    partner_tu: "per il Business Monitoring High manca il cellulare del cliente. È necessario indicarlo per procedere.",
    cliente_lei: "per il Business Monitoring High manca il cellulare del cliente. È necessario indicarlo per procedere.",
    cliente_tu: "per il Business Monitoring High manca il cellulare del cliente. È necessario indicarlo per procedere."
  },
  "Microsoft 365 – dominio esistente o da creare (verifica necessaria).": {
    partner_lei: "per procedere con l'attivazione del servizio Microsoft 365 abbiamo necessità di verificare se il cliente disponga già di un dominio Microsoft 365 oppure se debba essere creato. In caso di dominio esistente, occorre indicarci il Tenant ID (visibile in Impostazioni → Domini) e autorizzare VoipVoice come distributore tramite il link ufficiale Microsoft: https://admin.microsoft.com/Adminportal/Home?invType=ResellerRelationship&partnerId=35fbd38b-7fdb-48d1-92ba-75adb4d76b2d&msppId=0&DAP=false#/BillingAccounts/partner-invitation. Se invece il dominio non esiste ancora, La invitiamo a comunicarci il nuovo dominio da creare.",
    partner_tu: "per procedere con l'attivazione di Microsoft 365 dobbiamo verificare se il cliente abbia già un dominio Microsoft 365 o se debba essere creato. Se esiste già, indicaci il Tenant ID (Impostazioni → Domini) e autorizzaci come distributori tramite questo link: https://admin.microsoft.com/Adminportal/Home?invType=ResellerRelationship&partnerId=35fbd38b-7fdb-48d1-92ba-75adb4d76b2d&msppId=0&DAP=false#/BillingAccounts/partner-invitation. Se non esiste alcun dominio, comunicaci quale nuovo dominio creare.",
    cliente_lei: "per procedere con l'attivazione del servizio Microsoft 365 abbiamo necessità di sapere se la Sua organizzazione disponga già di un dominio Microsoft 365 oppure se debba essere creato. Se il dominio esiste, La preghiamo di indicarci il Tenant ID (Impostazioni → Domini) e abilitare VoipVoice come distributore al link ufficiale: https://admin.microsoft.com/Adminportal/Home?invType=ResellerRelationship&partnerId=35fbd38b-7fdb-48d1-92ba-75adb4d76b2d&msppId=0&DAP=false#/BillingAccounts/partner-invitation. Se invece il dominio non esiste, La invitiamo a comunicarci quello nuovo da creare.",
    cliente_tu: "per procedere con l'attivazione di Microsoft 365 dobbiamo sapere se hai già un dominio Microsoft 365 oppure se dobbiamo crearne uno nuovo. Se esiste già, comunicaci il Tenant ID (Impostazioni → Domini) e autorizzaci come distributori tramite questo link: https://admin.microsoft.com/Adminportal/Home?invType=ResellerRelationship&partnerId=35fbd38b-7fdb-48d1-92ba-75adb4d76b2d&msppId=0&DAP=false#/BillingAccounts/partner-invitation. Se non esiste ancora un dominio, indicaci quello nuovo da creare."
  },
  "Indirizzo di attivazione non coperto dalla tecnologia di connettività richiesta.": {
    partner_lei: "da un controllo effettuato sull'indirizzo di installazione, risulta che l'area non è coperta dalla tipologia di connettività richiesta. La invitiamo a contattare il Suo commerciale di riferimento per valutare una soluzione alternativa.",
    partner_tu: "da un controllo sull'indirizzo di installazione risulta che la zona non è coperta dalla tipologia di connettività richiesta. Ti invitiamo a confrontarti con il tuo referente commerciale per individuare un'alternativa disponibile.",
    cliente_lei: "da un controllo effettuato sull'indirizzo di installazione, purtroppo l'area non risulta coperta dalla tipologia di connettività richiesta. La invitiamo a fare riferimento al Suo commerciale dedicato per valutare una possibile soluzione alternativa.",
    cliente_tu: "da un controllo sull'indirizzo di installazione è emerso che la zona non è coperta dalla tecnologia di connettività richiesta. Ti suggerisco di confrontarti con il tuo referente commerciale per individuare una soluzione alternativa."
  },
  "Velocità FTTC richiesta superiore alla velocità stimata sull'indirizzo.": {
    partner_lei: "Da un controllo effettuato sull'indirizzo di installazione, la velocità FTTC richiesta risulta superiore alla velocità stimata. Le chiediamo dunque se voglia valutare il taglio inferiore o se voglia ugualmente procedere con questo servizio.",
    partner_tu: "Da un controllo effettuato sull'indirizzo di installazione, la velocità FTTC richiesta risulta superiore alla velocità stimata. Vuoi procedere con questo taglio o valutare quello inferiore?",
    cliente_lei: "Da un controllo effettuato sull'indirizzo di installazione, la velocità FTTC richiesta risulta superiore alla velocità stimata. Le chiediamo dunque se voglia valutare il taglio inferiore o se voglia ugualmente procedere con questo servizio.",
    cliente_tu: "Da un controllo effettuato sull'indirizzo di installazione, la velocità FTTC richiesta risulta superiore alla velocità stimata. Vuoi procedere con questo taglio o valutare quello inferiore?"
  },
  "Indirizzo non censito nei sistemi di copertura.": {
    partner_lei: "Da un controllo effettuato, l'indirizzo indicato non risulta censito nei sistemi di copertura. La invitiamo a contattare il Suo commerciale di riferimento per valutare una soluzione alternativa.",
    partner_tu: "Da un controllo effettuato, l'indirizzo indicato non risulta presente nei sistemi di copertura. Ti invitiamo a confrontarti con il tuo referente commerciale per valutare un'alternativa disponibile.",
    cliente_lei: "Da una verifica effettuata, l'indirizzo fornito non risulta censito nei sistemi di copertura. La invitiamo a rivolgersi al Suo commerciale di riferimento per valutare una possibile soluzione alternativa.",
    cliente_tu: "Da un controllo risulta che l'indirizzo indicato non è censito nei sistemi di copertura. Ti suggerisco di confrontarti con il tuo commerciale di riferimento per individuare un'alternativa disponibile."
  },
  "Indirizzo errato o incompleto: necessarie maggiori specifiche (via, civico, interno, scala…).": {
    partner_lei: "Da un controllo effettuato, l'indirizzo fornito risulta errato o incompleto. Per poter procedere con la verifica di copertura sono necessarie maggiori specifiche (via, civico, interno, scala ed eventuali ulteriori dettagli utili). La invitiamo a fornirci le informazioni complete così da permetterci una nuova verifica.",
    partner_tu: " Da un controllo risulta che l'indirizzo indicato è errato o incompleto. Per procedere con la verifica di copertura abbiamo bisogno di maggiori dettagli (via, civico, interno, scala e altre indicazioni utili). Ti chiediamo di inviarci tutte le informazioni necessarie così da poter effettuare una nuova verifica.",
    cliente_lei: "Da una verifica effettuata, l'indirizzo comunicato risulta errato o incompleto. Per consentirci di procedere con la verifica di copertura abbiamo necessità di maggiori specifiche (via, civico, interno, scala ed eventuali ulteriori dettagli). La invitiamo a trasmetterci i dati completi per permetterci una nuova verifica.",
    cliente_tu: "Da un controllo è emerso che l'indirizzo fornito è errato o incompleto. Per verificare correttamente la copertura abbiamo bisogno di maggiori dettagli (via, civico, interno, scala e ogni informazione utile). Ti chiedo di inviarci i dati completi così da poter procedere con una nuova verifica."
  },
  "Velocità VoipAir richiesta superiore alla velocità stimata sull'indirizzo.": {
    partner_lei: "Da un controllo effettuato sull'indirizzo di installazione, la velocità VoipAir richiesta risulta superiore alla velocità effettiva stimata. In queste condizioni non ci è possibile procedere con l'attivazione. La invitiamo a confrontarSi con il Suo referente commerciale per individuare la soluzione più adeguata tra quelle disponibili sull'indirizzo.",
    partner_tu: "Da un controllo effettuato sull'indirizzo di installazione, la velocità VoipAir richiesta risulta superiore alla velocità effettiva stimata. Di conseguenza non possiamo procedere con l'attivazione. Ti chiediamo di confrontarti con il tuo referente commerciale per individuare la soluzione più adeguata tra quelle disponibili sull'indirizzo.",
    cliente_lei: "Da un controllo effettuato sull'indirizzo di installazione, la velocità VoipAir richiesta risulta superiore alla velocità effettiva stimata. In queste condizioni non è possibile procedere con l'attivazione. La invitiamo a rivolgerSi al Suo referente commerciale per valutare la soluzione più idonea tra quelle disponibili sull'indirizzo.",
    cliente_tu: "Da un controllo effettuato sull'indirizzo di installazione, la velocità VoipAir richiesta risulta superiore alla velocità effettiva stimata. Per questo motivo non possiamo procedere con l'attivazione. Ti suggeriamo di confrontarti con il tuo referente commerciale per individuare l'alternativa più adatta tra quelle disponibili."
  },
  "Per numerazioni nuove: prefisso non corrispondente al comune dell'indirizzo di attivazione.": {
    partner_lei: "Da un controllo effettuato, il prefisso della numerazione richiesta non risulta corrispondente al comune indicato per l'attivazione. Per poter procedere correttamente con la pratica è necessario utilizzare un prefisso associato al comune di riferimento. La invitiamo pertanto a verificare la numerazione indicata e a fornirci un prefisso conforme, così da consentirci di proseguire con l'attivazione.",
    partner_tu: "Da un controllo risulta che il prefisso della numerazione richiesta non corrisponde al comune indicato per l'attivazione. Per procedere correttamente è necessario utilizzare un prefisso associato al comune di riferimento. Ti chiediamo quindi di verificare la numerazione e inviarci un prefisso corretto, così da poter proseguire con l'attivazione.",
    cliente_lei: "Da una verifica effettuata, il prefisso della numerazione richiesta non risulta coerente con il comune indicato per l'attivazione. Per proseguire correttamente con la pratica è necessario utilizzare un prefisso associato al comune di riferimento. La invitiamo a controllare la numerazione comunicata e a trasmetterci un prefisso conforme.",
    cliente_tu: "a un controllo risulta che il prefisso della numerazione richiesta non coincide con il comune indicato per l'attivazione. Per poter proseguire è necessario utilizzare un prefisso corretto per quel comune. Ti chiedo quindi di verificare la numerazione e inviarci il prefisso corretto per continuare con l'attivazione."
  },
  "Per numerazioni nuove: costi indicati non corretti (canone, attivazione…).": {
    partner_lei: "Da un controllo effettuato, i costi indicati per la nuova numerazione (canone/attivazione) non risultano corretti. La invitiamo a verificare le condizioni economiche previste e a fornirci i dati aggiornati, così da poter procedere correttamente con la pratica.”",
    partner_tu: "Da un controllo risulta che i costi indicati per la nuova numerazione (canone/attivazione) non sono corretti. Ti chiediamo di verificare le condizioni economiche previste e di inviarci i dati aggiornati, così da poter procedere con la pratica.",
    cliente_lei: "Da una verifica effettuata, i costi riportati per la nuova numerazione (canone/attivazione) non risultano conformi. La invitiamo a controllare le condizioni economiche previste e a trasmetterci i dati aggiornati per permetterci di procedere correttamente.",
    cliente_tu: "Da un controllo è emerso che i costi indicati per la nuova numerazione (canone/attivazione) non sono corretti. Ti suggerisco di rivedere le condizioni economiche e inviarci i dati aggiornati così da poter proseguire con la pratica."
  },
  "Per numerazioni in portabilità: prefisso non corrispondente al comune dell'indirizzo di attivazione.": {
    partner_lei: "Da un controllo effettuato sulla numerazione in portabilità, il prefisso indicato non risulta corrispondente al comune dell'indirizzo di attivazione. Per poter procedere correttamente con la pratica è necessario che il prefisso sia associato al comune di riferimento. La invitiamo pertanto a verificare la numerazione e a fornirci un prefisso conforme, così da consentirci di proseguire con l'attivazione.",
    partner_tu: "Da un controllo risulta che il prefisso della numerazione in portabilità non corrisponde al comune indicato per l'attivazione. Per procedere correttamente è necessario utilizzare un prefisso associato al comune di riferimento. Ti chiediamo quindi di verificare la numerazione e inviarci un prefisso corretto per poter proseguire con l'attivazione.",
    cliente_lei: "Da una verifica effettuata sulla numerazione in portabilità, il prefisso indicato non risulta coerente con il comune dell'indirizzo di attivazione. Per procedere con la pratica è necessario utilizzare un prefisso associato al comune di riferimento. La invitiamo a controllare la numerazione comunicata e a trasmetterci un prefisso conforme.",
    cliente_tu: "Da un controllo risulta che il prefisso della numerazione in portabilità non coincide con il comune dell'indirizzo di attivazione. Per poter procedere è necessario utilizzare un prefisso corretto per quel comune. Ti chiedo quindi di verificare la numerazione e inviarci il prefisso corretto così da poter continuare con l'attivazione."
  },
  "Per numerazioni in portabilità: costi indicati non corretti.": {
    partner_lei: "Da un controllo effettuato sulla numerazione in portabilità, i costi indicati non risultano corretti. La invitiamo a verificare le condizioni economiche previste e a fornirci i dati aggiornati, così da poter procedere correttamente con la pratica.",
    partner_tu: "Da un controllo risulta che i costi indicati per la numerazione in portabilità non sono corretti. Ti chiediamo di verificare le condizioni economiche e inviarci i dati aggiornati, così da poter proseguire con la pratica.",
    cliente_lei: "Da una verifica effettuata sulla numerazione in portabilità, i costi riportati non risultano conformi a quanto previsto. La invitiamo a controllare le condizioni economiche indicate e a trasmetterci i dati aggiornati per consentirci di procedere.",
    cliente_tu: "Da un controllo è emerso che i costi indicati per la numerazione in portabilità non sono corretti. Ti suggerisco di rivedere le condizioni economiche e inviarci i dati aggiornati, così da poter andare avanti con la pratica."
  },
  "Per numerazioni in portabilità: codice di migrazione sbagliato.": {
    partner_lei: "Da un controllo effettuato sulla numerazione in portabilità, il codice di migrazione indicato risulta errato. La invitiamo a verificarne l'esattezza e a fornirci il codice corretto, così da poter procedere con la pratica.",
    partner_tu: "Da un controllo risulta che il codice di migrazione fornito per la numerazione in portabilità è errato. Ti chiediamo di verificarlo e inviarci quello corretto, così da poter proseguire con la pratica.",
    cliente_lei: "Da una verifica effettuata, il codice di migrazione indicato per la numerazione in portabilità risulta non corretto. La invitiamo a controllare il dato fornito e a trasmetterci il codice corretto per consentirci di procedere.",
    cliente_tu: "Da un controllo è emerso che il codice di migrazione indicato per la portabilità non è corretto. Ti chiedo di verificarlo e inviarci quello giusto, così da poter continuare con la pratica."
  },
  "Per numerazioni in portabilità: numerazione ISDN multinumero, da confermare se portare anche la numerazione associata.": {
    partner_lei: "Da un controllo effettuato sulla numerazione in portabilità, risulta che si tratta di una linea ISDN multinumero. La invitiamo a confermare se, oltre alla numerazione principale, debba essere portata anche la numerazione associata. Qualora dovesse essere portata anch'essa le chiediamo cortesemente di inserire un altro servizio voce. Qualora invece il cliente intendesse perdere la numerazione, le chiediamo di darcene conferma.",
    partner_tu: "Da un controllo effettuato sulla numerazione in portabilità, risulta che si tratta di una linea ISDN multinumero. Il cliente intende portare solo la numerazione principale o anche la numerazione associata? Qualora volesse effettuare la portabilità anche del numero associato dovrà essere inserito un nuovo servizio voce. Se invece il cliente intendesse perdere la numerazione, ti chiedo gentilmente di darcene conferma.",
    cliente_lei: "Da un controllo effettuato sulla numerazione in portabilità, risulta che si tratta di una linea ISDN multinumero.La invitiamo a confermare se, oltre alla numerazione principale, debba essere portata anche la numerazione associata. Qualora dovesse essere portata anch'essa le chiediamo cortesemente di inserire un altro servizio voce. Qualora invece intendesse perdere tale numerazione, le chiediamo di darcene conferma.",
    cliente_tu: "Da un controllo effettuato sulla numerazione in portabilità, risulta che si tratta di una linea ISDN multinumero. Vuoi portare solo la numerazione principale o anche la numerazione associata? Qualora volessi effettuare la portabilità anche del numero associato dovrà essere inserito un nuovo servizio voce. Se invece non volessi mantenere tale numerazione, ti chiedo gentilmente di darcene conferma."
  },
  "Attivazione di un GNR su trunk.voipvoice.it senza indicare l'IP per la configurazione peer-to-peer.": {
    partner_lei: "Da un controllo effettuato sulla richiesta di attivazione del GNR su trunk.voipvoice.it, risulta che non è stato indicato l'indirizzo IP necessario per la configurazione in modalità peer-to-peer. La invitiamo a fornirci l'IP corretto, così da poter procedere con la configurazione del servizio.",
    partner_tu: "Dalla verifica sulla richiesta di attivazione del GNR su trunk.voipvoice.it risulta mancante l'indirizzo IP necessario per la configurazione peer-to-peer. Ti chiediamo di inviarci l'IP corretto così da poter proseguire con l'attivazione.",
    cliente_lei: "Da una verifica effettuata sulla richiesta di attivazione del GNR su trunk.voipvoice.it, rileviamo che non è stato fornito l'indirizzo IP richiesto per la configurazione peer-to-peer. La invitiamo a comunicarci l'IP necessario per consentirci di procedere con la configurazione.",
    cliente_tu: "Dal controllo effettuato sulla richiesta di attivazione del GNR su trunk.voipvoice.it manca l'indirizzo IP necessario per la configurazione peer-to-peer. Ti chiedo di inviarci l'IP corretto così da poter completare l'attivazione."
  },
  "Richiesta attivazione numero con servizio Flat Inbound su dominio diverso da sip.voipvoicetel.it (dominio da correggere).": {
    partner_lei: "Da un controllo effettuato sulla richiesta di attivazione del numero con servizio Flat Inbound, risulta che è stato indicato un dominio diverso da sip.voipvoicetel.it. La invitiamo a correggere il dominio e a fornirci quello corretto, così da poter procedere con l'attivazione del servizio.",
    partner_tu: "Dalla verifica effettuata sulla richiesta di attivazione del numero con Flat Inbound risulta che è stato indicato un dominio diverso da sip.voipvoicetel.it. Ti chiediamo di correggere il dominio e inviarci quello corretto per poter procedere con l'attivazione.",
    cliente_lei: "Da una verifica sulla richiesta di attivazione del numero con servizio Flat Inbound, rileviamo che il dominio indicato non corrisponde a sip.voipvoicetel.it. La invitiamo a comunicarci il dominio corretto per consentirci di procedere con la configurazione del servizio.",
    cliente_tu: "Da una verifica sulla richiesta di attivazione del numero con servizio Flat Inbound, rileviamo che il dominio indicato non corrisponde a sip.voipvoicetel.it. La invitiamo a comunicarci il dominio corretto per consentirci di procedere con la configurazione del servizio."
  },
  "Per Easy Solution (telefono, router, cuffie…): modello non indicato quando sono disponibili più modelli.": {
    partner_lei: "Da un controllo effettuato sulla richiesta Easy Solution, rileviamo che non è stato indicato il modello del dispositivo da fornire. Poiché sono disponibili più modelli, La invitiamo a specificare quello desiderato, così da poter procedere correttamente con la pratica.",
    partner_tu: "Dalla verifica della richiesta Easy Solution risulta che non è stato indicato il modello del dispositivo, e sono disponibili più varianti. Ti chiediamo quindi di indicarci il modello corretto per poter proseguire con la pratica.",
    cliente_lei: "Da una verifica effettuata, nella richiesta Easy Solution non è stato specificato il modello del dispositivo, e sono presenti più modelli disponibili. La invitiamo a indicarci il modello desiderato per consentirci di procedere.",
    cliente_tu: "Dal controllo effettuato sulla richiesta Easy Solution manca l'indicazione del modello del dispositivo (telefono, router, cuffie…), e ne sono disponibili diversi. Ti chiedo di comunicarci il modello che preferisci così da poter andare avanti con la pratica."
  },
  "Per Easy Solution: indirizzo di spedizione apparato non indicato.": {
    partner_lei: "Da un controllo effettuato, nell'ordine Easy Solution non risulta indicato l'indirizzo di spedizione dell'apparato. Per procedere correttamente con la pratica, può gentilmente fornirci l'indirizzo completo di destinatario?",
    partner_tu: "Da un controllo effettuato, nell'ordine Easy Solution non è stato inserito l'indirizzo di spedizione dell'apparato. Puoi inviarci l'indirizzo completo così procediamo con la lavorazione?",
    cliente_lei: "Da un controllo effettuato, per la fornitura Easy Solution manca l'indicazione dell'indirizzo di spedizione dell'apparato. Per consentirci di completare la pratica, può cortesemente comunicarci l'indirizzo completo?",
    cliente_tu: "Da un controllo effettuato, per la tua attivazione Easy Solution non abbiamo ancora l'indirizzo di spedizione dell'apparato. Puoi indicarci l'indirizzo completo così procediamo?"
  },
  "Easy Solution Router Small Level: manca la scelta tra Fritzbox 7530AX e TP-LINK EB431V.": {
    partner_lei: "Da un controllo effettuato, per l'ordine Easy Solution Router Small Level non risulta indicata la scelta tra Fritzbox 7530AX e TP-LINK EB431V. Per procedere correttamente, può gentilmente comunicarci il modello desiderato?",
    partner_tu: "Da un controllo effettuato, per l'ordine Easy Solution Router Small Level non è stata indicata la scelta tra Fritzbox 7530AX e TP-LINK EB431V. Puoi farci sapere quale modello preferisci così procediamo?",
    cliente_lei: "Da un controllo effettuato, per la fornitura Easy Solution Router Small Level manca l'indicazione della scelta tra Fritzbox 7530AX e TP-LINK EB431V. Per completare correttamente la pratica, può cortesemente indicarci il modello preferito?",
    cliente_tu: "Da un controllo effettuato, per la tua attivazione Easy Solution Router Small Level non è stata ancora indicata la scelta tra Fritzbox 7530AX e TP-LINK EB431V. Puoi dirci quale modello preferisci così procediamo?"
  },
  "Easy Solution Router Medium Level: manca la scelta tra Fritzbox 7690, Draytek 2765 o Draytek 2765AC.": {
    partner_lei: "Da un controllo effettuato, per l'ordine Easy Solution Router Medium Level non risulta indicata la scelta tra Fritzbox 7690, Draytek 2765 o Draytek 2765AC. Per procedere correttamente, può gentilmente comunicarci il modello desiderato?",
    partner_tu: "Da un controllo effettuato, per l'ordine Easy Solution Router Medium Level non è stata indicata la scelta tra Fritzbox 7690, Draytek 2765 o Draytek 2765AC. Puoi farci sapere quale modello preferisci così procediamo?",
    cliente_lei: "Da un controllo effettuato, per la fornitura Easy Solution Router Medium Level manca l'indicazione della scelta tra Fritzbox 7690, Draytek 2765 o Draytek 2765AC. Per completare correttamente la pratica, può cortesemente indicarci il modello preferito?",
    cliente_tu: "Da un controllo effettuato, per la tua attivazione Easy Solution Router Medium Level non è stata ancora indicata la scelta tra Fritzbox 7690, Draytek 2765 o Draytek 2765AC. Puoi dirci quale modello preferisci così procediamo?"
  },
  "Easy Solution Router High Level: manca la scelta tra Draytek 2865, 2865AC, 2927, 2927AC o Mikrotik RB4011.": {
    partner_lei: "Da un controllo effettuato, per l'ordine Easy Solution Router High Level non risulta indicata la scelta tra Draytek 2865, 2865AC, 2927, 2927AC o Mikrotik RB4011. Per procedere correttamente, può gentilmente comunicarci il modello desiderato?",
    partner_tu: "Da un controllo effettuato, per l'ordine Easy Solution Router High Level non è stata indicata la scelta tra Draytek 2865, 2865AC, 2927, 2927AC o Mikrotik RB4011. Puoi farci sapere quale modello preferisci così procediamo?",
    cliente_lei: "Da un controllo effettuato, per la fornitura Easy Solution Router High Level manca l'indicazione della scelta tra Draytek 2865, 2865AC, 2927, 2927AC o Mikrotik RB4011. Per completare correttamente la pratica, può cortesemente indicarci il modello preferito?",
    cliente_tu: "Da un controllo effettuato, per la tua attivazione Easy Solution Router High Level non è stata ancora indicata la scelta tra Draytek 2865, 2865AC, 2927, 2927AC o Mikrotik RB4011. Puoi dirci quale modello preferisci così procediamo?"
}
};



/* =========================
   BOZZE GENERICHE
   ========================= */

const QUICK_TEMPLATES = {
  subentro_partner_lei: {
    subject: "Richiesta documentazione per subentro",
    body: [
      "Gentile Partner,",
      "",
      "per garantire una gestione corretta e senza ritardi delle pratiche di subentro, riportiamo di seguito le istruzioni complete su ciò che deve essere raccolto dal cliente, incluse tutte le verifiche necessarie sui documenti e sui moduli.",
      "",
      "1. DOCUMENTI DA RACCOGLIERE DAL CLIENTE",
      "",
      "Documenti del cedente (attuale intestatario)",
      "- Carta d'identità valida del Legale Rappresentante della società cedente.",
      "",
      "Documenti del subentrante (nuovo intestatario)",
      "- Carta d’identità valida del Legale Rappresentante.",
      "- Tessera sanitaria del Legale Rappresentante.",
      "- Documento d’identità del firmatario del conto bancario (se diverso dal Legale Rappresentante).",
      "",
      "⚠️ Prima di inviarli, verificare che siano leggibili, integri e non scaduti.",
      "",
      "2. MODULISTICA DA FAR COMPILARE AL CLIENTE",
      "",
      "A) Dichiarazione di autorizzazione al rilascio delle linee e dei servizi",
      "(da compilarsi solo dalla società cedente)",
      "",
      "La dichiarazione deve essere:",
      "- emessa su carta intestata del cedente,",
      "- correttamente datata e firmata,",
      "- completa di timbro aziendale (quando previsto).",
      "",
      "La dichiarazione deve riportare obbligatoriamente:",
      "- elenco completo dei servizi da volturare",
      "  (numerazioni, canoni, codici servizio, codici connettività, ecc.)",
      "- dati del cedente e del subentrante",
      "- autorizzazione esplicita al trasferimento dei servizi",
      "",
      "📎 Un fac-simile è allegato alla comunicazione.",
      "",
      "B) Modulo di attivazione servizi – da far compilare alla società subentrante",
      "",
      "Il modulo è composto da due parti:",
      "",
      "1. Sezione “Dati anagrafici e modalità di pagamento”",
      "Assicurarsi che il cliente compili correttamente:",
      "- Ragione sociale / Nome e cognome",
      "- Codice fiscale e Partita IVA",
      "- Sede legale completa",
      "- Referente amministrativo (mail non PEC, tel)",
      "- Referente tecnico (mail e cellulare)",
      "- IBAN per l’addebito (solo IBAN italiano)",
      "",
      "⚠️ Suggerimento: verificare IBAN, mail e CF prima dell’invio: sono tra le cause più comuni di sospensione.",
      "",
      "2. Sezione “Servizi da volturare”",
      "Il partner deve riportare in modo identico a quanto presente nel contratto del cedente:",
      "- ogni servizio attivo",
      "- il relativo canone mensile",
      "- numerazioni voce coinvolte",
      "- codici connettività / codici servizio",
      "- eventuali servizi opzionali o pacchetti",
      "",
      "La dichiarazione del cedente e l’offerta del subentrante devono essere perfettamente coerenti.",
      "",
      "In questa sezione deve essere aggiunta la voce:",
      "“Subentro – costo una tantum € 100,00 + IVA”",
      "",
      "La sezione “Allegati” va lasciata vuota.",
      "",
      "3. ASPETTI CONTRATTUALI DA COMUNICARE AL CLIENTE",
      "",
      "Per evitare contestazioni successive, è importante informare il cliente che:",
      "- Il Subentrante eredita completamente il contratto del cedente",
      "- Il Subentrante subentra anche nei debiti eventualmente non ancora saldati.",
      "",
      "Le fatture del cedente ancora aperte vengono:",
      "- stornate",
      "- riemesse al subentrante",
      "",
      "4. INVIO DELLA DOCUMENTAZIONE",
      "",
      "Il partner deve raccogliere tutti i documenti in un'unica mail ed inviarli a:",
      "- PEC: info@pec.voipvoice.it",
      "- Fax: 055 0935522",
      "",
      "⚠️ Assicurarsi di non inviare foto sfocate / documenti parziali: la pratica verrà sospesa.",
      "",
      "5. TEMPI DI LAVORAZIONE",
      "",
      "Una volta ricevuta la modulistica completa e corretta, la pratica verrà lavorata entro la successiva fatturazione utile.",
      "",
      "Il costo operativo del subentro è:",
      "💶 € 100,00 + IVA – addebitato alla società subentrante."
    ].join("\n")
  },

  subentro_cliente_lei: {
    subject: "Richiesta documentazione per subentro",
    body: [
      "Gentile Cliente,",
      "",
      "per poter procedere con il subentro richiesto, Le indichiamo di seguito tutta la documentazione necessaria e le istruzioni da seguire con particolare attenzione, così da evitare ritardi nella lavorazione.",
      "",
      "DOCUMENTI DA ALLEGARE (obbligatori per la lavorazione)",
      "",
      "- Documento del cedente (attuale intestatario).",
      "- Copia carta d’identità valida del Legale Rappresentante della società cedente.",
      "- Documenti del subentrante (nuovo intestatario).",
      "- Copia carta d’identità valida del Legale Rappresentante.",
      "- Copia tessera sanitaria del Legale Rappresentante.",
      "- Eventuale documento d'identità del firmatario del conto bancario (se diverso dal Legale Rappresentante).",
      "",
      "NB: Il mancato invio dei documenti sopra indicati comporta la sospensione della pratica.",
      "",
      "MODULISTICA DA COMPILARE E FIRMARE",
      "",
      "A) Dichiarazione di autorizzazione al rilascio delle linee e dei servizi",
      "Documento redatto su carta intestata della società cedente, che deve includere:",
      "",
      "- Elenco completo dei servizi da volturare (con codici servizio / codici connettività consultabili all’interno della copia di cortesia delle fatture).",
      "- Dati della società cedente e della società subentrante.",
      "- Firma e timbro del cedente.",
      "- Data della dichiarazione.",
      "",
      "📎 In allegato trova un fac-simile da utilizzare come riferimento.",
      "",
      "B) Modulo di attivazione servizi – da compilare dal subentrante",
      "Il modulo è composto da due sezioni principali:",
      "",
      "1. Sezione “Dati anagrafici e modalità di pagamento”",
      "Il subentrante deve indicare:",
      "",
      "- Ragione sociale / Nome e cognome.",
      "- Codice fiscale / Partita IVA.",
      "- Indirizzo completo della sede legale.",
      "- Referenti amministrativo e tecnico con mail e cellulare.",
      "- IBAN per l’addebito (solo IBAN italiano).",
      "",
      "⚠️ Verificare che tutti i dati siano completi e corretti: eventuali difformità richiedono integrazione.",
      "",
      "2. Sezione “Servizi da volturare”",
      "Occorre riportare in modo preciso:",
      "",
      "- Tutti i servizi attivi sul cedente.",
      "- Relativi canoni mensili.",
      "",
      "NB: L’elenco deve essere coerente con quanto indicato nella dichiarazione della società cedente.",
      "",
      "- Inoltre, deve essere inserita la voce:",
      "“Subentro – costo una tantum € 100,00 + IVA”",
      "",
      "ASPETTI CONTRATTUALI",
      "",
      "Ai sensi dell’art. 6 delle Condizioni Generali di Fornitura:",
      "Il Subentrante assume la stessa posizione giuridica del Cedente, succedendo in tutti i diritti e accollandosi tutti gli obblighi contrattuali.",
      "",
      "Eventuali fatture già emesse e non saldate verranno stornate e riemesse a nome del subentrante, salvo diverse indicazioni da parte del cedente.",
      "",
      "Se desidera volturare anche un contratto di manutenzione, La invitiamo a contattarci ai seguenti recapiti:",
      "055 0935400",
      "servizioclienti@voipvoice.it",
      "",
      "INVIO DELLA DOCUMENTAZIONE",
      "",
      "Tutti i documenti devono essere inviati a uno dei seguenti recapiti:",
      "- PEC: info@pec.voipvoice.it",
      "- Fax: 055 0935522",
      "",
      "TEMPI DI LAVORAZIONE",
      "",
      "Una volta ricevuta la modulistica completa e corretta, procederemo con l'attivazione del subentro entro la successiva fatturazione utile.",
      "Il costo dell’operazione è pari a € 100,00 + IVA (una tantum) e verrà addebitato al subentrante direttamente in fattura."
    ].join("\n")
  }
};

/* =========================
   BOZZE GENERICHE – APPLICA
   ========================= */

function applicaBozzaRapida(prefix) {
  // prefix: "pre" per Presales, "prov" per Provisioning
  const selectId = prefix === "pre" ? "pre_quick_template" : "prov_quick_template";
  const select = document.getElementById(selectId);
  if (!select) {
    console.warn("Select bozze rapide non trovata per prefix:", prefix);
    return;
  }

  const key = select.value;
  if (!key) {
    alert("Seleziona una bozza generica dall'elenco.");
    return;
  }

  const tpl = QUICK_TEMPLATES[key];
  if (!tpl) {
    alert("La bozza selezionata non è disponibile.");
    return;
  }

  const oggettoEl = document.getElementById(prefix + "_oggetto");
  const corpoEl = document.getElementById(prefix + "_corpo");

  if (!oggettoEl || !corpoEl) {
    console.warn("Campi oggetto/corpo non trovati per prefix:", prefix);
    return;
  }


  if (!oggettoEl.value.trim()) {
    oggettoEl.value = tpl.subject || "";

  }
  corpoEl.value = tpl.body || "";
};


/* =========================
   FRASI PER ELENCO ERRORI
   ========================= */

function buildBulletIntro(formaVal) {
  if (formaVal === "lei") {
    return "\n\nNel dettaglio, Le chiediamo di verificare i seguenti punti:\n";
  } else {
    return "\n\nNel dettaglio, ti chiediamo di verificare i seguenti punti:\n";
  }
}

function buildErrorSentence(errText, destVal, formaVal) {
  const base = errText.replace(/\s*\.+\s*$/, ""); // tolgo il punto finale

  if (formaVal === "lei") {
    return `relativamente a "${base}", La invitiamo ad aggiornare e integrare il modulo di conseguenza, così da poter procedere con la lavorazione.`;
  } else {
    return `relativamente a "${base}", ti chiediamo di aggiornare e integrare il modulo di conseguenza, così da poter procedere con la lavorazione.`;
  }
}

/* =========================
   COSTRUZIONE UI ERRORI
   ========================= */

function buildErrorUI(prefix, section) {
  const containerId = prefix === "pre" ? "pre_errors_container" : "prov_errors_container";
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  const filtered = CATEGORIES.filter(cat =>
    cat.section === "both" ||
    cat.section === section
  ).sort((a, b) => a.id - b.id);

  filtered.forEach(cat => {
    const catDiv = document.createElement("div");
    catDiv.className = "category";

    const header = document.createElement("div");
    header.className = "category-header";

    const left = document.createElement("div");
    const title = document.createElement("span");
    title.className = "category-title";
    title.textContent = cat.title;

    const tag = document.createElement("span");
    tag.className = "category-tag";
    tag.textContent = cat.tag || "";

    left.appendChild(title);
    left.appendChild(tag);

    const chevron = document.createElement("span");
    chevron.className = "chevron";
    // categorie aperte di default
    chevron.textContent = "▲";

    header.appendChild(left);
    header.appendChild(chevron);

    const body = document.createElement("div");
    body.className = "category-body";
    // visibili di default
    body.style.display = "none";

    const chips = document.createElement("div");
    chips.className = "chip-group";

    cat.errors.forEach((errText, idx) => {
      const label = document.createElement("label");
      label.className = "chip";
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.value = prefix + "_" + cat.id + "_" + idx;
      cb.dataset.errorText = errText;
      label.appendChild(cb);
      label.appendChild(document.createTextNode(errText));
      chips.appendChild(label);
    });

    body.appendChild(chips);

    header.addEventListener("click", () => {
      const visible = body.style.display === "block";
      body.style.display = visible ? "none" : "block";
      chevron.textContent = visible ? "▼" : "▲";
    });

    catDiv.appendChild(header);
    catDiv.appendChild(body);
    container.appendChild(catDiv);
  });
}

/* =========================
   RICERCA ERRORI
   ========================= */

function setupSearch(prefix, section) {
  const inputId = prefix === "pre" ? "pre_search" : "prov_search";
  const buttonId = prefix === "pre" ? "pre_search_btn" : "prov_search_btn";
  const containerId = prefix === "pre" ? "pre_errors_container" : "prov_errors_container";

  const input = document.getElementById(inputId);
  const button = document.getElementById(buttonId);
  const container = document.getElementById(containerId);
  if (!input || !container) return;

  const applyFilter = () => {
    const q = input.value.trim().toLowerCase();
    const categories = container.querySelectorAll(".category");

    categories.forEach(cat => {
      let anyMatch = false;
      const chips = cat.querySelectorAll(".chip");

      chips.forEach(chip => {
        const text = chip.textContent.toLowerCase();
        const match = !q || text.includes(q);
        chip.style.display = match ? "" : "none";
        if (match) anyMatch = true;
      });

      cat.style.display = anyMatch ? "" : "none";

      const body = cat.querySelector(".category-body");
      const chevron = cat.querySelector(".chevron");
      if (q && anyMatch) {
        body.style.display = "block";
        if (chevron) chevron.textContent = "▲";
      }
    });
  };

  input.addEventListener("input", applyFilter);
  if (button) {
    button.addEventListener("click", applyFilter);
  }
}

/* =========================
   GENERAZIONE BOZZA
   ========================= */

function generaBozza(prefix) {
  const isPre = prefix === "pre";

  const dest = document.querySelector(`input[name='${prefix}_destinatario']:checked`);
  const forma = document.querySelector(`input[name='${prefix}_forma']:checked`);
  const tono = document.querySelector(`input[name='${prefix}_tono']:checked`);

  if (!dest || !forma || !tono) {
    alert("Selezioni destinatario, forma di cortesia e tono prima di generare la bozza.");
    return;
  }

  const destVal = dest.value;      // partner | cliente
  const formaVal = forma.value;    // lei | tu
  const tonoVal = tono.value;      // formale | collaborativo | diretto

  const nomeCliente = (document.getElementById(prefix + "_nomeCliente")?.value.trim()) || "il cliente";
  const rifPratica = (document.getElementById(prefix + "_rifPratica")?.value.trim()) || "";

  const key = destVal + "_" + formaVal;
  const introTemplate = INTRO_TEMPLATES[key][tonoVal];
  const outroTemplate = OUTRO_TEMPLATES[key][tonoVal];

  const containerId = prefix === "pre" ? "pre_errors_container" : "prov_errors_container";
  const checked = Array.from(document.querySelectorAll(`#${containerId} input[type='checkbox']:checked`));

  const corpoEl = document.getElementById(prefix + "_corpo");
  const oggettoEl = document.getElementById(prefix + "_oggetto");

  if (checked.length === 0) {
    corpoEl.value = "";
    oggettoEl.value = "";
    alert("Selezioni almeno un errore per generare la bozza.");
    return;
  }

  // OGGETTO
  let oggettoBase = isPre
    ? "Richiesta integrazioni documentali"
    : "Richiesta integrazioni per modulo di subentro / voltura";

  let oggetto = oggettoBase;
  if (nomeCliente && nomeCliente !== "il cliente") {
    oggetto += " – " + nomeCliente;
  }
  if (rifPratica) {
    oggetto += " – Rif: " + rifPratica;
  }
  oggettoEl.value = oggetto;

  // CORPO
  let intro = introTemplate.replace("{{cliente}}", nomeCliente);
  let elenco = buildBulletIntro(formaVal);
  const bullet = "• ";

  const keyTemplate = `${destVal}_${formaVal}`; // es: "partner_lei"

  checked.forEach(cb => {
    const errText = cb.dataset.errorText;
    const tmplGroup = ERROR_TEMPLATES[errText];

    let frase;
    if (tmplGroup && tmplGroup[keyTemplate]) {
      frase = tmplGroup[keyTemplate];
    } else {
      // se non c'è un template specifico, uso la frase generica
      frase = buildErrorSentence(errText, destVal, formaVal);
    }

    elenco += bullet + frase + "\n";
  });

  const corpo = intro + elenco + outroTemplate;
  corpoEl.value = corpo;

}

/* =========================
   UTILITY
   ========================= */

function clearSelection(prefix) {
  const containerId = prefix === "pre" ? "pre_errors_container" : "prov_errors_container";
  document.querySelectorAll(`#${containerId} input[type='checkbox']`).forEach(cb => cb.checked = false);
  const corpoEl = document.getElementById(prefix + "_corpo");
  const oggettoEl = document.getElementById(prefix + "_oggetto");
  if (corpoEl) corpoEl.value = "";
  if (oggettoEl) oggettoEl.value = "";
}

function copiaTesto(prefix) {
  const textarea = document.getElementById(prefix + "_corpo");
  if (!textarea || !textarea.value) {
    alert("Non c'è ancora alcun testo da copiare. Generi prima una bozza.");
    return;
  }
  textarea.select();
  document.execCommand("copy");
  alert("Testo copiato negli appunti.");
}

/* =========================
   INIZIALIZZAZIONE
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  // Presales
  if (document.getElementById("pre_errors_container")) {
    buildErrorUI("pre", "presales");
    setupSearch("pre", "presales");
  }
  // Provisioning
  if (document.getElementById("prov_errors_container")) {
    buildErrorUI("prov", "provisioning");
    setupSearch("prov", "provisioning");
  }
});
