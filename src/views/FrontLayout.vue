<template>
  <!-- 主題變量↓ -->
  <!-- <n-config-provider :theme-overrides="themeOverrides" inline-theme-disabled preflight-style-disabled> -->
  <n-config-provider :theme-overrides="themeOverrides">

    <n-layout style="height: 100vh; background:antiquewhite;" :native-scrollbar="false">

      <!-- topbar ----------------------------------------------------------------------------->
      <n-layout-header>

        <n-space justify="space-between">

          <n-space :size="48">

            <router-link to="/">
              <!-- <img src="../assets/copy_somepeoples_logo_white_onlyfont.svg" width="40" alt="logo"> -->
              <img src="../assets/logo/LOGO-font-white.svg" width="100" alt="logo" id="logo">
            </router-link>


            <n-tabs type="bar" size="large">
              <n-tab name="關於我們">
                <router-link to="/about">
                  關於我們
                </router-link>
              </n-tab>
              <n-tab name="菜單">
                <router-link to="/menu">
                  精緻菜單
                </router-link>
              </n-tab>
              <n-tab name="訂位">
                <router-link to="/booking">
                  線上訂位
                </router-link>
              </n-tab>
              <n-tab name="聯絡我們">
                <router-link to="/contactus">
                  聯絡我們
                </router-link>
              </n-tab>
            </n-tabs>

          </n-space>


          <n-space class="header-end-button" :size="24">


            <div class="admin" v-if="isAdmin">
              <n-button round>
                <router-link to="/admin">
                  <div>管理者後台</div>
                </router-link>
              </n-button>
            </div>


            <div class="menber" v-if="isLogin && !isAdmin">
              <n-button round>
                <router-link to="/menber">
                  <div>我的訂單</div>
                </router-link>
              </n-button>
            </div>





            <div class="login-logout">

              <n-message-provider>

                <RegisterModal v-if="!isLogin" />

                <!-- <LogoutModal v-if="isLogin" /> -->
                <!-- logoutModal的Pinia怪怪的會404 代替↓ -->
                <n-button @click="logout" round v-if="isLogin">
                  <div>登出</div>
                </n-button>

              </n-message-provider>
            </div>


          </n-space>

        </n-space>

      </n-layout-header>

      <!-- 前台網頁內容(渲染) ----------------------------------------------------------------------------->
      <!-- <n-layout-content content-style="padding: 24px;"> -->
      <n-layout-content>


        <div class="container">

          <n-message-provider>
            <router-view></router-view>
          </n-message-provider>

        </div>

      </n-layout-content>

      <!-- Footer ----------------------------------------------------------------------------->
      <n-layout-footer content-style="padding:50px">

        <n-space justify="space-around" align="center" :size="72">

          <n-space justify="center" align="center" :size="30" class="logo">

            <!-- <img src="../assets/copy_somepeoples_logo_white.svg" width="100" alt="logo"> -->
            <!-- <img src="../assets/logo/logo-round-white-brown.svg" width="100" alt="logo">
            <img src="../assets/logo/LOGO-font-black.svg" width="80" alt="logo"> -->
            <img src="../assets/logo/logo-round-white-full.svg" width="50" alt="logo">
            <div id="logo-discribe">30分鐘咖啡<br>給您最獨特的午茶體驗</div>
          </n-space>

          <div class="footer-menu">
            <p>首頁</p>
            <p>精緻菜單</p>
            <p>關於我們</p>
            <p>聯絡我們</p>
            <p>線上訂位</p>

          </div>

          <div class="footer-contact">
            <p>地址：24302新北市泰山區貴子里<br>致遠新村55之1號</p>
            <p>電話：02-0000-0000</p>
            <p>傳真：02-0000-0000</p>
            <p>admin@address.com </p>

          </div>

          <div>
            <p>社群網站</p>
            <n-space wrap class="social-media">
              <n-space vertical>
                <TwitterIcon width="35" color="white" />

                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 576 512">
                  <path
                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z"
                    fill="currentColor"></path>
                </svg>
              </n-space>
              <n-space vertical>
                <FacebookIcon width="35" color="white" />
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 448 512">
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    fill="white"></path>
                </svg>
              </n-space>
            </n-space>
          </div>
        </n-space>

        <n-divider></n-divider>
        <div id="copyright">Copyright © 2022 admin. All rights reserved.</div>
        <br>
        <!-- 測試用 連往管理者後台 -->
        <!-- <router-link to="/admin">
          <div class="test-button">
            admin後台
          </div>
        </router-link> -->

        <!-- 測試用 連往會員後台 -->
        <!-- <router-link to="/menber">
          <div class="test-button">
            會員後台
          </div>
        </router-link> -->



      </n-layout-footer>

    </n-layout>



  </n-config-provider>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'

// naive 的 主題變量
import themeOverrides from '../assets/theme'
import TwitterIcon from '../components/icons/TwitterIcon.vue'
import FacebookIcon from '../components/icons/FacebookIcon.vue'


import { storeToRefs } from 'pinia';
import { useUserStore } from '../stores/user';

const user = useUserStore()
const { logout } = user
const { isLogin, isAdmin, cart } = storeToRefs(user)


</script>



<style scoped>
.container {
  margin-bottom: 200px;
}


#logo {
  margin: 3px 0 0 0;
  /* position: absolute; */
  /* top: 10px; */
}

.n-layout-header {
  background: #363B4B;
  padding: 16px 48px;
  color: white;

}

.n-layout-footer {
  /* background: rgba(128, 128, 128, 0.2); */
  background: #363B4B;
  padding: 24px;
  color: white;
}




/* .n-layout-sider {
    background: rgba(128, 128, 128, 0.3);
    min-width: 500px;
    max-width: 500px !important;
} */

.header-end-button {
  /* display: flex; */
  line-height: 48px;
  /* align-items: center; */
  /* justify-content: center; */
}


a,
a:link,
a:visited {
  text-decoration: none;
  color: inherit;
}

/* .n-layout-header a {
  color: white;
} */




.test-button {
  background: rgba(245, 222, 179, 0.2);
  display: inline-block;
  /* width: 20px; */
  height: 30px;
  padding: 10px 30px;
  margin: 0 30px;
  border-radius: 25px;
  transition: background 0.4s ease-in-out 0.1s;

}

.test-button:hover {
  background: #232630;
}


#logo-discribe {
  color: white;
}

#copyright {
  position: relative;
  left: 50%;
  transform: translateX(-13%);
  font-size: smaller;
}

@media (max-width:576px) {
  /* .n-layout-sider {
        background: rgba(128, 128, 128, 1);
        min-width: 20px;
        max-width: 20px !important;
    } */

  h1 {
    color: red;
  }
}
</style>
