import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import "../assets/tailwind.css";
import Comment from "../pages/Comment.vue";
import FinalizeOrder from "../pages/FinalizeOrder.vue";
import Home from "../pages/Home.vue";
import ItemRegister from "../pages/ItemRegister.vue"; // Página de cadastro de itens
import Login from "../pages/Login.vue";
import ManagerHome from "../pages/ManagerHome.vue"; // Página específica para managers
import OrderHistory from "../pages/OrderHistory.vue";
import OrderStatus from "../pages/OrderStatus.vue";
import Register from "../pages/Register.vue";

// Definição das rotas
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true }, // Exige autenticação
  },
  {
    path: "/manager-home",
    name: "ManagerHome",
    component: ManagerHome,
    meta: { requiresAuth: true, role: "manager" }, // Exige autenticação e role 'manager'
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/order-history",
    name: "OrderHistory",
    component: OrderHistory,
    meta: { requiresAuth: true },
  },
  {
    path: "/comments",
    name: "Comments",
    component: Comment,
  },
  {
    path: "/finalize-order",
    name: "FinalizeOrder",
    component: FinalizeOrder,
    meta: { requiresAuth: true },
  },
  {
    path: "/order-status",
    name: "OrderStatus",
    component: OrderStatus,
    meta: { requiresAuth: true },
  },
  {
    path: "/item-register",
    name: "ItemRegister",
    component: ItemRegister,
    meta: { requiresAuth: true, role: "admin" }, // Somente admin pode acessar
  },
];

// Adicionando scrollBehavior para garantir que a página role para o topo
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Se houver uma posição salva, rola para ela (ex. após voltar com o botão de navegação)
    } else {
      return { top: 0 }; // Caso contrário, rola para o topo
    }
  },
});

// Função para obter a role do usuário
const getUserRole = async (): Promise<string | null> => {
  const token = localStorage.getItem("token");
  if (token) {
    const role = localStorage.getItem("role");
    return role || null;
  }
  return null;
};

// Verificação de autenticação e role
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const role = await getUserRole();

  if (requiresAuth) {
    if (!role) {
      return next({ path: "/login" });
    }

    if (to.meta.role === "admin" && role !== "admin") {
      return next({ path: "/" });
    }

    if (role === "admin" && to.path === "/") {
      return next({ path: "/manager-home" });
    }

    next();
  } else {
    next();
  }
});

export default router;
