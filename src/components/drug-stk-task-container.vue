<template>
	<section class="mx-8" container>
		<div>
			<div class="mt-9 mb-1 flex items-center">
				<p class="text-sm uppercase" style="color:#9A9A9A">
					<b> current </b>
				</p>
				<p
					class="bg-gray-400 h-3 w-3 rounded-full flex items-center justify-center text-white p-1 ml-1"
					style="background:#9A9A9A; font-size:7px height:12px; width:12px"
				>
					i
				</p>
			</div>
			<div class="current" v-if="getCurrentItem.length">
				<drug-stk-single-task-vue
					v-for="(item, i) in getCurrentItem"
					:key="i"
					:item="item"
				/>
			</div>
			<div v-else class="text-center">
				-- No Current Task Found --
			</div>
		</div>

		<div>
			<div class="mt-9 mb-1" style="color:#9A9A9A">
				<p class="text-sm"><b> NEXT </b></p>
			</div>
			<div class="next" v-if="getNextItems.length">
				<drug-stk-single-task-vue
					v-for="(item, i) in getNextItems"
					:key="i"
					:item="item"
				/>
			</div>
			<div v-else class="text-center">
				-- No Next Task Found --
			</div>
		</div>
	</section>
</template>

<script>
import drugStkSingleTaskVue from "./drug-stk-single-task.vue";

export default {
	setup() {},
	components: {
		drugStkSingleTaskVue,
	},
	computed: {
		getCurrentItem() {
			return this.$store.getters.getCurrentTask;
		},
		getNextItems() {
			return this.$store.getters.getOtherTask;
		},
	},
};
</script>

<style scoped>
[container] {
	height: calc(100vh - 190px);
}
</style>
