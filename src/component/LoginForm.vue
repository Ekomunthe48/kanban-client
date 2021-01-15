<template>
    <div class="container">
        <form @submit.prevent="loginSubmit">
          <h2>Login</h2>
          <div class="mb-3">
            <label for="email-login" class="form-label">Email address</label>
            <input v-model="email" type="email" class="form-control" id="email-login" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="password-login" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="password-login">
          </div>
          <div class="row mb-3">
              <div class="col-auto">
                  <a href="#" class="fs-6 mb-3" @click.prevent="registerForm">Not have a account yet? Click here to register</a>
              </div>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "LoginForm",
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
        loginSubmit() {
          const obj =  {
            email: this.email,
            password: this.password
          }
          return this.$emit('login', obj)
        },
        registerForm() {
          const obj = {
            currentPage: 'register'
          }
          return this.$emit('registerForm', obj)
        }
    }
}
</script>

<style>

</style>