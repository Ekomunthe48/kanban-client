<template>

<div class="container">
    <div class="col-md-3 list-todo"
    v-for="category in categories"
    :key="category.id">
        <h3 style="background-color: red; color: white;">{{ category.category }}</h3>
        <task-card
        :categoryName="category"
        :task="task"
        v-for="task in category.Tasks"
        :key="task.id"
        @deleteTask="deleteTask"></task-card>
        <add-task :categoryId="category" @addTask="addTask"></add-task>
    </div>
</div>
</template>

<script>
import AddTask from './AddTask.vue';
import TaskCard from './TaskCard';

export default {
    name: "TaskList",
    props: [
        "categories",
    ],
    components: {
        TaskCard,
        AddTask,
    },
    methods: {
        addTask(payload) {
            console.log(payload.id);
            return this.$emit('addTask', payload)
        },
        deleteTask(payload) {
            return this.$emit('deleteTask', payload)
        }
    }
}
</script>

<style>

</style>