<script lang="ts">
    import type { NavbarDropdownImageData } from '$lib/models/NavbarDropdownType';
    export let navData: NavbarDropdownImageData;
</script>
<li class="has-submenu parent-parent-menu-item">
    <!-- svelte-ignore a11y_invalid_attribute -->
    <a href={navData.url ?? '#'}>{navData.label}</a><span class="menu-arrow"></span>

    <ul class="submenu megamenu">
        {#each navData.columns as column}
        <li>
            <ul>
            {#each column.items as item}
                <li>
                    <a href={item.href} class="sub-menu-item">
                        <div class="lg:text-center">
                        <span class="none lg:block"><img src={item.image} class="img-fluid rounded shadow-md" alt=""></span>
                        <span class="lg:mt-2 block">{item.label}</span>
                    </div>
                    </a>
                </li>
                {/each}
            </ul>
        </li>
        {/each}
    </ul>
</li>