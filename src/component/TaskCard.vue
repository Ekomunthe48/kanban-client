<template>
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{task.title}}</h5>
                    <p class="card-text"><small class="text-muted"><i class="far fa-calendar-alt"></i> {{task.createdAt}} </small></p>
                    <div class="detail-task-right">
                        <span class="icon-act" @click.prevent="deleteTask(task.id)"><i class="fa fa-trash"></i></span>
                        <span id="moveCategory" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle icon-act" >
                            <i class="fa fa-arrows"></i>
                        </span>
                        <div aria-labelledby="moveCategory" class="dropdown-menu dropdown-menu-right user-div-menu" >
                        <span class="dropdown-item move" v-for="category in categories" :key="category.id" @click.prevent="updateTask(category.id, task.id)" @updateTask="updateTask">Move to {{category.category}}</span>
                        </div>
                    </div>
                </div>
             </div>
        </div>
</template>

<script>

export default {
    name: "TaskCard",
    props: [
        "task",
        "categories"
    ],
    methods: {
        deleteTask(id) {
            return this.$emit('deleteTask', id);
        },
        updateTask(CategoryId, id) {
            const obj = {
                id,
                CategoryId
            }
            return this.$emit('updateTask', obj);
        }
    }
}
</script>

<style>

</style>