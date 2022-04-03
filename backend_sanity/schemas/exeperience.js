export default{
    name: 'experience',
    title: 'Experience',
    type: 'document',

    fields:[
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
                hotspot:true,
            },
        },
    ],
}