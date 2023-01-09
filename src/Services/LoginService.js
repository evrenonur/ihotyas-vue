import ILoginService from "@/Services/Interfaces/ILoginService";
import AxiosManager from "@/Utils/AxiosManager";
import AppEndpoints from "@/Utils/AppEndpoints";
import ServiceResponse from "@/Core/ServiceResponse";

export class LoginService extends ILoginService {

    constructor() {
        super();
    }


    async login(email, password) {
        try {
            const response = await AxiosManager.post(AppEndpoints.LOGIN_URL, {
                "email": email,
                "password": password
            });

            if (response.status === 200) {
                return new ServiceResponse(response.data.isSuccess, response.data.message, response.data.data, response.data.statusCode);
            }
            return new ServiceResponse(false, "Error", response.data, response.status);
        } catch (error) {
            return new ServiceResponse(false, "Error", error.response.data, error.response.status);
        }
    }
}

