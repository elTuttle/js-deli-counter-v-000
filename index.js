var katzDeli = []

function takeANumber(deliLine, name){
  katzDeli.push(name)
  return `Welcome, ${katzDeli[deliLine]}. You are number ${deliLine.length() + 1} in line`
}
