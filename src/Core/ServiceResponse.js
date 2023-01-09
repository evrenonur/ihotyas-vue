class ServiceResponse {

    constructor(
        isSuccess,
        message,
        data,
        statusCode
    ) {
        this._isSuccess = isSuccess;
        this._message = message;
        this._data = data;
        this._statusCode = statusCode;
    }


    get isSuccess() {
        return this._isSuccess;
    }

    get message() {
        return this._message;
    }

    get data() {
        return this._data;
    }

    get statusCode() {
        return this._statusCode;
    }
}

module.exports =  ServiceResponse;
