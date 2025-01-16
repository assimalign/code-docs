import { createApp, defineComponent, h, ref } from "vue";
import { RouterView } from "vue-router";
import { ChevronLeftIcon } from "@heroicons/vue/24/solid"
import Item from "./temp.png"

const useClassNames = (...classes: Array<any>) => {
    return classes.filter(Boolean).join(' ')
}

const ApplicationTopbar = defineComponent({
    name: 'ApplicationTopbar',
    setup(props, ctx) {

        return () => {
            return h('div', { class: 'fixed flex flex-row flex-1 bg-gray-800 border-b border-primary-400 p-3 w-full shadow-md h-16 max-h-16' }, [
                h('img', {
                    src: Item,  
                    width: "120",
                    height: "50"
                })
            ])
        }
    }
})
const ApplicationSidebar = defineComponent({
    name: 'ApplicationSidebar',
    props: {
        isOpen: {
            type: Boolean,
            required: true
        }
    },
    emits: {
        openOrClose() { }
    },
    setup(props, { emit }) {
        return () => {
            return h('div', { class: `fixed ${props.isOpen ? "w-80" : "w-16 "} mt-16 h-screen duration-300 flex border-r bg-black shadow-xl rounded-r-md` }, [
                h('nav', { class: 'flex flex-1 flex-col py-4 px-2 overflow-auto' }, [
                    h('div', { class: 'flex flex-row-reverse py-2 pr-3' }, [
                        h(ChevronLeftIcon, {
                            class: useClassNames(
                                props.isOpen ? ' text-white' : 'text-white rotate-180',
                                'h-6 w-6 shrink-0 cursor-pointer  hover:border-2 hover:border-white rounded-md'
                            ),
                            onClick() {
                                emit('openOrClose')
                            }
                        })
                    ])
                ])
            ])
        }
    },
})
const Application = defineComponent({
    name: 'Application',
    components: {
        RouterView
    },
    setup(props, { }) {
        const isOpen = ref(true)
        return () => {
            return h('div', { class: 'flex flex-1 flex-row' }, [
                h(ApplicationSidebar, {
                    isOpen: isOpen.value,
                    onOpenOrClose() {
                        isOpen.value = !isOpen.value
                    }
                }),
                h('main', { class: 'flex flex-1 flex-col' }, [
                    h(ApplicationTopbar),
                    h('main', { class: isOpen.value ? 'pl-80 pt-16 duration-300' : 'pl-16 pt-16 duration-300' }, [
                        h(RouterView)
                    ])
                ])
            ])
        }
    }
})





















export const createMarkdownApp = () => createApp(Application)