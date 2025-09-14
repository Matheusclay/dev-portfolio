// Gerador de sombras para estrelas
function generateStarShadows(count) {
    let shadows = [];
    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * 2000);
      const y = Math.floor(Math.random() * 2000);
      shadows.push(`${x}px ${y}px #FFF`);
    }
    return shadows.join(',\n    ');
  }
  
  console.log('Estrelas pequenas (700):');
  console.log(generateStarShadows(700));
  
  console.log('Estrelas médias (200):');
  console.log(generateStarShadows(200));
  
  console.log('Estrelas grandes (100):');
  console.log(generateStarShadows(100));

  /*Se precisar para adicionar mais estrelas, basta adicionar mais números no generateStarShadows(count)*/