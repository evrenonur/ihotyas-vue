<template>
  <div>
    <div class="container-fluid vh-100" style="margin-top:300px">
      <div class="" style="margin-top:200px">
        <div class="rounded d-flex justify-content-center">
          <div class="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
            <div class="text-center">
              <h3 class="text-primary">Giriş Yap</h3>
            </div>
            <form>
              <div class="p-4">
                <div class="input-group mb-3">
                  <span class="input-group-text bg-primary"><i class="bi bi-person-plus-fill text-white"></i></span>
                  <input type="text" class="form-control" placeholder="E-Posta Adresi" v-model="email">
                </div>
                <div class="input-group mb-3"><span class="input-group-text bg-primary"><i
                    class="bi bi-key-fill text-white"></i></span>
                  <input type="password" class="form-control" placeholder="Şifre" v-model="password">
                </div>

                <div class="d-flex justify-content-center">
                  <button class="btn btn-primary" @click.prevent="login">Giriş Yap</button>
                </div>
                <p class="text-center mt-5">Bir Hesabın Yokmu?
                  <span class="text-primary">Kayıt Ol</span>
                </p>
                <p class="text-center text-primary">Şifremi Unuttum</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


import {LoginService} from "@/Services/LoginService";
import router from "@/router";

export default {


  name: "LoginView",
  email: "",
  password: "",
  methods: {
    login() {
      new LoginService().login(this.email, this.password).then((response) => {
        if (response.isSuccess) {
          iziToast.success({
            title: 'Başarılı',
            message: 'Giriş Başarılı',
            onClosing: function(instance, toast, closedBy){
              localStorage.setItem("token", response.data.token)
              router.push({name: 'home'})
            }
          });
        } else {
          iziToast.error({
            title: 'Hata',
            message: 'Giriş Başarısız',
          });
        }
      }).catch((error) => {
        iziToast.error({
          title: 'Hata',
          message: 'Giriş Başarısız',
        });
      })

    }
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },

  setup() {
    const token = localStorage.getItem("token")
    if (token) {
      router.push({name: 'home'})
    }
  },


}
</script>
