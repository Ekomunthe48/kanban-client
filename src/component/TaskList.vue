<template>

<div class="container2">
    <div class="col-md-3 list-todo"
    v-for="category in categories"
    :key="category.id">
        <h3 style="background-color: #ffffff; color: rgb(108, 106, 211); margin: 10px; padding: 10px; border-radius: 10px;">{{ category.category }}</h3>
        <add-task :categoryId="category" @addTask="addTask"></add-task>
        <task-card
        :categories="categories"
        v-for="task in category.Tasks"
        :key="task.id"
        :task="task"
        @editTask="editTask"
        @deleteTask="deleteTask"
        @updateTask="updateTask"></task-card>
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
        },
        updateTask(payload) {
            return this.$emit('updateTask', payload)
        },
        editTask(payload) {
            return this.$emit('editTask', payload)
        }
    }
}
</script>

<style>
    .container2 {
        display: flex;
        height: 500px;
    }
    .list-todo {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background: rgb(108, 106, 211);
        margin: 5px;
        overflow-y: scroll;
        border-radius: 10px;
    }
</style>