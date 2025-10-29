<template>
  <div class="host-container">
    <h1>Vue Host App 🏠</h1>

    <div class="buttons">
      <button @click="loadVueRemote">Load Vue Remote Component</button>
      <button @click="loadReactRemote">Load React Remote Component</button>
    </div>

    <div class="remote-zone">
      <component :is="remoteComponent" v-if="remoteComponent" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const remoteComponent = ref(null);

const loadVueRemote = async () => {
  const module = await import("vueRemoteApp/HelloRemote");
  remoteComponent.value = module.default;
};

const loadReactRemote = async () => {
  const module = await import("reactRemoteApp/HelloRemote");
  const ReactWrapper = (await import("../utils/ReactWrapper.js")).default;
  remoteComponent.value = () => ReactWrapper(module.default);
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
