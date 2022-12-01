const show = <HTMLElement>document.querySelector('.show')

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
    json.forEach(post=>{
       console.log(post);
    })
    
  })