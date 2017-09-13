var katzDeli = []

function takeANumber(deliLine, name){
  var deliLineLength = deliLine.length + 1
  deliLine.push(name)
  return `Welcome, ${name}. You are number ${deliLineLength} in line.`
}

function nowServing(deliLine){
  var deliLineLength = deliLine.length + 1
  if(deliLine.length>0){
      return `Currently serving ${deliLine[0]}`
      deliLine.shift()
  }else{
      return "There is nobody waiting to be served!"
  }
}
