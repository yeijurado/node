function calcularSalario() { 
    let horasLaboradas = 53;
    let horasOrdinarias = 40;
    let horasExtras = horasLaboradas - horasOrdinarias;
    let valorHorasOrdinarias = 40 * 265;
    let valorHorasExtras = horasExtras * 350;
    
    console.log ('El total a pagar por horas laborales normal (40hrs) es de U$: ' +valorHorasOrdinarias );
    
    console.log ('El total a pagar por horas laborales extras ' +  horasExtras + ' hrs  es de U$: ' +valorHorasExtras );
      
 }

 calcularSalario();
 