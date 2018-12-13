// Please install vue from npm first.
import Vue from 'vue'
import Foo from './components/foo.vue'
import './x'

new Vue({ el: '#app', render: h => h(Foo) })