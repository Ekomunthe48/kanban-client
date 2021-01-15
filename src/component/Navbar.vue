<template>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="https://www.pngfind.com/pngs/m/19-196250_shia-labeouf-squat-just-do-it-shia-labeouf.png" alt="" width="30" height="24" class="d-inline-block align-top">
                Kanban-Todo
            </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item" v-if="currentPage='home'">
                <a class="nav-link" @click.prevent="logout" href="#">Log Out</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    methods: {
      logout() {
        this.$emit('logout')
      }
    }
}
</script>

<style>

</style>