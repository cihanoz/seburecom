<script>
	import DarkModeSwitch from '$lib/components/DarkModeSwitch.svelte';
	// import LtrRtlSwitch from '$lib/components/LtrRtlSwitch.svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import '../app.css';
	import { auth } from '$lib/firebase';

	onAuthStateChanged(auth, (user) => {
		console.log(user);
	});
</script>

<DarkModeSwitch />

<!-- <LtrRtlSwitch /> -->

<slot />
