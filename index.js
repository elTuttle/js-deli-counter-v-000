var katzDeli = []

function takeANumber(katzDeliLine, name){
  var deliPlace = katzDeli.length + 1
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${deliPlace} in line`
}
