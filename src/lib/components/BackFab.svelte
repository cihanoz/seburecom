<div class="fixed bottom-3 end-3 z-10">
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
        on:click|preventDefault={() => history.back()}
		href="/back"
		class="back-button btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full"
		><i data-feather="arrow-left" class="size-4"></i></a
	>
</div>
