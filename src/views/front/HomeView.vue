<template>
    <div class="container-relative">
        <!-- <video muted id="first-page-video" src="../video/pexels-kelly-lacy-6769802.mp4" autoplay="true" loop="true" /> -->

        <!-- <video muted id="video2"
            src="https://cdn.videvo.net/videvo_files/video/free/2020-02/large_watermarked/200223_Cafe_03_09_preview.mp4"
            autoplay="true" loop="true" /> -->


        <video muted id="video2"
            src="https://cdn.videvo.net/videvo_files/video/free/2020-03/large_watermarked/200223_Cafe_03_40_preview.mp4"
            autoplay="true" loop="true" />
    </div>
    <img src="../../assets/logo/logo-round-white-full.svg" alt="logo" id="homeview-logo">
    <!-- <h1>首頁 </h1> -->
    <div id="homeview-text">

        <n-h2 id="homeview-text-top">三十分鐘咖啡<br>利用三十分鐘的路程<br>給您最獨特的午茶體驗</n-h2>
        <n-divider />
        <n-h2 id="homeview-text-bottom"> ◆ 如不想走路上山可考慮我們的專車接駁方案</n-h2>
    </div>
</template>


<style>
body {
    margin: 0;
}
</style>




<style scoped>
.container-relative {
    height: 100vh;
}

#first-page-video {
    position: absolute;
    left: 0;
    top: 0px;

    width: 100vw;
    filter: contrast(40%) brightness(120%);
    overflow: hidden;
    /* transform: translate(-20px, -10px); */
}


#video2 {
    position: absolute;
    left: 0;
    top: 0px;
    width: 100vw;
    filter: contrast(90%) brightness(60%);
    overflow: hidden;
    /* transform: translate(-20px, -10px); */
}


#video3 {
    position: absolute;
    left: 0;
    top: 0px;
    width: 100vw;
    filter: contrast(90%) brightness(60%);
    overflow: hidden;
    /* transform: translate(-20px, -10px); */
}

#homeview-logo {
    position: absolute;
    top: 20%;
    right: 22%;

    width: 300px;

    opacity: .6;
    z-index: 20;
    /* background-color: aqua; */
    transition: all 0.4s ease-out 0.1s;

}

#homeview-logo:hover {
    opacity: 1;
    z-index: 21;

}

#homeview-text {
    position: absolute;
    top: 30%;
    right: 45%;
    width: 400px;
    opacity: 0.8;
}

#homeview-text:hover {
    opacity: 1;
    transition: all 0.4s ease-out 0.1s;
}

#homeview-text-top {
    padding: 0 24px;
    color: white;
    text-align: right;
    font-weight: 600;

}

#homeview-text-bottom {
    padding: 0 24px;
    color: gainsboro;
    text-align: right;
    font-size: small;
    font-weight: 400;
}

@media (max-width:1400px) {
    #homeview-logo {
        position: absolute;
        top: 15%;
        right: 20%;
        width: 270px;
    }
}



@media (max-width:1200px) {
    #homeview-logo {
        position: absolute;
        top: 10%;
        right: 20%;
        width: 250px;
    }
}
</style>