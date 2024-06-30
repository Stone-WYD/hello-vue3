<template>
    <div class="lifeCycle">
        <h2>当前求和为： {{ sum }}</h2>
        <button @click="add">点我 +1</button>
        <hr>
        <img v-for="(dog,index) in dogList" :src="dog" :key="index">
        <br>
        <button @click="getDog">再来一只小狗</button>
    </div>
</template>

<script setup lang="ts" name="LifeCycle">
    import useSum from '@/hooks/useSum'
    import useDog from '@/hooks/useDog'

    const {sum, add} = useSum()
    const {dogList, getDog} = useDog()
    
</script>

<style scoped>
    .lifeCycle {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }

    button {
        margin: 0 5px;
    }
    img {
        height: 100px;
        margin-right: 10px;
    }
</style>