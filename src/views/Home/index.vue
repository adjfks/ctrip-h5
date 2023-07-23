<script setup lang="ts">
</script>

<template>
  <div class="home">
    <div class="search-index">
      <div class="search-index-box">
        <span>搜索:目的地/酒店/景点/航班号</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.home {
  .search-index {
    display: flex;
    box-sizing: border-box;
    padding: 12px 12px 6px;
    height: 50px;
    &-box {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex: 1;
      align-items: center;
      height: 32px;
      border-radius: 16px;
      border: 1.8px solid $ct-primary-color;
      color: $ct-icon-color;

      span {
        font-size: 15px;
        line-height: 21px;
        color: $ct-placeholder-color;
      }
    }
  }
}
</style>
