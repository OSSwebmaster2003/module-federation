<template>
  <div class="host-container">
    <h1>Vue Host App 🏠</h1>

    <div class="buttons">
      <button @click="loadVueRemote">Load Vue Remote Component</button>
      <button @click="loadReactRemote">Load React Remote Component</button>
    </div>

    <div class="remote-zone">
      <component :is="remoteVueComponent" v-if="remoteVueComponent" />

      <hello-remote v-if="showReactRemote"></hello-remote>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const remoteVueComponent = ref(null);
const showReactRemote = ref(false);

const loadVueRemote = async () => {
  showReactRemote.value = false; // hide React web component
  const module = await import("vueRemoteApp/HelloRemote");
  remoteVueComponent.value = module.default;
};

const loadReactRemote = async () => {
  remoteVueComponent.value = null;
  await import("reactRemoteApp/HelloRemoteElement");
  showReactRemote.value = true;
};
</script>

<style scoped>
.host-container {
  text-align: center;
  padding: 40px;
}
.buttons {
  margin-bottom: 20px;
}
button {
  margin: 0 10px;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: #42b883;
  color: white;
  font-weight: 600;
}
.remote-zone {
  margin-top: 30px;
}
</style>
