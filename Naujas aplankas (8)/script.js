window.onload = async () => {
    let res = await fetch ('https://ok.surf/api/v1/cors/news-feed');
    res = await res.json();
    console.log(res);
    let main = document.querySelector('main');
    res.World.forEach(item => {
        main.innerHTML += `
        <div class="card">
        <img src="${item.og}" alt="Avatar" style="width:100%">
        <div class="container">
          <a href="${item.link}"><h4><b>${item.title}</b></h4></a>
        </div>
      </div>
        `
        console.log(res);
    });
    
}