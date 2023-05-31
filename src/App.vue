<template>
  <HeaderComponent></HeaderComponent>

  <div class="container">
    <div class="row">
      <router-view name="LeftSideBar" class="col-md-2"></router-view>

      <div class="col">
        <router-view></router-view>
      </div>

      <router-view name="RightSideBar" class="col-md-2"></router-view>
    </div>
  </div>
</template>

<script setup>
  import HeaderComponent from './components/HeaderComponent.vue';
</script>
