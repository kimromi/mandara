export default [
  {
    path: '/',
    name: 'List',
    component: require('components/List')
  },
  {
    path: '*',
    redirect: '/'
  }
]
