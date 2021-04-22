# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Mahdi Ben Hassen| 250140 |
| Nour Ghribi| 250232 |
| Salim Zrouga| 248151 |

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 (23rd April, 5pm)

**10% of the final grade**

This is a preliminary milestone to let you set up goals for your final project and assess the feasibility of your ideas.
Please, fill the following sections about your project.

*(max. 2000 characters per section)*

### Dataset

The dataset we are going to use is the MovieLens dataset seen [here](https://grouplens.org/datasets/movielens/) combined with [the iMDb dataset](https://www.kaggle.com/stefanoleone992/imdb-extensive-dataset).

The **MovieLens dataset** contains 100,000 ratings and 3,600 tag applications applied to 9,000 movies by 600 users. It was last updated on 9/2018.

The **imdb dataset** contains 85,855 movies with attributes such as movie description, average rating, number of votes, genre, etc.

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
    

### Problematic

Our main goal for this project is to give a good insight about movies production and provide an interactive visualization of the origin and best rated ones along the years.

We can separate the tasks like the following:

- Mean rating of movies per principal (i.e. Producer/Writer/Actor/...) and introducing them in an interactive way. (Bio, place of birth ...)
- Distribution of locations for movies. (Where the most famous movies were shot compared to the least famous ones)
- What does make a movie succesfull ? (Thanks to actors, producers?)
- What was the best thriving era for movie production ? (i.e. Movies per year ...)
- What is the most dominant genre ? What is the dominant genre per period ?

### Exploratory Data Analysis

> Pre-processing of the data set you chose
> - Show some basic statistics and get insights about the data

### Related work

- What others have already done with the data?
[Cinematic Names](https://maryzam.github.io/movie-names/) 
[Billions at the Franchise Box Office](https://flowingdata.com/2019/02/20/franchise-box-office/)
[Bang for Your Buck](http://projects.nickdiana.com/datafun/movieQualityVsDuration/)

- Why is your approach original?
We will be creating a interactive visualization with the 

- What source of inspiration do you take? Visualizations that you found on other websites or magazines (might be unrelated to your data).
[Marvel Cinematic Univers](https://live.yworks.com/demos/promo/GDC2019/)
[Discovering the Olympic Games](https://com-480-data-visualization.github.io/com-480-project-knn-viz/website/map.html)

- Part of the datasets are being used in CS-449-Systems for Data Science, but the scope is totally different. As the other projects goal is to create a knn based recommender system.

## Milestone 2 (7th May, 5pm)

**10% of the final grade**


## Milestone 3 (4th June, 5pm)

**80% of the final grade**


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

