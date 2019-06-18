import App, { Container } from 'next/app';
import Header from "../components/Header";
import { routes } from '../constants/routes';

export default class extends App {
    render() {
        const { Component, pageProps, router = {} } = this.props;
        return <Container>
            <Header routes={routes} path={router.pathName} />
            <Component {...pageProps} />

            <style jsx global>
                {`
                body {
                    margin: 0;
                }
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
        </Container>
    }

    static async getInitialProps({ Component, router, ctx }) {
        const pageProps = Component.getInitialProps && await Component.getInitialProps(ctx) || {};
        const { route, query } = router;
        return { pageProps, route, query };
    }

}