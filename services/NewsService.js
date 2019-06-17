import { ApiMethod, request, Sources, endpoint, apiKey } from "./BaseService";

export default class NewsService {

    getAllNews(callback) {
        const params = {
            country: "us",
            apiKey: apiKey,
        };
        request(endpoint.top, ApiMethod.get, params, function (res, err) {
            if (err != null) {
                console.log(err);
                callback(null, err);
                return;
            }
            callback(res.data, err);
        });
    }

    getNewsWith(sources, callback) {
        const params = {
            country: "us",
            q: sources,
            apiKey: apiKey,
        };
        request(endpoint.everything, ApiMethod.get, params, function (res, err) {
            if (err != null) {
                callback(null, err);
                return;
            }
            callback(res.data, err);
        });
    }
}