<template>
    <!-- html -->
    <Person/>
    <br>
    <Car/>
    <br>
    <Person2/>
    <br>
    <Watch/>
    <br>
    <WatchEffect/>
    <br>
    <Father/>
    <br>
    <LifeCycle/>
</template>

<script lang="ts" setup name="App">
// JS 或 TS
import WatchEffect  from './components/WatchEffect.vue'
import Person from './components/Person.vue'
import Car from './components/Car.vue'
import Person2 from './components/Person2.vue'
import Watch from './components/Watch.vue'
import Father from './components/props/Father.vue'
import LifeCycle from './components/LifeCycle.vue'

// ts的使用
import {type PersonInter, type Persons} from '@/types'
let person:PersonInter = {id: '123321', name: '张三', age: 60}
// 数组，泛型
let personList: Array<PersonInter> = [
    {id: '123321', name: '张三', age: 60},
    {id: '123322', name: '李四', age: 22},
    {id: '123323', name: '王五', age: 11}
]
let personList2: Persons = [
    {id: '123321', name: '张三', age: 60},
    {id: '123322', name: '李四', age: 22},
    {id: '123323', name: '王五', age: 11}
]

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