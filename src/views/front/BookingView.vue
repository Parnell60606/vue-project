<template>


    <!-- <n-divider title-placement="left">
        <h1>線上訂位</h1>
    </n-divider> -->

    <h1>線上訂位</h1>


    <n-space justify="center" :size="50">

        <n-space vertical>

            <div class="booking-display my-5">
                今天的訂位人數： <br>
                目前場內人數：{{ nowPeople }}
            </div>

        </n-space>

        <n-progress style="margin: 0 8px 12px 0" type="circle" :percentage="20" />

    </n-space>


    <div class="row my-2 my-sm-5">

        <div class="col-4" />
        <div class="col-4">



            <n-message-provider>

                <!-- <n-popover v-if="!isLogin" trigger="hover" placement="right-end">
                    <template #trigger>

                        <n-button @click="wantBooking" strong secondary type="primary" block round>訂位</n-button>
                    </template>

                    <span>登入會員即可線上訂位</span>
                </n-popover> -->


                <n-button @click="showBooking = true" strong secondary type="primary" block round>訂位</n-button>



            </n-message-provider>

        </div>
    </div>


    <!-- 表單 -->

    <n-message-provider>
        <UserOrderform v-model:show="showBooking" />
    </n-message-provider>






</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { storeToRefs } from 'pinia';
import { useUserStore } from '../../stores/user';
import { useRouter } from 'vue-router'

// import

const user = useUserStore()
const { isLogin, isAdmin, cart } = storeToRefs(user)




const nowPeople = ref(null)
const showBooking = ref(false)



window.$message = useMessage()
const message = useMessage();


// const wantBooking = () => {
//     if (!isLogin)
//         // return Swal.fire({
//         //     icon: 'success',
//         //     title: '成功',
//         //     text: '登入成功'
//         // })
//         return message.info(
//             "I don't know why nobody told you how to unfold your love",
//             {
//                 keepAliveOnHover: true
//             }
//         );

//     showBooking = true

// }


</script>

<style scoped>
/* h1 {
    margin-left: 150px;
} */




.booking-display {
    font-size: large;
}
</style>