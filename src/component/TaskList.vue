<template>

<div class="container">
    <div class="col-md-3 list-todo">
            <h3 style="background-color: red; color: white;">Back-Log</h3>
            <task-card>
    </div>
</div>
</template>
<script>
import TaskCard from './TaskCard';

export default {
    name: "TaskList",
    components: {
        TaskCard,
    }
}
</script>

<style>

</style>