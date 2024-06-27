<!-- setUp 学习内容 -->
<template>
    <div class="person">
        <h2>姓名：{{person.name}}</h2>
        <h2>年龄：{{person.age}}</h2>
        <h2>年龄：{{person.tel}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<!-- <script lang="ts">
    export default {
        name: 'Person',
        // setup() {
        //     // 数据，原来写在 data 中，此时的 name、age、tel都不是响应式的
        //     let name = '张三' 
        //     let age = 18 
        //     let tel = '13888888888'

        //     // 方法
        //     function changeAge() {
        //         age += 1
        //     }
        //     function changeName() {
        //         name = 'zhang-san'
        //     }
        //     function showTel() {
        //         alert(tel)
        //     }

        //     return {name, age, changeAge, changeName, showTel}
        //     // return () => '哈哈' 返回函数，直接渲染函数中的内容
        // }
    }
</script> -->

<!-- setup 语法糖, 安装插件（npm i vite-plugin-vue-setup-extend -D）并配置后，上面的导出可以省略-->
<!-- <script lang="ts" setup name="Person">
    import { ref } from 'vue';

    // 数据，原来写在 data 中，此时的 name、age、tel都不是响应式的
    let name = ref('张三')  
    let age = ref(18) 
    let tel = '13888888888'

    // 方法
    function changeAge() {
        age.value += 1
    }
    function changeName() {
        name.value = 'zhang-san'
    }
    function showTel() {
        alert(tel)
    }
</script> -->

<!-- 解构相关, toRefs -->
<script lang="ts" setup name="Person">
    import { reactive, toRefs, toRef } from 'vue';


    // 数据，原来写在 data 中，此时的 name、age、tel都不是响应式的
    let person =  reactive({name: '张三', age: 18, tel: 13888888888})

    // toRefs 和 toRef 的使用
    let {name, age} = toRefs(person) 
    let tel = toRef(person, 'tel')
    // 方法
    function changeAge() {
        age.value += 1
    }
    function changeName() {
        name.value += '~'
    }
    function showTel() {
        tel.value += 1
        alert(person.tel)
    }
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }

    button {
        margin: 0 5px;
    }
</style>