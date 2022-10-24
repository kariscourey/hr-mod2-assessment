function simpleSort(values) {
    // Set i = 1
    let i = 1;

    // While i is less than the length of 'values'
    while (i < values.length) {
      // Set j = i
      let j = i;

      // While j is greater than 0 and values[j - 1] > values[j]
      while (j > 0 && values[j - 1] > values[j]) {
          // Set tmp = values[j]
          let tmp = values[j];

          // Set values[j] = values[j - 1]
          values[j] = values[j - 1];

          // Set values[j - 1] = tmp
          values[j - 1] = tmp;

          // Reduce j by 1
          j--;

      }

      // Increase i by 1
      i++;

    }


  }
