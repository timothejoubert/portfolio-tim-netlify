<template>
    <div :class="$style.root">
        <input
            :id="name"
            ref="slider"
            :tabindex="!isVisible && '-1'"
            type="range"
            :min="min"
            :step="step"
            :max="max"
            :class="$style.slider"
            @input="onUpdate"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'VSlider',
    props: {
        isVisible: Boolean,
        name: String,
        value: String,
        min: String,
        max: String,
        step: String,
    },
    computed: {},
    watch: {
        maxRange() {
            const value = (this.$refs.slider as HTMLInputElement).value
            this.$emit('update', { value, name: this.name })
        },
    },
    methods: {
        onUpdate(event: InputEvent) {
            const value = (event.target as HTMLInputElement).value
            this.$emit('update', { value, inputName: this.name })
        },
    },
})
</script>

<style lang="scss" module>
.root {
    position: relative;
    width: min(400px, calc(100% - 12px));
}

.slider {
    width: 100%;
    accent-color: var(--color-accent);
    background-color: transparent;
}

.slider[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    border: none;
    background: var(--light-color);
    border-radius: 5px;
    outline: none;
    //-webkit-appearance: none;
}

.slider[type='range']::-webkit-slider-thumb {
    width: 25px;
    height: 25px;
    border: none;
    //-webkit-appearance: none;
    background: var(--light-color);
    border-radius: 50%;
    cursor: pointer;
    transform: translateY(calc(-50% + 2px));
}

.slider[type='range']::-moz-range-thumb {
    height: 50px;
    -webkit-appearance: none;
}
//.slider:focus::-webkit-slider-thumb {
//    background: var(--color-accent);
//}
</style>
