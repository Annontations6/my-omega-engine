Vue.component("changelog-tab", {
    template: `<div class="changelog-tab">
    <guide-item>
    <template v-slot:title>v1.0.1</template>
    <template v-slot:text>Add 1 Theme.<br>Add 1 Image.
    </template>
    </guide-item>
    <guide-item>
    <template v-slot:title>v1.0.0</template>
    <template v-slot:text>Game Released!
    </template>
    </guide-item>
</div>`
})