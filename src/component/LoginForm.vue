<template>
    <div class="container">
        <form @submit.prevent="loginSubmit" class="form">
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
                  <a href="#" class="fs-6 mb-3 text" @click.prevent="registerForm">Not have a account yet? Click here to register</a>
              </div>
          </div>
          <button type="submit" class="btn btn-dark">Login</button>
            <div class="signup-buttons" style="margin-top: 10px;">
              <a href="#" class="google-signup" @click.prevent="loginWithGoogle">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><title>Google</title><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"></path><path fill="#34A853" d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"></path><path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"></path><path fill="#EA4335" d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"></path></g></svg>
                Google
              </a>
            </div>
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
        loginWithGoogle() {
          return this.$emit('loginWithGoogle')
        },
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
  .google-signup {
    border-radius: 10px;
    background: black;
    color: white;
    padding: 10px;
    text-decoration: none;
  }
  .google-signup:hover {
    color: white;
    text-decoration: none;
  }
</style>