import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function SavedNews(props) {
  return (
    <section className="cards">
      <div className="cards__list">
        {props.savedNews.map((cardEl) => (
          <NewsCard
            key={cardEl._id}
            card={cardEl}
            onSaveCardClick={props.onSaveCardClick}
            loggedin={props.loggedin}
            loggedInSavedNews={props.loggedInSavedNews}
          />
        ))}
      </div>
    </section>
  );
}

export default SavedNews;
