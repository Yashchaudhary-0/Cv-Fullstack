export default {
    name: 'aboutus',
    title: 'About Us',
    type: 'document',
    fields: [{
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'imgurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

    ]
}