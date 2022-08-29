<template>
    <h2>目前的訂位</h2>
    <!-- <h3>最後一張訂單</h3> -->

    <div class="container">
        <div class="my-last-order">

            <n-card content-style="padding: 50px;" size="large" :segmented="{
                content: true,
                footer: 'soft'
            }">
                <n-space size="large">

                    <n-icon size="30">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 24 24">
                            <path d="M18 22l-.01-6L14 12l3.99-4.01L18 2H6v6l4 4l-4 3.99V22h12zM8 7.5V4h8v3.5l-4 4l-4-4z"
                                fill="Peru"></path>
                        </svg>
                    </n-icon>
                    <n-h3 v-if="order.orderStatus === 1">
                        您的訂單正在確認中，請稍後
                    </n-h3>
                </n-space>

                <n-divider />

                <template #header-extra>
                    #header-extra
                </template>

                <n-h4>訂單id：{{ order._id }}</n-h4>
                <n-h4>訂單狀態：{{ order.orderStatus }}</n-h4>



                <template #footer>
                    #footer
                </template>
                <template #action>
                    #action
                </template>


            </n-card>



        </div>
    </div>


</template>


<script setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api, apiAuth } from '../../plugins/axios'
import Swal from 'sweetalert2'

const route = useRoute()
const router = useRouter()


const order = reactive({
    _id: '',
    orderStatus: ''

})


const getOrderTest = async () => {
    try {
        // 用id抓訂單
        const { data } = await api.get('/orders/getbyid/6305dfe4d962f7aa83980687/')
        order._id = data.result._id
        order.orderStatus = data.result.orderStatus
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: '失敗',
            text: '取得訂單資料失敗'
        })
        // router.go(-1)
    }
}
getOrderTest()




</script>


<style scoped>
.my-last-order {
    padding: 24px;
}
</style>