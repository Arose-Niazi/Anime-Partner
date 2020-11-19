function list(){
    document.getElementById("box").innerHTML = 
    '<ul class="collection">'+
        '<li class="collection-item"><a href="anime.html"></a>Attack On Titans</li>' +
        '<li class="collection-item"><a href="anime.html"></a>Code Geass</li>' +
        '<li class="collection-item"><a href="anime.html"></a>Death Note</li>' +
        '<li class="collection-item"><a href="anime.html"></a>Dragon Ball Z</li>' +
        '<li class="collection-item"><a href="anime.html"></a>Naruto</li>' +
        '<li class="collection-item"><a href="anime.html"></a>Pokemon</li>' +
        '<li class="collection-item"><a href="anime.html"></a>Sword Art Online</li>' +
    '</ul>'
}

function grid(){
    var el1 = document.getElementById('box');

    var output = '<div class="row">'+
        
        '<div class="col s3">'+
        '<a href="anime.html">'+
            '<div class="card txtBox">'+
                '<div class="card-image">'+
                    '<img src="images/Test/attackontitans.jpg">'+
                '</div>'+
                '<div class="card-content">'+
                    '<p>'+
                        '<span class="margin">Attack on Titans</span><br>'+
                        '<span>Ratings:'+  
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                        '</span><br>'+
                        '<span>Genre: Action; ‎Dark fantasy‎; ‎Post-apocalyptic</span><br>'+
                    '</p>'+
                '</div>'+ 
            '</div>'+
            '</a>'+
        '</div>'+

        '<div class="col s3">'+
        '<a href="anime.html">'+
            '<div class="card txtBox">'+
                '<div class="card-image">'+
                    '<img src="images/Test/codegeass.jpg">'+
                '</div>'+
                '<div class="card-content">'+
                    '<p>'+
                        '<span class="margin">Code Geass</span><br>'+
                        '<span>Ratings:'+  
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                        '</span><br>'+
                        '<span>Genre: Action, Mecha, Military, Thriller</span><br>'+
                    '</p>'+
                '</div>'+ 
            '</div>'+
            '</a>'+
        '</div>'+

        '<div class="col s3">'+
        '<a href="anime.html">'+
            '<div class="card txtBox">'+
                '<div class="card-image">'+
                    '<img src="images/Test/deathnote.jpg">'+
                '</div>'+
                '<div class="card-content">'+
                    '<p>'+
                        '<span class="margin">Death Note</span><br>'+
                        '<span>Ratings:'+  
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                        '</span><br>'+
                        '<span>Genre: Mystery, Psychological, Thriller</span><br>'+
                    '</p>'+
                '</div>'+ 
            '</div>'+
            '</a>'+
        '</div>'+

        '<div class="col s3">'+
        '<a href="anime.html">'+
            '<div class="card txtBox">'+
                '<div class="card-image">'+
                    '<img src="images/Theme/Dragon.png">'+
                '</div>'+
                '<div class="card-content">'+
                    '<p>'+
                        '<span class="margin">Dragon Ball Z</span><br>'+
                        '<span>Ratings:'+  
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                        '</span><br>'+
                        '<span>Genre: Adventure, ‎fantasy‎, ‎martial arts</span><br>'+
                    '</p>'+
                '</div>'+ 
            '</div>'+
            '</a>'+
        '</div>'+

        '</div>'; //initialize output string

    //build output string
    //for(var i=0; i<=5; i++){
        output +='<div class="row">'+
        '<div class="col s3">'+
        '<a href="anime.html">'+
        '<div class="card txtBox">'+
                '<div class="card-image">'+
                    '<img src="images/Test/naruto.jpg">'+
                '</div>'+
                '<div class="card-content">'+
                    '<p>'+
                        '<span class="margin">Naruto</span><br>'+
                        '<span>Ratings:'+  
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                        '</span><br>'+
                        '<span>Genre: Adventure, Fantasy, Martial Arts, Action</span><br>'+
                    '</p>'+
                '</div>'+ 
            '</div>'+
            '</a>'+
        '</div>'+

        '<div class="col s3">'+
        '<a href="anime.html">'+
            '<div class="card txtBox">'+
                '<div class="card-image">'+
                    '<img src="images/Test/pokemon.jpg">'+
                '</div>'+
                '<div class="card-content">'+
                    '<p>'+
                        '<span class="margin">Pokemon</span><br>'+
                        '<span>Ratings:'+  
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                        '</span><br>'+
                        '<span>Genre: Adventure, comedy, fantasy</span><br>'+
                    '</p>'+
                '</div>'+ 
            '</div>'+
            '</a>'+
        '</div>'+

        '<div class="col s3">'+
        '<a href="anime.html">'+
            '<div class="card txtBox">'+
                '<div class="card-image">'+
                    '<img src="images/Test/sao.jpg">'+
                '</div>'+
                '<div class="card-content">'+
                    '<p>'+
                        '<span class="margin">Sword Art Online</span><br>'+
                        '<span>Ratings:'+  
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                        '</span><br>'+
                        '<span>Genre: Adventure fiction, Science Fiction, Action</span><br>'+
                    '</p>'+
                '</div>'+ 
            '</div>'+
        '</a>'+
        '</div>';

        /*'<div class="col s3">'+
            '<div class="card txtBox">'+
                '<div class="card-image">'+
                    '<img src="images/Dragon.png">'+
                '</div>'+
                '<div class="card-content">'+
                    '<p>'+
                        '<span class="margin">Name: Bla Bla</span><br>'+
                        '<span>Ratings:'+  
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                            '<span class="fa fa-star checked"></span>'+
                        '</span><br>'+
                        '<span>Genre: Bla Bla</span><br>'+
                    '</p>'+
                '</div>'+ 
            '</div>'+
        '</div>'+
    '</div>';
    }
*/
    el1.innerHTML = output; //output to DOM
}