<script>
	import { goto } from '$app/navigation';
    import { auth } from '$lib/firebase';
    import { onMount } from 'svelte';
    onMount(() => {
		auth.signOut().then(() => {
			goto('/');
		});
	});
</script>
