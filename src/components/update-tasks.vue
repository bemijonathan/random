<template>
	<div>
		<drug-stk-modal-vue :title="'Hello'" v-if="open">
			{{ t }}
			<template v-slot:header>
				<div>
					<h3 class="text-center pt-3">
						Update Tasks
					</h3>
				</div>
			</template>

			<template v-slot:footer>
				<button
					aria-label="button"
					class="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					@click="open = false"
				>
					Close
				</button>
				<button
					aria-label="button"
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right"
					@click="save"
				>
					Submit
				</button>
			</template>

			<template v-slot:body>
				<form>
					<div class="w-full">
						<form
							class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex justify-between w-full"
						>
							<div class="w-2/5">
								<div class="mb-4">
									<label
										class="block text-gray-700 text-sm font-bold mb-2"
										for="title"
									>
										title
									</label>
									<input
										class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="title"
										type="text"
										placeholder="Title"
										v-model="t.task.title"
									/>
								</div>
								<div class="mb-4">
									<label
										class="block text-gray-700 text-sm font-bold mb-2"
										for="price"
									>
										Price
									</label>
									<input
										class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
										id="price"
										type="price"
										placeholder="50.00"
										v-model.number="t.task.price"
									/>
								</div>
								<div class="mb-4">
									<label
										class="block text-gray-700 text-sm font-bold mb-2"
										for="priority"
									>
										Priority
									</label>

									<drug-stk-checkbox-vue
										:label="'High'"
										:itemValue="t.task.current_task"
										@selectItem="setPriority"
									/>
								</div>
							</div>
							<div class="w-2/5">
								<div class="mb-4">
									<label
										class="block text-gray-700 text-sm font-bold mb-2"
										for="tag"
									>
										Tag
									</label>
									<select
										name="tag"
										id="tag"
										class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										v-model="t.task.tag"
									>
										<option value="" disabled selected> Choose a tag </option>
										<option :value="opt.id" v-for="opt in tags" :key="opt.id">
											{{ opt.name }}</option
										>
									</select>
								</div>

								<div class="mb-4">
									<label
										class="block text-gray-700 text-sm font-bold mb-2"
										for="status"
									>
										Status
									</label>
									<select
										name="status"
										id="status"
										class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										v-model="t.task.status"
									>
										<option value="" disabled selected>
											Choose Task Status
										</option>
										<option
											:value="opt.value"
											v-for="opt in status"
											:key="opt.id"
										>
											{{ opt.label }}</option
										>
									</select>
								</div>

								<div class="mb-4">
									<label
										class="block text-gray-700 text-sm font-bold mb-2"
										for="assignee"
									>
										Assign Task To
									</label>
									<select
										name="assignee"
										id=""
										class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										v-model="t.task.assignee.name"
									>
										<option value="" disabled selected> Assign Task To </option>
										<option
											:value="opt.id"
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
	</div>
</template>

<script>
	import drugStkCheckboxVue from "./drug-stk-checkbox.vue";
	import drugStkModalVue from "./drug-stk-modal.vue";
	import request from "../utils/request";
	import { ref } from "@vue/reactivity";

	export default {
		props: ["task"],
		setup(props) {
			const t = ref(props);

			return {
				t,
			};
		},
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
				title: "",
				price: "",
				tag: "",
				assignee: "",
				status_id: "",
			};
		},
		methods: {
			setPriority(value) {
				this.priority = value;
			},
			async save() {
				try {
					const data = {
						title: this.title,
						price: this.price,
						tag: this.tag,
						assignee: this.assignee,
						current_task: true,
						status: this.status_id,
					};
					await request.post("/api/tasks", data);
					await this.$store.dispatch("getTasks");
					await this.$store.dispatch("getAnalytics"), (this.open = false);
				} catch (error) {
					console.log(error);
				}
			},
		},
		computed: {
			tags() {
				return this.$store.state.Tags;
			},
		},
	};
</script>
