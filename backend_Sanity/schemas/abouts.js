export default{
    name:'abouts',
    title:'Abouts',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            title:'imgUrl',
            name:'imgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}