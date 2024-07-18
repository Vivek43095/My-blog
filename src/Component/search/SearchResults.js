import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { BLOG_DATA } from '../../assets/data';
 import classes from '../Blog.module.css';
const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query')?.toLowerCase() || '';
  const results = BLOG_DATA.filter(item => 
    item.title.toLowerCase().includes(query)
  );

  return (
    <div className={classes.MainContainer}>
      <h2>Search Results for: "{query}"</h2>
      {results.length > 0 ? (
        results.map(result => (
          <div key={result.id} className={classes.BlogItem}>
            <img className={classes.BlogThumbnail} src={result.thumbnail} alt={result.title} />
            <h3 className={classes.BlogHeading}>{result.title}</h3>
            <p className={classes.BlogDescription}>{result.description}</p>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
