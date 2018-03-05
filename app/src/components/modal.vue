<template>
  <div>
    <Modal v-model="isShowModal" :title="title || '标题'" :loading="loading" @on-ok="ok" @on-cancel="cancel">
      <slot>
        内容区
      </slot>
    </Modal>
  </div>
</template>

<script>
  export default {
    props: ['title', 'showModal', 'loading'],

    data() {
      return {};
    },
    computed: {
      isShowModal: {
        get() {
          return this.showModal;
        },
        set() { }
      }
    },
    methods: {
      ok() {
        this.$emit('ok');
      },
      cancel() {
        this.$emit('cacel');
        this.$Message.info('Clicked cancel');
      }
    }
  }
</script>