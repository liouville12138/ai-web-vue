/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const imageRecognitionRouter = {
  path: '/image_recognition',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ImageRecognition',
  meta: {
    title: 'ImageRecognition',
    icon: 'component'
  },
  children: [
    {
      path: 'cnn',
      component: () => import('@/views/ai/image_recognition'),
      name: 'Cnn',
      meta: { title: 'Cnn' }
    },
    {
      path: 'spp_net',
      component: () => import('@/views/components-demo/tinymce'),
      name: 'SppNet',
      meta: { title: 'SppNet' }
    }
  ]
}

export default imageRecognitionRouter
