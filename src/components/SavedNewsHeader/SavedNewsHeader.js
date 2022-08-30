function SavedNewsHeader(props) {
  return (
    <div className="header__section">
      <h4 className="header__title">Saved articles</h4>
      <h2 className="header__details">
        {props.userName}, you have {props.counter} saved articles
      </h2>
      <h3 className="header__keywords">
        {"By keywords: "}
        <span className="header__keywords header__keywords_bold">
          Nature, Yellowstone and 2 other
        </span>
      </h3>
    </div>
  );
}

export default SavedNewsHeader;
