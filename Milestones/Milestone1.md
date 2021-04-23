# Milestone 1 (23rd April, 5pm)

## Dataset

The dataset we are going to use is the MovieLens dataset seen [here](https://grouplens.org/datasets/movielens/) combined with [the iMDb dataset](https://www.kaggle.com/stefanoleone992/imdb-extensive-dataset).

The **MovieLens dataset**:

This dataset contains 100,000 ratings and 3,600 tag applications applied to 9,000 movies by 600 users. It was last updated on 9/2018.

The **IMDb dataset**:

The movies dataset contains 85,855 movies with attributes such as movie description, average rating, number of votes, genre, etc.

The ratings dataset includes 85,855 rating details from demographic perspective.

The names dataset includes 297,705 cast members with personal attributes such as birth details, death details, height, spouses, children, etc.

The title principals dataset includes 835,513 cast members roles in movies with attributes such as IMDb title id, IMDb name id, order of importance in the movie, role, and characters played.

**These datasets are already clean and ready to use, so we only need to join the tables and explore the data to get the results that we want to visualize.**

The relevant csv files and corresponding columns for this project are:

- movies.csv
    - movieId
    - Title
    - genres
    
    
- ratings.csv
    - userId
    - movieId
    - rating
    - timestamp
    
    
- links.csv
    - movieId
    - imdbId
    - tmdbId


- IMDb movies.csv
    - imdb_title_id
    - original title
    - year
    - genre
    - country
    - language
    
    
- IMDb title_principals.csv
    - imdb_title_id
    - imdb_name_id
    - category
    - job 
    - characters


- IMDb names.csv
    - imdb_name_id
    - name
    - date_of_birth
    

## Problematic

Our main goal for this project is to give a good insight about movies production and provide an interactive visualization of the origin and best rated ones along the years.

We can separate the tasks like the following:

- Mean rating of movies per principal (i.e. Producer/Writer/Actor/...) and introducing them in an interactive way. (Bio, place of birth ...)
- Distribution of locations for movies. (Where the most famous movies were shot compared to the least famous ones)
- What does make a movie succesfull ? (Thanks to actors, producers?)
- What was the best thriving era for movie production ? (i.e. Movies per year ...)
- What is the most dominant genre ? What is the dominant genre per period ?

## Exploratory Data Analysis

- The data is rich and can be used for many Machine Learning or Visualization purposes. We did a basic data analysis to check null values and how the columns are correlated [here](../Code/EDA.ipynb).

    - We did a basic summary of each table and tried to visualize how its columns are correlated.

        - How the details of movie principals are correlated:
        [figure 1](../Figures/imdbNames.png)

        - How the IMDb scores counts are distributeds
        [figure 2](../Figures/scoresDistribution.png)
    
    - We can join the IMDb data and the MovieLens data using the movieId and imdbId columns in the links.csv file. This final dataset contains 97969 rows × 54 columns, and will be the basis for our work.

## Related work

- What others have already done with the data?

[Cinematic Names](https://maryzam.github.io/movie-names/): This visualization shows the huge impact of a daily life on a process of choosing names for TV & movie characters. The ideas of the graphics used in this analysis are very interesting and could be a source of inspiration for our project.

[Billions at the Franchise Box Office](https://flowingdata.com/2019/02/20/franchise-box-office/): The graphic presented in this work is really meaningful and shows the cumulative earnings of each movie during the years. This is an easy to use graphic that offers a perfect way to search for any movie that we would like to see its grosses.

[Bang for Your Buck](http://projects.nickdiana.com/datafun/movieQualityVsDuration/): The idea behind this analysis is original, since they are affering the opportunity to compare movies by their quality versus the duration by exploring concentration of quality measured in four ways: MetaCritic Score, IMDB Rating, Gross, and Budget.

- Why is your approach original?

We will be creating an interactive visualization with the combination of two datasets to provide the easiest way of understanding the available informations. We will try to make it as interactive and enjoyable as possible so that users can play around with.
Colourful maps and graphics will be our main goal

- What source of inspiration do you take? Visualizations that you found on other websites or magazines (might be unrelated to your data).

[Marvel Cinematic Univers](https://live.yworks.com/demos/promo/GDC2019/): One of the creative topics contest organized by the Graph Drawing and Networks Visualization that deals with the relationship between Marvel superheros and the movies in which they appear. The web page provides a very filtered views which make it fun exploring the Marvel Cinematic universe. 

[Discovering the Olympic Games](https://com-480-data-visualization.github.io/com-480-project-knn-viz/website/map.html): A nice example of one of the ideas that we are interested in, which is the interactive map.

- Part of the datasets are being used in CS-449-Systems for Data Science, but the scope is totally different. As the other projects goal is to create a knn based recommender system.