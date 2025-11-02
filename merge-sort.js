let unsortedArr = [3, 0, -2, 7, 4, -5, 0]

function mergeSort(arr) {
    if (arr.length <= 1) return arr

    const mid = Math.floor(arr.length / 2)
    let arrOne = arr.slice(0, mid)
    let arrTwo = arr.slice(mid)

    arrOne = mergeSort(arrOne)
    arrTwo = mergeSort(arrTwo)

    return merge(arrOne, arrTwo)
}

function merge(arrayA, arrayB) {

    let arrC = []

    while (arrayA.length > 0 && arrayB.length > 0) {

        if(arrayA[0] > arrayB[0]) {
            arrC.push(arrayB[0])
            arrayB.splice(0, 1)
        }else{
            arrC.push(arrayA[0])
            arrayA.splice(0, 1)
        }
    }

    while (arrayA.length > 0) {
        arrC.push(arrayA[0])
        arrayA.splice(0, 1)
    }

    while (arrayB.length > 0) {
        arrC.push(arrayB[0])
        arrayB.splice(0, 1)
    }

    return arrC;
}

console.log(mergeSort(unsortedArr))
