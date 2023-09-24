<template>
  <Layout>
    <Article class="my-10" :article="$page.gcms.game"></Article>
  </Layout>
</template>

<script>
import Article from "../components/article/Article.vue";

export default {
  components: {Article}
};
</script>

<page-query>
query GetGame($slug: String) {
gcms {
game(where: {slug: $slug}) {
slug
title
content
publishedAt
picture {
url
}
}
}
}
</page-query>