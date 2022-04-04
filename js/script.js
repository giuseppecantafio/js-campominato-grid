
// GRID EASY
const colNumber = 100;

 function  stampareGriglia(){
     let grid = document.getElementById('grid');
     let colsCreate = creaColonne(); 
     console.log(colsCreate);
     grid.innerHTML = colsCreate;
 }

 function creaColonne(){
     let cols  = '';
     for(let i = 1; i <= colNumber; i++){
      cols += `
      <div class="grid-facile bordo"> ${i}</div>
      `;
     }
     return cols;
 }

 // GENERIAMO HTML CON BOTTONE
  document.getElementById('bottone').addEventListener('click', stampareGriglia);