var katzDeli = []

function takeANumber(deliLine, name){
  katzDeli.push(`${name}`)
  var deliLineLength = deliLine.length + 1
  return `Welcome, ${name}. You are number ${deliLineLength} in line.`
}
