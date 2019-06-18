import { ApiMethod, get, Sources, endpoint, apiKey } from "./BaseService";

export default class NewsService {

    async getAllNews() {
        const params = {
            country: "us",
            apiKey: apiKey,
        };
        const res = get(endpoint.top, params);
        return res.then((res) => {
            return res.data;
        }).catch((err) => {
            return err;
        })
    }

    async getNewsWith(sources) {
        const params = {
            q: sources,
            apiKey: apiKey,
        };
        const res = get(endpoint.everything, params);
        return res.then((res) => {
            return res.data;
        }).catch((err) => {
            return err;
        })
    }
}