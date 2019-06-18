
import Card from "../components/Card";
import NewsService from "../services/NewsService";

function Home({ news }) {
    const firstArticle = news ? news.articles.shift() : null;
    return <div className="Container">
        <Card article={firstArticle} style={{ marginTop: 10 }} />
        <div style={{ marginTop: 10 }} className="GridContainer">
        { news ? news.articles.map((eachArticle) => {
            return <Card article={eachArticle} />
        }) : <div/>}
        </div>
    </div>;
}

Home.getInitialProps = async ({ req }) => {
    var newsService = new NewsService();
    var news = await newsService.getAllNews();
    return { news };
};

export default Home;