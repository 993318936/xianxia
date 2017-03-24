<template>
    <div class="index text-center">
        <div class="logo">
        </div>
        <div class="search">
            <el-input placeholder="Input author,name,and so on." v-model="input">
                <el-select v-model="select" slot="prepend" placeholder="choose category">
                    <el-option label="author" value="1"></el-option>
                    <el-option label="bookname" value="2"></el-option>
                </el-select>
                <el-button slot="append" icon="search"></el-button>
            </el-input>
        </div>
        <div class="red to-books">
            <router-link :to="{name:'listOfBooks'}">Hot searching >></router-link>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                select: '',
                input: ''
            }
        }
    }
</script>