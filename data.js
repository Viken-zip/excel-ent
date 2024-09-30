/*
This is where u add the title, text and images for the guide.

each guide has a main title, and guide, in the guide array there can be
as many steps as u want, but each thing need to be a obj wich type 'text' or 'img'
with 'text' data has to be just plain text and with 'img' just add the path to the image.

you can se the exmaple bellow
*/

export const guideData = [
    {
        title: 'Title exmaple',
        guide: [
            {type: 'text', data: 'exmaple description'},
            {type: 'img', data: 'img/exampleImage.jpg'},
            {type: 'text', data: 'Even more text woah'},
        ]
    },
    {
        title: 'Title exmaple 2',
        guide: [
            {type: 'text', data: 'exmaple description 2'},
            {type: 'img', data: 'img/exampleImage2.jpg'}
        ]
    }
]