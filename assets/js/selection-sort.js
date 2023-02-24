async function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = Infinity;
    let index;
    const rowNumber = i + 1;
    addTableRow(rowNumber, arr);

    for (let j = i; j < arr.length; j++) {
      if (arr[j] <= min) {
        min = arr[j];
        index = arr.indexOf(min, j);
      }
      updateTableRowColor(rowNumber, j + 1, COLOR_1);
      await sleep(0.7);
      updateTableRowColor(rowNumber, index + 1, COLOR_2);

      arr[index] = arr[i];
      arr[i] = min;
    }
  }
  return arr;
}

async function onDOMContentLoaded() {
  const array = createRandomArray(15, 50);
  addTableRow("Initial", array);
  console.log("original array:", array);

  const sortedArray = await selectionSort(array);
  console.log("sorted array:", sortedArray);
}

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
