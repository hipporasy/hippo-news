const Card = (props) => (
    <div style={props.style} className="card">
        <img width="100%" src="https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1140163604%2F960x0.jpg%3Ffit%3Dscale"
            alt="Alps"></img>
        <h3>Bitcoin Hits Year-To-Date Highs As Litecoin Soars--Here's Why</h3>
        <p>Bitcoin, which has been rallying hard all year, has hit a fresh year-to-date high, breaking the psychological $9,000 level for the second time this year and leaving investors eyeing the $10,000 mark. ..</p>
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
);

export default Card;

// https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1140163604%2F960x0.jpg%3Ffit%3Dscale