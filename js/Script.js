var objekty;
//service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./serviceworker.js")
    .then((registration) => {
      console.log("SW Registered!");
      console.log(registration);
    })
    .catch((error) => {
      console.log("Dont work!");
      console.log(error);
    });
}
//tabelka
function InnerNazwa(val, id) {
  output = document.getElementById("nazwa" + id);
  output.innerHTML = val;
}

function InnerZdjecieD(val) {
  output = document.getElementById("zdjecie");
  output.innerHTML = val;
}

function InnerNazwaD(val) {
  output = document.getElementById("nazwa");
  output.innerHTML = val;
}

function InnerProducentD(val) {
  output = document.getElementById("producent");
  output.innerHTML = val;
}

function InnerOpisD(val) {
  output = document.getElementById("opis");
  output.innerHTML = val;
}

function InnerTaktD(val) {
  output = document.getElementById("taktowanie");
  output.innerHTML = val;
}

function InnerChipsetD(val) {
  output = document.getElementById("chipset");
  output.innerHTML = val;
}

function InnerDlugoscD(val) {
  output = document.getElementById("dlugosc");
  output.innerHTML = val;
}

function InnerWejscieD(val) {
  output = document.getElementById("wejscie");
  output.innerHTML = val;
}

function InnerVRAMD(val) {
  output = document.getElementById("vram");
  output.innerHTML = val;
}

function InnerZlacza1D(val) {
  output = document.getElementById("nazwaZ");
  output.innerHTML = val;
}

function InnerZlacza2D(val) {
  output = document.getElementById("iloscZ");
  output.innerHTML = val;
}

function InnerZdjecie(val, id) {
  output = document.getElementById("zdjecie" + id);
  output.innerHTML = val;
}
//funkcje
async function PrintProdukty() {
  var jsonFile;
  const API_TOKEN =
    "$2a$10$SZeTIC7N/fC3iaRQIXyiA.tqe47gRtqaRC/3v812u.qlLd.BFt0ae";
  myHeaders = new Headers({
    "X-Master-Key": API_TOKEN,
    "Content-Type": "application/json",
  });
  var url = "https://api.jsonbin.io/v3/b/65abca4e1f5677401f21d63d";
  const response = fetch(url, {
    headers: myHeaders,
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(async function (data) {
      jsonFile = data;
      var objekty = await jsonFile.record;
      for (var i = 0; i <= 9; i++) {
        InnerNazwa('<h4 class="card-title">' + objekty[i].nazwa + "</h4>", i);
        InnerZdjecie(
          '<img src="' +
            objekty[i].zdjecie +
            '" width=200 height=200"></a><br>',
          i
        );
      }
    });
}

async function ModalPrzycisk(id) {
  var jsonFile;
  const API_TOKEN =
    "$2a$10$SZeTIC7N/fC3iaRQIXyiA.tqe47gRtqaRC/3v812u.qlLd.BFt0ae";
  myHeaders = new Headers({
    "X-Master-Key": API_TOKEN,
    "Content-Type": "application/json",
  });
  var url = "https://api.jsonbin.io/v3/b/65abca4e1f5677401f21d63d";
  const response = fetch(url, {
    headers: myHeaders,
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(async function (data) {
      jsonFile = data;
      var objekty = await jsonFile.record;
      for (var i = 0; i <= 9; i++) {
        if (id == i) {
          InnerZdjecieD(
            '<img src="' +
              objekty[i].zdjecie +
              '" width=200 height=200"></a><br>'
          );
          InnerNazwaD(objekty[i].nazwa);
          InnerOpisD(objekty[i].opis);
          InnerDlugoscD(objekty[i].dlugosc);
          InnerTaktD(objekty[i].taktowanie);
          InnerVRAMD(objekty[i].vram);
          InnerChipsetD(objekty[i].chipset);
          InnerWejscieD(objekty[i].wejscie);
          InnerProducentD(objekty[i].producent);
          InnerZlacza1D(objekty[i].zlacza.nazwa);
          InnerZlacza2D(objekty[i].zlacza.ilosc);
        }
      }
    });
}

function ZagniezdzonyJSON() {
  var hidden = false;
  hidden = !hidden;
  if (!hidden) {
    document.getElementById("nazwaZ").style.visibility = "hidden";
    document.getElementById("iloscZ").style.visibility = "hidden";
    document.getElementById("labelNazwa").style.visibility = "hidden";
    document.getElementById("labelIlosc").style.visibility = "hidden";
  } else {
    document.getElementById("nazwaZ").style.visibility = "visible";
    document.getElementById("iloscZ").style.visibility = "visible";
    document.getElementById("labelNazwa").style.visibility = "visible";
    document.getElementById("labelIlosc").style.visibility = "visible";
  }
}

function Zamknij() {
  var hidden = false;
  hidden = !hidden;
  if (hidden) {
    document.getElementById("nazwaZ").style.visibility = "hidden";
    document.getElementById("iloscZ").style.visibility = "hidden";
    document.getElementById("labelNazwa").style.visibility = "hidden";
    document.getElementById("labelIlosc").style.visibility = "hidden";
  } else {
    document.getElementById("nazwaZ").style.visibility = "visible";
    document.getElementById("iloscZ").style.visibility = "visible";
    document.getElementById("labelNazwa").style.visibility = "visible";
    document.getElementById("labelIlosc").style.visibility = "visible";
  }
}
