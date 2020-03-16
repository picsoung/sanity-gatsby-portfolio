export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e6fa9e98d7c1aa431457b9a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-cvgke6fq',
                  apiId: 'a97c78c1-1bab-4fd3-bff8-1fceffca7f71'
                },
                {
                  buildHookId: '5e6fa9f2b6f808c8baacd3a7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-545xjagb',
                  apiId: 'cb152773-6e06-41d1-a9d1-a715656ba515'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/picsoung/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-545xjagb.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
