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

                會員名稱：{{ userInfo.userName }} <br>
                email {{ userInfo.email }} <br>
                電話 {{ userInfo.phone }} <br>
                備註{{ bookingDefault.usersNote }}

                <n-divider>訂單</n-divider>

                預定日期：{{ bookingDefault.date }} <br>
                預定時間：{{ bookingDefault.time }}<br>

                test加總 {{ bookingDefault.date + bookingDefault.time }}


                <n-card content-style="padding:24px 50px">


                    <n-form :model="bookingDefault" label-placement="left" label-width="auto">
                        <n-divider title-placement="left">用戶資料</n-divider>

                        <n-form-item label="會員名稱">
                            <n-input v-model:value="userInfo.userName" disabled />
                        </n-form-item>

                        <n-form-item label="電子郵件">
                            <n-input v-model:value="userInfo.email" disabled />
                        </n-form-item>

                        <n-form-item label="電話號碼">
                            <n-input v-model:value="userInfo.phone" disabled />
                        </n-form-item>

                        <n-divider title-placement="left">訂單資訊</n-divider>


                        <!-- <n-form-item label="Date" path="dateValue">
                            <n-grid :cols="2" :x-gap="24">
                                <n-form-item-gi>

                                    <n-date-picker type="date" />
                                </n-form-item-gi>
                                <n-form-item-gi>

                                    <n-time-picker />
                                </n-form-item-gi>
                            </n-grid>
                        </n-form-item> -->


                        <n-grid :cols="2" :x-gap="24">
                            <n-form-item-gi label="預約日期">
                                <n-date-picker type="date" v-model:value="bookingDefault.date" />
                            </n-form-item-gi>

                            <n-form-item-gi label="預約時間">
                                <!-- <n-time-picker time-zone="Asia/Taipei" /> -->
                                <n-time-picker v-model:value="bookingDefault.time" />
                            </n-form-item-gi>
                        </n-grid>


                        <n-form-item label="到場人數">
                            <n-input-number v-model:value="bookingDefault.numberOfPeople" :min="0" :max="20" />
                        </n-form-item>



                        <n-form-item label="備註">

                            <n-input v-model:value="bookingDefault.usersNote" type="textarea" placeholder=" " />

                        </n-form-item>


                        <!-- 怪怪ㄉ -->
                        <!-- <n-form-item-gi :span="12" label="Auto Complete" path="autoCompleteValue">
                <n-auto-complete v-model:value="model.autoCompleteValue" :options="autoCompleteOptions"
                    placeholder="Email" />
            </n-form-item-gi> -->

                    </n-form>



                </n-card>

            </div>
        </div>

    </n-config-provider>

</template>



<!-- <script>
import { defineComponent, ref } from "vue";
import { useMessage } from "naive-ui";

export default defineComponent({
    setup() {
        const formRef = ref(null);
        const message = useMessage();
        window.$message = useMessage();

        return {
            updateDisabled: ref(false),
            formRef,
            model: ref({
                dateValue: null,
                autoCompleteValue: "",
            }),
            inputNumberValue: null,
            timePickerValue: null,
            rules: {
                dateValue: {
                    type: "number",
                    required: true,
                    trigger: ["blur", "change"],
                    message: "请输入 dateValue"
                },
                inputNumberValue: {
                    type: "number",
                    required: true,
                    trigger: ["blur", "change"],
                    message: "请输入 inputNumberValue"
                },
                timePickerValue: {
                    type: "number",
                    required: true,
                    trigger: ["blur", "change"],
                    message: "请输入 timePickerValue"
                },
                // autoCompleteOptions: computed(() => {
                //     return ["@gmail.com", "@yahoo.com.tw"].map((suffix) => {
                //         const prefix = model.value.autoCompleteValue.split("@")[0];
                //         return {
                //             label: prefix + suffix,
                //             value: prefix + suffix
                //         };
                //     });
                // })
            }
        }
    }
});
</script> -->



<script setup>
import { api, apiAuth } from '../plugins/axios'
import bookingPage from '../assets/front/bookingPage'
import Swal from 'sweetalert2'


const message = useMessage();
window.$message = useMessage();

const userInfo = reactive({
    userName: 'token回傳的用戶名稱',
})


const bookingDefault = reactive({
    // 去尾數
    date: Math.floor(Date.now() / 1000) * 1000,
    time: (Math.floor(Date.now() / 1000) % 86400) * 1000,
    numberOfPeople: 1,
    usersNote: ''
    // 一天86400秒
    // 要存進資料庫的時候在   /1000 

})


console.log(Date.now())

const getUser = async () => {
    try {
        // const { data } = await apiAuth.get('/users/getUser')
        // const { data } = await api.get('/users/getUser')


        const { data } = await apiAuth.get('/users/getuser')



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

</script>