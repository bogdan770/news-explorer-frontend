import NewsCard from "../NewsCard/NewsCard";

function NewsCardList(props) {
  return (
    <div className="search-results">
      <h2 className="search-results__title">Search results</h2>
      <section className="cards">
        <div className="cards__list">
          {props.cards.map((cardEl) => (
            <NewsCard
              key={cardEl._id}
              card={cardEl}
              onSaveCardClick={props.onSaveCardClick}
              loggedin={props.loggedin}
            />
          ))}
        </div>
      </section>

      <button className="search-results__button" type="submit">
        Show more
      </button>
    </div>
  );
}

export default NewsCardList;
