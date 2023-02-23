async function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];

    const rowNumber = i;
    addTableRow(rowNumber, arr);
    await sleep(0.7);

    for (let j = i - 1; j >= 0; j--) {
      updateTableRowColor(rowNumber, j + 1, COLOR_1);
      updateTableRowColor(rowNumber, j + 2, COLOR_2);
      await sleep(0.7);

      let prevValue = arr[j];
      if (prevValue <= key) {
        break;
      }
      arr[j + 1] = prevValue;
      arr[j] = key;

      updateTableRowValue(rowNumber, j + 1, key);
      updateTableRowValue(rowNumber, j + 2, prevValue);
      await sleep(0.7);
    }
  }
  return arr;
}

async function onDOMContentLoaded() {
  const array = createRandomArray(15, 155);
  addTableRow("Initial", array);
  console.log("original array:", array);

  const sortedArray = await insertionSort(array);
  console.log("sorted array:", sortedArray);
}

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
