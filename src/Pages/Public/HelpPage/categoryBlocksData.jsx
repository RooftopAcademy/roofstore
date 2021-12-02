const categoryBlocksData =
    [
        {
            title: 'Compras',
            id: 'buys',
            items:
                [
                    {
                        title: 'Administrar y cancelar compras',
                        explication: 'Pagar, seguir envíos, modificar, reclamar o cancelar compras.',
                        to: '/'
                    },
                    {
                        title: 'Devoluciones y reembolsos',
                        explication: 'Devolver un producto o consultar por reintegros de dinero de una compra.',
                        to: '/'

                    },
                    {
                        title: 'Preguntas frecuentes sobre compras',
                        to: '/help/category'
                    }
                ],
        },

        {
            title: 'Ventas',
            id: 'sells',
            items:
                [
                    {
                        title: 'Gestionar ventas y publicaciones',
                        explication: 'Ventas, cobros, envíos, reclamos, devoluciones, publicaciones y reputación.',
                        to: '/'

                    },
                    {
                        title: 'Preguntas frecuentes sobre ventas',
                        to: '/help/category'
                    }
                ],
        },


        {
            title: 'Ayuda sobre tu cuenta',
            id: 'account',
            items:
                [
                    {
                        text: 'Configuración de mi cuenta',
                        to: '/help/category'
                    },
                    {
                        text: 'Seguridad',
                        to: '/help/category'
                    }
                ],
        },

        {
            title: 'Estos temas pueden interesarte',
            id: 'interest',
            items:
                [
                    {
                        text: '¿Comó pagar tu compra?',
                        to: '/'

                    },
                    {
                        text: 'Políticas de devolución de tus compras',
                        to: '/'

                    },
                    {
                        text: 'Recibir el producto en mi casa',
                        to: '/'
                    }
                ],
        },

    ];

export default categoryBlocksData;