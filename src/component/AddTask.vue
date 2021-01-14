<template>
<div>
    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add New Todo</button>
        <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
        <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Modal Header</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="inputTask" class="form-label">Title</label>
                            <input type="text" class="form-control" id="inputTask" aria-describedby="Title">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-success btn-sm">Add Task</button>
                        <button class="btn btn-secondary btn-sm">Cancel</button>
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
    components: {

    }
}
</script>

<style>

</style>