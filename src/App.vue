<template>
    <!-- html -->
    <Person/>
    <br>
    <Car/>
    <br>
    <Person2/>
    <br>
    <Watch/>
</template>

<script lang="ts">
// JS 或 TS
import Person from './components/Person.vue'
import Car from './components/Car.vue'
import Person2 from './components/Person2.vue'
import Watch from './components/Watch.vue'
export default {
    name: 'App', // 组件名
    components: {Car, Person, Person2, Watch} // 注册组件
}
</script>

<style>
    /* 样式 */
    .app {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>