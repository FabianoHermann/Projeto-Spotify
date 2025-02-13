import React from "react";

const App2 = () => {
  return (
    <div>
      
    </div>
  )
}

export default App2

// rafce

// Arrow Function

// const App2 = () => <h1>Olá, Mundo! </h1>;

// Nomeação de Componentes

// PascalCase


// export defaul, posso importar com qualquer nome e sem chaves

// export "sem default", só posso importar entre chaves e com o nome exportado.

// Self Closing tag

//<Header></Header>

//<Header/>

// Nomeação de Variavel, Função...
//camelCase
// Nomeação de classes em CSS
// Metodologia BEM
// Blocks
// Elements
// Modifiers
// bloco__elemento--modificador
// header
// header__link
// header__link--small
// Tag vazia em React se chama fragment ou fragmento

// Nomes compostos são separados por -
// item-list__header
// Componentes recebem "probs"(Parâmetros, argumentos que o componente está recebendo)
// if (5 === "5") {
// console.log("É Verdadeiro!");
// } else {
// console.log("É Falso!");
// }
//5 === "5" ? console.log("É Verdadeiro!") : console.log("É Falso!");

//     <div className="item-list__container">
 
  // {items === 5 ? (
  //   <>
  //   <SingleItem/> 
  //   <SingleItem/>
  //   <SingleItem/>
  //   <SingleItem/>
  //   <SingleItem/>
  //   </>
  //   ):( 
  //    <>
  //    <SingleItem/> 
  //   <SingleItem/>
  //   <SingleItem/>
  //   <SingleItem/>
  //   <SingleItem/>
  //   <SingleItem/> 
  //   <SingleItem/>
  //   <SingleItem/>
  //   <SingleItem/>
  //   <SingleItem/>
  //    </> 
  //   )}
//   <div className="item-list__container">
//   {Array(items)
//   .fill()
//   .map((currentValue, index) => (
//   <SingleItem key={'${title}-${index}'}/>
// ))}
// Spread operator
// ...
// {artist === undefined ? "Artista" : artist}
// O melhor para usar nesse caso é {artist ?? "Artista"}