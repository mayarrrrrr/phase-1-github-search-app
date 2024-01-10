const form = document.getElementById("github-form");


const userList = document.getElementById("user-list");
const repoList = document.getElementById("repos-list");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let searchInput = document.getElementById("search").value

    let originalName = searchInput.split(' ').join('')
    

    fetch(`https://api.github.com/users/${originalName}`)
    .then((result)=> result.json())
    .then((data)=> { 
        console.log(data)

        userList.innerHTML = `
       <img src="${data.avatar_url}"/>
       `
       repoList.innerHTML = `
        <h3>Repositories<a target="_blank" href="https://www.github.com/${originalName}"></a></h3>
       `
      
       

      

       

    })

    fetch(`https://api.github.com/users/${originalName}/repos`)
        
        .then((data) => {
            console.log(data)

        
     repoList.innerHTML = `
        <a target="_blank" href="https://api.github.com/users/${originalName}/repos style="position: absolute;">Repositories</a>
       `







        })

   



    
})
