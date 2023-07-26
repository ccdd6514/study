<template>
	<div class="test" ref="myDiv">
		<!-- block收集节点例子 -->
		<div>
			<div>{{ a }}</div>
			<div>
				<div>
					<p>{{ b }}</p>
				</div>
			</div>
		</div>
		<!-- <div>
      <h1 v-if="a">{{a}}</h1>
      <p v-else><h2>{{ b}}</h2></p>
    </div> -->
		<!-- <div>
			<div>
				<p>{{ b }}</p>
			</div>
		</div>
    <div v-for="(item,index) in arr" :key="index" >{{item}}</div> -->
	</div>
</template>
<script>
import { getCurrentInstance } from 'vue'

export default {
	data() {
		return {
			a: '我是直接子节点a',
			b: '我是很深的动态子节点b',
			arr: ['我是第一个', '我是第二个', '我是第三个']
		}
	},
	mounted() {
		const instance = getCurrentInstance()
		const vnode = instance.subTree
		console.log('vnode:', vnode)
		console.log('dynamicChildren:', vnode.dynamicChildren)
	},
	methods: {}
}
</script>