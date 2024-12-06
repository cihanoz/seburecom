<script>
	import globalStore from "$lib/stores/gloabalStore";
</script>

<!-- Start Logo container-->
<a class="logo" href="/">
    <span class="inline-block">
        {#if $globalStore.darkMode} 
            <img src="/images/logo-dark.png" height="24" alt="">
        {:else}
            <img src="/images/logo-light.png" height="24" alt="">
        {/if}
    </span>
    <!-- <img src="/images/logo-light.png" height="24" class="hidden dark:inline-block" alt=""> -->
</a>
<!-- End Logo container-->