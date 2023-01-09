class ServiceResponse {

    constructor(
        isSuccess,
        message,
        data,
        statusCode
    ) {
        this.isSuccess = isSuccess;
        this.message = message;
        this.data = data;
        this.statusCode = statusCode;
    }

     getReponse() {
        return {
            isSuccess: this.isSuccess,
            message: this.message,
            data: this.data,
            statusCode: this.statusCode
        }
    }
}

module.exports =  ServiceResponse;
