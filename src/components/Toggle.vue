<template>
    <Switch v-model="enabled" @click="run" 
        class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <span class="sr-only">Use setting</span>
        <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white" />
        <span aria-hidden="true"
            :class="[enabled ? 'bg-indigo-600' : 'bg-gray-200', 'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out']" />
        <span aria-hidden="true"
            :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out']" />
    </Switch>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { Switch } from '@headlessui/vue'

export default defineComponent({
    name: 'Toggle',
    props: {
        onEnabled: {
            required: true,
            type: Function
        },
        onDisabled: {
            required: true,
            type: Function
        }
    },
    setup() {
        const enabled = ref(false)
        return {
            enabled
        }
    },
    methods: {
        run() {
            if (this.enabled) {
                this.onEnabled()
            } else {
                this.onDisabled()
            }
        }
    },
    components:{
        Switch
    }
})
</script>