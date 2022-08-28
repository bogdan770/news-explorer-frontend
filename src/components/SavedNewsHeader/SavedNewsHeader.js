function SavedNewsHeader(props) {
  return (
    <div className="savedNews__container">
      <h4 className="savedNews__title">Saved articles</h4>
      <h2 className="savedNews__details">
        {props.userName}, you have {props.counter} saved articles
      </h2>
      <h3 className="savedNews__keywords">
        {props.keywords}
      </h3>
    </div>
  );
}

export default SavedNewsHeader;
