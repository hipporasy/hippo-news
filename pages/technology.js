
import Card from "../components/Card";
import NewsService from "../services/NewsService";
import { Sources } from "../services/BaseService";

function Technology({ news }) {
    const firstArticle = news ? news.articles.shift() : null;
    return <div className="Container">
        <Card article={firstArticle} style={{ marginTop: 10 }} />
        
        <div style={{ marginTop: 10 }} className="GridContainer">
        { news ? news.articles.map((eachArticle) => {
            return <Card article={eachArticle} />
        }) : <div/>}
        </div>

        <style global jsx>{`
            .Container {
                margin: 0 auto;
                width: 90%
            }
            .GridContainer {
                grid-gap: 50px;
                height: 90vh;
                margin: 1rem;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;                
            }
        `}

        </style>
    </div>;
}

Technology.getInitialProps = async ({ req }) => {
    var newsService = new NewsService();
    var news = await newsService.getNewsWith(Sources.technology);
    return { news };
};

export default Technology;