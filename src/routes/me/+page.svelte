<script>
    import { auth } from '$lib/firebase';
	import { getCurrentUserEmail } from '$lib/firebase/auth';
	import { onMount } from 'svelte';
    
    onMount(() => {
        console.log(getCurrentUserEmail());
    });
</script>

{auth.currentUser?.email ?? 'No user logged in'}
<br />
<a class="button" href="/signout">Sign out</a><br />
<a class="button" href="/">Home</a>
