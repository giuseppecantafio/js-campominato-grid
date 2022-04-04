
function generaCampoMinato() {

    const colNumberFacile = 100;
    const colNumberMedio = 81;
    const colNumberDifficile = 49;

    let livello = document.getElementById("sceltaLivello").value;
    console.log(livello);

    if (livello === 'facilissimo') {
        function stampareGrigliaFacile() {
            let grid = document.getElementById('grid');
            let colsCreate = creaColonneFacile();
            console.log(colsCreate);
            grid.innerHTML = colsCreate;
        }

        function creaColonneFacile() {
            let cols = '';
            for (let i = 1; i <= colNumberFacile; i++) {
                cols += `
      <div class="grid-facile bordo"> ${i}</div>
      `;
            }
            return cols;
        }
        stampareGrigliaFacile();

    } else if (livello === 'medissimo') {
        function stampareGrigliaMedio() {
            let grid = document.getElementById('grid');
            let colsCreate = creaColonneMedio();
            console.log(colsCreate);
            grid.innerHTML = colsCreate;
        }

        function creaColonneMedio() {
            let cols = '';
            for (let i = 1; i <= colNumberMedio; i++) {
                cols += `
         <div class="grid-medio bordo"> ${i}</div>
         `;
            }
            return cols;
        }
        stampareGrigliaMedio();
    } else if (livello = 'difficilissimo') {
        function stampareGrigliaDifficile() {
            let grid = document.getElementById('grid');
            let colsCreate = creaColonneDifficile();
            console.log(colsCreate);
            grid.innerHTML = colsCreate;
        }

        function creaColonneDifficile() {
            let cols = '';
            for (let i = 1; i <= colNumberDifficile; i++) {
                cols += `
         <div class="grid-difficile bordo"> ${i}</div>
         `;
            }
            return cols;
        }
        stampareGrigliaDifficile();
    }
}

document.getElementById('bottone').addEventListener('click', generaCampoMinato);

