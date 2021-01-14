<template>
<div>
  <navbar></navbar>
  <div class="container">
    <login-form v-if="currentPage == 'login'"></login-form>
    <register v-else-if="currentPage == 'register'"></register>
    <div class="container" v-else>
        <task-list></task-list>
        <add-task></add-task>
    </div>
  </div>
</div>
</template>

<script>
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
      currentPage: "login"
    };
  },
  components: {
    Navbar,
    LoginForm,
    TaskList,
    Register,
    AddTask
  }
};
</script>

<style scoped>
</style>