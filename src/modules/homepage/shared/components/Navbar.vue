<template>
    <section>
        <div class="w-screen h-20 bg-gray-300 fixed flex justify-between px-5">
            <div class="h-20 w-20 flex justify-center items-center">
                <img src="/src/assets/img/navbar/logo.png" alt="">
            </div>
            <div>
                <ul class="flex justify-center gap-3 items-center md:justify-end md:pr-20 font-jakarta text-xs sm:text-lg">
                    <li class="h-20 flex items-center hover:bg-cod-300 rounded-xl md:p-8">
                        <a class="w-full" href="">Acerca de</a>
                    </li>
                    <li class="h-20 flex items-center hover:bg-cod-300 rounded-xl md:p-8">
                        <a class="w-full text align-middle" href="">Servicios</a>
                    </li>
                    <li class="h-20 flex items-center hover:bg-cod-300 rounded-xl md:p-8">
                        <a class="w-full text align-middle" href="">Membresias</a>
                    </li>
                    <li class="h-20 flex items-center hover:bg-cod-300 rounded-xl md:p-8">
                        <a class="w-full text align-middle" href="">Contactanos</a>
                    </li>
                    <li class="h-20 flex items-center hover:bg-cod-300 rounded-xl md:p-8">
                        <router-link :to="{ name: 'view-login' }">
                            <a class="w-full text align-middle" href="">Iniciar sesión</a>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>