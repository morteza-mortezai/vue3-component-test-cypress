
<script setup lang="ts">
  import { ref ,onMounted} from 'vue'
  const props=defineProps<{
    countValue?:number
  }>()
  const emit = defineEmits(['change'])
onMounted(()=>{
  if(props.countValue)
    count.value=props.countValue
})
  const count = ref(0)
  const increment = () => {
    count.value++
    emit('change', count.value)
  }

  const decrement = () => {
    count.value--
    emit('change', count.value)
  }
</script>

<template>
  <div class="stepper">
    <button data-cy="increment" @click="increment">increment</button>
    <button data-cy="decrement" @click="decrement">decrement</button>
    <span data-cy="counter">{{ count }}</span>
  </div>
</template>

<style scoped>
.stepper {
  display: flex;

}
</style>
