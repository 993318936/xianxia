<template>
    <div class="list">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        created(){
            document.title = "books";
        }
    }
</script>