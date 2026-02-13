<script setup lang="ts">
import { ref, watch } from 'vue';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';

interface FilterState {
  search: string;
  category: string | null;
}

const props = defineProps<{ categories: string[] }>();
const emit = defineEmits<{
  (e: 'filter-change', filters: FilterState): void;
}>();

const filters = ref<FilterState>({
  search: '',
  category: null
});

// Watch for changes and emit to parent
watch(filters, (newVal) => {
  emit('filter-change', { ...newVal });
}, { deep: true });
</script>

<template>
  <div class="flex flex-wrap gap-4 p-4 bg-gray-50 border-round mb-4">
    <div class="flex flex-column gap-2">
      <label for="search" class="font-bold">Buscar Productos</label>
      <InputText id="search" v-model="filters.search" placeholder="Buscar un producto..." />
    </div>

    <div class="flex flex-column gap-2">
      <label for="category" class="font-bold">Filtar Por Cateogoría</label>
      <Select 
        v-model="filters.category" 
        :options="categories" 
        placeholder="Select Category" 
        showClear
        class="w-full md:w-14rem" 
      />
    </div>
  </div>
</template>