function SavedNewsHeader(props) {
  return (
    <div className="header__contaner_saved-news">
      <h4 className="header__title_saved-news">Saved articles</h4>
      <h2 className="header__details_saved-news">
        {props.userName}, you have {props.counter} saved articles
      </h2>
      <h3 className="header__keywords_saved-news">
        {"By keywords: "}
        <span className="header__keywords_saved-news header__keywords_saved-news_bold">
          Nature, Yellowstone and 2 other
        </span>
      </h3>
    </div>
  );
}

export default SavedNewsHeader;
