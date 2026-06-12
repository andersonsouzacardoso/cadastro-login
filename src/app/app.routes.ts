import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path:'',
        loadComponent:()=>
            import('./pagina/autenticar/autenticar').then(m=> m.Autenticar)
    },
    
    {
        path:'home',
        loadComponent:()=>
            import('./pagina/home/home').then(m=> m.Home)
    },
];
