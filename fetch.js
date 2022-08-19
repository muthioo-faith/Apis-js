// let fetch=require("node-fet")
// fetch('https://jsonplaceholder.typicode.com/posts/fruits',{
//     method:"GET",
//     headers:{
//     "Content-type":"application/json"
//     },
// })

  fetch('https://jsonplaceholder.typicode.com/posts/fruits')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
  