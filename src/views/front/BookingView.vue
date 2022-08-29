<template>


    <n-divider title-placement="left">
        <h1>線上訂位</h1>
    </n-divider>



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

                <n-popover v-if="!isLogin" trigger="hover" placement="right-end">
                    <template #trigger>

                        <n-button strong secondary type="primary" block round>訂位</n-button>
                    </template>

                    <span>登入會員即可線上訂位</span>
                </n-popover>


                <n-button v-if="isLogin" @click="showBooking" strong secondary type="primary" block round>訂位</n-button>



            </n-message-provider>

        </div>
    </div>


    <!-- 表單 -->

    <n-message-provider>
        <UserOrderform v-if="showModalRef === 1" />
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
const showModalRef = ref(0);


console.log(showModalRef.value)

window.$message = useMessage()
const message = useMessage();


const showBooking = () => {
    if (!isLogin)
        // return Swal.fire({
        //     icon: 'success',
        //     title: '成功',
        //     text: '登入成功'
        // })
        return message.info(
            "欲線上訂位請先登入",
            {
                keepAliveOnHover: true
            }
        );
    if (showModalRef.value === 1) return showModalRef.value = showModalRef.value - 1

    showModalRef.value = showModalRef.value + 1
    console.log(showModalRef.value)

}


</script>

<style scoped>
/* h1 {
    margin-left: 150px;
} */




.booking-display {
    font-size: large;
}
</style>