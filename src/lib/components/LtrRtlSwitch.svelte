<script lang="ts">
	import globalStore from '$lib/stores/gloabalStore';

	let switcherRtl: HTMLElement | null = null;
	const changeLayout = (ev: Event) => {
		ev.preventDefault();
		const htmlTag = document.getElementsByTagName('html')[0];

		if (switcherRtl?.innerText === 'LTR') {
			htmlTag.dir = 'ltr';
		} else {
			htmlTag.dir = 'rtl';
		}
	};
</script>

<!-- LTR & RTL Mode Code -->
<div class="fixed top-[40%] -left-3 z-50">
	<!-- svelte-ignore a11y_invalid_attribute -->
	<a href="" id="switchRtl" bind:this={switcherRtl} on:click={changeLayout}>
		<span
			class="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold rtl:block ltr:hidden"
			>LTR</span
		>
		<span
			class="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold ltr:block rtl:hidden"
			>RTL</span
		>
	</a>
</div>
<!-- LTR & RTL Mode Code -->
