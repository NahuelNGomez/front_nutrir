type dashCards = {
    title:string,
    redirectTo:string,
    image:string,
    background_light:string
}

export const dashboardCards:Array<dashCards> = [
    {
        title:'¡Las encuestas del día esperan tu respuesta!',
        redirectTo:'/',
        image:'/images/ui/dash/01sin fondo.png',
        background_light: "-webkit-linear-gradient(71deg, #7ef6a3 50%, #7aeea7 50%)"
    },
    {
        title:'Revisa y completa las encuestas que te faltan',
        redirectTo:'/',
        image:'/images/ui/dash/02sin fondo.png',
        background_light: "-webkit-linear-gradient(71deg, #7ec8c7 50%, #6fc2c1 50%)"
    },
    {
        title:'Ya puedes ver los balances semanales',
        redirectTo:'/',
        image:'/images/ui/dash/03sin fondo.png',
        background_light: "-webkit-linear-gradient(71deg, white 50%, #eaf6f6 50%)"
    }
];
