<script lang="ts" setup>
useHead({
  title: "Roga's 3D Map App"
});

const coords = ref<{ latitude: number; longitude: number; } | null>(null);
const coordsError = ref<string | null>(null);

const updatePosition = (position: GeolocationPosition) => {
  coords.value = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
};

const handleCoordsError = (err: GeolocationPositionError) => {
  coordsError.value = err.message;
};

onMounted(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(updatePosition, handleCoordsError);
  } else {
    coordsError.value = "Geolocation is not supported by this browser.";
  }
});
</script>

<template>
  <div class="h-dvh bg-gray-500">
    <MapboxMap map-id="TheMap" style="position: absolute; height:100%; width:100%;" :options="{
      style: 'mapbox://styles/ryanroga/cla4jnruj000s15ruek5x1j0q',
      center: [coords?.longitude ?? -68.137343, coords?.latitude ?? 45.137451], // starting position
      zoom: 5 // starting zoom
    }" />
  </div>
</template>
