<template>
  <Layout>
    <Article class="my-20" :article="$page.gcms.game"></Article>
  </Layout>
</template>

<script>
import Article from "../components/Article.vue";

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
picture {
url
}
}
}
}
</page-query>