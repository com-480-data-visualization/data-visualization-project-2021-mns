var screen_width =window.innerWidth || document.documentElement.clientWidth ||
document.body.clientWidth;
var screen_height =window.innerHeight || document.documentElement.clientHeight ||
document.body.clientHeight;
var width = screen_width ;
        rotated = 0,
        height = screen_height;

    //countries which have states, needed to toggle visibility
    //for USA/ etc. either show countries or states, not both
    var usa, canada;
    var states; //track states
    //track where mouse was clicked
    var initX;
    //track scale only rotate when s === 1
    var s = 1;
    var mouseClicked = false;


    var projection = d3.geo.mercator()
        .scale(150)
        .translate([width/2,height/1.5])
        .rotate([rotated,0,0]); //center on USA because 'murica

    var zoom = d3.behavior.zoom()
         .scaleExtent([1, 20])
         .on("zoom", zoomed);

    var svg = d3.select("#map").append("svg")
        .attr("width", width)
        .attr("height", height)
          //track where user clicked down
          .on("mousedown", function() {
             d3.event.preventDefault();
             //only if scale === 1
             if(s !== 1) return;
               initX = d3.mouse(this)[0];
               mouseClicked = true;
          })
          .on("mouseup", function() {
              if(s !== 1) return;
              rotated = rotated + ((d3.mouse(this)[0] - initX) * 360 / (s * width));
              mouseClicked = false;
          })
        .call(zoom);


      function rotateMap(endX) {
        projection.rotate([rotated + (endX - initX) * 360 / (s * width),0,0])
            g.selectAll('path')       // re-project path data
           .attr('d', path);
      }
    //for tooltip
    var offsetL = document.getElementById('map').offsetLeft+10;
    var offsetT = document.getElementById('map').offsetTop+10;

    var path = d3.geo.path()
        .projection(projection);

    var tooltip = d3.select("#map")
         .append("div")
         .attr("class", "tooltip hidden");

    //need this for correct panning
    var g = svg.append("g");

    var color = d3.scale.linear()
          .domain([0, 3348])
          .range(["powderblue", "midnightblue"]);
    //det json data and draw it
    d3.json("./combined2_bis.json", function(error, world) {
      // console.log(world);
      if(error) return console.error(error);
      // console.log(topojson.feature(world, world.objects.countries));
      //countries
      g.append("g")
          .attr("class", "boundary")
        .selectAll("boundary")
          .data(topojson.feature(world, world.objects.countries).features)
          .enter().append("path")
          .attr("name", function(d) {return d.properties.name;})
          .attr("id", function(d) { return d.id;})
          .attr("data-color", function(d) { return color(d.properties.nb_movies);})
          .attr("data-genre", function(d) { return d.properties.genre;})
          .attr("data-director", function(d) { return d.properties.director;})
          .attr("data-writer", function(d) { return d.properties.writer;})
          .attr("data-production_company", function(d) { return d.properties.production_company;})
          .attr("data-actors", function(d) { return d.properties.actors;})
          .style("fill", function(d){return color(d.properties.nb_movies);})
          .on('click', selected)
          .on("mousemove", showTooltip)
          .on("mouseout",  function(d,i) {
              tooltip.classed("hidden", true);
           })
          .attr("d", path);

      usa = d3.select('#USA');
      canada = d3.select('#CAN');

      //states
      g.append("g")
          .attr("class", "boundary state hidden")
        .selectAll("boundary")
          .data(topojson.feature(world, world.objects.states).features)
          .enter().append("path")
          .attr("name", function(d) { return d.properties.name;})
          .attr("id", function(d) { return d.id;})
          .on('click', selected)
          .on("mousemove", showTooltip)
          .on("mouseout",  function(d,i) {
              tooltip.classed("hidden", true);
           })
          .attr("d", path);

      states = d3.selectAll('.state');
    });

    function showTooltip(d) {
      label = d.properties.name;
      var mouse = d3.mouse(svg.node())
        .map( function(d) { return parseInt(d); } );
      tooltip.classed("hidden", false)
        .attr("style", "left:"+(mouse[0]+offsetL)+"px;top:"+(mouse[1]+offsetT)+"px")
        .html(label);
    }

    function selected(d) {
      console.log(d.properties.name);
      if (d3.select('.selected')[0][0] != null){
        d3.select('.selected')[0][0].style.fill = d3.select('.selected')[0][0].dataset.color;
      }
      d3.select('.selected').classed('selected', false);
      d3.select(this).classed('selected', true);
      this.style.fill = 'red';

      window.info = this;
      var modal = new tingle.modal({
              footer: false,
              stickyFooter: false,
              closeMethods: ['overlay', 'button', 'escape'],
              closeLabel: "Close",
              cssClass: ['custom-class-1', 'custom-class-2'],
              onOpen: function() {
                  console.log('modal open');
              },
              onClose: function() {
                  console.log('modal closed');
              },

          });

          // set content

          modal.setContent(`<div>
            <h1 style="color:#154693">
              `+ this.getAttribute("name")+`
            </h1>
            <h3 style="color:#1554A9">
              Most produced genre: `+ this.dataset.genre+`
            </h3>
            <h3 style="color:#1554A9">
              Director with most movies: `+ this.dataset.director+`
            </h3>
            <h3 style="color:#1554A9">
              Writer with most movies: `+ this.dataset.writer+`
            </h3>
            <h3 style="color:#1554A9">
              Most popular production company: `+ this.dataset.production_company+`
            </h3>
            <h3 style="color:#1554A9">
              Most popular actor: `+ this.dataset.actors+`
            </h3>
          </div>`);


          // open modal
          modal.open();

    }


    function zoomed() {
      var t = d3.event.translate;
      s = d3.event.scale;
      var h = 0;

      t[0] = Math.min(
        (width/height)  * (s - 1),
        Math.max( width * (1 - s), t[0] )
      );

      t[1] = Math.min(
        h * (s - 1) + h * s,
        Math.max(height  * (1 - s) - h * s, t[1])
      );

      zoom.translate(t);
      if(s === 1 && mouseClicked) {
        rotateMap(d3.mouse(this)[0])
        return;
      }

      g.attr("transform", "translate(" + t + ")scale(" + s + ")");

      //adjust the stroke width based on zoom level
      d3.selectAll(".boundary")
        .style("stroke-width", 1 / s);

      //toggle state/USA visability
      if(s > 1.5) {
        states
          .classed('hidden', false);
        usa
          .classed('hidden', true);
        canada
          .classed('hidden', true);
      } else {
      states
        .classed('hidden', true);
      usa
        .classed('hidden', false);
      canada
        .classed('hidden', false);
    }
  }
