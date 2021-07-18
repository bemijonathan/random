<template>
	<drug-stk-modal-vue :title="'Hello'" v-if="open">
		<template v-slot:header>
			<div>
				<h3 class="text-center pt-3">
					Add a new thing here
				</h3>
			</div>
		</template>

		<!-- <template v-slot:footer>
			<button
				class="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				@click="open = false"
			>
				Close
			</button>
			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right"
				@click="open = false"
			>
				Submit
			</button>
		</template> -->

		<template v-slot:body>
			<form>
				<div class="w-full">
					<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex">
						<div class="W-1/2">
							<div class="mb-4">
								<label
									class="block text-gray-700 text-sm font-bold mb-2"
									for="username"
								>
									title
								</label>
								<input
									class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="title"
									type="text"
									placeholder="Title"
								/>
							</div>
							<div class="mb-6">
								<label
									class="block text-gray-700 text-sm font-bold mb-2"
									for="password"
								>
									Price
								</label>
								<input
									class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
									id="price"
									type="price"
									placeholder="50.00"
								/>
							</div>
							<div class="mb-6">
								<label
									class="block text-gray-700 text-sm font-bold mb-2"
									for="password"
								>
									Priority
								</label>

								<drug-stk-checkbox-vue
									:label="'High'"
									:itemValue="false"
									@selectItem="setPriority"
								/>
							</div>
						</div>
						<div class="w-1/2">
							<div class="mb-6">
								<label
									class="block text-gray-700 text-sm font-bold mb-2"
									for="password"
								>
									Tag
								</label>
								<select
									name=""
									id=""
									class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
								>
									<option value="" disabled selected> Choose a tag </option>
									<option value="opt.id" v-for="opt in tags" :key="opt.id">
										{{ opt.name }}</option
									>
								</select>
							</div>

							<div class="mb-6">
								<label
									class="block text-gray-700 text-sm font-bold mb-2"
									for="password"
								>
									Status
								</label>
								<select
									name=""
									id=""
									class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
								>
									<option value="" disabled selected> Choose a tag </option>
									<option value="opt.id" v-for="opt in tags" :key="opt.id">
										{{ opt.name }}</option
									>
								</select>
							</div>

							<div class="mb-6">
								<label
									class="block text-gray-700 text-sm font-bold mb-2"
									for="assignee"
								>
									Assign Task To
								</label>
								<select
									name="assignee"
									id=""
									class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
								>
									<option value="" disabled selected> Choose a tag </option>
									<option
										value="opt.id"
										v-for="opt in $store.state.assignees"
										:key="opt.id"
									>
										{{ opt.name }}</option
									>
								</select>
							</div>
						</div>
					</form>
				</div>
			</form>
		</template>
	</drug-stk-modal-vue>
	<div class="logo flex items-center w-full justify-between px-4 py-5">
		<h1 class="text-2xl bold">LOGO</h1>
		<div class="">
			<button
				class="bg-blue-500 flex justify-between space-x-2 items-center  py-1 px-6 rounded-bl-full rounded-tr-full focus:outline-none rounded-br-full rounded-tl-none font-bold"
				@click="open = true"
			>
				<span class="text-sm text-white">Add New Task</span>
				<span>
					<i class="ri-add-line text-white text-lg"></i>
				</span>
			</button>
		</div>
	</div>
</template>

<script>
	import drugStkCheckboxVue from "./drug-stk-checkbox.vue";
	import drugStkModalVue from "./drug-stk-modal.vue";

	export default {
		components: {
			drugStkModalVue,
			drugStkCheckboxVue,
		},
		data() {
			return {
				open: false,
				priority: false,
				status: [
					{
						label: "Waiting Approval",
						value: "waiting_approval",
					},
					{
						label: "In Progress",
						value: "in_progress",
					},
					{
						label: "In Review",
						value: "in_review",
					},
					{
						label: "Verify",
						value: "verify",
					},
					{
						label: "Archived",
						value: "archived",
					},
					{
						label: "Closed",
						value: "closed",
					},
				],
			};
		},
		methods: {
			setPriority(value) {
				this.priority = value;
			},
		},
		computed: {
			tags() {
				return this.$store.state.Tags;
			},
		},
	};
</script>

<style scoped></style>
