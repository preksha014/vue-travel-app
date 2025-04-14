<template>
    <section v-if="destination" class="destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name" />
            <p>{{ destination.description }}</p>
        </div>
    </section>
    <section class="experiences">
        <h2>Top Experiences in {{ destination.name }}</h2>
        <div class="cards">
            <router-link v-for="experience in destination.experiences" :key="experience.slug"
                :to="{ name: 'experience.show', params: { experienceSlug: experience.slug } }">
                <ExperienceCard :experience="experience" />
            </router-link>
        </div>

    </section>
</template>

<script setup>
import sourceData from '../data.json'
import { computed, defineProps } from 'vue'
import ExperienceCard from '@/components/ExperienceCard.vue'
// import { useRoute } from 'vue-router'

// const route = useRoute()
// const destination = ref(null)
const props = defineProps({
    id: {
        type: Number,
        required: true
    }
})

//const destinationId = computed(() => parseInt(route.params.id))
const destination = computed(() => {
    return sourceData.destinations.find(
        destination => destination.id === props.id
    )
})
// const fetchDestination = async () => {
//     const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}/`);
//     destination.value = await response.json();
// };

// onMounted(fetchDestination);

// watchEffect(() => {
//     fetchDestination();
// });

// onMounted(async()=>{
//     const response=await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}/`);
//     destination.value=await response.json();
// })
</script>

<style scoped></style>