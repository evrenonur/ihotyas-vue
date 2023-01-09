import ILoginService from "@/Services/Interfaces/ILoginService";
import AxiosManager from "@/Utils/AxiosManager";
import AppEndpoints from "@/Utils/AppEndpoints";

class LoginService extends ILoginService {

    constructor() {
        super();
    }


    // eslint-disable-next-line no-unused-vars
    static login(email, password) {
        try {
            const response = AxiosManager.post(AppEndpoints.LOGIN_URL, {
                "email": email,
                "password": password
            });

            if (response.status === 200) {
                return response.data;
            } else {
                alert("Giriş başarısız");
            }
        } catch (error) {
            alert("Giriş başarısız");
            console.log(error);
        }

    }
}

export default LoginService;