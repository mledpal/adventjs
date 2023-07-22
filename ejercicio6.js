function createCube(size) {
  let cubo = '';

  for(let n = 0; n < size; n++){
    let espacios = size-1-n;
    cubo += ' '.repeat(espacios) 
    cubo += '/\\'.repeat(size-espacios) 
    cubo += '_\\'.repeat(size) + '\n'    
  }
  
  for(let n = size; n>0; n--) {    
    let espacios = size-n;    
    cubo += ' '.repeat(espacios) 
    cubo += '\\/'.repeat(size-espacios) 
    cubo += '_/'.repeat(size);
    if(n>1) cubo+= '\n'
  }
    
  return cubo
}

console.log(createCube(3))