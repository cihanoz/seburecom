<script>
    import { auth } from '$lib/firebase';
</script>

{auth.currentUser?.email ?? 'No user logged in'}
<br />
<a class="button" href="/signout">Sign out</a>
