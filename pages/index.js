
import Card from "../components/Card";
import NewsService from "../services/NewsService";

function Home({ news }) {
    
    console.log(news);
    return <div className="Container">
        <Card style={{ marginTop: 10 }} />
        
        <div style={{ marginTop: 10 }} className="FlexWrapped">
        
        </div>

        <style global jsx>{`
            .Container {
                margin: 0 auto;
                width: 90%
            }
            .FlexWrapped {
                height: 100%;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                align-content: stretch;
            }
            .Cell {
                width: 45%;
            }
        `}

        </style>
    </div>;
}

Home.getInitialProps = async ({ news }) => {
    var newsService = new NewsService();
    newsService.getAllNews(function (news, error) {
        console.log(news)
        console.log("=asdf=asdf=" + error)
        return {news: news}
    })
  };

export default Home;