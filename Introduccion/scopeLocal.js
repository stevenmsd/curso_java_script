/* Local Scope o Variables Locales
    - Son las variables declaradas dentro de la Función.
    - Solo podemos acceder a ellas desde dentro de la función.
*/

var obtenerNumeroLetras = (nombre) => {
  var number = nombre.length;
  console.log(`${nombre} tiene ${number} numero de letras`);

  var funcionAnidada = () => {
    console.log(numero);
  };
  funcionAnidada();
};
obtenerNumeroLetras("Carlos");
