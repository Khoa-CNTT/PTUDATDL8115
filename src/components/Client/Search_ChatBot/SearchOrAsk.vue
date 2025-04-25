<template>
    <div class="theme-search-ask">
        <div class="search-ask">
            <router-link to="/" class="headerButton goBack">
                <i class="fa-solid fa-arrow-left back-home"></i>
            </router-link>
            <div class="container-search-ask">
                <div><input v-model="askorsearch" type="text" class="input-search-ask" placeholder="Tìm kiếm hoặc hỏi Chatbot"></div>
                <i class="fa-solid fa-magnifying-glass icon-search"></i>
            </div>
            <router-link to="/chatbot" class="headerButton to-chat">
                <i class="fa-solid fa-paper-plane"></i>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style></style>