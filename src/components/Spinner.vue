<script setup lang="ts">
import { computed } from "@vue/reactivity";

const props = defineProps<{
  center?: boolean;
  size?: string;
}>();

const size = computed(() => (props.size ? `${props.size}px` : "200px"));
</script>

<template>
  <div :class="{ center: props.center }">
    <svg
      style="
        margin: auto;
        background: none;
        display: block;
        shape-rendering: auto;
      "
      :width="size"
      :height="size"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#157759"
        stroke-width="10"
        r="35"
        stroke-dasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  </div>
</template>

<style scoped>
.center {
  margin: auto;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
