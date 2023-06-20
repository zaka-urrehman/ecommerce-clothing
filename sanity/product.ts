

export const product= {
name: "product",
type: 'document',
title : 'Product',
fields: [
    {
        name: "title",
        title:"Title",
        type:"string"
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, // maximum length for the slug
        }
    },
    {
        name: "type",
        title:"Product Type",
        type:"string"
    },
    {
        name: 'sizes',
        title: 'Size ',
        type: 'array',
        of: [{ type: 'string' }],
  
    },

    {
        name: "price",
        title:"Price",
        type:"number"
    },
    
    // {
    //     name: 'imageArray',
    //     title: 'Images',
    //     type: 'array',
    //     of: [{ type: 'image' }],
    //     options: {
    //       layout: 'grid',
    //     },
    //   },
    {
        name: 'image',
        title: 'Image',
        type: 'image',
        
      },
]

}