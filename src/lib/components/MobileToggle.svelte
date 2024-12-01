<script>
	function toggleMenu() {
		document.getElementById('isToggle').classList.toggle('open');
		var isOpen = document.getElementById('navigation');
		if (isOpen.style.display === 'block') {
			isOpen.style.display = 'none';
		} else {
			isOpen.style.display = 'block';
		}
	}
</script>

<!-- Start Mobile Toggle -->
<div class="menu-extras">
	<div class="menu-item">
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a class="navbar-toggle" id="isToggle" on:click={toggleMenu}>
			<div class="lines">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</a>
	</div>
</div>
<!-- End Mobile Toggle -->
