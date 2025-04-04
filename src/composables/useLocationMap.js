import { ref  } from 'vue'


export default function useLocationMap() {

  const zoom = ref(16)
  const center = ref([-30.0232074,-51.21932]) // Default coordinates for Porto Alegre

  function pin(e) {
    const marker = e.target.getLatLng()
    center.value = [marker.lat, marker.lng]

    console.log(center.value)
  }

  return {
    zoom,
    center,
    pin

  }
}
