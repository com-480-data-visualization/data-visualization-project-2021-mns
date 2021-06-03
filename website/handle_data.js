

function show_movies_genre(){
  let movie_div = document.getElementById('movie_genre_display');
  movie_div.innerHTML = "";
  let all_movies = []
  $.getJSON( './top_movies.json', function( data ) {
    for (checked of $('.checkbox_handle:checkbox:checked')){
      all_movies.push(...data[checked.id]);
      all_movies.sort(function(x,y){return y[2] - x[2];});
      window.all_movies = all_movies;


    }

  for (let counter = 1; counter < 11; counter++) {

    let parent = document.createElement('div');
    parent.style.display = "flex";
    // create order div
    let order = document.createElement('div');
    order.innerHTML = counter;
    order.style.width = "15%";
    parent.appendChild(order);
    // create title div
    let title = document.createElement('div');
    title.innerHTML = all_movies[counter-1][0];
    title.style.width = "70%";
    parent.appendChild(title);

    // create avg_rating div
    let avg_rating = document.createElement('div');
    avg_rating.innerHTML = all_movies[counter-1][2];
    avg_rating.style.width = "15%";
    parent.appendChild(avg_rating);

    parent.classList.add(all_movies[counter-1][1]);
    parent.classList.add('movie_genre_text');
    movie_div.appendChild(parent);

  }
  });

}
// <div style="width:10%">
//   1
// </div>
// <div style="width:80%">
//   title
// </div>
// <div style="width:10%">
//   9.3
// </div>

for (checkbox of $('.checkbox_handle')){
  checkbox.addEventListener('change', function() {
    if (this.checked) {
       for (elem of this.parentElement.children[1].firstElementChild.children[2].getElementsByClassName("circle")){
          elem.classList.add(this.id);
       }
     } else {
       for (elem of this.parentElement.children[1].firstElementChild.children[2].getElementsByClassName("circle")){
          elem.classList.remove(this.id);
       }
     }
    show_movies_genre();
  });
}

// $.getJSON( './top_movies.json', function( data ) {
//     console.log(data['Action']); //json output
// });
