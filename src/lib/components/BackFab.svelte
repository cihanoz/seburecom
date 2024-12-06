<script>
	import { ArrowLeftIcon } from 'svelte-feather-icons';
</script>

<div class="fixed bottom-3 end-3 z-10">
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		on:click|preventDefault={() => history.back()}
		href="/back"
		class="back-button btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full"
		><ArrowLeftIcon class="size-6" /></a
	>
</div>
