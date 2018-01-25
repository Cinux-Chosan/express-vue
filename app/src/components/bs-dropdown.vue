<template>
  <div class="btn-group">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{txt}} <span class="caret"></span>
          </button>
            <ul class="dropdown-menu">
              <li v-for="item in btnList" :key="item._id">
                {{item}}
              </li>
              <slot></slot>
            </ul>
          </div>
</template>

<script>
export default {
  props: ['txt', 'btnList'],
  data: () => {
    return {};
  },
  methods: {
    itemClicked(e) {
      debugger
    }
  }
};
</script>

<style>

</style>

