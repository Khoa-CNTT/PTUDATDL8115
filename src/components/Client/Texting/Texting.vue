<template>
    <!-- App Header -->
    <div class="appHeader ">
        <div class="left">
            <router-link to="/list-nhan-tin" class="headerButton goBack">
                <i class="fa-solid fa-arrow-left"></i>
            </router-link>
        </div>
        <div class="pageTitle">Username</div>
        <div class="right">
        </div>
    </div>
    <!-- * App Header -->

    <!-- App Capsule -->
    <div id="appCapsule theme-chat">

        <div class="message-divider">
            Friday, Sep 20, 10:40 AM
        </div>


        <div class="message-item">
            <img src="../../../assets/img/sample/avatar/avatar1.jpg" alt="avatar" class="avatar">
            <div class="content">
                <div class="title">Minh</div>
                <div class="bubble">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div class="footer">10:44 AM</div>
            </div>
        </div>

        <div class="message-item user">
            <div class="content">
                <div class="bubble">
                    Aenean volutpat.
                </div>
                <div class="footer">10:46 AM</div>
            </div>
        </div>

        <div class="message-divider">
            Friday, Sep 21, 7:40 PM
        </div>


        <div class="message-item">
            <img src="../../../assets/img/sample/avatar/avatar1.jpg" alt="avatar" class="avatar">
            <div class="content">
                <div class="title">Minh</div>
                <div class="bubble">
                    Aenean hendrerit porttitor dolor id elementum. Mauris nec purus pulvinar, fringilla ex eget,
                    ultrices urna.
                </div>
                <div class="footer">10:40 AM</div>
            </div>
        </div>

        <div class="message-item user">
            <div class="content">
                <div class="bubble">
                    <img src="../../../assets/img/sample/photo/2.jpg" alt="photo" class="imaged w160">
                </div>
                <div class="footer">10:46 AM</div>
            </div>
        </div>

        <div class="message-item user">
            <div class="content">
                <div class="bubble">
                    Maecenas sollicitudin justo vel posuere eleifend. In eget iaculis mi, vitae suscipit dui. Phasellus
                    a facilisis magna, eget aliquam turpis. Nullam eros neque, varius vitae commodo blandit, placerat
                    quis est.
                </div>
                <div class="footer">10:40 AM</div>
            </div>
        </div>

        <div class="message-item">
            <img src="../../../assets/img/sample/avatar/avatar1.jpg" alt="avatar" class="avatar">
            <div class="content">
                <div class="title">Minh</div>
                <div class="bubble">
                    <img src="../../../assets/img/sample/photo/5.jpg" alt="photo" class="imaged w160">
                </div>
                <div class="footer">10:40 AM</div>
            </div>
        </div>

        <div class="message-item">
            <img src="../../../assets/img/sample/avatar/avatar1.jpg" alt="avatar" class="avatar">
            <div class="content">
                <div class="title">Minh</div>
                <div class="bubble">
                    Aenean hendrerit porttitor dolor id elementum. Mauris nec purus pulvinar, fringilla ex eget,
                    ultrices urna.
                </div>
                <div class="footer">10:40 AM</div>
            </div>
        </div>


    </div>
    <!-- * App Capsule -->

    <!-- chat footer -->
    <div class="chatFooter">
        <form>
            <a href="#" class="btn btn-icon ">
                <i class="fa-solid fa-camera"></i>
            </a>
            <div class="form-group basic">
                <div class="input-wrapper">
                    <input type="text" class="form-control text-light" placeholder="Type a message...">
                    <i class="clear-input">
                        <i class="fa-solid fa-circle-xmark"></i>
                    </i>
                </div>
            </div>
            <button type="button" class="btn btn-icon">
                <i class="fa-solid fa-paper-plane"></i>
            </button>
        </form>
    </div>
    <!-- * chat footer -->

</template>
<script>
export default {

}
</script>
<style></style>