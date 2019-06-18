
import Card from "../components/Card";
import NewsService from "../services/NewsService";
import { Sources } from "../services/BaseService";

function Business({ news }) {
    const firstArticle = news ? news.articles.shift() : null;
    return <div className="Container">
        <Card article={firstArticle} style={{ marginTop: 10 }} />

        <div style={{ marginTop: 10 }} className="GridContainer">
            {news ? news.articles.map((eachArticle) => {
                return <Card article={eachArticle} />
            }) : <div />}
        </div>
    </div>;
}

Business.getInitialProps = async ({ req }) => {
    var newsService = new NewsService();
    var news = await newsService.getNewsWith(Sources.business);
    return { news };
};

export default Business;