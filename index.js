var katzDeli = []

function takeANumber(deliLine, name){
  katzDeli[deliLine.length] = name
  var deliLineLength = deliLine.length + 1
  return `Welcome, ${name}. You are number ${deliLineLength} in line`
}
