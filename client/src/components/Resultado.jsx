// import React from 'react';
// import { useSelector } from 'react-redux';

// function Resultado() {
//     const buscador = useSelector((state) => state.pokemon)
//     return (
//         <div className="main-resultado">
//             <h3 className="resultado-titulo"></h3>
//             { buscador.loading &&  <div className="resultado-warning">Buscando...</div>}

//             { buscador.length >= 1 && <div className="resultado-mostrado">
//                 <img src={buscador.pokemon.image} alt={buscador.pokemon.name} />
//                 <span>{buscador.pokemon.name}</span>
//             </div>}
//                 { buscador.error !== '' && <span className="resultado-error">{buscador.error}</span>}
//         </div>
//     )
// }

// export default Resultado
