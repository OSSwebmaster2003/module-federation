<template>
  <div class="hello-remote">
    <h2>Hello from <span class="accent">Vue Remote App</span> 👋</h2>
    <p>This component is exposed via Module Federation.</p>
  </div>
</template>

<script setup>
// no props or logic yet — purely presentational for now
</script>

<style scoped>
.hello-remote {
  padding: 20px;
  border: 2px solid #42b883;
  border-radius: 10px;
  background-color: #f8fafc;
  text-align: center;
}

.accent {
  color: #42b883;
  font-weight: 600;
}
</style>
