<template>
    <section class="h-screen bg-slate-300 flex justify-center items-center">
        <div class="w-screen">
            <div class="card h-screen border-2 flex flex-col justify-center items-center">
                <div class="card-bg bg-white p-4 rounded-xl shadow-xl">
                    <div class="card-header bg-water-300 border border-gray-500 flex justify-between items-center p-2">
                        <h1 class="font-bold text-lg ps-2">Listado de Inscripciones</h1>
                    </div>
                    <table class="w-full border border-gray-500 border-separate border-t-0 border-b-0 p-2">
                        <thead>
                            <tr>
                                <th class="border border-gray-500 rounded-md">ID</th>
                                <th class="border border-gray-500 rounded-md">Incripscion</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-center">
                                <td class="border border-gray-500 rounded-lg">Activo</td>
                                <td class="border border-gray-500 rounded-lg">Inactivo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>

