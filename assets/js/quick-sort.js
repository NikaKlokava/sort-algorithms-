async function quickSort(arr) {
  const trElems = document.getElementsByTagName("tr");
  const rowNumber = trElems.length;

  if (arr.length <= 1) {
    return arr;
  }

  const lastElement = arr[arr.length - 1];

  const [smallest, biggest] = arr.slice(0, arr.length - 1).reduce(
    (acc, el) => {
      acc[el < lastElement ? 0 : 1].push(el);
      return acc;
    },
    [[], []]
  );

  const sortedSmallArr = await quickSort(smallest);
  const sortedBiggestArr = await quickSort(biggest);

  const sortedArray = [...sortedSmallArr, lastElement, ...sortedBiggestArr];
  addTableRow(rowNumber, sortedArray);

  return sortedArray;
}

async function onDOMContentLoaded() {
  const array = createRandomArray(5, 50);
  addTableRow("Initial", array);
  console.log("original array:", array);

  const sortedArray = await quickSort(array);
  console.log("sorted array:", sortedArray);
}

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
