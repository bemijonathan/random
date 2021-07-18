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
		<div class="flex">
			<div
				v-for="i in 3"
				:key="i + 'sdfsdfd'"
				class="h-1 w-1 bg-gray-500 rounded-full"
				style="margin:0.8px"
			></div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["item"],
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
