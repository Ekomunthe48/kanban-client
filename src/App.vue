<template>
<div>
  <navbar></navbar>
  <div class="container">

    <div v-if="currentPage == 'login'">
    <login-form @login="login" @registerForm="changePage"></login-form>
    </div>

    <div v-else-if="currentPage == 'register'">
      <register @register="register" @loginForm="changePage"></register>
    </div>

    <div class="container" v-else>
        <task-list></task-list>
        <add-task></add-task>
    </div>
  </div>
</div>
</template>

<script>
import Axios from 'axios'
import Navbar from './component/Navbar';
import LoginForm from './component/LoginForm';
import TaskList from './component/TaskList.vue';
import Register from './component/Register.vue';
import AddTask from './component/AddTask.vue';

export default {
  name: "App",
  data() {
    return {
      message: 'Ohayo Sekai, Good Morning World !!!!',
      currentPage: "login",
      url:'http://localhost:3000',
    };
  },
  components: {
    Navbar,
    LoginForm,
    TaskList,
    Register,
    AddTask
  },
  methods: {
    checkAuth() {
      if(localStorage.access_token) {
        this.currentPage = 'home'
      } else {
        this.currentPage = 'login'
      }
    },
    login(payload) {
      Axios({
        method: 'POST',
        url: `${this.url}/login`,
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      .then(res => {
        localStorage.setItem('access_token', res.data.access_token) ;
        this.checkAuth()
      })
      .catch(err => {
        console.log(err)
      })
    },
    logout() {
      localStorage.clear();
      this.checkAuth();
    },
    register(payload) {
      Axios({
        method: 'POST',
        url: `${this.url}/register`,
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password
        }
      })
      .then(res => {
          console.log(res.data);
          this.checkAuth()
      })
      .catch(err => {
          console.log(err.message);
      })
    },
    changePage(payload) {
        this.currentPage = payload.currentPage;
    },
    created() {
      this.checkAuth()
    }

  }
};
</script>

<style scoped>
</style>