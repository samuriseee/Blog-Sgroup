<template>
  <div class="modal">
    <div class="modal-content">
      <p>{{ this.modalMessage }}</p>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["modalMessage"],
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  width: 100%;
  height: 100% !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    background: #191919 !important;
    color: #fff;
    border-radius: 16px;
    font-size:1.5rem;
    padding: 25px;
    background-color: rgb(230, 227, 227);
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    p {
      text-align: center;
    }
    button {
      border: 1px solid #fff;
      border-radius: 15px;
      padding: 5px;
      outline: none;
      color: #fff;
      align-self: center;
      background: transparent;
      font-size:1.3rem;
    }
  }
}
</style>