<template>
  <div class="navbar">
    <div class="right-menu">
      <el-dropdown class="avatar-container">
        <div class="avatar-wrapper">
          <img src="@/assets/logo.png" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>首页</el-dropdown-item>
          </router-link>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.navbar
  height 50px
  overflow hidden
  position relative
  background #fff
  box-shadow 0 1px 4px rgba(0, 21, 41, 0.08)
  .right-menu
    float right
    height 100%
    line-height 50px
    &:focus
      outline none
    .right-menu-item
      display inline-block
      padding 0 8px
      height 100%
      font-size 18px
      color #5a5e66
      vertical-align text-bottom
      &.hover-effect
        cursor pointer
        transition background .3s
        &:hover
          background rgba(0, 0, 0, .025)
    .avatar-container
      margin-right 30px
      .avatar-wrapper
        margin-top 5px
        position relative
        .user-avatar
          cursor pointer
          width 40px
          height 40px
          border-radius 10px
        .el-icon-caret-bottom
          cursor pointer
          position absolute
          right -20px
          top 25px
          font-size 12px
</style>