import image from './assets/3.jpg'

export const model = [
    {type: 'title', value: 'Конструктор сайтов на чистом JS', options: {
        tag: 'h2',
            // styles: `background: linear-gradient(to right, #ff0099, #493240); color: #fff;`
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                padding: '1.5rem',
                'text-align': 'center'
            }
        }},
    {type: 'text', value: 'here we go with some text'},
    {type: 'columns', value: [
            '11111111111',
            '22222222222',
            '3333333333333'
        ]},
    {type: 'image', value: image, options: {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
            imageStyles: {
            width: '500px',
            height: 'auto'
            },
            alt: 'this is picture'
        }}
]