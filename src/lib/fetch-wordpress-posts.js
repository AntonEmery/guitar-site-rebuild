const fetch = require('node-fetch');
const fs = require('fs');

/**
 * Fetch WP Posts from API Endpoint
 */

 const fetchPosts = () => {
  const allPosts = [];
  let totalPages;
  const perPage = 100;

  return fetchSinglePageofPosts(1)
  .then((res) => {
    totalPages = res.headers.get('X-WP-TotalPages');
    return res.json()
  })
  .then((posts) => {
    allPosts.push(...posts);

    const numberOfPagesToFetch = [];
    for (let i = 2; i <= totalPages; i++) {
      numberOfPagesToFetch.push(i)
    }

    return Promise.all(numberOfPagesToFetch.map(fetchSinglePageofPosts))
  })
  .then(posts => Promise.all(posts.map(res => res.json())))
  .then((postData) => {
    postData.forEach((posts) => { allPosts.push(...posts) })
    try {
      console.log(allPosts.length)
      fs.writeFileSync(`../_data/posts.json`, JSON.stringify(allPosts, null, 2))
    } catch(err) {
      console.log(errors)
    }
    return allPosts;
  })

  function fetchSinglePageofPosts(pageNumber) {
    const url = `http://celticfingerstyleguitar.com/wp-json/wp/v2/posts?_embed&page=${pageNumber}&per_page=${perPage}`;

    return fetch(url);
  }
 }

 const getWPContent = () => {
   return fetchPosts()
 }

 getWPContent();
