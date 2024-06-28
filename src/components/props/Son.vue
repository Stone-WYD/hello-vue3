<template>

    <div class="person">
        <ul>
            <li v-for="p in list" :key="p.id">
                {{ p.name }} -- {{ p.age }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="Son">
    // defineXxx 不需要引入，属于宏函数
    // import { defineProps, withDefaults } from 'vue'
    import { withDefaults } from 'vue'
    import { type Persons } from '@/types'

    // 只接收传参
    // defineProps(['list'])

    // 接收list + 限制类型
    // defineProps<{list: Persons}>()

    // 接收list + 限制类型 + 限制必要性 + 指定默认值
    withDefaults(defineProps<{list?: Persons}>(), {
        list:() => [{id: '11122', name: '康师傅', age: 11}]
    })
    
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