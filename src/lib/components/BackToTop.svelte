<script>
	function topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
</script>

<!-- Back to top -->
<!-- svelte-ignore a11y_consider_explicit_label -->
<!-- svelte-ignore a11y_invalid_attribute -->
<a
	href="#"
	on:click={topFunction}
	id="back-to-top"
	class="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 size-9 text-center bg-green-600 text-white justify-center items-center"
	><i class="uil uil-arrow-up"></i></a
>
<!-- Back to top -->
