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
  //   return [7, 2, 12, 8, 3];
}

async function sort(arr) {
  // sorting round
  for (let i = 0; i < arr.length - 1; i++) {
    const rowNumber = i + 1;
    addTableRow(rowNumber, arr);
    await sleep(0.7);

    for (let j = 0; j < arr.length - 1 - i; j++) {
      const current = j;
      const next = j + 1;

      updateTableRowColor(rowNumber, current + 1, COLOR_1);
      updateTableRowColor(rowNumber, next + 1, COLOR_2);
      await sleep(0.7);

      const [value1, value2] = [arr[current], arr[next]];

      if (value1 > value2) {
        arr[current] = value2;
        arr[next] = value1;

        updateTableRowValue(rowNumber, current + 1, value2);
        updateTableRowValue(rowNumber, next + 1, value1);
        await sleep(0.7);
      }

      await sleep(0.7);
      updateTableRowColor(rowNumber, current + 1, null);
      updateTableRowColor(rowNumber, next + 1, null);
      await sleep(0.7);
    }
  }

  return arr;
}

async function onDOMContentLoaded() {
  const array = createRandomArray(20, 100);
  addTableRow("Initial", array);
  console.log("original array:", array);

  const sortedArray = await sort(array);
  console.log("sorted array:", sortedArray);
}

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
