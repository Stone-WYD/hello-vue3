<!-- watch 内容学习 -->
<template>
    <div class="watch">
        <!-- <h1>watch情况一：监控【ref】定义的【基本类型】数据</h1>
        <h2>当前求和为：{{sum}}</h2>
        <button @click="changeSum">点我sum+1</button>
        <hr> -->


        <!-- <h1>watch情况二：监视【ref】定义的【对象类型】数据</h1>
        <h2>姓名： {{ person.name }}</h2>
        <h2>年龄： {{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button> -->


        <h1>watch情况三：监视【reactive】定义的【对象类型】数据</h1>
        <h2>姓名： {{ person.name }}</h2>
        <h2>年龄： {{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
    </div>
</template>

<!-- <script lang="ts" setup name="Watch">
    import { ref, watch } from 'vue'
    // 数据
    let sum = ref(0)
    // 方法
    function changeSum() {
        sum.value += 1
    }
    // 监视 sum 没加 .value ,因为监视源需要是 Ref 实现类
    const stopWatch = watch(sum, (newValue, oldValue) => {
        console.log('sum 变化了', newValue, oldValue)
        if(newValue > 10) {
            // 解除监视
            stopWatch()
        }
    })
</script> -->

<!-- <script lang="ts" setup name="Watch">
    import { ref, watch} from 'vue'
    // 数据
    let person = ref({
        name: '张三',
        age: 18
    })
    
    // 方法
    function changeAge() {
        person.value.age += 1
    }
    function changeName() {
        person.value.name += '~'
    }
    function changePerson() {
        person.value = {name: '李四', age: 20}
    }

    // 监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
    watch(person, (newValue, oldValue) => {
        console.log('person变化了', newValue, oldValue)
    }, 
    /* 深度监视，有变化就操作；immediate，一刷新页面没改变也会操作一次监控函数
     但是此处的深度监视时，如果只修改value的一个属性，获取到的 newValue 和 OldValue 是同一个对象
     只是实际开发中，只用新值不用旧值 */
    {deep: true, immediate: true})
</script> -->

<script lang="ts" setup name="Watch">
    import { reactive, watch} from 'vue'
    // 数据
    let person = reactive({
        name: '张三',
        age: 18
    })
    
    // 方法
    function changeAge() {
        person.age += 1
    }
    function changeName() {
        person.name += '~'
    }
    function changePerson() {
        Object.assign(person, {name: '李四', age: 20}) 
    }

    // 监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
    watch(person, (newValue, oldValue) => {
        console.log('person变化了', newValue, oldValue)
    })
</script>


<style scoped>
    .watch {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }

    button {
        margin: 0 5px;
    }
</style>