const nisap = 18275;
const Goldnisap = 85;
function calculateZakat() {
  const totalMoney =
    parseFloat(document.getElementById("TotalMoney").value) || 0;
  const goldPrice =
    parseFloat(document.getElementById("goldPrice").value) || 237;
  const goldWeight24 =
    parseFloat(document.getElementById("goldWeight24").value) || 0;
  const goldWeight22 =
    parseFloat(document.getElementById("goldWeight22").value) || 0;
  const goldWeight21 =
    parseFloat(document.getElementById("goldWeight21").value) || 0;
  const goldWeight18 =
    parseFloat(document.getElementById("goldWeight18").value) || 0;
  const resultElement = document.getElementById("result");

  const totalGoldGrams = calculateTotalGoldGrams(
    goldWeight24,
    goldWeight22,
    goldWeight21,
    goldWeight18
  );

  if (totalMoney > 0 && totalGoldGrams > 0) {
    calculateZakatForMoneyAndGold(
      totalMoney,
      totalGoldGrams,
      goldPrice,
      resultElement
    );
  } else if (totalMoney > 0) {
    calculateZakatForMoney(totalMoney, resultElement);
  } else if (totalGoldGrams > 0) {
    calculateZakatForGold(totalGoldGrams, goldPrice, resultElement);
  } else {
    showInputPrompt(resultElement);
  }
}

function calculateTotalGoldGrams(weight24, weight22, weight21, weight18) {
  return (
    weight24 +
    (weight22 * 22) / 24 +
    (weight21 * 21) / 24 +
    (weight18 * 18) / 24
  );
}

function calculateZakatForMoneyAndGold(
  money,
  goldGrams,
  goldPrice,
  resultElement
) {
  const totalCombinedWealth = money + goldGrams * goldPrice;
  if (totalCombinedWealth >= nisap) {
    const zakatAmount = totalCombinedWealth * 0.025;
    showZakatResult(zakatAmount, resultElement);
  } else {
    showNoZakat(resultElement);
  }
}

function calculateZakatForMoney(money, resultElement) {
  if (money >= nisap) {
    const zakatAmount = money * 0.025;
    showZakatResult(zakatAmount, resultElement);
  } else {
    showNoZakat(resultElement);
  }
}

function calculateZakatForGold(goldGrams, goldPrice, resultElement) {
  if (goldGrams >= Goldnisap) {
    const zakatAmount = goldGrams * goldPrice * 0.025;
    showZakatResult(zakatAmount, resultElement);
  } else {
    showNoZakat(resultElement);
  }
}

function showZakatResult(zakatAmount, resultElement) {
  const formattedZakatAmount = zakatAmount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  resultElement.innerHTML = `  قيمة الزكاة ₪   ${formattedZakatAmount}`;
  resultElement.style.opacity = 1;
}

function showNoZakat(resultElement) {
  resultElement.innerHTML = "لا زكاة عليك";
  resultElement.style.opacity = 1;
}

function showInputPrompt(resultElement) {
  resultElement.innerHTML = "من فضلك أدخل إجمالي المال أو وزن الذهب";
  resultElement.style.opacity = 1;
}

setTimeout(function () {
  document.getElementById("loader-wrapper").style.display = "none";
}, 4000);
