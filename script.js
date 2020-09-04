function start() {
    document.getElementById("kolom").value = 0;
    document.getElementById("end").innerHTML = "GO GO GO GO"
window.navigator.vibrate(300);
  
}

function plus() {
    let res = parseInt(document.getElementById("kolom").value);
    ++res;
    document.getElementById("kolom").value = res;
}

function minus() {
    let res = parseInt(document.getElementById("kolom").value);
    res = (res-1) <= 0 ? 0 : --res;
    document.getElementById("kolom").value = res;
if (res == 0)
      window.navigator.vibrate(600);
  
  
}

function stop() {
    let res = document.getElementById("kolom").value;

    if (res == 0)
        document.getElementById("end").innerHTML = "BELUM JUGA MULAI SUDAH BERHENTI"
    else
        document.getElementById("end").innerHTML =   "GOOD" 
        window.navigator.vibrate(300);
        
}
