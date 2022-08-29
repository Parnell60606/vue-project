<template>
    <!-- 有時間的做輪播圖切影片 -->

    <div id="first-page">
        <router-link to="/home">
            <!-- <img src="https://picsum.photos/1980/960/?random=10"> -->

            <!-- <video
            src="https://cdn.videvo.net/videvo_files/video/free/2020-03/large_watermarked/200223_Cafe_03_41_preview.mp4"
            autoplay="true" loop="true" /> -->


            <video muted id="first-page-video" src="../assets/video/pexels-kelly-lacy-6769802.mp4" autoplay="true"
                loop="true" />



            <div class="center-icon">
                <!-- <img src="../assets/copy_somepeoples_logo_white.svg" alt="copylogo" id="logo"> -->
                <img src="../assets/logo/logo-round-white.svg" alt="roundLogo" id="logo2">
                <div id="thirty-min-text">30 MINUTES COFFEE<br> 讓您享受悠閒愜意的午茶時光 </div>
                <div id="enter-button">
                    START
                </div>
            </div>

        </router-link>
    </div>




</template>

<script>
</script>

<style >
body {
    margin: 0;
}
</style>



<style scoped>
#first-page {
    position: relative;

    height: 100vh;
    overflow: hidden;

    /* background-color: #363B4B; */
    background-color: #F0F0EA;

}

#first-page-video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* max-width: 130vw; */
    width: 140vw;


    /* height: 100vh; */
    /* min-height: 100vh; */
    /* filter: contrast(40%) brightness(120%); */
    filter: contrast(60%) brightness(90%);
    /* display: block;
    margin: 0 auto; */
    overflow: hidden;
    /* transform: translate(-20px, -10px); */
}

.center-icon {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: none;


    opacity: .5;
    /* opacity: 1; */
    transition: all 0.5s ease-out 0.1s;

    /* background: black; */
}


.center-icon:hover {
    opacity: 1;
    /* background: rgba(26, 43, 38, 0.404); */
    backdrop-filter: blur(5px) brightness(70%) contrast(120%);

}


#thirty-min-text {
    color: whitesmoke;
    margin: 34px;
    opacity: 0.5;

    font-size: large;
    font-weight: 600;
    text-align: center;
    transition: all 0.4s ease-out 0.1s;


}

#thirty-min-text:hover {
    opacity: 1;

}




#logo {
    width: 20%;


    /* 微調(因為這個logo重心比較偏) */
    transform: translate(-8%);

    opacity: 0.4;
    transition: opacity 0.5s ease-out 0.1s;
}

#logo:hover {
    opacity: 1;
}

#logo2 {
    width: 15%;
    opacity: 0.4;
    transition: opacity 0.5s ease-out 0.1s;
}

#logo2:hover {
    opacity: 1;
}


/* 進入網頁 */
#enter-button {
    /* opacity: 0.8; */

    color: white;

    font-size: calc(1.5vw - 2px);

    border: 1px solid white;
    border-radius: 10px;
    padding: 8px 16px;
    margin: 12px;


    opacity: 0.2;
    transition: all 0.4s ease-out 0.1s;
}

#enter-button:hover {
    opacity: 1;
    background: #ffffff22;
    /* filter: brightness(2); */
    backdrop-filter: brightness(150%);
}


@media (max-width:1200px) {

    #first-page-video {
        width: initial;
        /* max-width: 100vw; */


        height: 100vh;
        /* min-height: 100vh; */
        /* filter: contrast(40%) brightness(120%); */
        filter: contrast(60%) brightness(90%);
        /* display: block;
    margin: 0 auto; */
        overflow: hidden;

    }

    #logo2 {
        width: 23%;
        opacity: 0.4;
        transition: opacity 0.5s ease-out 0.1s;
    }
}



@media (max-width:992px) {

    #logo2 {
        width: 26%;
        opacity: 0.4;
        transition: opacity 0.5s ease-out 0.1s;
    }

}

@media (max-width:576px) {
    #logo2 {
        width: 32%;
        opacity: 0.4;
        transition: opacity 0.5s ease-out 0.1s;
    }
}
</style>