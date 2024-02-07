<template>
    <section>
        <div class="w-screen sm:w-screen h-20 bg-gray-200 fixed flex justify-between px-5 shadow-xl">
            <div class="h-20 w-20 flex justify-center items-center">
                <img src="/src/assets/img/navbar/logo.png" alt="">
            </div>
            <div class="flex justify-center gap-3 items-center md:justify-end md:pr-20 font-jakarta text-xs sm:text-lg">
                <div class="md:hidden">
                    <el-dropdown>
                        <span class="el-dropdown-link flex gap-2">
                            Menu
                            <el-icon>
                                <Menu />
                            </el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <router-link :to="{ name: 'view-courses' }">
                                    <el-dropdown-item :icon="Collection">Cursos</el-dropdown-item>
                                </router-link>
                                <router-link :to="{ name: 'view-users' }">
                                    <el-dropdown-item :icon="User">Usuarios</el-dropdown-item>
                                </router-link>
                                <router-link :to="{ name: 'view-categories' }">
                                    <el-dropdown-item :icon="List">Categorias</el-dropdown-item>
                                </router-link>
                                <router-link :to="{ name: 'view-ennrollments' }">
                                    <el-dropdown-item :icon="Checked">Inscripciones</el-dropdown-item>
                                </router-link>
                                <el-dropdown class="ps-3 pt-2 pb-2">
                                    <span class="el-dropdown-link flex gap-1">
                                        <el-icon class="el-icon--right">
                                            <el-icon>
                                                <Files />
                                            </el-icon>
                                        </el-icon>
                                        Catalogos
                                        <el-icon class="el-icon--right">
                                            <arrow-down />
                                        </el-icon>
                                    </span>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                            <router-link :to="{ name: 'view-levels' }">
                                                <el-dropdown-item :icon="User">Niveles</el-dropdown-item>
                                            </router-link>
                                            <router-link :to="{ name: 'view-statuses' }">
                                                <el-dropdown-item :icon="Flag">Estados</el-dropdown-item>
                                            </router-link>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
                <div class="hidden md:block">
                    <ul
                        class="flex justify-center gap-3 items-center md:justify-end md:pr-20 font-jakarta text-xs sm:text-lg">
                        <li class="h-20 flex items-center hover:bg-cod-300 rounded-xl md:p-8">
                            <router-link :to="{ name: 'view-courses' }">
                                <a class="w-full text align-middle">Cursos</a>
                            </router-link>
                        </li>
                        <li class="h-20 flex items-center hover:bg-cod-300 rounded-xl md:p-8">
                            <router-link :to="{ name: 'view-users' }">
                                <a class="w-full text align-middle">Usuarios</a>
                            </router-link>
                        </li>
                        <li class="h-20 flex items-center hover:bg-cod-300 rounded-xl md:p-8">
                            <router-link :to="{ name: 'view-categories' }">
                                <a class=" w-full text align-middle">Categorias</a>
                            </router-link>
                        </li>
                        <li class="h-20 flex items-center hover:bg-cod-300 rounded-xl md:p-8">
                            <router-link :to="{ name: 'view-ennrollments' }">
                                <a class="w-full text align-middle">Inscripciones</a>
                            </router-link>
                        </li>
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                Catalogos
                                <el-icon class="el-icon--right">
                                    <arrow-down />
                                </el-icon>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <router-link :to="{ name: 'view-levels' }">
                                        <el-dropdown-item>Niveles</el-dropdown-item>
                                    </router-link>
                                    <router-link :to="{ name: 'view-statuses' }">
                                        <el-dropdown-item>Estados</el-dropdown-item>
                                    </router-link>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                        <!--  <li class="h-20 flex items-center hover:bg-cod-300 rounded-xl md:p-8">
                        <router-link :to="{ name: 'view-levels' }">
                            <a class="w-full text align-middle">Niveles</a>
                        </router-link>
                    </li>
                    <li class="h-20 flex items-center hover:bg-cod-300 rounded-xl md:p-8">
                        <router-link :to="{ name: 'view-statuses' }">
                            <a class="w-full text align-middle">Estados</a>
                        </router-link>
                    </li> -->
                        <li class="h-20 flex items-center hover:bg-cod-300 rounded-xl md:p-8">
                            <router-link :to="{ name: 'view-login' }">
                                <a class="w-full text align-middle">Cerrar sesión</a>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {
    ArrowDown,
    User,
    Collection,
    Checked,
    List,
    Menu,
    Files,
    Flag
} from '@element-plus/icons-vue'
</script>