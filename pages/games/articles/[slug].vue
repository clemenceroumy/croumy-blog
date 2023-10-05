<template>
    <Article :article="data?.game"></Article>
</template>

<script lang="ts" setup>
import Article from "~/components/article/Article.vue";
import getGameBySlug from "~/graphql/getGameArticleBySlug.graphql"

const route = useRoute();

const { data } = await useAsyncQuery(getGameBySlug, {
    slug: route.params.slug
});
</script>