<template>
    <div class="detail-task-right">
        <span class="icon-act">
            <i class="fa fa-pencil"></i>
        </span>
        <span class="icon-act"><i class="fa fa-trash"></i></span>
        <span id="moveCategory" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle icon-act">
            <i class="fa fa-arrows"></i>
        </span>
        <div aria-labelledby="moveCategory" class="dropdown-menu dropdown-menu-right user-div-menu">

        <span class="dropdown-item move">Move to Todo</span>
        <span class="dropdown-item move">Move to Done</span>
        <span class="dropdown-item move">Move to Completed</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "UpdateForm",
    components: {

    }
}
</script>

<style>

</style>