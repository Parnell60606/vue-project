<template>
    <n-config-provider :theme-overrides="bookingPage">
        <!-- 
    name 
    email
    phone
    預計到場時間

 -->
        <div class="row my-2 my-sm-5">

            <div class="col-2" />
            <div class="col-8">
                會員id：{{ userInfo.id }} <br>

                會員名稱：{{ userInfo.userName }} <br>
                email {{ userInfo.email }} <br>
                電話 {{ userInfo.phone }} <br>

                <n-divider>訂單</n-divider>

                預定日期：{{ booking.date }} <br>
                預定時間：{{ booking.time }}<br>

                test加總 {{ booking.date + booking.time }}<br>
                人數：{{ booking.numberOfPeople }}<br>
                備註{{ booking.usersNote }}


                <n-card content-style="padding:24px 50px">


                    <n-form :model="booking" @submit.prevent='confirm' label-placement="left" label-width="auto">
                        <!-- @submit.prevent  提交後不刷新頁面 -->

                        <n-divider title-placement="left">用戶資料</n-divider>

                        <n-form-item label="會員名稱" path="userName">
                            <n-input v-model:value="userInfo.userName" disabled />
                        </n-form-item>

                        <n-form-item label="電子郵件" path="email">
                            <n-input v-model:value="userInfo.email" disabled />
                        </n-form-item>

                        <n-form-item label="電話號碼" path="phone">
                            <n-input v-model:value="userInfo.phone" disabled />
                        </n-form-item>

                        <n-divider title-placement="left">訂單資訊</n-divider>


                        <n-grid :cols="2" :x-gap="24">
                            <n-form-item-gi label="預約日期" path="date">
                                <n-date-picker type="date" v-model:value="booking.date" />
                            </n-form-item-gi>

                            <n-form-item-gi label="預約時間" path="time">
                                <!-- <n-time-picker time-zone="Asia/Taipei" /> -->
                                <n-time-picker v-model:value="booking.time" />
                            </n-form-item-gi>
                        </n-grid>


                        <n-form-item label="到場人數" path="numberOfPeople">
                            <n-input-number v-model:value="booking.numberOfPeople" :min="0" :max="20" />
                        </n-form-item>



                        <n-form-item label="備註" path="usersNote">

                            <n-input v-model:value="booking.usersNote" type="textarea" placeholder=" " />

                        </n-form-item>


                        <!-- 怪怪ㄉ -->
                        <!-- <n-form-item-gi :span="12" label="Auto Complete" path="autoCompleteValue">
                <n-auto-complete v-model:value="model.autoCompleteValue" :options="autoCompleteOptions"
                    placeholder="Email" />
            </n-form-item-gi> -->


                        <n-button attr-type="submit" :loading="loading" type="primary" block secondary strong round>
                            送出
                        </n-button>


                    </n-form>



                </n-card>

            </div>
        </div>

    </n-config-provider>

</template>




<script setup>
// style
import bookingPage from '../../assets/front/bookingPage'


import { api, apiAuth } from '../../plugins/axios'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../stores/user'
import Swal from 'sweetalert2'


const user = useUserStore()
const router = useRouter()


const message = useMessage();
window.$message = useMessage();

const userInfo = reactive({
    userName: 'token回傳的用戶名稱',
})

const loading = ref(false);


const booking = reactive({
    // 去尾數
    bookingDate: Math.floor(Date.now() / 1000) * 1000,
    bookingTime: (Math.floor(Date.now() / 1000) % 86400) * 1000,
    numberOfPeople: 1,
    usersNote: '',
    isFieldBooking: 1
    // 一天86400秒
    // 要存進資料庫的時候在   /1000 

})



const getUser = async () => {
    try {
        const { data } = await apiAuth.get('/users/getuser')
        userInfo.id = data.result.id

        userInfo.account = data.result.account
        userInfo.userName = data.result.userName
        userInfo.email = data.result.email
        userInfo.phone = data.result.phone

        console.log(userInfo)


    } catch (error) {
        console.log(error)
        Swal.fire({
            icon: 'error',
            title: '失敗',
            text: '無法取得用戶資料'
        })
    }
}
getUser()







const confirm = () => {
    try {
        user.confirm(booking)
    } catch (error) {
        console.log(error.type)
    }
}




</script>