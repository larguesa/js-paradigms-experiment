function getNumber(inputID) {
  const value = document.getElementById(inputID).value;
  return parseInt(value);
}
function addNumbers(a, b) {
  return a + b;
}
function displaySum(value) {
  document.getElementById('func-sum-result').textContent = value;
}
document.getElementById('func-btn').onclick = function handler() {
  const res = addNumbers(getNumber('input-n1'), getNumber('input-n2'));
  displaySum(res);
};
