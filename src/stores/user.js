/* 會員登入 */

import { defineStore } from 'pinia'
import { api, apiAuth } from '@/plugins/axios'


// 在 pinia 這樣寫 useRouter() 會是 undefined
// import { useRouter } from 'vue-router'
import router from '../router'  // 抓 router資烙夾


// 測試用 
import Swal from 'sweetalert2'  // 之後再改寫


// 定義一個 ID 為 user 的 store
export const useUserStore = defineStore({
    // 初始狀態，使用箭頭函式
    id: 'user',
    state: () => ({
        // 把頁面上會用到的資料放這邊
        // 所有這些屬性都將自動推斷其類型
        token: '',
        account: '',
        userName: '',
        email: '',
        phone: '',
        role: ''
        // cart: 0  // 我的 schema 結構沒有cart的表
    }),
    // 可以先將資料處理好用傳出
    getters: {
        // 判斷是不是會員，有沒有登入
        isLogin() {
            return this.token.length !== 0
        },
        isAdmin() {
            return this.role === 1
        },
        avatar() {
            // 訪客圖像   網址 + this.account    << 此網址會自動產生img
            return 'https://source.boringavatars.com/beam/120/' + this.account
        }
    },
    // 修改狀態用的 function
    // 真正的login function放這邊
    actions: {
        async login(formValue) {
            try {
                const { data } = await api.post('/users/login', formValue)
                this.token = data.result.token
                this.account = data.result.account
                this.userName = data.result.userName
                this.email = data.result.email
                this.phone = data.result.phone
                this.role = data.result.role
                Swal.fire({
                    icon: 'success',
                    title: '成功',
                    text: '登入成功'
                })
                router.push('/home')
            } catch (error) {
                Swal.fire({
                    icon: 'warning',
                    title: '請先登入',
                    text: (error.isAxiosError && error.response.data) ? error.response.data.message : '登入後即可享用便利的線上訂位'
                })
            }
        },
        async logout() {
            try {
                // await api.delete('/users/logout', {
                //   headers: {
                //     authorization: `Bearer ${this.token}`
                //   }
                // })
                await apiAuth.delete('/users/logout')
                router.push('/')
                Swal.fire({
                    icon: 'success',
                    title: '成功',
                    text: '登出成功'
                })
            } catch (_) {
            }
            this.token = ''
            this.account = ''
            this.userName = ''
            this.email = ''
            this.phone = ''
            this.role = 0

        },
        async getUser() {
            if (this.token.length === 0) return
            try {
                const { data } = await apiAuth.get('/users/getuser')

                this.account = data.result.account
                this.userName = data.result.userName
                this.email = data.result.email
                this.avatar = data.result.avatar
                this.pastOrders = data.result.pastOrders


            } catch (error) {
                // this.logout()
                console.log(error.type)
            }
        },



        // async confirm (bookingDefault) {
        async confirm(booking) {
            try {
                // 要抓token的就用apiAuth
                const { data } = await apiAuth.post('/orders', booking)
                this.bookingDate = data.result.bookingDate
                this.bookingTime = data.result.bookingTime
                this.numberOfPeople = data.result.numberOfPeople
                this.usersNote = data.result.usersNote
                this.isFieldBooking = data.result.isFieldBooking

                Swal.fire({
                    icon: 'success',
                    title: '成功',
                    text: '訂位成功'
                })
                // router.push('/menber')

            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: '失敗',
                    text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤(store/user)'
                })
            }
        },
    },
    // localstorage設定  儲存token
    persist: {
        key: 'vite-shop',
        paths: ['token']
    }
})
