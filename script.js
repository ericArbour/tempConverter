function func() {
  var temp = document.getElementById('temp');
  var unit = document.querySelector('input[name = "unit"]:checked').value;
  console.log(temp.value);
  console.log(unit);
  if (unit === "f") {
    document.getElementById('result').innerHTML = conv(temp.value, unit) + '&deg; C';
  } else {
      document.getElementById('result').innerHTML = conv(temp.value, unit) + '&deg; F';
  }
  temp.value = "";
}

function conv (temp, unit) {
  if (unit === "f") {
    return (temp - 32) * (5 / 9);
  } else {
    return (temp * (9 / 5) + 32);
  }
}
