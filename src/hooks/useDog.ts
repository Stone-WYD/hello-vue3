import { reactive, onMounted } from 'vue'
import axios from 'axios';

export default function() {
    // 数据
    // 接口地址 https://dog.ceo/api/breed/pembroke/images/random
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_1482.jpg'
    ])
    
    // 方法 安装axios： npm i axios
    async function getDog() {
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(result.data.message)
        } catch (error) {
            alert(error)
        }
    }

    // 钩子
    onMounted(() => {
        getDog()
    })

    return {dogList, getDog}
}


