import { ref, onMounted } from 'vue'

export default function() {
    // 数据
    let sum = ref(0)
    
    // 方法 安装axios： npm i axios
    function add() {
        sum.value += 1
    }
    
    // 钩子
    onMounted(() => {
        add()
    })

    return {sum, add}
}


