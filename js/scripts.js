document.getElementById('search').onclick = () => search();

document.getElementById('search_query').onkeydown = (event) => {
	
    if (event.keyCode === 13) {
		
        search();
		
    }
	
};

function search() {
	
    var query = document.getElementById('search_query').value;

    if (query.length < 3) {
		
        alert('Erro: E nescessasio se ter ao menos 3 caracteres');
		
        return;
		
    }

    var requestUrl = `https://api.jikan.moe/v3/search/anime?q=${query}`;
    
    let startTime = new Date().getTime();

    fetch(requestUrl)
	
    .then(response => response.json())
	
    .then(data => {
		
        let timeTaken = new Date().getTime() - startTime;

        document.getElementById('search_query_url').innerHTML = requestUrl;
		
        document.getElementById('search_query_url').href = requestUrl;
		
        document.getElementById('request_cached').innerHTML = data.request_cached;
		
        document.getElementById('request_cached').style.color = '#FF0000';
		
        document.getElementById('request_time_taken').innerHTML = `${timeTaken}ms`;

        if (data.request_cached) {
			
            document.getElementById('request_cached').style.color = '#00FF00';
			
        }

        var node = document.getElementById('search_resultados');
		
        while (node.firstChild) {node.removeChild(node.firstChild);}

        const maxResults = 16;
		
        let i = 1;
        
        try {
			
            data.results.forEach(item => {
                if(document.querySelector('#flexCheckDefault').checked){
                
				}
				
				else{
					if (item.rated === "Rx") {
					
                    return;
					
                }
				}

                if (i > maxResults) {
					
                    throw BreakException;
					
                }
    
                document.getElementById('search_resultados')
				
                .insertAdjacentHTML(
				
                    'beforeend',
                    `
					
                    <a href="${item.url}" class="card">
					
                        <div class="card__image">
						
                            <img loading="lazy" src="${item.image_url}" alt="${item.title}" />
							
                        </div>
						
                        <div class="card__name">
						
                            <span>${item.title}</span> 
							
                        </div>
						
                    </a>
					
                    `
					
                );
    
                i++;
				
            });
			
        } 
		
		catch (e) {
            
        }

    }
	
	);
	
}

var btn = document.getElementById('btn-div');
var container = document.querySelector(".aaaaa");
btn.addEventListener('click', function() {
    
  if(aaaaa.style.display === 'block') {
      aaaaa.style.display = 'none';
  } else {
      aaaaa.style.display = 'block';
  }
});
