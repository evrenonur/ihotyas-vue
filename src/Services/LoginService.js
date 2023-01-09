import ILoginService from "@/Services/Interfaces/ILoginService";
import AxiosManager from "@/Utils/AxiosManager";
import AppEndpoints from "@/Utils/AppEndpoints";


export class LoginService extends ILoginService {

    constructor() {
        super();
    }


     async login(email, password) {
        try {
            AxiosManager.post(AppEndpoints.LOGIN_URL, {
                "email": email,
                "password": password
            }).then(response => {
                return  {
                    "status": response.status,
                    "data": response.data
                }
            }).catch(error => {
                return {
                    "status": error.response.status,
                    "data": error.response.data
                }
            });
        } catch (error) {
            return {
                "status": error.response.status,
                "data": error.response.data
            }
        }
    }
}

