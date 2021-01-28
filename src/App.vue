<template>
<div>
  <navbar :categories="categories" @logout="logout"></navbar>
  <div class="container">

    <div v-if="currentPage == 'login'">
    <login-form @loginWithGoogle="loginWithGoogle" @login="login" @registerForm="changePage"></login-form>
    </div>

    <div v-else-if="currentPage == 'register'">
      <register @register="register" @loginForm="changePage"></register>
    </div>

    <div class="container" v-else>
        <task-list :categories="categories" @updateTask="updateTask" @addTask="addTask" @deleteTask="deleteTask"></task-list>
    </div>
  </div>
</div>
</template>

<script>
import Axios from 'axios'
import Swal from 'sweetalert2'
import Navbar from './component/Navbar';
import LoginForm from './component/LoginForm';
import TaskList from './component/TaskList.vue';
import Register from './component/Register.vue';

export default {
  name: "App",
  data() {
    return {
      message: 'Ohayo Sekai, Good Morning World !!!!',
      currentPage: "login",
      categories: [],
      url:'https://kanban-todo-98374.herokuapp.com',
      task: {
        title: '',
        CategoryId: null
      }
    };
  },
  components: {
    Navbar,
    LoginForm,
    TaskList,
    Register,
  },
  methods: {
    checkAuth() {
      console.log('Check Auth Console')
      if(localStorage.access_token) {
        this.fetchTask()
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
        this.currentPage = 'home'
        this.checkAuth()
      })
      .catch(err => {
        console.log(err)
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error',
          })
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
        console.log(err.response);
        let errMsg = []
          Swal.fire({
            title: 'Error!',
            text: 'Please Check Your Requirement',
            icon: 'error',
          })
      })
    },
    loginWithGoogle () {
      this.$gAuth
        .signIn()
        .then(GoogleUser => {
          // on success do something
          console.log('GoogleUser', GoogleUser)
          Axios({
            method: 'POST',
            url: `${this.url}/loginGoogle`,
            data:{
              id_token: GoogleUser.Bc.id_token
            }
          })
          .then((response) => {
            console.log(response);
            localStorage.setItem('access_token', response.data.access_token)
            this.currentPage = 'home'
            this.checkAuth()
          }).catch((err) => {
            Swal.fire({
              title: 'Error!',
              text: 'Please Check Your Requirement',
              icon: 'error',
            })
          });
        })
        .catch(error => {
          console.log('error', error)
        })
    },
    changePage(payload) {
        this.currentPage = payload.currentPage;
    },
    fetchTask() {
      console.log('ini adalah fetch task')
      Axios({
        method: 'GET',
        url: `${this.url}/tasks`,
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(res => {
        console.log(res.data)
        this.changePage('home')
        this.categories = res.data
      })
      .catch(err => {
        console.log(err)
      })
    },
    addTask(payload) {
      console.log(payload);
      Axios({
        method: 'POST',
        url: `${this.url}/tasks`,
        data: {
          title: payload.title,
          CategoryId: payload.categoryId
        },
        headers: {
          access_token: localStorage.access_token
        },
        params: {
          category: payload.CategoryId
        }
      })
      .then(res => {
          this.checkAuth()
      })
      .catch(err => {
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error',
          })
      })
    },
    updateTask(payload) {
      console.log(payload);
      let id = payload.id
      let CategoryId = payload.CategoryId
      Axios({
        method: 'PATCH',
        url: `${this.url}/tasks/${id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          CategoryId
        },
      })
      .then((result) => {
        this.checkAuth()
      }).catch((err) => {
        Swal.fire({
            icon: "error",
            title: err.response.data.message,
            showConfirmButton: false,
          });
      });
    },
    deleteTask(id) {
      Axios({
        method: 'DELETE',
        url: `${this.url}/tasks/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(res => {
        console.log(res.data)
        this.checkAuth
      })
      .catch(err => {
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error',
          })
      })
    }
  },
  created() {
      this.checkAuth()
  }
};
</script>

<style scoped>
</style>