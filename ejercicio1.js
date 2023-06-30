const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

function wrapping(gifts) {
  
  let envueltos = gifts.map((g) => {
    return '*'.repeat(g.length + 2) + 
      '\n' + 
      '*'+g+'*'+'\n' + 
      '*'.repeat(g.length + 2)
  })
  
  return envueltos
}

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */