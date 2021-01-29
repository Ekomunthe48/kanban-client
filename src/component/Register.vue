<template>
    <div class="container">
        <form @submit.prevent="register" class="form">
          <h2>Register</h2>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input v-model="user.name" type="text" class="form-control" id="name" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input v-model="user.email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="user.password" type="password" class="form-control" id="password">
          </div>
          <div class="row mb-3">
              <div class="col-auto">
                  <a href="#" class="fs-6 mb-3 text" @click.prevent="loginForm">Already have Account ? Login Now</a>
              </div>
          </div>
          <button type="submit" class="btn btn-dark">Register</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Register",
    data() {
      return {
        user: {
          name: '',
          email: '',
          password: ''
        }
      }
    },
    methods: {
      register() {
        return this.$emit('register', this.user)
      },
      loginForm() {
          const obj = {
            currentPage: 'login'
          }
          return this.$emit('loginForm', obj)
      }
    }
}
</script>

<style>
  .form {
    border: 1px black solid;
    padding: 10px;
    border-radius: 10px;
    background: rgba(17, 14, 12, 0.37);
    color: white;
  }
  .text{
    color: white;
    text-decoration: none;
  }
  .text:hover{
    color: white;
  }
</style>