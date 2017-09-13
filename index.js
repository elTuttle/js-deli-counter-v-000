var katzDeli = []

function takeANumber(katzDeliLine, name){
  var deliPlace = katzDeli.length + 1
  var newArray = []
  katzDeli.push(name)
  newArray.push(`Welcome, ${name}. You are number ${deliPlace} in line` )
}
