<template>
<div>
    <button type="button" class="btn btn-info btn-lg buttonAdd" data-toggle="modal" data-target="#myModal">Add New Todo</button>
        <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
        <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Add Task</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <form @submit.prevent="addTask">
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="inputTask" class="form-label">Title</label>
                            <input v-model="title" type="text" class="form-control" id="inputTask" aria-describedby="Title">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-success btn-sm">Add Task</button>
                    </div>
                 </form>
            </div>
        </div>
    </div>
<div>
</template>

<script>
export default {
    name: "AddTask",
    props: [
        "categoryId"
    ],
    data() {
        return {
            title: '',
        }
    },
    methods: {
        addTask() {
            const obj = {
                title: this.title,
                categoryId: this.categoryId.id
            }
            return this.$emit('addTask', obj)
        }
    }
}
</script>

<style>

</style>