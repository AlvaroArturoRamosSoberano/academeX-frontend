import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home-page",
    component: () => import("@/modules/homepage/pages/LandingPage.vue")
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
      }
      /* {
        path: "courses/view/create",
        name: "view-courses-create",
        component: () =>
          import("@/modules/cruds/courses/components/CreateForm.vue")
      },
      {
        path: "courses/form/edit/:id",
        name: "form-courses-edit",
        component: () => import("@/modules/cruds/courses/components/EditForm.vue")
      } */
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
