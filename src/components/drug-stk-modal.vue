<template>
	<teleport to="body">
		<section class="fixed bg-gray-600 bg-opacity-50 h-screen w-screen top-0 ">
			<div
				class="modal w-1/3 mx-auto bg-white relative py-16"
				style="height:70vh; margin-top:10%"
			>
				<div></div>
				<div class="absolute top-0 p-2 w-full">
					<slot name="header">
						{{ title }}
					</slot>
				</div>

				<div
					class="text-sm px-2 relative"
					style="height:calc(70vh - 128px); overflow-x:scroll overflowY:hidden"
				>
					<slot name="body"> 

					</slot>
				</div>
				<div class=" absolute bottom-0 p-3 w-full">
					<slot name="footer"> </slot>
				</div>

				<div></div>
			</div>
		</section>
	</teleport>
</template>

<script>
export default {
	props: ["title"],
};
</script>

<style></style>
