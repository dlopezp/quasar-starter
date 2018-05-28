
export default [
  {
    name: 'root',
    path: '/',
    component: () => import('pages/index')
  },

  {
    name: 'not-found',
    path: '/not-found',
    component: () => import('@/pages/not-found')
  },

  // State routes
  {
    name: 'draft',
    path: '/draft',
    component: () => import('@/pages/draft')
  },

  {
    name: 'paused',
    path: '/paused',
    component: () => import('@/pages/paused')
  },

  {
    name: 'ended',
    path: '/ended',
    component: () => import('@/pages/ended')
  },

  // Your routes begin here

  // Your routes end here

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
