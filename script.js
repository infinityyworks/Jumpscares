function imgJumpscare() {
  document.getElementById("no4").src = "megamind.jpeg";
}

function flashJumpscare() {
  document.getElementById("body").classList.add("flash");
  setTimeout(function(){
    document.getElementById("body").classList.remove("flash");
  }, 1000);
}

function growTitle() {
  document.getElementById("title").classList.add("grow");
  setTimeout(function(){
    document.getElementById("title").classList.remove("grow");
  }, 5000);
}

async function ip() {
  let response = await fetch('https://api.ipify.org/');
  if (response.ok) {
    let ip = await response.text();
    document.getElementById("ip").innerHTML = ip;
    document.getElementById("no1").style.visibility = "hidden";
    document.getElementById("ip").classList.add("zoom");
  }
}
