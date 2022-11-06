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
                  buildHookId: '636816036d69cd0ecd1280c0',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-kbd8jkjo',
                  apiId: 'f33957cb-41f8-47bc-a08e-d3ad87814486'
                },
                {
                  buildHookId: '63681604e7f07316bc228e87',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ga4hn3hd',
                  apiId: 'e7976c4a-d4d2-4352-ba6c-1c47dbd41e53'
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
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ga4hn3hd.netlify.app', category: 'apps'}
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
