<template>
	<div class="bg-red-500 fixed top-0 w-screen h-screen">
		<div class="spinner-box">
			<div class="blue-orbit leo"></div>

			<div class="green-orbit leo"></div>

			<div class="red-orbit leo"></div>

			<div class="white-orbit w1 leo"></div>
			<div class="white-orbit w2 leo"></div>
			<div class="white-orbit w3 leo"></div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
.lds-ripple {
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
}
.lds-ripple div {
	position: absolute;
	border: 4px solid #fff;
	opacity: 1;
	border-radius: 50%;
	animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
	animation-delay: -0.5s;
}
@keyframes lds-ripple {
	0% {
		top: 36px;
		left: 36px;
		width: 0;
		height: 0;
		opacity: 1;
	}
	100% {
		top: 0px;
		left: 0px;
		width: 72px;
		height: 72px;
		opacity: 0;
	}
}
</style>
