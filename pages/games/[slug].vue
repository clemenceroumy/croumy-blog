<template>
    <Article class="my-10" :article="data?.game"></Article>
</template>

<script lang="ts" setup>
import Article from "~/components/article/Article.vue";
import getGameBySlug from "~/graphql/getGameBySlug.graphql"

const route = useRoute();

const { data } = await useAsyncQuery(getGameBySlug, {
    slug: route.params.slug
});
</script>