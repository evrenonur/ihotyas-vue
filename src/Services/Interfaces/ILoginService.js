class ILoginService {
    constructor() {
        if (new.target === ILoginService) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
    }

}

module.exports = ILoginService;
