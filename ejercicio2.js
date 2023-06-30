const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

function countHours(year, holidays) {
  let horas = 0;
  
  holidays.forEach((d) => {
    
    let fecha = `${year}/${d}`;
    let festivo = new Date(fecha).getDay()
    if(festivo != 0 && festivo != 6) {
      horas += 2;
    }
  })  
  
  return horas;  
  
}


countHours(year, holidays) // 2 días -> 4 horas extra en el año