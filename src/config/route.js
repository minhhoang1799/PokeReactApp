import APP from "../views/pages/index"

export default [
    {
        key: "PokeDex",
        name: "PokeDex",
        exact: true,
        path: "/",
        component: APP.Home,
        private: false,
    },
    {
        key: "PokeDex",
        name: "PokeDex",
        exact: true,
        path: "/detail",
        component: APP.Detail,
        private: false,
    },
    
    { key: "ErrorPage", component: APP.Error },
];