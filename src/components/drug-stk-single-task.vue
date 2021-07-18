<template>
	<div class="bg-white flex items-center p-4 justify-between mt-3">
		<!-- {{ item }} -->
		<div class="">
			<img
				src="https://img.icons8.com/fluent/96/000000/address-book-2.png"
				class=""
			/>
		</div>
		<div>
			<h3 class="text-xl" style="max-width:248px;">
				{{ item.title }}
			</h3>
			<span class="custom px-3 py-1.5 rounded-full">
				Custom Task
			</span>
		</div>
		<div>
			<p>
				<b> N {{ item.price }} </b>
			</p>
			<p class="text-xs">Task price</p>
			<p class="text-xs"><b> Delivery: </b> within 3 days</p>
		</div>
		<div class="flex">
			<div>
				<img
					class="h-10 w-10 rounded-full"
					src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
				/>
			</div>
			<div>
				<p class="text-sm"><b> Adamu Musa </b></p>
				<p class="text-sm">Assigned to</p>
			</div>
		</div>
		<div>
			<button class="verify flex items-center justify-center">
				<div class="h-3 w-3 bg-yellow-400 rounded-full"></div>
				Verify
			</button>
		</div>
		<div>
			<img src="https://img.icons8.com/windows/32/000000/chat-message.png" />
		</div>
		<div class="">
			<div class="relative">
				<button
					@click="dropdownOpen = !dropdownOpen"
					class="relative z-10 block rounded-md bg-white p-2 focus:outline-none"
				>
					<svg
						class="h-5 w-5 text-gray-800"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
				<div
					v-if="dropdownOpen"
					class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20"
				>
					<div
						@click="dropdownOpen = false"
						class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
					>
						Update
					</div>
					<div
						@click="dropdownOpen = false"
						class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
					>
						Delete
					</div>
					<div
						@click="dropdownOpen = false"
						class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
					>
						Comment
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["item"],
	data() {
		return {
			dropdownOpen: false,
		};
	},
};
</script>

<style>
.custom {
	color: #707070;
	background: #e2e2e2;
}

.marketing {
	color: #e24b4b;
	background: #ffcccc;
}

.integrations {
	color: #00a7ff;
	background: #c4ebff;
}
</style>
