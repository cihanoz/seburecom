<script>
	import BackToTop from "$lib/components/BackToTop.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import Slider from "$lib/components/Slider.svelte";
	import Triplets from "$lib/components/Triplets.svelte";

</script>

        
        <Navbar />

        <Hero />

        <!-- Start -->
        <section class="relative lg:py-24 py-16">
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div class="md:col-span-5">
                        <div class="relative">
                            <img src="/images/about.jpg" class="rounded-xl shadow-md" alt="">
                            <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <!-- svelte-ignore a11y_consider_explicit_label -->
                                <a href="#!" data-type="youtube" data-id="yba7hPeTSjk"
                                    class="lightbox size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-green-600">
                                    <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </a>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="md:col-span-7">
                        <div class="lg:ms-4">
                            <h4 class="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">Efficiency. Transparency. <br> Control.</h4>
                            <p class="text-slate-400 max-w-xl">Hously developed a platform for the Real Estate marketplace that allows buyers and sellers to easily execute a transaction on their own. The platform drives efficiency, cost transparency and control into the hands of the consumers. Hously is Real Estate Redefined.</p>
                            
                            <div class="mt-4">
                                <!-- svelte-ignore a11y_invalid_attribute -->
                                <a href="" class="btn bg-green-600 hover:bg-green-700 text-white rounded-md mt-3">Learn More </a>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end grid-->
            </div><!--end container-->

            <Triplets />

            <Slider />
        </section><!--end section-->

        <!-- Start CTA -->
        <section class="relative py-24 bg-[url('/images/bg/01.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div class="absolute inset-0 bg-black/60"></div>
            <div class="container relative">
                <div class="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                    <div class="lg:col-start-2 lg:col-span-10">
                        <div class="grid md:grid-cols-3 grid-cols-1 items-center">
                            
                            <div class="counter-box text-center">
                                <h1 class="text-white lg:text-5xl text-4xl font-semibold mb-2"><span class="counter-value" data-target="1548">1010</span>+</h1>
                                <h5 class="counter-head text-white text-lg font-medium">Properties Sell</h5>
                            </div><!--end counter box-->
        
                            
                            <div class="counter-box text-center">
                                <h1 class="text-white lg:text-5xl text-4xl font-semibold mb-2"><span class="counter-value" data-target="25">2</span>+</h1>
                                <h5 class="counter-head text-white text-lg font-medium">Award Gained</h5>
                            </div><!--end counter box-->
        
                            
                            <div class="counter-box text-center">
                                <h1 class="text-white lg:text-5xl text-4xl font-semibold mb-2"><span class="counter-value" data-target="9">0</span>+</h1>
                                <h5 class="counter-head text-white text-lg font-medium">Years Experience</h5>
                            </div><!--end counter box-->
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End CTA -->

        <!-- Business Partner -->
        <section class="pt-10">
            <div class="container relative">
                <div class="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
                    <div class="mx-auto py-4">
                        <img src="/images/client/amazon.svg" class="h-6" alt="">
                    </div>

                    <div class="mx-auto py-4">
                        <img src="/images/client/google.svg" class="h-6" alt="">
                    </div>
                    
                    <div class="mx-auto py-4">
                        <img src="/images/client/lenovo.svg" class="h-6" alt="">
                    </div>
                    
                    <div class="mx-auto py-4">
                        <img src="/images/client/paypal.svg" class="h-6" alt="">
                    </div>
                    
                    <div class="mx-auto py-4">
                        <img src="/images/client/shopify.svg" class="h-6" alt="">
                    </div>
                    
                    <div class="mx-auto py-4">
                        <img src="/images/client/spotify.svg" class="h-6" alt="">
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- Business Partner -->

        <section class="relative lg:py-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Our Client Say ?</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                </div><!--end grid-->

                <div class="flex justify-center relative mt-8">
                    <div class="relative w-full">
                        <div class="tiny-three-item">
                            <div class="tiny-slide">
                                <div class="text-center mx-3">
                                    <p class="text-lg text-slate-400 italic"> " Hously made the processes so easy. Hously instantly increased the amount of interest and ultimately saved us over $10,000. " </p>

                                    <div class="text-center mt-5">
                                        <ul class="text-xl font-medium text-amber-400 list-none mb-2">
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                        </ul>

                                        <img src="/images/client/01.jpg" class="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt="">
                                        <h6 class="mt-2 fw-semibold">Christa Smith</h6>
                                        <span class="text-slate-400 text-sm">Manager</span>
                                    </div>
                                </div>
                            </div>

                            <div class="tiny-slide">
                                <div class="text-center mx-3">
                                    <p class="text-lg text-slate-400 italic"> " I highly recommend Hously as the new way to sell your home "by owner". My home sold in 24 hours for the asking price. Best $400 you could spend to sell your home. " </p>

                                    <div class="text-center mt-5">
                                        <ul class="text-xl font-medium text-amber-400 list-none mb-2">
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                        </ul>

                                        <img src="/images/client/02.jpg" class="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt="">
                                        <h6 class="mt-2 fw-semibold">Christa Smith</h6>
                                        <span class="text-slate-400 text-sm">Manager</span>
                                    </div>
                                </div>
                            </div>

                            <div class="tiny-slide">
                                <div class="text-center mx-3">
                                    <p class="text-lg text-slate-400 italic"> " My favorite part about selling my home myself was that we got to meet and get to know the people personally. This made it so much more enjoyable! " </p>

                                    <div class="text-center mt-5">
                                        <ul class="text-xl font-medium text-amber-400 list-none mb-2">
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                        </ul>

                                        <img src="/images/client/03.jpg" class="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt="">
                                        <h6 class="mt-2 fw-semibold">Christa Smith</h6>
                                        <span class="text-slate-400 text-sm">Manager</span>
                                    </div>
                                </div>
                            </div>

                            <div class="tiny-slide">
                                <div class="text-center mx-3">
                                    <p class="text-lg text-slate-400 italic"> " Great experience all around! Easy to use and efficient. " </p>

                                    <div class="text-center mt-5">
                                        <ul class="text-xl font-medium text-amber-400 list-none mb-2">
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                        </ul>

                                        <img src="/images/client/04.jpg" class="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt="">
                                        <h6 class="mt-2 fw-semibold">Christa Smith</h6>
                                        <span class="text-slate-400 text-sm">Manager</span>
                                    </div>
                                </div>
                            </div>

                            <div class="tiny-slide">
                                <div class="text-center mx-3">
                                    <p class="text-lg text-slate-400 italic"> " Hously made selling my home easy and stress free. They went above and beyond what is expected. " </p>

                                    <div class="text-center mt-5">
                                        <ul class="text-xl font-medium text-amber-400 list-none mb-2">
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                        </ul>

                                        <img src="/images/client/05.jpg" class="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt="">
                                        <h6 class="mt-2 fw-semibold">Christa Smith</h6>
                                        <span class="text-slate-400 text-sm">Manager</span>
                                    </div>
                                </div>
                            </div>

                            <div class="tiny-slide">
                                <div class="text-center mx-3">
                                    <p class="text-lg text-slate-400 italic"> " Hously is fair priced, quick to respond, and easy to use. I highly recommend their services! " </p>

                                    <div class="text-center mt-5">
                                        <ul class="text-xl font-medium text-amber-400 list-none mb-2">
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                        </ul>

                                        <img src="/images/client/06.jpg" class="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt="">
                                        <h6 class="mt-2 fw-semibold">Christa Smith</h6>
                                        <span class="text-slate-400 text-sm">Manager</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->

            <div class="container relative lg:mt-24 mt-16">
                <div class="grid grid-cols-1 text-center">
                    <h3 class="mb-6 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Have Question ? Get in touch!</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                
                    <div class="mt-6">
                        <a href="contact.html" class="btn bg-green-600 hover:bg-green-700 text-white rounded-md"><i class="uil uil-phone align-middle me-2"></i> Contact us</a>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->

        <Footer />

        <BackToTop />