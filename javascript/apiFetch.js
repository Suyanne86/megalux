// fetch('https://rickandmortyapi.com/api/character/182')
// .then ((res) => {
//     if(res.ok){
//     res.json()
//     }else{
//         console.log('Erro')
//     }
// })
// .then ((data) => console.log(data))
// .catch((err)=> console.log(err))


fetch('https://rickandmortyapi.com/api/character/182').then((res)=> res.json ()).then(data => console.log)