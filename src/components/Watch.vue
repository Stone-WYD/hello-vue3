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


        <!-- <h1>watch情况三：监视【reactive】定义的【对象类型】数据</h1>
        <h2>姓名： {{ person.name }}</h2>
        <h2>年龄： {{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button> -->

        <h1>watch情况四：监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h1>
        <h2>姓名： {{ person.name }}</h2>
        <h2>年龄： {{ person.age }}</h2>
        <h2>汽车： {{ person.car }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改第一台车</button>
        <button @click="changeC2">修改第二台车</button>
        <button @click="changeCar">修改所拥有的车</button>

        <!-- watch情况五：情况四的基础上，可以监控多个对象，即getter方法返回数组 -->
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

<!-- <script lang="ts" setup name="Watch">
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

    // 监视【reactive】定义的【对象类型】数据，对象地址始终没有改变，所以此时默认是开启深度监视的（否则什么也监视不到）,而且 newValue 和 OldValue 始终是一样的最新值
    watch(person, (newValue, oldValue) => {
        console.log('person变化了', newValue, oldValue)
    })
</script> -->

<script lang="ts" setup name="Watch">
    import { reactive, watch} from 'vue'
    // 数据
    let person = reactive({
        name: '张三',
        age: 18,
        car: {
            c1: '奔驰',
            c2: '宝马'
        }
    })
    
    // 方法
    function changeAge() {
        person.age += 1
    }
    function changeName() {
        person.name += '~'
    }
    function changeC1() {
        person.car.c1 = '奥迪'
    }
    function changeC2() {
        person.car.c2 = '大众'
    }

    function changeCar() {
        // Object.assign(person.car, {c1: '雅迪', c2: '爱玛'})
        person.car = {c1: '雅迪', c2: '爱玛'}
    }

    // 监视，情况四：监视响应式对象中的某个属性，且该属性是【基本类型】的，要写成函数式
    /* watch(()=> person.name,(newValue,oldValue)=>{
        console.log('person.name变化了',newValue,oldValue)
    }) */

    // 监视，情况四：监视响应式对象中的某个属性，且该属性是【对象类型】的，可以直接写，也能写函数，更推荐写函数，这种情况新旧值相同
    // 这种情况也说明了：响应式对象中的对象类型属性，也是响应式的
    //直接写：
    /*watch(person.car, (newValue, oldValue) => {
        console.log(person.car)
        console.log(person)
        console.log('person.car变化了', newValue, oldValue)
    }, { deep: true })*/
    
    //写函数（不开启深度监视）：
    /*watch(()=>person.car,(newValue,oldValue)=>{
        console.log('person.car变化了',newValue,oldValue)
    })*/
    
    //写函数（开启深度监视）：
    watch(()=>person.car,(newValue,oldValue)=>{
        console.log('person.car变化了',newValue,oldValue)
    },{deep:true})

    /** 
     * 响应式数据的原理是：给原来的数据（target）加上一层代理（proxy），当操作数据时，会对页面进行刷新
     * 目前对监视的一些猜测：监视函数应该是在proxy上又加了一层proxy，当操作数据时，
     * 会通过 getter 或者直接通过引用获取操作数据前后的对象，然后进行对应的函数操作。
     */
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