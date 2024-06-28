 <!-- props：给子组件传参数 -->
<template>
    <!-- <Son :list="personList"/> -->
    <Son />
</template>

<script lang="ts" setup name="Father">
    import Son from './Son.vue'
    import {reactive} from 'vue'
    import {type Persons} from '@/types'
    
    let personList = reactive<Persons>([
        {id: '123321', name: '张三', age: 60},
        {id: '123322', name: '李四', age: 22},
        {id: '123323', name: '王五', age: 11}
    ])
</script>
