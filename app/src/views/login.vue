
<template>
  <div class="page-login">
    <form class="col-sm-6 col-sm-offset-3">
      <div class="form-group">
        <label for="u-account">账号</label>
        <input type="email" class="form-control" id="u-account" placeholder="Email" v-model="name">
      </div>
      <div class="form-group">
        <label for="u-pwd">密码</label>
        <input type="password" class="form-control" id="u-pwd" placeholder="Password" v-model="pwd">
      </div>
      <button type="button" class="btn btn-default" @click="login">登录</button>
    </form>
  </div>
</template>

<script>
import { getJson } from '@/libs/util';

export default {
  name: 'login',
  data: () => {
    return {
      name: '',
      pwd: ''
    }
  },
  methods: {
    async login() {
      let data = await getJson('/login', this.$data, 'post');
    }
  }
}

</script>