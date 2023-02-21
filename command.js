const COLOR_1 = "green";
const COLOR_2 = "blue";

function sleep(secs) {
  return new Promise((resolve) => setTimeout(resolve, secs * 1000));
}

function addTableRow(rowNumber, arr) {
  const tbodyEl = document.getElementsByTagName("tbody")[0];
  const trEl = document.createElement("tr");
  tbodyEl.append(trEl);

  const rowStr = arr.reduce(
    (acc, value) => (acc += `<td>${value}</td>`),
    `<td><strond>${rowNumber}</strong></td>`
  );
  trEl.insertAdjacentHTML("afterbegin", rowStr);
}

function getCell(rowNumber, cellNumber) {
  const tbodyEl = document.getElementsByTagName("tbody")[0];
  const trEl = tbodyEl.getElementsByTagName("tr")[rowNumber];
  return trEl.getElementsByTagName("td")[cellNumber];
}

function updateTableRowColor(rowNumber, cellNumber, color) {
  const tdEl = getCell(rowNumber, cellNumber);

  if (color) {
    tdEl.classList.add(color);
  } else {
    tdEl.classList = [];
  }
}

function updateTableRowValue(rowNumber, cellNumber, value) {
  const tdEl = getCell(rowNumber, cellNumber);
  tdEl.textContent = value;
}

function createRandomArray(size, maxValue) {
  const minValue = 1;
  let randomArr = [];
  randomArr.length = size;

  for (let i = 0; i < randomArr.length; i++) {
    randomArr[i] = Math.floor(Math.random() * (maxValue - minValue) + minValue);
  }

  return randomArr;
  // return [11, 7, 1, 10, 13];
}
