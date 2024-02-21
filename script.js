const nisab = 18275;

function calculateZakat() {
  const TotalMoney = parseFloat(document.getElementById("TotalMoney").value);
  const resultElement = document.getElementById("result");

  if (isNaN(TotalMoney)) {
    resultElement.innerHTML = "من فضلك أدخل إجمالي المال";
    resultElement.style.opacity = 1;
    return;
  }

  let zakatAmount = 0;
  if (TotalMoney >= nisab) {
    zakatAmount = TotalMoney * 0.025;
    const formattedZakatAmount = zakatAmount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    resultElement.innerHTML = `  قيمة الزكاة ₪   ${formattedZakatAmount}`;
    resultElement.style.opacity = 1;
  } else {
    resultElement.innerHTML = "<h2>لا زكاة عليك</h2>";
    resultElement.style.opacity = 1;
  }
}
function calculateGoldZakat() {
  const goldNisab = 85;
  const goldResult = document.getElementById("goldResult");
  const goldPrice =
    parseFloat(document.getElementById("goldPrice").value) || 234;
  let TotalGrams =
    parseFloat(document.getElementById("goldWeight24").value) || 0;
  TotalGrams +=
    ((parseFloat(document.getElementById("goldWeight22").value) || 0) * 22) /
    24;

  TotalGrams +=
    ((parseFloat(document.getElementById("goldWeight21").value) || 0) * 21) /
    24;

  TotalGrams +=
    ((parseFloat(document.getElementById("goldWeight18").value) || 0) * 18) /
    24;
  console.log(TotalGrams);
  let TotalZakat = 0;

  if (TotalGrams >= goldNisab) {
    TotalZakat = (TotalGrams * goldPrice * 0.025).toFixed(2);
  }

  if (TotalGrams == 0) {
    goldResult.innerHTML = "من فضلك أدخل وزن الذهب";
    goldResult.style.opacity = 1;
    return;
  }

  goldResult.innerHTML = TotalZakat
    ? `<p>قيمة الزكاة: ₪${TotalZakat}</p>`
    : "<p>لا زكاة عليك</p>";
  goldResult.style.opacity = 1;
}
setTimeout(function () {
  document.getElementById("loader-wrapper").style.display = "none";
}, 4000);
