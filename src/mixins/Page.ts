import type { MetaInfo } from 'vue-meta'
import Vue from 'vue'
import { FacebookMetaOptions, PageMetaPropertyName, TwitterMetaOptions } from '~/types/meta'
import { createFacebookMeta } from '~/utils/meta/facebook'
import { createTwitterMeta } from '~/utils/meta/twitter'

export default Vue.extend({
    data() {
        return {
            pageData: {} as PageData,
        }
    },
    head(): MetaInfo {
        const meta = [
            {
                hid: 'description',
                name: 'description',
                content: this.pageData?.metaDescription || 'fallback de description dans mixin page',
            } as PageMetaPropertyName,
            ...createFacebookMeta(this.getFacebookMetaOptions()),
            ...createTwitterMeta(this.getTwitterMetaOptions()),
            { hid: 'version', name: 'version', content: this.$config.version || '' },
        ]

        return {
            htmlAttrs: {
                lang: 'fr',
            },
            title: this.metaTitle,
            meta,
            script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
        }
    },
    computed: {
        isHomePage(): boolean {
            return this.$route.fullPath === '/' || this.$route.name === 'index'
        },
        isProject(): boolean {
            return this.pageData['@type'] === 'project' || this.$route.path.includes('project')
        },
        isAbout(): boolean {
            return this.pageData['@type'] === 'about'
        },
        metaTitle(): string {
            if (this.pageData?.title) return this.$config.appTitle + ' | ' + this.pageData.title
            if (this.isProject) return this.project.title + ' | ' + this.$config.appTitle
            return this.$config.appTitle
        },
    },
    methods: {
        getMetaImage(): string {
            return this.pageData?.thumbnail || '/images/share.jpg'
        },
        getPageUrl(): string {
            return this.$config.baseURL + this.$route.fullPath.substring(1)
        },
        getTwitterMetaOptions(): TwitterMetaOptions {
            return {
                title: this.metaTitle,
                description: this.pageData?.metaDescription || '',
                url: this.getPageUrl(),
                image: this.getMetaImage(),
            }
        },
        getFacebookMetaOptions(): FacebookMetaOptions {
            return {
                title: this.metaTitle,
                description: this.pageData?.metaDescription || '',
                url: this.getPageUrl(),
                siteName: this.$config.appTitle,
                image: this.getMetaImage(),
            }
        },
    },
})
