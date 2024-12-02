<script lang="ts">
    import type { NavbarDropdownMultipleData } from '$lib/models/NavbarDropdownMultipleType';
    export let navData: NavbarDropdownMultipleData;
</script>

<li class="has-submenu parent-parent-menu-item">
    <!-- svelte-ignore a11y_invalid_attribute -->
    <a href="#">Pages</a><span class="menu-arrow"></span>
    <ul class="submenu">
        <li><a href="aboutus.html" class="sub-menu-item">About Us</a></li>
        <li><a href="features.html" class="sub-menu-item">Featues</a></li>
        <li><a href="pricing.html" class="sub-menu-item">Pricing</a></li>
        <li><a href="faqs.html" class="sub-menu-item">Faqs</a></li>
        <!-- svelte-ignore a11y_invalid_attribute -->
        <li class="has-submenu parent-menu-item"><a href="#"> Agents</a><span class="submenu-arrow"></span>
            <ul class="submenu">
                <li><a href="agents.html" class="sub-menu-item">Agents</a></li>
                <li><a href="agent-profile.html" class="sub-menu-item">Agent Profile</a></li>
            </ul>  
        </li>
        <!-- svelte-ignore a11y_invalid_attribute -->
        <li class="has-submenu parent-menu-item"><a href="#"> Agencies</a><span class="submenu-arrow"></span>
            <ul class="submenu">
                <li><a href="agencies.html" class="sub-menu-item">Agencies</a></li>
                <li><a href="agency-profile.html" class="sub-menu-item">Agency Profile</a></li>
            </ul>  
        </li>
        <!-- svelte-ignore a11y_invalid_attribute -->
        <li class="has-submenu parent-menu-item"><a href="#"> Auth Pages </a><span class="submenu-arrow"></span>
            <ul class="submenu">
                <li><a href="auth-login.html" class="sub-menu-item">Login</a></li>
                <li><a href="auth-signup.html" class="sub-menu-item">Signup</a></li>
                <li><a href="auth-re-password.html" class="sub-menu-item">Reset Password</a></li>
            </ul>  
        </li>
        <!-- svelte-ignore a11y_invalid_attribute -->
        <li class="has-submenu parent-menu-item"><a href="#"> Utility </a><span class="submenu-arrow"></span>
            <ul class="submenu">
                <li><a href="terms.html" class="sub-menu-item">Terms of Services</a></li>
                <li><a href="privacy.html" class="sub-menu-item">Privacy Policy</a></li>
            </ul>  
        </li>
        <!-- svelte-ignore a11y_invalid_attribute -->
        <li class="has-submenu parent-menu-item"><a href="#"> Blog </a><span class="submenu-arrow"></span>
            <ul class="submenu">
                <li><a href="blogs.html" class="sub-menu-item"> Blogs</a></li>
                <li><a href="blog-sidebar.html" class="sub-menu-item"> Blog Sidebar</a></li>
                <li><a href="blog-detail.html" class="sub-menu-item"> Blog Detail</a></li>
            </ul> 
        </li>
        <!-- svelte-ignore a11y_invalid_attribute -->
        <li class="has-submenu parent-menu-item"><a href="#"> Special </a><span class="submenu-arrow"></span>
            <ul class="submenu">
                <li><a href="comingsoon.html" class="sub-menu-item">Comingsoon</a></li>
                <li><a href="maintenance.html" class="sub-menu-item">Maintenance</a></li>
                <li><a href="404.html" class="sub-menu-item">404! Error</a></li>
            </ul>  
        </li>
    </ul>
</li>