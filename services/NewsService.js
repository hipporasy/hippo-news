import { ApiMethod, request, everythingEndPoint, Sources } from "./BaseService";

export default class NewsService {

    getAllNews(callback) {
        request(everythingEndPoint, ApiMethod.get, [], function (res, err) {
            if (err != null) {
                callback(null, err);
                return;
            }
            callback(res.data, err);
        });
    }

    getSportNews(callback) {
        request(`${everythingEndPoint}&q=${Sources.sport}`, ApiMethod.get, [], function (res, err) {
            if (err != null) {
                callback(null, err);
                return;
            }
            callback(res.data, err);
        });
    }

    getTechNews(callback) {
        request(`${everythingEndPoint}&q=${Sources.technology}`, ApiMethod.get, [], function (res, err) {
            if (err != null) {
                callback(null, err);
                return;
            }
            callback(res.data, err);
        });
    }
    getScienceNews(callback) {
        request(`${everythingEndPoint}&q=${Sources.science}`, ApiMethod.get, [], function (res, err) {
            if (err != null) {
                callback(null, err);
                return;
            }
            callback(res.data, err);
        });
    }

}