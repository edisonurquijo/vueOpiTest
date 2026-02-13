<script setup lang="ts">
import { ProductList } from '@/service/ProductService';
import { onMounted, ref, computed } from 'vue';
import ProductFilter from './ProductFilter.vue';

const products = ref([]);

onMounted(() => {
    products.value = ProductList();
});

const activeFilters = ref({ search: '', category: null as string | null });

// 2. Updated Search + Filter Logic
const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(activeFilters.value.search.toLowerCase());
    const matchesCategory = !activeFilters.value.category || product.category === activeFilters.value.category;
    return matchesSearch && matchesCategory;
  });
});
const categories = computed(() => {
  const unique = new Set(products.value.map(p => p.category));
  return ['All', ...Array.from(unique)];
});

const handleFilter = (filters: { search: string, category: string | null }) => {
  activeFilters.value = filters;
};

</script>

<template>
    <div class="card">
        <ProductFilter :categories="categories" @filter-change="handleFilter" />
        <div class="font-semibold text-xl mb-4">Lista De Productos</div>
        <DataTable :value="filteredProducts" :rows="5" :paginator="true" responsiveLayout="scroll">
            <Column style="width: 15%" header="Image">
                <template #body="slotProps">
                    <img :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`" :alt="slotProps.data.image" width="50" class="shadow" />
                </template>
            </Column>
            <Column field="name" header="Producto" :sortable="true" style="width: 35%"></Column>
            <Column field="price" header="Precio" :sortable="true" style="width: 35%">
                <template #body="slotProps">
                    {{ slotProps.data.price }}
                </template>
            </Column>
            <Column style="width: 15%" header="Ver Detalle">
                <template #body>
                    <Button icon="pi pi-search" type="button" class="p-button-text"></Button>
                </template>
            </Column>
        </DataTable>
    </div>
</template>
