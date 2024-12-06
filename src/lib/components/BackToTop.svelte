<script>
	import { ArrowUpIcon } from "svelte-feather-icons";

	function topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
</script>

<!-- Back to top -->
<button
	on:click={topFunction}
	id="back-to-top"
	class="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 size-9 text-center bg-green-600 text-white justify-center items-center"
	><ArrowUpIcon class="size-6" /></button
>
<!-- Back to top -->
