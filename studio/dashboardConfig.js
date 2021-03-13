export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '604c6aadcfdb60a7bc498128',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-dfj5ocvh',
                  apiId: 'bc321e8c-07c7-4e7c-9687-1abd97787a62'
                },
                {
                  buildHookId: '604c6aaee81318bf314c0d11',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-zp4sjmuf',
                  apiId: '2b587a15-b8be-4cd7-b411-c44a9f4749f7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yenxu/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-zp4sjmuf.netlify.app', category: 'apps'}
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
