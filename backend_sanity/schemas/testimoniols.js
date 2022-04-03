export default {

    name: 'testimonios',
    title: 'Testimonios',
    type: 'document',
    fields: [{
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'comany',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'imgurl',
            title: 'ImgURL',
            type: 'image',
            option: {
                hotspot: true,
            }
        },
        {
            name: 'feedback',
            title: 'FeedBack',
            type: 'string'
        },
    ],
}