<template>
    <section v-if="destination" class="destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name" />
            <p>{{ destination.description }}</p>
        </div>
    </section>
</template>

<script setup>
// import sourceData from '../data.json'
import { computed, onMounted, ref,watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const destination = ref(null)
// const destinationId = computed(() => parseInt(route.params.id))

const fetchDestination = async () => {
    const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}/`);
    destination.value = await response.json();
};

onMounted(fetchDestination);

watchEffect(() => {
    fetchDestination();
});

// const destination = computed(() => {
//     return sourceData.destinations.find(
//         destination => destination.id === destinationId.value
//     )
// })

// onMounted(async()=>{
//     const response=await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}/`);
//     destination.value=await response.json();
// })
</script>

<style scoped></style>