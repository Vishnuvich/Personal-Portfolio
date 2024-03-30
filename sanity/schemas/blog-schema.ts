export const CATEGORY_OPTIONS = [
    {
        title: 'Development',
        value: 'development'
    },
    {
        title: 'Front end',
        value: 'frontend'
    },
    {
        title: 'New Technology',
        value: 'new_technology'
    }
]

const blogData = {
    name: 'Blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'category',
            title: 'Category',
            type:'string',
            options: {
                list: CATEGORY_OPTIONS.map(({title, value}) => ({title, value})),
                layout: 'dropdown'
            }
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'}]
        }
    ]
}
export default blogData;
