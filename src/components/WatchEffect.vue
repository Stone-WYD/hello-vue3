<template>
    <div class="watchEffect">
        <h1>需求：水温达到50℃，或水位达到20cm，则联系服务器</h1>
        <h2>水温：{{temp}}</h2>
        <h2>水位：{{height}}</h2>
        <button @click="changeTemp">水温 +1</button>
        <button @click="changeHeight">水位 +10</button>
    </div>
</template>

<script lang="ts" setup name="WatchEffect">
    import { h, ref, toValue, watch, watchEffect } from 'vue'

    // 数据
    let temp = ref(0)
    let height = ref(0)

    // 方法
    function changeTemp() {
        temp.value += 1
    }
    function changeHeight() {
        height.value += 10
    }

    // 监视
    // 使用 watch 进行监视
    /*watch([temp, height], (value) => {
        const [nowTemp, nowHeight] = value
        console.log(value, nowTemp, nowHeight)
        if(nowTemp >= 10 || nowHeight >= 20) {
            console.log('联系服务器')
        }
    })*/

    // 用 watchEffect 实现
    const watchEffectStop = watchEffect(() => {
        if(temp.value >= 10 || height.value >= 20) {
            console.log('watchEffect： 联系服务器')
        }
        if(temp.value >= 15 || height.value > 50) {
            watchEffectStop()
            console.log('watchEffect: 停止监控')
        }
    })

</script>

<style scoped>
        .watchEffect {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }

    button {
        margin: 0 5px;
    }
</style>