const wordArray = [
  "abakus",
  "abandon",
  "abbé",
  "abbedissa",
  "abborre",
  "abborrgrund",
  "abborrpinne",
  "abbot",
  "abbotsstift",
  "abbreviatur",
  "abc",
  "abc-bok",
  "abc-stridsmedel",
  "Abchazien",
  "abchazier",
  "abchazisk",
  "abchaziska",
  "abderitisk",
  "abdikation",
  "abdikera",
  "abdomen",
  "abdominal",
  "aber",
  "aberration",
  "Abessinien",
  "abessinier",
  "abessinsk",
  "abessinska",
  "abilitet",
  "abiturient",
  "abiturientklass",
  "ablation",
  "ablativ",
  "abnorm",
  "abnormitet",
  "abnormtillstånd",
  "abolition",
  "abolitionism",
  "abonnemang",
  "abonnemangsavgift",
  "abonnemangskonsert",
  "abonnemangssystem",
  "abonnemangsvillkor",
  "abonnent",
  "abonnentförteckning",
  "abonnentnummer",
  "abonnera",
  "aborigin",
  "aboriginsk",
  "abort",
  "abortera",
  "abortering",
  "abortframkallande",
  "abortförebyggande",
  "abortgräns",
  "abortingrepp",
  "abortiv",
  "abortklinik",
  "abortlag",
  "abortlagstiftning",
  "abortmotstånd",
  "abortmotståndare",
  "abortpiller",
  "aborträtt",
  "abortsökande",
  "abortör",
  "abradera",
  "abrakadabra",
  "abrasion",
  "abrasionsbrant",
  "abrasionsvittne",
  "abrovink",
  "abrupt",
  "abscess",
  "abscessbildning",
  "absens",
  "absent",
  "absid",
  "absidkyrka",
  "absint",
  "absintgrön",
  "abskissa",
  "absolut",
  "absolutbelopp",
  "absoluthet",
  "absolution",
  "absolutism",
  "absolutist",
  "absolutistisk",
  "absolvera",
  "absolvering",
  "absorbent",
  "absorbera",
  "absorption",
  "absorptionsförmåga",
  "abstinens",
  "abstinensbesvär",
  "abstinenssymtom",
  "abstract",
  "abstrahera",
  "abstrakt",
  "abstraktion",
  "abstraktionsförmåga",
  "abstraktionsnivå",
  "abstrus",
  "absurd",
  "absurdism",
  "absurdist",
  "absurdistisk",
  "absurditet",
  "abundans",
  "abundant",
  "acajounöt",
  "acajouträd",
  "accedera",
  "accelerando",
  "acceleration",
  "accelerationsförmåga",
  "accelerationssträcka",
  "accelerator",
  "acceleratoranläggning",
  "accelerera",
  "accent",
  "accentfärg",
  "accentförskjutning",
  "accenttecken",
  "accentuera",
  "accentuering",
  "accept",
  "acceptabel",
  "acceptans",
  "acceptant",
  "acceptera",
  "accepterande",
  "acceptpris",
  "access",
  "accession",
  "accessionskatalog",
  "accessoar",
  "accessorisk",
  "accidens",
  "accidenstryck",
  "accidentell",
  "accis",
  "accisfri",
  "accispliktig",
  "acetaldehyd",
  "acetat",
  "aceton",
  "acetyl",
  "acetylen",
  "acetylengas",
  "acetylensvetsning",
  "acetylentub",
  "acetylsalicylsyra",
  "aciditet",
  "acidofilus",
  "ack",
  "ackja",
  "acklamation",
  "acklimatisera",
  "acklimatisera sig",
  "acklimatisering",
  "acklimatiseringsperiod",
  "acklimatiseringssvårigheter",
  "ackommodation",
  "ackommodationsförmåga",
  "ackommodera",
  "ackommodering",
  "ackompanjatris",
  "ackompanjatör",
  "ackompanjemang",
  "ackompanjemangsinstrument",
  "ackompanjera",
  "ackord",
  "ackordeon",
  "ackordera",
  "ackordera ut",
  "ackordering",
  "ackordföljd",
  "ackordisk",
  "ackordsarbete",
  "ackordsförhandling",
  "ackordsförslag",
  "ackordshets",
  "ackordsjobb",
  "ackordslön",
  "ackordspris",
  "ackordssystem",
  "ackordssättning",
  "ackordsuppgörelse",
  "ackordtabell",
  "ackreditera",
  "ackrediterad",
  "ackreditering",
  "ackumulation",
  "ackumulativ",
  "ackumulator",
  "ackumulatorbatteri",
  "ackumulatortank",
  "ackumulera",
  "ackumulering",
  "ackurat",
  "ackuratess",
  "ackusativ",
  "ackusativform",
  "ackusativobjekt",
  "ackuschör",
  "ackvirera",
  "ackvisition",
  "ackvisitör",
  "action",
  "actionfilm",
  "actionhjälte",
  "actionkomedi",
  "actionrulle",
  "actionscen",
  "actionserie",
  "actionthriller",
  "ad hoc",
  "ad hoc-lösning",
  "ad notam",
  "AD-vitamin",
  "adagietto",
  "adagio",
  "adagiosats",
  "adamsdräkt",
  "adamskostym",
  "adamsäpple",
  "adaptation",
  "adapter",
  "adaptera",
  "adaptering",
  "adaption",
  "adaptiv",
  "adb",
  "addend",
  "addenda",
  "addera",
  "addering",
  "additament",
  "addition",
  "additionstecken",
  "additiv",
  "adekvans",
  "adekvat",
  "adel",
  "adelsbrev",
  "adelsdam",
  "adelsfamilj",
  "adelskalender",
  "adelskap",
  "adelsman",
  "adelsmärke",
  "adelsmöte",
  "adelsprivilegium",
  "adelssläkt",
  "adelsstånd",
  "adelstitel",
  "adenin",
  "adenit",
  "adenoid",
  "adenom",
  "adept",
  "aderton",
  "adhesion",
  "adhesionskraft",
  "adhesiv",
  "adiafora",
  "adjektiv",
  "adjektivattribut",
  "adjektivisk",
  "adjungera",
  "adjungering",
  "adjunkt",
  "adjunktion",
  "adjunktur",
  "adjutant",
  "adjö",
  "adla",
  "adlande",
  "adlig",
  "administration",
  "administrationsapparat",
  "administrationskostnad",
  "administrationslokal",
  "administrativ",
  "administratör",
  "administrera",
  "admittans",
  "admonition",
  "adolescens",
  "adonis",
  "adoptant",
  "adoptera",
  "adoption",
  "adoptionsansökan",
  "adoptionsbyrå",
  "adoptionsförmedling",
  "adoptionsförälder",
  "adoptionsutredning",
  "adoptionsärende",
  "adoptiv",
  "adoptivbarn",
  "adoptivdotter",
  "adoptivfamilj",
  "adoptivfar",
  "adoptivförälder",
  "adoptivhem",
  "adoptivmamma",
  "adoptivmor",
  "adoptivpappa",
  "adoptivson",
  "adoratör",
  "adrenalin",
  "adrenalinhalt",
  "adrenalinkick",
  "adrenalinnivå",
  "adrenalinpåslag",
  "adrenalinstinn",
  "adress",
  "adressat",
  "adressbok",
  "adressera",
  "adressera sig",
  "adressering",
  "adresskalender",
  "adresskort",
  "adresslapp",
  "adresslista",
  "adressregister",
  "adressuppgift",
  "adressändring",
  "adsorbera",
  "adsorption",
  "adstringerande",
  "aducera",
  "aducering",
  "advent",
  "adventist",
  "adventiv",
  "adventivknopp",
  "adventivväxt",
  "adventsgudstjänst",
  "adventskalender",
  "adventskonsert",
  "adventsljus",
  "adventsljusstake",
  "adventsmusik",
  "adventspsalm",
  "adventsstake",
  "adventsstjärna",
  "adventssöndag",
  "adventstid",
  "adverb",
  "adverbial",
  "adverbiell",
  "advers",
  "adversativ",
  "advocering",
  "advokat",
  "advokatarvode",
  "advokatbyrå",
  "advokatfirma",
  "advokathjälp",
  "advokatkontor",
  "advokatkostnad",
  "advokatorisk",
  "advokatsamfund",
  "advokatsed",
  "advokatyr",
  "aero-",
  "aerob",
  "aerobics",
  "aerobisk",
  "aerodrom",
  "aerodynamik",
  "aerodynamisk",
  "aerogram",
  "aeroklubb",
  "aerologi",
  "aerologisk",
  "aeronaut",
  "aeronautik",
  "aeronautisk",
  "aeroplan",
  "aerosol",
  "aerosolförpackning",
  "aerosolsprej",
  "aerostat",
  "aerostatik",
  "aerostatisk",
  "afasi",
  "afatiker",
  "afatisk",
  "affekt",
  "affekterad",
  "affektfri",
  "affektion",
  "affektionsvärde",
  "affektiv",
  "affektladdad",
  "afficiera",
  "afficiering",
  "affidavit",
  "affilierad",
  "affinera",
  "affinering",
  "affinitet",
  "affirmation",
  "affirmativ",
  "affirmera",
  "affisch",
  "affischera",
  "affischering",
  "affischkampanj",
  "affischkonst",
  "affischnamn",
  "affischpelare",
  "affischtavla",
  "affischör",
  "affix",
  "affrikata",
  "affär",
  "affärsangelägenhet",
  "affärsanställd",
  "affärsavtal",
  "affärsbank",
  "affärsbegåvad",
  "affärsbegåvning",
  "affärsbekant",
  "affärsbesök",
  "affärsbiträde",
  "affärsbrev",
  "affärscenter",
  "affärscentrum",
  "affärsdrivande",
  "affärsenhet",
  "affärsetik",
  "affärsfastighet",
  "affärsfolk",
  "affärsförbindelse",
  "affärsföretag",
  "affärsförhandling",
  "affärsgalleria",
  "affärsgata",
  "affärshemlighet",
  "affärshus",
  "affärsidé",
  "affärsidkare",
  "affärsimperium",
  "affärsinnehavare",
  "affärsintresse",
  "affärsjuridik",
  "affärsjurist",
  "affärskedja",
  "affärsklass",
  "affärsklimat",
  "affärskollega",
  "affärskompanjon",
  "affärskoncept",
  "affärskontakt",
  "affärskorrespondens",
  "affärskretsar",
  "affärskultur",
  "affärskvarter",
  "affärskvinna",
  "affärsliv",
  "affärslokal",
  "affärslunch",
  "affärsläge",
  "affärsman",
  "affärsmetod",
  "affärsmodell",
  "affärsmoral",
  "affärsmässig",
  "affärsmässighet",
  "affärsmöjlighet",
  "affärsmöte",
  "affärsområde",
  "affärsområdeschef",
  "affärspartner",
  "affärsplan",
  "affärspress",
  "affärsprojekt",
  "affärsrelation",
  "affärsresa",
  "affärsresenär",
  "affärsrörelse",
  "affärssed",
  "affärssinne",
  "affärsstrategi",
  "affärsstråk",
  "affärstid",
  "affärstidning",
  "affärstransaktion",
  "affärsuppgörelse",
  "affärsupplägg",
  "affärsutveckling",
  "affärsverk",
  "affärsverksamhet",
  "affärsvän",
  "affärsvärld",
  "affärsägare",
  "affärsängel",
  "affärsöverenskommelse",
  "afghan",
  "afghanhund",
  "Afghanistan",
  "afghansk",
  "afghanska",
  "aflatoxin",
  "aforism",
  "aforismsamling",
  "aforistik",
  "aforistiker",
  "aforistisk",
  "Afrika",
  "afrikaan",
  "afrikaans",
  "afrikan",
  "afrikanisera",
  "afrikanisering",
  "afrikanist",
  "afrikansk",
  "afrikanska",
  "afro-",
  "afroamerikan",
  "afroamerikansk",
  "afroasiatisk",
  "afrodisiakum",
  "afrofrisyr",
  "afropop",
  "afrosvensk",
  "aftershave",
  "afterski",
  "afterwork",
  "afton",
  "aftonbön",
  "aftondräkt",
  "aftonglöd",
  "aftongudstjänst",
  "aftonhimmel",
  "aftonklädd",
  "aftonklädsel",
  "aftonklänning",
  "aftonkvisten",
  "aftonrodnad",
  "aftonskola",
  "aftonsol",
  "aftonstjärna",
  "aftonstund",
  "aftonsång",
  "aftontoalett",
  "aftonvard",
  "ag",
  "aga",
  "agaförbud",
  "agape",
  "agat",
  "agatsnäcka",
  "agave",
  "agavekaktus",
  "agenda",
  "agens",
  "agent",
  "agentfilm",
  "agentroman",
  "agentskap",
  "agentur",
  "agenturfirma",
  "agera",
  "agerande",
  "agg",
  "agglomerat",
  "agglomeration",
  "agglomerera",
  "agglomerering",
  "agglutination",
  "agglutinera",
  "agglutinin",
  "aggravera",
  "aggravering",
  "aggregat",
  "aggregation",
  "aggregationstillstånd",
  "aggregera",
  "aggression",
  "aggressionshandling",
  "aggressionshämmad",
  "aggressionshämning",
  "aggressionspolitik",
  "aggressionsutbrott",
  "aggressiv",
  "aggressivitet",
  "aggressor",
  "agility",
  "agio",
  "agitation",
  "agitationsmöte",
  "agitator",
  "agitatorisk",
  "agitera",
  "agn",
  "agna",
  "agnater",
  "agnatisk",
  "agnfisk",
  "agning",
  "agnosticism",
  "agnostiker",
  "agnostisk",
  "agoni",
  "agorafobi",
  "agraff",
  "agrar",
  "agrarparti",
  "agrarpolitik",
  "agreabel",
  "agremang",
  "agremanger",
  "agrikultur",
  "agrikulturell",
  "agrolog",
  "agronom",
  "agronomexamen",
  "agronomi",
  "agronomisk",
  "agtak",
  "ah",
  "aha",
  "aha-upplevelse",
  "aids",
  "aidsbekämpning",
  "aidsdrabbad",
  "aidsepidemi",
  "aidsfall",
  "aidsforskning",
  "aidsmedicin",
  "aidspatient",
  "aidssjuk",
  "aidssmittad",
  "aidstest",
  "aidstesta",
  "aidsvaccin",
  "aidsvirus",
  "aikido",
  "ailurofobi",
  "ainu",
  "aioli",
  "air",
  "airbag",
  "airbaghjälm",
  "airedaleterrier",
  "aiss",
  "aj",
  "ajabaja",
  "ajour",
  "ajourföra",
  "ajourföring",
  "ajourhålla",
  "ajourhållning",
  "ajournera",
  "ajournering",
  "ajöss",
  "akacia",
  "akaciehonung",
  "akacieträd",
  "akademi",
  "akademiker",
  "akademikergrupp",
  "akademikeryrke",
  "akademiledamot",
  "akademiräntmästare",
  "akademisekreterare",
  "akademisk",
  "akademism",
  "akademist",
  "akajer",
  "akantus",
  "akantusblad",
  "akatalektisk",
  "akilleshäl",
  "akillessena",
  "akleja",
  "akne",
  "aknebehandling",
  "aknemedel",
  "akolut",
  "akonitin",
  "akribi",
  "akrobat",
  "akrobatik",
  "akrobatisk",
  "akrobatnummer",
  "akrobattrupp",
  "akromegali",
  "akronym",
  "akropol",
  "akrostikon",
  "akryl",
  "akrylamid",
  "akrylat",
  "akrylatplast",
  "akrylfiber",
  "akrylfärg",
  "akrylgarn",
  "akrylglas",
  "akrylmålning",
  "akrylplast",
  "akrylsyra",
  "akt",
  "akta",
  "akta sig",
  "akter",
  "akterbrygga",
  "akterdel",
  "akterdäck",
  "akterhytt",
  "akterifrån",
  "akterkastell",
  "akterlanterna",
  "akterlig",
  "akterlucka",
  "akterom",
  "akterparti",
  "akterpik",
  "aktersalong",
  "aktersegla",
  "akterseglad",
  "akterskepp",
  "aktersnurra",
  "akterspegel",
  "akterst",
  "aktersta",
  "akterstäv",
  "aktertoft",
  "akterut",
  "akteråra",
  "akteröver",
  "aktie",
  "aktieaffär",
  "aktieanalytiker",
  "aktieandel",
  "aktiebeskattning",
  "aktiebok",
  "aktiebolag",
  "aktiebolagslag",
  "aktiebrev",
  "aktiebubbla",
  "aktiebörs",
  "aktieemission",
  "aktiefond",
  "aktieförsäljning",
  "aktiehandel",
  "aktiehandlare",
  "aktieindex",
  "aktieinnehav",
  "aktiekapital",
  "aktieklipp",
  "aktiekurs",
  "aktieköp",
  "aktielägenhet",
  "aktiemajoritet",
  "aktiemarknad",
  "aktiemäklare",
  "aktieomsättning",
  "aktieoption",
  "aktieplacerare",
  "aktieplacering",
  "aktieportfölj",
  "aktiepost",
  "aktieslag",
  "aktiesparande",
  "aktiesparare",
  "aktiesparfond",
  "aktiesparklubb",
  "aktiespekulation",
  "aktiestock",
  "aktieteckning",
  "aktietips",
  "aktietorg",
  "aktieutdelning",
  "aktievinst",
  "aktievärde",
  "aktieägande",
  "aktieägare",
  "aktinium",
  "aktion",
  "aktionsart",
  "aktionsdag",
  "aktionsforskning",
  "aktionsgrupp",
  "aktionsplan",
  "aktionspotential",
  "aktionsprogram",
  "aktionsradie",
  "aktionstid",
  "aktiv",
  "aktiva",
  "aktivera",
  "aktivering",
  "aktivism",
  "aktivist",
  "aktivistgrupp",
  "aktivistisk",
  "aktivistnätverk",
  "aktivitet",
  "aktivitetsbehov",
  "aktivitetsbidrag",
  "aktivitetsersättning",
  "aktivitetsgaranti",
  "aktivitetshus",
  "aktivitetsnivå",
  "aktivitetspedagogik",
  "aktivitetsstöd",
  "aktivitetsutbud",
  "aktivum",
  "aktning",
  "aktningsfull",
  "aktningsvärd",
  "aktor",
  "aktre",
  "aktris",
  "aktsam",
  "aktsamhet",
  "aktstudie",
  "aktstycke",
  "aktualisera",
  "aktualisering",
  "aktualitet",
  "aktualitetsprogram",
  "aktualitetsvärde",
  "aktuarie",
  "aktuell",
  "aktör",
  "akupressur",
  "akupressör",
  "akupunktera",
  "akupunktur",
  "akupunkturbehandling",
  "akupunkturnål",
  "akupunktör",
  "akustik",
  "akustiker",
  "akustikplatta",
  "akustisk",
  "akut",
  "akut-p-piller",
  "akutavdelning",
  "akutbesök",
  "akutboende",
  "akutfall",
  "akutinsats",
  "akutintag",
  "akutkirurgi",
  "akutklinik",
  "akutläge",
  "akutläkare",
  "akutmottagning",
  "akutpatient",
  "akutsjukhus",
  "akutsjuksköterska",
  "akutsjukvård",
  "akutsnitt",
  "akuttid",
  "akutvård",
  "akvakultur",
  "akvamarin",
  "akvamarinblå",
  "akvaplaning",
  "akvarell",
  "akvarellfärg",
  "akvarellist",
  "akvarellmålning",
  "akvarellskiss",
  "akvarellteknik",
  "akvarellutställning",
  "akvariefisk",
  "akvariehåv",
  "akvarieväxt",
  "akvarist",
  "akvaristik",
  "akvarium",
  "akvatint",
  "akvatintgravyr",
  "akvatisk",
  "akvavit",
  "akvedukt",
  "akvileja",
  "al",
  "al fresco",
  "al frescomålning",
  "alabaster",
  "alabasterskål",
  "alabastervit",
  "aladåb",
  "aladåbform",
  "alagreck",
  "alarm",
  "alarmberedskap",
  "alarmcentral",
  "alarmera",
  "alarmering",
  "alarmeringscentral",
  "alarmism",
  "alarmist",
  "alarmistisk",
  "alarmklocka",
  "alarmknapp",
  "alarmsignal",
  "alarmsystem",
  "alba",
  "alban",
  "Albanien",
  "albansk",
  "albanska",
  "albatross",
  "albinism",
  "albino",
  "album",
  "albumblad",
  "albumin",
  "albuminhalt",
  "albuminuri",
  "albuske",
  "aldehyd",
  "aldrig",
  "aldrin",
  "ale",
  "aleatorisk",
  "alektiker",
  "alektisk",
  "alemanner",
  "alert",
  "alerten",
  "alexanderhugg",
  "Alexandria",
  "alexandrin",
  "alexandrinsk",
  "alexi",
  "alf",
  "alfa",
  "alfabet",
  "alfabetisera",
  "alfabetisering",
  "alfabetiseringskampanj",
  "alfabetisk",
  "alfadjur",
  "alfahanne",
  "alfahona",
  "alfalfa",
  "alfanumerisk",
  "alfapartikel",
  "alfastrålning",
  "alfasönderfall",
  "alfågel",
  "alförrädare",
  "alg",
  "algblomning",
  "algebra",
  "algebraisk",
  "algerier",
  "Algeriet",
  "algerisk",
  "algeriska",
  "algflora",
  "algforskning",
  "algolog",
  "algologi",
  "algoritm",
  "algoritmisk",
  "algsvamp",
  "algtillväxt",
  "alias",
  "alibi",
  "alibikontroll",
  "alienation",
  "alienera",
  "alienering",
  "alifatisk",
  "alika",
  "alimentation",
  "alimentär",
  "alisarin",
  "alka",
  "alkaisk",
  "alkali",
  "alkalimetall",
  "alkalisalt",
  "alkalisera",
  "alkalisering",
  "alkalisk",
  "alkaloid",
  "alkekung",
  "alkemi",
  "alkemisk",
  "alkemist",
  "alkemistisk",
  "alkfågel",
  "alkis"
]
