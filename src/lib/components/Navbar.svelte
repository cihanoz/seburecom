<script lang="ts">
	import LoginButton from "./LoginButton.svelte";
	import Logo from "./Logo.svelte";
	import MobileToggle from "./MobileToggle.svelte";
	import NavbarDropdownImages from "./NavbarDropdownImages.svelte";
	import NavbarItemSimple from "./NavbarItemSimple.svelte";
	import globalStore from '$lib/stores/gloabalStore';

    // const navData = {
    //     label: 'Home',
    //     url: '/',
    //     columns: [
    //         {
    //             items: [
    //                 {
    //                     label: 'Hero One',
    //                     href: '/hero-one',
    //                     image: '/images/demos/hero-one.png',
    //                 },
    //                 {
    //                     label: 'Hero Two',
    //                     href: '/hero-two',
    //                     image: '/images/demos/hero-two.png',
    //                 },
    //             ]
    //         },
    //         {
    //             items: [
    //                 {
    //                     label: 'Hero Three',
    //                     href: '/hero-three',
    //                     image: '/images/demos/hero-three.png',
    //                 },
    //                 {
    //                     label: 'Hero Four',
    //                     href: '/hero-four',
    //                     image: '/images/demos/hero-four.png',
    //                 },
    //             ]
    //         },
    //         {
    //             items: [
    //                 {
    //                     label: 'Hero Five',
    //                     href: '/hero-five',
    //                     image: '/images/demos/hero-five.png',
    //                 },
    //                 {
    //                     label: 'Hero Six',
    //                     href: '/hero-six',
    //                     image: '/images/demos/hero-six.png',
    //                 },
    //             ]
    //         },
    //         {
    //             items: [
    //                 {
    //                     label: 'Hero Seven',
    //                     href: '/hero-seven',
    //                     image: '/images/demos/hero-seven.png',
    //                 },
    //                 {
    //                     label: 'Hero Eight',
    //                     href: '/hero-eight',
    //                     image: '/images/demos/hero-eight.png',
    //                 },
    //             ]
    //         },
    //         {
    //             items: [
    //                 {
    //                     label: 'Hero Nine',
    //                     href: '/hero-nine',
    //                     image: '/images/demos/hero-nine.png',
    //                 },
    //                 {
    //                     label: 'Hero Ten',
    //                     href: '/hero-ten',
    //                     image: '/images/demos/hero-ten.png',
    //                 },
    //             ]
    //         }
    //     ]
    // }

    let navbar: HTMLElement | null = null;
    let scrollY: number = 0;
    let sticky: boolean = false;
    const windowScroll = () => {
        if (navbar != null) {
            if (scrollY >= 50) {
                sticky = true;
            } else {
                sticky = false;
            }
        }
    }
</script>

<svelte:window bind:scrollY={scrollY} on:scroll={windowScroll} />

<!-- Start Navbar -->
<nav bind:this={navbar} id="topnav" class="defaultscroll" class:nav-sticky={sticky}>
    <div class="container relative">
        <Logo />

        <MobileToggle />

        <LoginButton />

        <div id="navigation" class:toggle-open={$globalStore.mobileNavOpen} class:toggle-close={!$globalStore.mobileNavOpen}>
            <!-- Navigation Menu-->   
            <ul class="navigation-menu justify-end nav-light">
                
                <!-- <NavbarDropdownImages navData={navData} /> -->
                <NavbarItemSimple href="/login" label="Login" />
                <NavbarItemSimple href="/signup" label="Signup" />
            </ul><!--end navigation menu-->
        </div><!--end navigation-->
    </div><!--end container-->
</nav><!--end header-->
<!-- End Navbar -->

<style>
    .toggle-open {
        display: block;
    }

    .toggle-close {
        display: none;
    }
</style>