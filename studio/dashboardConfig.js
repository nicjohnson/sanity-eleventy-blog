export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6112db2f762b7e8427ba36b4',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-v66dmzcc',
                  apiId: 'ebadd792-3f9b-4432-a9bf-6303cddaa165'
                },
                {
                  buildHookId: '6112db2fde851d8f079b262f',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ht41ptwy',
                  apiId: '4df00fc3-28ec-402c-8121-8807e9a1d236'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicjohnson/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ht41ptwy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
