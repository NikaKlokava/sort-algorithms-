async function bubbleSort(arr) {
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

  const sortedArray = await bubbleSort(array);
  console.log("sorted array:", sortedArray);
}

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
