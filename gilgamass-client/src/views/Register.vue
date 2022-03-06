<template>
  <div class="hold-transition register-page">
    <h1 style="font-family: 'Times New Roman', Times, serif">Welcome</h1>
    <div class="register-box" style="min-height: 369px">
      <div class="card card-outline card-primary">
        <div class="card-body">
          <p class="login-box-msg">Register a new admin</p>

          <form @submit.prevent="handleSubmitRegist">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Username" v-model="user.name" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-user"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="Email" v-model="user.email" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="password" class="form-control" placeholder="Password" v-model="user.password" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <!-- <div class="row"> -->
            <!-- /.col -->
            <div class="text-center">
              <button type="submit" class="btn btn-primary btn-block">Register</button>
            </div>
          </form>

          <div class="social-auth-links text-center">
            <a href="#" class="btn btn-block btn-danger">
              <i class="fab fa-google-plus mr-2"></i>
              Sign up using Google+
            </a>
          </div>
          <router-link class="text-center" :to="{ name: 'Login' }">I already have account</router-link>
        </div>
        <!-- /.form-box -->
      </div>
      <!-- /.card -->
    </div>
  </div>
  <!-- end register admin -->
</template>

<script>
export default {
  name: "Register",

  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async handleSubmitRegist() {
      // try {
      fetch(`${this.$baseUrl}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.user),
      })
        .then((resp) => {
          if (resp.status === 409) throw Error(resp.statusText);
          if (resp.status === 400) throw Error(resp.statusText);
          return resp.json();
        })
        .then(({ name, email }) => {
          fetch(`${this.$baseUrl}/send`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email }),
          });
        })
        .then(() => {
          // console.log(name, email);
          this.$router.push({ name: "Login" });
        })
        .catch((err) => {
          console.log(err);
        });
      // } catch (error) {
      //   console.log(error);
      // }
    },
  },
};
</script>

<style></style>
