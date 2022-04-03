export default{
    name: 'brands',
    title: 'Brands',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'imgurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true,
            },
        }
    ],
}