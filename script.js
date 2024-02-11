const nisab = 18275;

function calculateZakat() {
  const TotalMoney = parseFloat(document.getElementById("TotalMoney").value);
  const resultElement = document.getElementById("result");

  if (isNaN(TotalMoney)) {
    alert("من فضلك أدخل إجمالي المال");
    return;
  }

  let zakatAmount = 0;

  if (TotalMoney >= nisab) {
    zakatAmount = TotalMoney * 0.025;
    resultElement.innerHTML = `<p>قيمة الزكاة ₪${zakatAmount.toFixed(2)}</p>`;
    resultElement.style.opacity = 1;
  } else {
    resultElement.innerHTML = "<p>لا زكاة عليك</p>";
    resultElement.style.opacity = 1;
  }
}
