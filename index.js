var katzDeli = []

function takeANumber(katzDeliLine, name){
  var deliPlace = katzDeli.length + 1
  katzDeli.push(name)
  return `Welcome, ${katzDeli[katzDeliLine]}. You are number ${deliPlace} in line`
}
