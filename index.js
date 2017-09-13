var katzDeli = []

function takeANumber(deliLine, name){
  var deliLineLength = deliLine.length()+1
  katzDeli.push(name)
  return `Welcome, ${katzDeli[deliLine]}. You are number ${deliLineLength} in line`
}
