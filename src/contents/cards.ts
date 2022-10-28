type dashCards = {
    title:string,
    redirectTo:string,
    image:string
}

export const dashboardCards:Array<dashCards> = [
    {
        title:'¡Las encuestas del día esperan tu respuesta!',
        redirectTo:'/',
        image:'/images/ui/dash/01.png'
    },
    {
        title:'Revisa y completa las encuestas que te faltan',
        redirectTo:'/',
        image:'/images/ui/dash/02.png'
    },
    {
        title:'Ya puedes ver los balances semanales',
        redirectTo:'/',
        image:'/images/ui/dash/03.png'
    }
];
