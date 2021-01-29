<template>
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{task.title}}</h5>
                    <p class="card-text"><small class="text-muted"><i class="far fa-calendar-alt"></i> {{task.createdAt}} </small></p>
                    <div class="detail-task-right">
                        <span class="icon-act" @click.prevent="deleteTask(task.id)"><i class="fa fa-trash"></i></span>
                        <span class="icon-act" @click.prevent="getId(task.id)">
                                <i class="fa fa-pencil" data-toggle="modal" data-target="#myEditModal"></i>
                        </span>
                        <span id="moveCategory" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle icon-act" >
                            <i class="fa fa-arrows"></i>
                        </span>
                        <div aria-labelledby="moveCategory" class="dropdown-menu dropdown-menu-right user-div-menu" >
                        <span class="dropdown-item move" v-for="category in categories" :key="category.id" @click.prevent="updateTask(category.id, task.id)" @updateTask="updateTask">Move to {{category.category}}</span>
                        </div>
                        <div class="modal fade" id="myEditModal" role="dialog">
                            <div class="modal-dialog">
                            <!-- Modal content-->
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Edit Task</h4>
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <form @submit.prevent="editTask">
                                        <div class="modal-body">
                                            <div class="mb-3">
                                                <label for="inputTask" class="form-label">Title</label>
                                                <input v-model="title" type="text" class="form-control" :id="task.id" aria-describedby="" :placeholder="task.title">
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button class="btn btn-success btn-sm" >Save</button>
                                        </div>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
</template>

<script>
let newId = null

export default {
    name: "TaskCard",
    props: [
        "task",
        "categories"
    ],
    data () {
        return {
            title: ''
        }
    },
    components: {
    },
    methods: {
        deleteTask(id) {
            return this.$emit('deleteTask', id);
        },
        updateTask(CategoryId, id) {
            console.log(id);
            const obj = {
                id,
                CategoryId
            }
            return this.$emit('updateTask', obj);
        },
        getId (id) {
            newId = id
        },
        editTask () {
            let id = newId
            const obj = {
                id,
                title: this.title
            }
            return this.$emit('editTask', obj)
        }
    }
}
</script>

<style>
    .detail-task-right {
        display: flex;
        flex: wrap;
        justify-content: center;
    }
    .detail-task-right span {
        margin: 10px;
    }
</style>