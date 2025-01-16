function pesquisarCarros(id, callback) {
    const estoque = [
      {
        id: 1,
        nome: "Corsa",
        marca: "Chevrolet"
      },
      {
        id: 2,
        nome: "Gol",
        marca: "VW"
      },
      {
        id: 3,
        nome: "Uno",
        marca: "Fiat"
      }
    ];
  
    const carroEncontrado = estoque.find(carro => carro.id === id);
    callback(carroEncontrado);
  }
  
  function mostrar(carro) {
    if (carro) {
      console.log(`Carro nº ${carro.id}, nome: ${carro.nome}, marca: ${carro.marca}`);
    } else {
      console.log(`Carro não encontrado.`);
    }
  }
  
  pesquisarCarros(2, mostrar); 