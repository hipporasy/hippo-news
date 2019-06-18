const Card = (props) => {

    const { article } = props;

    return <div style={props.style} className="card">
        {article ? <div><img width="100%" src={article.urlToImage} />
            <h3>{article.title}</h3>
            <p>{article.content}</p>
        </div>
            : <div />}
        <style jsx>{`
    .card image {
        display: block;
        maxHeight: 200;
        height: auto;
        width: 100%;
    }
    .card {
        padding: 20px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 5px;
      }
      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }`}
        </style>
    </div>
};

export default Card;

// https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1140163604%2F960x0.jpg%3Ffit%3Dscale