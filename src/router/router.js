import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home-page",
    component: () => import("@/modules/homepage/pages/LandingPage.vue")
  },
  {
    path: "/login",
    name: "view-login",
    component: () => import("@/modules/homepage/pages/LoginPage.vue")
  },
  {
    path: "/register",
    name: "view-register",
    component: () => import("@/modules/homepage/pages/RegisterPage.vue")
  },
  {
    path: "/admin",
    name: "admin-panel",
    component: () => import("@/modules/cruds/shared/pages/AdminView.vue"),
    children: [
      //Rutas Cursos
      {
        path: "courses",
        name: "view-courses",
        component: () => import("@/modules/cruds/courses/components/Table.vue")
      },
       {
        path: "courses/view/create",
        name: "view-courses-create",
        component: () =>
          import("@/modules/cruds/courses/components/Form.vue")
      },
      {
        path: "courses/form/edit/:id",
        name: "view-courses-edit",
        component: () => import("@/modules/cruds/courses/components/Form.vue")
      },
      //Rutas Usuarios
      {
        path: "users",
        name: "view-users",
        component: () => import("@/modules/cruds/users/components/Table.vue")
      },
      //Rutas Categorias
      {
        path: "categories",
        name: "view-categories",
        component: () =>
          import("@/modules/cruds/categories/components/Table.vue")
      },
      //Rutas Niveles
      {
        path: "levels",
        name: "view-levels",
        component: () => import("@/modules/cruds/levels/components/Table.vue")
      },
      //Rutas Niveles
      {
        path: "statuses",
        name: "view-statuses",
        component: () => import("@/modules/cruds/statuses/components/Table.vue")
      },
      //Rutas Inscripciones
      {
        path: "ennrollments",
        name: "view-ennrollments",
        component: () =>
          import("@/modules/cruds/ennrollments/components/Table.vue")
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: import("@/modules/shared/pages/NoPagesFound.vue")
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
