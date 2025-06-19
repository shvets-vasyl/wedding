<template>
	<span class="btn-template p1" v-html="text" />
</template>
<script setup lang='ts'>
defineProps<{
	text: string
}>()
</script>
<style scoped lang='scss'>
.btn-template {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	width: 9.4375rem;
	height: 9.4375rem;
	border-radius: 100%;
	border: .0625rem solid rgba(#000, 0.1);
	transition: all .3s ease;

	@include mobile {
		width: 8rem;
		height: 8rem;
		border: .0625rem solid rgba(#000, 0.15);
		font-size: .875rem;
		line-height: 116%; /* 16.24px */
		letter-spacing: -0.0175rem;
	}
}

@include hover {
	.btn-template:hover {
		opacity: 0.5;
	}
}
</style>