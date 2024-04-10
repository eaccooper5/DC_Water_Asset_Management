
let myMap = L.map("map", {
  center: [38.97282086, -77.17677488],
  zoom: 13
});
// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">openstreetmap</a> contributors'
}).addTo(myMap);

let facilities = [
 

{
  name: "1.6",
  lat: "38.936221",
  lon: "-77.116220",
  dia: "78",
  slope: "0.0005",
  length: "1588"
},
  
  {
    name: "2",
    lat: "38.94035224",
    lon: "-77.12175408",
    dia: "78",
    slope: "0.0005",
    length: "1588"
  },
  {
    name: "3",
    lat: "38.94543153",
    lon: "-77.12378731",
    dia: "78",
    slope: "0.0005",
    length: "1938"
  },
  {
    name: "4",
    lat: "38.95029063",
    lon: "-77.12708096",
    dia: "78",
    slope: "0.0024",
    length: "2002"
  },
  {
    name: "5",
    lat: "38.95448667",
    lon: "-77.13009841",
    dia: "78",
    slope: "0.0005",
    length: "1753"
  },
  {
    name: "6",
    lat: "38.95820804",
    lon: "-77.13227481",
    dia: "78",
    slope: "0.0005",
    length: "1490"
  },
  {
    name: "7",
    lat: "38.96008913",
    lon: "-77.1336381",
    dia: "78",
    slope: "0.0005",
    length: "787"
  },
  {
    name: "8",
    lat: "38.96010994",
    lon: "-77.13379993",
    dia: "78",
    slope: "0.0005",
    length: "47"
  },
  {
    name: "9",
    lat: "38.96368737",
    lon: "-77.13754422",
    dia: "78",
    slope: "0.0005",
    length: "1683"
  },
  {
    name: "10",
    lat: "38.96739411",
    lon: "-77.14222655",
    dia: "78",
    slope: "0.0005",
    length: "1896"
  },
  {
    name: "11",
    lat: "38.97019539",
    lon: "-77.14779313",
    dia: "78",
    slope: "0.0034",
    length: "1883"
  },
  {
    name: "12",
    lat: "38.97051738",
    lon: "-77.15455851",
    dia: "78",
    slope: "0.0034",
    length: "1939"
  },
  {
    name: "13",
    lat: "38.97125724",
    lon: "-77.16126481",
    dia: "78",
    slope: "0.0005",
    length: "1916"
  },
  {
    name: "14",
    lat: "38.97245694",
    lon: "-77.16646199",
    dia: "78",
    slope: "0.0005",
    length: "1541"
  },
  {
    name: "15",
    lat: "38.97252926",
    lon: "-77.1704221",
    dia: "78",
    slope: "0.0005",
    length: "1126"
  },
  {
    name: "16",
    lat: "38.9725293",
    lon: "-77.17055275",
    dia: "78",
    slope: "0.0005",
    length: "37"
  },
  {
    name: "17",
    lat: "38.9728809",
    lon: "-77.17706088",
    dia: "72",
    slope: "0.0028",
    length: "1855"
  },
  {
    name: "18",
    lat: "38.97288233",
    lon: "-77.17723715",
    dia: "72",
    slope: "0.0028",
    length: "50"
  },
  {
    name: "19",
    lat: "38.97218508",
    lon: "-77.18262777",
    dia: "78",
    slope: "0.0018",
    length: "1554"
  },
  {
    name: "20",
    lat: "38.97216808",
    lon: "-77.18276074",
    dia: "78",
    slope: "0.0012",
    length: "38"
  },
  {
    name: "21",
    lat: "38.97207587",
    lon: "-77.18768545",
    dia: "84",
    slope: "0.0012",
    length: "1401"
  },
  {
    name: "22",
    lat: "38.97216952",
    lon: "-77.19462463",
    dia: "84",
    slope: "0.0012",
    length: "1973"
  },
  {
    name: "23",
    lat: "38.9751889",
    lon: "-77.20033868",
    dia: "84",
    slope: "0.0005",
    length: "1962"
  },
  {
    name: "24",
    lat: "38.97791209",
    lon: "-77.20628323",
    dia: "84",
    slope: "0.0012",
    length: "1960"
  },
  {
    name: "25",
    lat: "38.97782696",
    lon: "-77.21342213",
    dia: "84",
    slope: "0.0005",
    length: "2030"
  },
  {
    name: "26",
    lat: "38.9787592",
    lon: "-77.221008",
    dia: "84",
    slope: "0.0023",
    length: "2183"
  },
  {
    name: "27",
    lat: "38.98167062",
    lon: "-77.22674171",
    dia: "84",
    slope: "0.0015",
    length: "1945"
  },
  {
    name: "28",
    lat: "38.99913091",
    lon: "-77.24828988",
    dia: "84",
    slope: "0.0017",
    length: "8829"
  },
  {
    name: "29",
    lat: "39.00670864",
    lon: "-77.25468189",
    dia: "78",
    slope: "0.0014",
    length: "3304"
  },
  {
    name: "30",
    lat: "39.02612775",
    lon: "-77.27183996",
    dia: "78",
    slope: "0.0011",
    length: "8590"
  },
  {
    name: "31",
    lat: "39.03813611",
    lon: "-77.28245348",
    dia: "78",
    slope: "0.0011",
    length: "5312"
  },
  {
    name: "32",
    lat: "39.04100851",
    lon: "-77.28788389",
    dia: "54",
    slope: "0.0011",
    length: "1864"
  },
  {
    name: "33",
    lat: "39.04350004",
    lon: "-77.29419429",
    dia: "66",
    slope: "0.00145",
    length: "2009"
  },
  {
    name: "34",
    lat: "39.04588188",
    lon: "-77.30063742",
    dia: "66",
    slope: "0.00091",
    length: "2025"
  },
  {
    name: "35",
    lat: "39.0479237",
    lon: "-77.30680757",
    dia: "66",
    slope: "0.00091",
    length: "1904"
  },
  {
    name: "36",
    lat: "39.04962188",
    lon: "-77.31266678",
    dia: "66",
    slope: "0.00091",
    length: "1775"
  },
  {
    name: "37",
    lat: "39.05162814",
    lon: "-77.3195008",
    dia: "66",
    slope: "0.00091",
    length: "2074"
  },
  {
    name: "38",
    lat: "39.05348018",
    lon: "-77.32411902",
    dia: "72",
    slope: "0.001",
    length: "1475"
  },
  {
    name: "39",
    lat: "39.05780673",
    lon: "-77.33494849",
    dia: "72",
    slope: "0.001",
    length: "3455"
  },
  {
    name: "40",
    lat: "39.05792693",
    lon: "-77.33681429",
    dia: "72",
    slope: "0.0006",
    length: "532"
  },
  {
    name: "41",
    lat: "39.05611758",
    lon: "-77.34210483",
    dia: "72",
    slope: "0.0006",
    length: "1640"
  },
  {
    name: "42",
    lat: "39.05469243",
    lon: "-77.34886738",
    dia: "72",
    slope: "0.0006",
    length: "1989"
  },
  {
    name: "43",
    lat: "39.05418312",
    lon: "-77.3558618",
    dia: "72",
    slope: "0.0006",
    length: "1995"
  },
  {
    name: "44",
    lat: "39.05371397",
    lon: "-77.36226252",
    dia: "72",
    slope: "0.0006",
    length: "1826"
  },
  {
    name: "45",
    lat: "39.05424659",
    lon: "-77.36902979",
    dia: "72",
    slope: "0.0006",
    length: "1932"
  },
  {
    name: "46",
    lat: "39.05476371",
    lon: "-77.37517318",
    dia: "72",
    slope: "0.0005",
    length: "1755"
  },
  {
    name: "47",
    lat: "39.05529846",
    lon: "-77.38154288",
    dia: "72",
    slope: "0.0005",
    length: "1819"
  },
  {
    name: "48",
    lat: "39.05570407",
    lon: "-77.38854477",
    dia: "72",
    slope: "0.0005",
    length: "1994"
  },
  {
    name: "49",
    lat: "39.05610153",
    lon: "-77.39560599",
    dia: "72",
    slope: "0.0005",
    length: "2010"
  },
  {
    name: "50",
    lat: "39.05648691",
    lon: "-77.40261859",
    dia: "72",
    slope: "0.0005",
    length: "1996"
  },
  {
    name: "51",
    lat: "39.05672752",
    lon: "-77.40690025",
    dia: "72",
    slope: "0.0005",
    length: "1219"
  },
  {
    name: "52",
    lat: "39.05397337",
    lon: "-77.41065395",
    dia: "66",
    slope: "0.00065",
    length: "1464"
  },
  {
    name: "53",
    lat: "39.05080255",
    lon: "-77.41454111",
    dia: "66",
    slope: "0.00065",
    length: "1598"
  },
  {
    name: "53.8",
    lat: "39.04450216",
    lon: "-77.42226012",
    dia: "66",
    slope: "0.00065",
    length: "3174"
  },
  {
    name: "54",
    lat: "39.0400528",
    lon: "-77.42772904",
    dia: "66",
    slope: "0.00065",
    length: "2245"
  },
  {
    name: "55",
    lat: "39.03511689",
    lon: "-77.43377135",
    dia: "66",
    slope: "0.0005",
    length: "2485"
  },
  {
    name: "56",
    lat: "39.03162914",
    lon: "-77.4346982",
    dia: "54",
    slope: "0.0006",
    length: "1297"
  },
  {
    name: "57",
    lat: "39.02839399",
    lon: "-77.43668593",
    dia: "54",
    slope: "0.00069",
    length: "1307"
  },
  {
    name: "58",
    lat: "39.02547855",
    lon: "-77.43861863",
    dia: "54",
    slope: "0.00061",
    length: "1195"
  },
  {
    name: "59",
    lat: "39.02338276",
    lon: "-77.44079589",
    dia: "48",
    slope: "0.00082",
    length: "982"
  },
  {
    name: "60",
    lat: "39.01932117",
    lon: "-77.44467874",
    dia: "48",
    slope: "0.00082",
    length: "1845"
  },
  {
    name: "61",
    lat: "39.0190756",
    lon: "-77.44517871",
    dia: "48",
    slope: "0.0005",
    length: "168"
  },
  {
    name: "62",
    lat: "39.01691743",
    lon: "-77.44679705",
    dia: "48",
    slope: "0.0005",
    length: "911"
  },
  {
    name: "63",
    lat: "39.01449216",
    lon: "-77.44845709",
    dia: "48",
    slope: "0.00113",
    length: "1001"
  },
  {
    name: "64",
    lat: "39.01206275",
    lon: "-77.45011947",
    dia: "48",
    slope: "0.00087",
    length: "1003"
  },
  {
    name: "65",
    lat: "39.01006819",
    lon: "-77.45196384",
    dia: "48",
    slope: "0.00087",
    length: "896"
  },
  {
    name: "66",
    lat: "39.00827418",
    lon: "-77.45425081",
    dia: "48",
    slope: "0.00087",
    length: "922"
  },
  {
    name: "67",
    lat: "39.00647769",
    lon: "-77.45653424",
    dia: "48",
    slope: "0.00087",
    length: "921"
  },
  {
    name: "68",
    lat: "39.00623025",
    lon: "-77.45980826",
    dia: "48",
    slope: "0.00087",
    length: "935"
  },
  {
    name: "68.8",
    lat: "39.00621992",
    lon: "-77.46014959",
    dia: "48",
    slope: "0.00087",
    length: "97"
  },
  {
    name: "68.81",
    lat: "39.00550267",
    lon: "-77.46094027",
    dia: "48",
    slope: "0.00087",
    length: "345"
  },
  {
    name: "69",
    lat: "39.00435713",
    lon: "-77.46160319",
    dia: "48",
    slope: "0.00087",
    length: "458"
  },
  {
    name: "70",
    lat: "39.00185504",
    lon: "-77.46306661",
    dia: "48",
    slope: "0.00087",
    length: "1002"
  },
  {
    name: "71",
    lat: "38.9994421",
    lon: "-77.46400299",
    dia: "48",
    slope: "0.00087",
    length: "938"
  },
  {
    name: "72",
    lat: "38.99664838",
    lon: "-77.46393069",
    dia: "48",
    slope: "0.00087",
    length: "1018"
  },
  {
    name: "73",
    lat: "38.99533936",
    lon: "-77.46433667",
    dia: "42",
    slope: "0.00021",
    length: "490"
  },
  {
    name: "73.8",
    lat: "38.99522247",
    lon: "-77.46438842",
    dia: "42",
    slope: "0.00021",
    length: "45"
  },
  {
    name: "74",
    lat: "38.99376536",
    lon: "-77.46481104",
    dia: "42",
    slope: "0.00021",
    length: "544"
  },
  {
    name: "75",
    lat: "38.99113631",
    lon: "-77.46378768",
    dia: "42",
    slope: "0.001",
    length: "1001"
  },
  {
    name: "76",
    lat: "38.98850755",
    lon: "-77.46274993",
    dia: "42",
    slope: "0.001",
    length: "1002"
  },
  {
    name: "77",
    lat: "38.98733638",
    lon: "-77.46185029",
    dia: "42",
    slope: "0.001",
    length: "497"
  },
  {
    name: "78",
    lat: "38.98600527",
    lon: "-77.46070564",
    dia: "42",
    slope: "0.001",
    length: "584"
  },
  {
    name: "79",
    lat: "38.98456097",
    lon: "-77.4596935",
    dia: "42",
    slope: "0.001",
    length: "600"
  },
  {
    name: "80",
    lat: "38.98334679",
    lon: "-77.45884372",
    dia: "42",
    slope: "0.001",
    length: "504"
  },
  {
    name: "80.2",
    lat: "38.98296318",
    lon: "-77.45715303",
    dia: "24",
    slope: "0.0013",
    length: "184"
  },
  {
    name: "80.8",
    lat: "38.98269814",
    lon: "-77.45542113",
    dia: "24",
    slope: "0.0013",
    length: "500"
  },
  {
    name: "80.81",
    lat: "38.98266046",
    lon: "-77.45450541",
    dia: "24",
    slope: "0.0013",
    length: "502"
  },
  {
    name: "80.82",
    lat: "38.98265492",
    lon: "-77.4529172",
    dia: "24",
    slope: "0.0013",
    length: "261"
  },
  {
    name: "80.83",
    lat: "38.98257751",
    lon: "-77.45227808",
    dia: "24",
    slope: "0.0013",
    length: "451"
  },
  {
    name: "81",
    lat: "38.98190439",
    lon: "-77.45783399",
    dia: "42",
    slope: "0.0007",
    length: "599"
  },
  {
    name: "82",
    lat: "38.98069216",
    lon: "-77.45698571",
    dia: "42",
    slope: "0.0007",
    length: "503"
  },
  {
    name: "83",
    lat: "38.9792474",
    lon: "-77.45597318",
    dia: "42",
    slope: "0.0011",
    length: "600"
  },
  {
    name: "84",
    lat: "38.97838441",
    lon: "-77.45470199",
    dia: "36",
    slope: "0.0011",
    length: "479"
  },
  {
    name: "85",
    lat: "38.97765487",
    lon: "-77.453199",
    dia: "36",
    slope: "0.0011",
    length: "503"
  },
  {
    name: "86",
    lat: "38.976924",
    lon: "-77.45169712",
    dia: "36",
    slope: "0.0011",
    length: "503"
  },
  {
    name: "87",
    lat: "38.97635668",
    lon: "-77.45052964",
    dia: "36",
    slope: "0.0011",
    length: "391"
  },
  {
    name: "88",
    lat: "38.97562633",
    lon: "-77.44902698",
    dia: "36",
    slope: "0.0011",
    length: "503"
  },
  {
    name: "89",
    lat: "38.97489563",
    lon: "-77.4475252",
    dia: "36",
    slope: "0.0011",
    length: "503"
  },
  {
    name: "90",
    lat: "38.97387669",
    lon: "-77.44641815",
    dia: "36",
    slope: "0.0011",
    length: "487"
  },
  {
    name: "91",
    lat: "38.97269577",
    lon: "-77.44549705",
    dia: "36",
    slope: "0.0011",
    length: "504"
  },
  {
    name: "92",
    lat: "38.971517",
    lon: "-77.44457568",
    dia: "36",
    slope: "0.0011",
    length: "503"
  },
  {
    name: "93",
    lat: "38.97037549",
    lon: "-77.44368456",
    dia: "30",
    slope: "0.00609",
    length: "487"
  },
  {
    name: "94",
    lat: "38.9695343",
    lon: "-77.44302823",
    dia: "30",
    slope: "0.00609",
    length: "359"
  },
  {
    name: "95",
    lat: "38.96887969",
    lon: "-77.44222299",
    dia: "30",
    slope: "0.00609",
    length: "331"
  },
  {
    name: "96",
    lat: "38.96813546",
    lon: "-77.44074511",
    dia: "36",
    slope: "0.001",
    length: "500"
  },
  {
    name: "97",
    lat: "38.96730257",
    lon: "-77.43934711",
    dia: "36",
    slope: "0.001",
    length: "500"
  },
  {
    name: "98",
    lat: "38.9668721",
    lon: "-77.43767389",
    dia: "36",
    slope: "0.001",
    length: "501"
  },
  {
    name: "99",
    lat: "38.96641253",
    lon: "-77.43602416",
    dia: "36",
    slope: "0.001",
    length: "498"
  },
  {
    name: "100",
    lat: "38.9659176",
    lon: "-77.43442936",
    dia: "36",
    slope: "0.001",
    length: "488"
  },
  {
    name: "101",
    lat: "38.96558487",
    lon: "-77.43268394",
    dia: "36",
    slope: "0.001",
    length: "511"
  },
  {
    name: "102",
    lat: "38.96513653",
    lon: "-77.43126193",
    dia: "36",
    slope: "0.001",
    length: "436"
  },
  {
    name: "103",
    lat: "38.96495139",
    lon: "-77.43069352",
    dia: "36",
    slope: "0.001",
    length: "175"
  },
  {
    name: "103.2",
    lat: "38.96510773",
    lon: "-77.4302517",
    dia: "24",
    slope: "0.0013",
    length: "271"
  },
  {
    name: "103.8",
    lat: "38.96589901",
    lon: "-77.42909087",
    dia: "24",
    slope: "0.0013",
    length: "138"
  },
  {
    name: "103.81",
    lat: "38.96635897",
    lon: "-77.42841531",
    dia: "24",
    slope: "0.0013",
    length: "423"
  },
  {
    name: "104",
    lat: "38.96404408",
    lon: "-77.43026329",
    dia: "30",
    slope: "0.0018",
    length: "352"
  },
  {
    name: "105",
    lat: "38.96286125",
    lon: "-77.43016239",
    dia: "30",
    slope: "0.0018",
    length: "432"
  },
  {
    name: "106",
    lat: "38.96134359",
    lon: "-77.43022272",
    dia: "30",
    slope: "0.0018",
    length: "553"
  },
  {
    name: "107",
    lat: "38.96057014",
    lon: "-77.43039805",
    dia: "30",
    slope: "0.0012",
    length: "16"
  },
  {
    name: "107.2",
    lat: "38.96060989",
    lon: "-77.43037783",
    dia: "30",
    slope: "0.00658",
    length: "204"
  },
  {
    name: "107.8",
    lat: "38.95834552",
    lon: "-77.42939936",
    dia: "30",
    slope: "0.00693",
    length: "271"
  },
  {
    name: "107.82",
    lat: "38.95771071",
    lon: "-77.42853494",
    dia: "30",
    slope: "0.00319",
    length: "859"
  },
  {
    name: "107.83",
    lat: "38.95730987",
    lon: "-77.42803148",
    dia: "30",
    slope: "0.00319",
    length: "337"
  },
  {
    name: "108",
    lat: "38.95998404",
    lon: "-77.43167188",
    dia: "30",
    slope: "0.0012",
    length: "420"
  },
  {
    name: "109",
    lat: "38.9590016",
    lon: "-77.4318876",
    dia: "30",
    slope: "0.0012",
    length: "363"
  },
  {
    name: "110",
    lat: "38.95802278",
    lon: "-77.4319043",
    dia: "30",
    slope: "0.0012",
    length: "357"
  },
  {
    name: "111",
    lat: "38.95664903",
    lon: "-77.4319296",
    dia: "30",
    slope: "0.0012",
    length: "500"
  },
  {
    name: "112",
    lat: "38.95527283",
    lon: "-77.43195383",
    dia: "30",
    slope: "0.0012",
    length: "501"
  },
  {
    name: "113",
    lat: "38.95389597",
    lon: "-77.43197811",
    dia: "30",
    slope: "0.0012",
    length: "502"
  },
  {
    name: "114",
    lat: "38.95252042",
    lon: "-77.43200335",
    dia: "30",
    slope: "0.0012",
    length: "2150"
  },
  {
    name: "115",
    lat: "38.95126469",
    lon: "-77.43205782",
    dia: "30",
    slope: "0.0012",
    length: "959"
  },
  {
    name: "116",
    lat: "38.94989346",
    lon: "-77.43158001",
    dia: "30",
    slope: "0.0012",
    length: "518"
  },
  {
    name: "117",
    lat: "38.94891318",
    lon: "-77.43035359",
    dia: "30",
    slope: "0.0012",
    length: "499"
  },
  {
    name: "118.2",
    lat: "38.94808235",
    lon: "-77.42917647",
    dia: "30",
    slope: "0.0012",
    length: "451"
  },
  {
    name: "200",
    lat: "39.00640502",
    lon: "-77.25484187",
    dia: "54",
    slope: "0.001",
    length: "120"
  },
  {
    name: "201",
    lat: "39.00271727",
    lon: "-77.25649449",
    dia: "54",
    slope: "0.001",
    length: "1423"
  },
  {
    name: "202",
    lat: "39.00033324",
    lon: "-77.25665794",
    dia: "54",
    slope: "0.001",
    length: "870"
  },
  {
    name: "203",
    lat: "38.9978364",
    lon: "-77.25601231",
    dia: "54",
    slope: "0.0017",
    length: "928"
  },
  {
    name: "204",
    lat: "38.99508856",
    lon: "-77.25526996",
    dia: "54",
    slope: "0.0017",
    length: "1023"
  },
  {
    name: "205",
    lat: "38.99311412",
    lon: "-77.25434873",
    dia: "54",
    slope: "0.0017",
    length: "765"
  },
  {
    name: "206",
    lat: "38.99003973",
    lon: "-77.25318385",
    dia: "54",
    slope: "0.0017",
    length: "1168"
  },
  {
    name: "207",
    lat: "38.98754963",
    lon: "-77.25053553",
    dia: "54",
    slope: "0.0017",
    length: "1179"
  },
  {
    name: "208",
    lat: "38.98567736",
    lon: "-77.25055458",
    dia: "54",
    slope: "0.0017",
    length: "682"
  },
  {
    name: "208.2",
    lat: "38.97834872",
    lon: "-77.24951198",
    dia: "66",
    slope: "0.0006",
    length: "2686"
  },
  {
    name: "209",
    lat: "38.97793379",
    lon: "-77.24945391",
    dia: "66",
    slope: "0.0006",
    length: "152"
  },
  {
    name: "210",
    lat: "38.97612642",
    lon: "-77.25346715",
    dia: "54",
    slope: "0.0006",
    length: "1317"
  },
  {
    name: "211",
    lat: "38.97513462",
    lon: "-77.25552838",
    dia: "54",
    slope: "0.0009",
    length: "688"
  },
  {
    name: "212",
    lat: "38.97420075",
    lon: "-77.25995526",
    dia: "54",
    slope: "0.0009",
    length: "1304"
  },
  {
    name: "213",
    lat: "38.97234884",
    lon: "-77.26370048",
    dia: "54",
    slope: "0.0009",
    length: "1260"
  },
  {
    name: "214",
    lat: "38.97165546",
    lon: "-77.2669044",
    dia: "48",
    slope: "0.0017",
    length: "945"
  },
  {
    name: "215",
    lat: "38.97179347",
    lon: "-77.26994824",
    dia: "48",
    slope: "0.0017",
    length: "867"
  },
  {
    name: "216",
    lat: "38.97129122",
    lon: "-77.27432257",
    dia: "48",
    slope: "0.0017",
    length: "1257"
  },
  {
    name: "217",
    lat: "38.97085007",
    lon: "-77.27634606",
    dia: "48",
    slope: "0.003",
    length: "597"
  },
  {
    name: "218",
    lat: "38.97070097",
    lon: "-77.27839608",
    dia: "42",
    slope: "0.0026",
    length: "585"
  },
  {
    name: "219",
    lat: "38.97034179",
    lon: "-77.28014232",
    dia: "42",
    slope: "0.0026",
    length: "513"
  },
  {
    name: "220",
    lat: "38.96926061",
    lon: "-77.28090213",
    dia: "42",
    slope: "0.0026",
    length: "449"
  },
  {
    name: "221",
    lat: "38.96886649",
    lon: "-77.28336782",
    dia: "42",
    slope: "0.0026",
    length: "716"
  },
  {
    name: "222",
    lat: "38.96818331",
    lon: "-77.28528219",
    dia: "42",
    slope: "0.0026",
    length: "598"
  },
  {
    name: "223",
    lat: "38.96756884",
    lon: "-77.2866277",
    dia: "42",
    slope: "0.0026",
    length: "443"
  },
  {
    name: "224",
    lat: "38.96656911",
    lon: "-77.28778956",
    dia: "42",
    slope: "0.0026",
    length: "492"
  },
  {
    name: "300",
    lat: "39.05229173",
    lon: "-77.3628545",
    dia: "42",
    slope: "0.0063",
    length: "545"
  },
  {
    name: "301",
    lat: "39.04952544",
    lon: "-77.36283635",
    dia: "48",
    slope: "0.0008",
    length: "1008"
  },
  {
    name: "302",
    lat: "39.04755251",
    lon: "-77.36372218",
    dia: "48",
    slope: "0.0008",
    length: "761"
  },
  {
    name: "303",
    lat: "39.04620418",
    lon: "-77.36432672",
    dia: "42",
    slope: "0.0016",
    length: "520"
  },
  {
    name: "304",
    lat: "39.04445459",
    lon: "-77.36401419",
    dia: "42",
    slope: "0.0016",
    length: "643"
  },
  {
    name: "305",
    lat: "39.04295095",
    lon: "-77.36320794",
    dia: "42",
    slope: "0.0014",
    length: "594"
  },
  {
    name: "306",
    lat: "39.04272846",
    lon: "-77.36304635",
    dia: "42",
    slope: "0.0014",
    length: "93"
  },
  {
    name: "307",
    lat: "39.03937902",
    lon: "-77.36335594",
    dia: "42",
    slope: "0.0014",
    length: "1223"
  },
  {
    name: "308",
    lat: "39.03788176",
    lon: "-77.3643407",
    dia: "42",
    slope: "0.0014",
    length: "613"
  },
  {
    name: "309",
    lat: "39.03603036",
    lon: "-77.36464689",
    dia: "42",
    slope: "0.0014",
    length: "680"
  },
  {
    name: "310",
    lat: "39.03408781",
    lon: "-77.36458114",
    dia: "42",
    slope: "0.0014",
    length: "708"
  },
  {
    name: "311",
    lat: "39.03252773",
    lon: "-77.36397939",
    dia: "42",
    slope: "0.0014",
    length: "593"
  },
  {
    name: "312",
    lat: "39.0313844",
    lon: "-77.36316047",
    dia: "42",
    slope: "0.0014",
    length: "477"
  },
  {
    name: "313",
    lat: "39.03009846",
    lon: "-77.36430947",
    dia: "42",
    slope: "0.0014",
    length: "571"
  },
  {
    name: "314",
    lat: "39.02973624",
    lon: "-77.36583797",
    dia: "36",
    slope: "0.003",
    length: "454"
  },
  {
    name: "315",
    lat: "39.02907023",
    lon: "-77.36737013",
    dia: "36",
    slope: "0.003",
    length: "498"
  },
  {
    name: "316",
    lat: "39.02769041",
    lon: "-77.36838286",
    dia: "36",
    slope: "0.003",
    length: "579"
  },
  {
    name: "317",
    lat: "39.02638577",
    lon: "-77.36837645",
    dia: "36",
    slope: "0.0026",
    length: "475"
  },
  {
    name: "318",
    lat: "39.02513775",
    lon: "-77.36837014",
    dia: "36",
    slope: "0.0026",
    length: "455"
  },
  {
    name: "319",
    lat: "39.02368507",
    lon: "-77.36913153",
    dia: "36",
    slope: "0.0026",
    length: "572"
  },
  {
    name: "320",
    lat: "39.02236531",
    lon: "-77.36885695",
    dia: "36",
    slope: "0.0026",
    length: "487"
  },
  {
    name: "321",
    lat: "39.02086714",
    lon: "-77.36857363",
    dia: "36",
    slope: "0.0026",
    length: "552"
  },
  {
    name: "322",
    lat: "39.01920854",
    lon: "-77.36829834",
    dia: "36",
    slope: "0.0026",
    length: "609"
  },
  {
    name: "323",
    lat: "39.01783534",
    lon: "-77.36845442",
    dia: "36",
    slope: "0.0024",
    length: "502"
  },
  {
    name: "324",
    lat: "39.01626851",
    lon: "-77.36901715",
    dia: "36",
    slope: "0.0024",
    length: "593"
  },
  {
    name: "325",
    lat: "39.01479236",
    lon: "-77.36948174",
    dia: "36",
    slope: "0.0024",
    length: "554"
  },
  {
    name: "400",
    lat: "39.045697",
    lon: "-77.27547184",
    dia: "39",
    slope: "0.00085",
    length: "3393"
  },
  {
    name: "401",
    lat: "39.04517324",
    lon: "-77.27337218",
    dia: "39",
    slope: "0.00085",
    length: "626"
  },
  {
    name: "402",
    lat: "39.04366706",
    lon: "-77.27036394",
    dia: "39",
    slope: "0.00085",
    length: "1015"
  },
  {
    name: "403",
    lat: "39.04227749",
    lon: "-77.2675823",
    dia: "39",
    slope: "0.00085",
    length: "938"
  },
  {
    name: "404",
    lat: "39.04387752",
    lon: "-77.26521705",
    dia: "54",
    slope: "0.002",
    length: "889"
  },
  {
    name: "405",
    lat: "39.04387752",
    lon: "-77.26521705",
    dia: "36",
    slope: "0.0012",
    length: "492"
  },
  {
    name: "406",
    lat: "39.04330666",
    lon: "-77.26200219",
    dia: "36",
    slope: "0.0012",
    length: "448"
  },
  {
    name: "407",
    lat: "39.04378753",
    lon: "-77.26043105",
    dia: "36",
    slope: "0.0012",
    length: "479"
  },
  {
    name: "408",
    lat: "39.04816854",
    lon: "-77.28041059",
    dia: "66",
    slope: "0.0008",
    length: "1667"
  },
  {
    name: "409",
    lat: "39.05177809",
    lon: "-77.28514621",
    dia: "60",
    slope: "0.0075",
    length: "1881"
  },
  {
    name: "410",
    lat: "39.05501608",
    lon: "-77.29051276",
    dia: "60",
    slope: "0.0075",
    length: "1927"
  },
  {
    name: "411",
    lat: "39.05818961",
    lon: "-77.29502212",
    dia: "60",
    slope: "0.0005",
    length: "1725"
  },
  {
    name: "412",
    lat: "39.05932752",
    lon: "-77.29870767",
    dia: "54",
    slope: "0.0005",
    length: "1126"
  },
  {
    name: "413",
    lat: "39.0598125",
    lon: "-77.30266968",
    dia: "54",
    slope: "0.0005",
    length: "1139"
  },
  {
    name: "414",
    lat: "39.06002204",
    lon: "-77.30670566",
    dia: "54",
    slope: "0.0005",
    length: "1149"
  },
  {
    name: "417",
    lat: "39.05915008",
    lon: "-77.31198189",
    dia: "54",
    slope: "0.0005",
    length: "1531"
  },
  {
    name: "418",
    lat: "39.06251204",
    lon: "-77.31840091",
    dia: "54",
    slope: "0.00144",
    length: "2196"
  },
  {
    name: "419",
    lat: "39.06498571",
    lon: "-77.32049306",
    dia: "48",
    slope: "0.00113",
    length: "1079"
  },
  {
    name: "420",
    lat: "39.0667761",
    lon: "-77.32279145",
    dia: "48",
    slope: "0.00113",
    length: "923"
  },
  {
    name: "421",
    lat: "39.06854423",
    lon: "-77.32556848",
    dia: "48",
    slope: "0.00113",
    length: "1018"
  },
  {
    name: "422",
    lat: "39.06880506",
    lon: "-77.32880982",
    dia: "48",
    slope: "0.00113",
    length: "925"
  },
  {
    name: "423",
    lat: "39.0686511",
    lon: "-77.33253579",
    dia: "48",
    slope: "0.00113",
    length: "1059"
  },
  {
    name: "424",
    lat: "39.06905681",
    lon: "-77.33602553",
    dia: "48",
    slope: "0.00113",
    length: "1002"
  },
  {
    name: "425",
    lat: "39.0694864",
    lon: "-77.33974068",
    dia: "48",
    slope: "0.00113",
    length: "1066"
  }
]
for (let i = 0; i < facilities.length; i++) {
  facility= facilities[i]
  facility.lat = parseFloat(facility.lat)
  facility.lon = parseFloat(facility.lon)

    L.marker([facility.lat,facility.lon])
    .bindPopup(`<h1> MH-${facility.name}</h1> <hr> 
    <h2> d/s Length ${facility.length} ft</h2>
    <h3> d/s slope ${facility.slope} ft</h3>
    <h4> lat =${facility.lat} </h4>
    <h5> lon = ${facility.lon} </h5>
    <h6>PI Pipe Dia ${facility.dia.toLocaleString() }"</h6>`)
    .addTo(myMap)
  };