
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return []
  };
  let result = [];
  matrix.forEach ((item, index) => {
    console.log(index)
    if (index%2 !=0) {
      item.reverse().forEach ((element) => {

        result.push(element)
      })
    } else {
          item.forEach ((element) => {

      result.push(element)
    })
    }
  })
  return result 
}
