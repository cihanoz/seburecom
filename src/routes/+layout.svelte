<script>
	import DarkModeSwitch from '$lib/components/DarkModeSwitch.svelte';
	// import LtrRtlSwitch from '$lib/components/LtrRtlSwitch.svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import '../app.css';
	import { auth } from '$lib/firebase';
	import Loader from '$lib/components/Loader.svelte';
	import { onMount } from 'svelte';
	import { hideLoader } from '$lib/helpers/loader';
	import { FeatherIcon } from 'svelte-feather-icons';

	let firebaseInitialized = false;

	onAuthStateChanged(auth, (user) => {
		if (!firebaseInitialized) {
			firebaseInitialized = true;
		}
	});
</script>

{#if firebaseInitialized}
	<DarkModeSwitch />
	<!-- <LtrRtlSwitch /> -->
	<slot />
{:else}
	<Loader />
{/if}

