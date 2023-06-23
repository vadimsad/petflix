# [*Petflix* - Movie selection service](https://tinysrc.me/go/FJNtWTu4g)

## Description

### About

Petflix is a pet project developed on React, which is a web service for finding movies. It allows users to search for movies and series by genre, year of release, type and title, as well as get information about a particular movie, such as description, movie awards, interesting facts and similar movies.

### Tech Stack

- **Fron-end**: TypeScript, React, HTML, CSS (Tailwind)
- **Libraries**: Redux-Toolkit, React Router, Axios, React Content Loader, React Select
- **API**: [Kinopoisk Unofficial API](https://kinopoiskapiunofficial.tech/)

### Features and functionality:

- **Movie catalog**: a catalog of all movies with pagination is available, filters and sorting of movies are implemented, and saving sorting parameters in GET parameters is also implemented
- **Movie search**: Users can search for movies by keywords or title. The search results are displayed as a list with brief information about each movie.
- **Detailed information about the movie**: Users can view detailed information about the movie, including description, awards, facts and similar movies.
- **Cast**: The ability to search for actors and directors in the search bar is implemented, a detailed page of each actor with all the information and films in which he participated is also available
- **Ratings and reviews**: Users can view reviews of each movie.
- **Favorites**: Users can add movies to the favorites list, which are saved when the application is restarted


### Solved issues:

1. When requesting a list of movies from the API, some movies are duplicated, I contacted the developer, he promised to fix it, but for now I manually filter out duplicate elements.
2. Faced a lot of problems due to the peculiarities of the css overflow property in the safari browser. As a result, I abandoned overflow, used a different approach to ensure cross-browser compatibility
3. A large number of component redraws on the catalog page were solved by creating a separate activeFiltersCount variable and passing it as a dependency to useEffect, and not the entire object as a whole.
4. Options for some filters come from the API, so it was decided to store such options in the GET parameters in the form in which they come from the API in order to be able to set the desired filter even before the response from the server arrives on first loading

### Further plans:

1. ✅Fix a problem with a large number of parallel requests (429 status code)
2. Make a page with movie premieres by month
3. Make sure that when you click on a genre or rating of a movie, it shows films of the same genre or rating
4. Optimize performance and error handling.
