<template>
	<div class=" flex justify-between bg-white py-3">
        <div class="">        
            <input type="search" placeholder="Search Keyword" class="border-none focus:outline-none w-full text-2xl py-3"/>
        </div>
		<div class="flex items-center justify-center border-l border-1 " style="border-color:#6F7070">
			<div class="ml-8"> Sort by </div>
			<div class="sort-bars ml-3">
				<div v-for="i in 3" :key="i + '3%$%'" class="mt-1"> </div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
    .sort-bars div{
        height: 2px;
        background: #6F7070;
    }

    .sort-bars div:first-of-type{
        width:26px;
    }
    .sort-bars div:nth-of-type(2){
        width: 18px;
    }
    .sort-bars div:nth-of-type(3){
        width: 11px;
    }
    
</style>
