export default {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        
        {
            name: 'imgurl',
            title: 'ImgURL',
            type: 'image',

            options: {
                hotspot: true,
            },
       },
     ],
    }