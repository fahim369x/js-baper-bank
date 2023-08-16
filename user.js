document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositField = document.getElementById("depositField");
  const newdepositFieldValue = depositField.value;
  const newDepositFieldValueStr = parseFloat(newdepositFieldValue);

  const depositTotalElement = document.getElementById("deposit-total");
  const preDepositTotal = depositTotalElement.innerText;
  const preDepositTotalStr = parseFloat(preDepositTotal);
  const currentDepositTotal = newDepositFieldValueStr + preDepositTotalStr;
  depositTotalElement.innerText = currentDepositTotal;

  const BalanceElement = document.getElementById("balance-total");
  const preBalanceElementStr = BalanceElement.innerText;
  const preBanalnceElement = parseFloat(preBalanceElementStr);
  const currentBalanceTotal = preBanalnceElement + newDepositFieldValueStr;
  BalanceElement.innerText = currentBalanceTotal;

  depositField.value = "";
});
