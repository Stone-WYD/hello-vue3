<!-- computed 内容学习 -->
<template>
    <div class="person">
        <!-- v-bind 单向绑定，v-model 双向绑定(下面内容省略了':value') -->
        姓：<input v-model="firstName"> <br>
        名：<input v-model="lastName" > <br>
        全名：<span>{{ fullName }} </span> <br>
        <button @click="changeFullName">修改全名</button>
    </div>
</template>

<!-- 解构相关, toRefs -->
<script lang="ts" setup name="Person2">
    import { computed, ref } from 'vue'

    let firstName = ref('zhang')
    let lastName = ref('san')

    // computed 计算后生成了 ComputedRefImpl

    // 如此定义，生成的值只可读
    // let fullName = computed(() => 
    //     firstName.value.slice(0, 1).toUpperCase()
    //      + firstName.value.slice(1) + '-'
    //       + lastName.value) 

    // 如此定义，可读可写
    let fullName = computed({
        get() { 
            return firstName.value.slice(0, 1).toUpperCase()
            + firstName.value.slice(1) + '-'
            + lastName.value
        },
        set(val) {
            const [str1, str2] = val.split('-')
            firstName.value = str1
            lastName.value = str2
        }
    })

    function changeFullName() {
        fullName.value = 'li-si'
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