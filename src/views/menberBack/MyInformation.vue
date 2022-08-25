<template>
    <h1>我的</h1>
    <h2>個人資料</h2>

    <!-- 抓自己的個人資料 -->


    <n-card content-style="padding: 50px;" size="large" :segmented="{
        content: true,
        footer: 'soft'
    }">



        <n-h4>用戶名：{{ userInfo.userName }}</n-h4>
        <n-h4>帳號：{{ userInfo.account }}</n-h4>
        <n-h4>帳號：{{ userInfo.account }}</n-h4>
        <n-h4>email：{{ userInfo.email }}</n-h4>
        <n-h4>帳號：{{ userInfo.account }}</n-h4>

        <n-h4>用戶沒有上船大頭貼</n-h4>


        <template #header-extra>
            #header-extra
        </template>
        卡片内容
        <template #footer>
            #footer
        </template>
        <template #action>
            #action
        </template>


    </n-card>







</template>


<script setup>
import { reactive } from 'vue'
import { api, apiAuth } from '../../plugins/axios'
import { useRouter } from 'vue-router'
// import { useUserStore } from '../../stores/user';
import { useRoute } from 'vue-router'
import Swal from 'sweetalert2'



// const user = useUserStore()
// const { getUser } = user
// getUser()


// const route = useRoute()
// const user = useUserStore()

const router = useRouter()



// const orders = reactive([])


const userInfo = reactive({
    account: '',
    userName: '',
    email: '',
    avatar: '',
    pastOrders: ''
})





const getUser = async () => {
    try {
        // const { data } = await apiAuth.get('/users/getUser')
        // const { data } = await api.get('/users/getUser')


        const { data } = await apiAuth.get('/users/getuser')



        userInfo.account = data.result.account
        userInfo.userName = data.result.userName
        userInfo.email = data.result.email
        userInfo.avatar = data.result.avatar
        userInfo.pastOrders = data.result.pastOrders

        console.log(userInfo)




        // console.log(data.result._id) // undefine




    } catch (error) {
        console.log(error)
        Swal.fire({
            icon: 'error',
            title: '失敗',
            text: '無法取得訂單'
        })
    }
}
getUser()
</script>