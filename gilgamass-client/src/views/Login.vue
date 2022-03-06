<template>
  <div class="hold-transition login-page">
    <h1 style="font-family: times new roman">Welcome Back!</h1>
    <div class="login-box" style="min-height: 369px">
      <div class="card card-outline card-primary">
        <div class="card-body">
          <form action="" @submit.prevent="handleSubmitLogin">
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
            <div class="row">
              <div class="col-8">
                <div class="icheck-primary">
                  <input type="checkbox" id="remember" />&nbsp;
                  <label for="remember"> Remember Me </label>
                </div>
              </div>
              <!-- /.col -->
              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">Sign In</button>
              </div>
              <!-- /.col -->
            </div>
          </form>

          <div class="social-auth-links text-center mt-2 mb-3">
            <p>- OR -</p>

            <!-- <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin> -->
          </div>

          <p class="mb-0">
            <router-link class="text-center" :to="{ name: 'Register' }">Register a new admin</router-link>
          </p>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
    </div>
    <!-- /.login-box -->
  </div>
  <!-- end login-page -->
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    handleSubmitLogin() {
      this.$store
        .dispatch("getUser", this.user)
        .then(({ access_token, id, name }) => {
          localStorage.setItem("access_token", access_token);
          localStorage.setItem("idUser", id);
          localStorage.setItem("username", name);
          this.$router.push("/tracking?header=Target%20History&tag=one");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
