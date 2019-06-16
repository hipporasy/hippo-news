
import Card from "../components/Card";
import { routes } from "../constants/routes";

function Home() {
    return <div className="Container">
        <Card style={{ marginTop: 10 }} />

        <div style={{ marginTop: 10 }} className="FlexWrapped">
            <Card className="Cell" />
            <Card className="Cell" />
            <Card className="Cell" />
            <Card className="Cell" />
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

export default Home;