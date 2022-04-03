export default{
    name: 'workexperence',
    title: 'Work Experience',
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
                hotspot:true,
            },
        }
    ],
}