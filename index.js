var katzDeli = []

function takeANumber(deliLine, name){
  var deliLineLength = deliLine.length + 1
  deliLine.push(name)
  return `Welcome, ${name}. You are number ${deliLineLength} in line.`
}
