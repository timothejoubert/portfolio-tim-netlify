<template>
    <div v-if="article" :class="$style.root">
        <v-markdown v-if="article.title" :content="article.title" :class="[$style.title, 'body-m']" />
        <p :class="[$style.content, 'body-s']">{{ article.content }}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { PropType } from 'vue'
import VMarkdown from '~/components/atoms/VMarkdown.vue'

export default Vue.extend({
    name: 'VAboutArticle',
    components: { VMarkdown },
    props: {
        article: Object as PropType<AboutArticle>,
    },
})
</script>

<style lang="scss" module>
.root {
    position: relative;
    width: rem(300);

    &:not(:last-child) {
        padding-bottom: rem(28);
    }
}

.title {
    padding-bottom: rem(4);
    opacity: 0.9;
}

.content {
    opacity: 0.6;
}
</style>
