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

function currentLine(line){
  var response = "The line is currently"
  var deliLineLength = line.length + 1
  if(line.length > 0 ){
    response + ": "
    for(var i=0;i<line.length;i++){
      response + ` ${deliLineLength}. ${line[i]} `
    }
  }else{
    response = "The line is currently empty."
  }

  return response
  
}
