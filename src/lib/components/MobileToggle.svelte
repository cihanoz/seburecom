<script>
	import globalStore from '$lib/stores/gloabalStore';

	function toggleMenu() {
		$globalStore.mobileNavOpen = !$globalStore.mobileNavOpen;
		console.log($globalStore.mobileNavOpen);
	}
</script>

<!-- Start Mobile Toggle -->
<div class="menu-extras">
	<div class="menu-item">
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button class="navbar-toggle" id="isToggle" class:open={$globalStore.mobileNavOpen} on:click={toggleMenu}>
			<div class="lines">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</button>
	</div>
</div>
<!-- End Mobile Toggle -->
