function LerMais(el1, el2) {
    // document.getElementById(el1).style.display='none'
    var display1 = 'none';

    if (display1 == "none"){
      document.getElementById(el1).style.display = 'block';
      document.getElementById(el2).style.display = 'none';
    } else {
      document.getElementById(el1).style.display = 'none';
      document.getElementById(el2).style.display = 'block';
    }
}

function LerMenos(el1, el2) {
    var display1 = document.getElementById(el1).style.display;

    if (display1 == "block"){
      document.getElementById(el1).style.display = 'none';
      document.getElementById(el2).style.display = 'block';
    } else {
      document.getElementById(el1).style.display = 'block';
      document.getElementById(el2).style.display = 'none';
    }
}