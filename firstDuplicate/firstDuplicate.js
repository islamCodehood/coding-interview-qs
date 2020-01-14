function findFirstDupl(arr) {
  let numMap = {};
  for (const num of arr) {
    numMap[num] = numMap[num] ? numMap[num] + 1 : 1;
    //Or
    //numMap[num] = numMap[num] + 1 || 1;
    //Or
    //if (!numMap[num]) {
    //numMap[num] = 1;
    // }else {
    //numMap[num] ++;
    //}
  }
  for (const num in numMap) {
    if (numMap[num] > 1) {
      return num;
    }
  }
}
