<!-- 响应式数据学习内容 -->
<template>
    <div class="car">
        <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
        <button @click="changePrice">修改汽车的价格</button>
        <button @click="changeCar">修改整辆汽车内容</button>
        <br>
        <h2>游戏列表</h2>
        <ul>
            <!-- key前面的冒号表示后面的内容是需要通过js进行解析的 -->
            <li v-for="c in carBands" :key="c.id">
                {{ c.name }}
            </li>
        </ul>
        <button @click="changeFistCarBrandName">修改第一个汽车品牌名称</button>
    </div>
</template>

<script setup lang="ts" name="Car">
    import {reactive} from 'vue'

    // 数据
    let car = reactive({brand:'奔驰', price:100}) 

    let carBands = reactive(
        [{id: 1, name:'奔驰'},
        {id: 2, name:'宝马'},
        {id: 3, name:'奥迪'}]
    ) 
    // 方法
    function changePrice() {
        car.price += 10
    }
    function changeFistCarBrandName() {
        carBands[0].name = '修改后的汽车品牌'
    }
    function changeCar() {
        // 这样改是不行的，这样改使得 car 这个引用指向了一个新的响应式对象。但是template绑定的是响应式对象而不是引用，所以只有在旧对象变化时才会重新渲染，所以会失效。
        // car = reactive({brand:'奥托', price:1}) 
        // assign 相当于把后面对象中的内容按照 key value 一个个赋值到 car 引用的对象上，所以是可行的。
        Object.assign(car, {brand:'奥托', price:1})

        // 但是如果 car 是 ref 的，则可以如此修改： car.value = {brand:'奥托', price:1}，
        // 因为 ref 包装后生成的是 RefImpl 对象，而这里改的只是 value，即只改了一部分，而 ref 整体并没有变化
    }
</script>

<style scoped>
    .car {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }

    button {
        margin: 0 5px;
    }

    li {
        font-size: 20px;
    }
</style>