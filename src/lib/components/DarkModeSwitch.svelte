<script lang="ts">
	import globalStore from "$lib/stores/gloabalStore";

    const changeTheme = (ev: Event) => {
        ev.preventDefault();
        const htmlTag = document.getElementsByTagName("html")[0]
        
        if (htmlTag.className.includes("dark")) {
            htmlTag.className = 'light'
        } else {
            htmlTag.className = 'dark'
        }
    }
    
</script>
<!-- Switcher -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="fixed top-1/4 -left-2 z-3">
    <span class="relative inline-block rotate-90" on:click={changeTheme}>
        <input type="checkbox" class="checkbox opacity-0 absolute" id="chk" bind:checked={$globalStore.darkMode}/>
        <label class="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-700 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" for="chk">
            <i class="uil uil-moon text-[20px] text-yellow-500 mt-1"></i>
            <i class="uil uil-sun text-[20px] text-yellow-500 mt-1"></i>
            <span class="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] start-[2px] size-7"></span>
        </label>
    </span>
</div>
<!-- Switcher -->