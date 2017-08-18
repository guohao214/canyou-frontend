/**
 * Created by GuoHao on 2017/8/14.
 */
export default [
  {
    path: '/home',
    component: resolve => require(['../components/common/Home.vue'], resolve),
    children: [
      {
        path: '/readme',
        component: resolve => require(['../components/pages/Readme.vue'], resolve)
      },
      {
        path: '/basetable',
        component: resolve => require(['../components/pages/BaseTable.vue'], resolve)
      },
      {
        path: '/vuetable',
        component: resolve => require(['../components/pages/VueTable.vue'], resolve)     // vue-datasource组件
      },
      {
        path: '/baseform',
        component: resolve => require(['../components/pages/BaseForm.vue'], resolve)
      },
      {
        path: '/vueeditor',
        component: resolve => require(['../components/pages/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
      },
      {
        path: '/markdown',
        component: resolve => require(['../components/pages/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
      },
      {
        path: '/upload',
        component: resolve => require(['../components/pages/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
      },
      {
        path: '/basecharts',
        component: resolve => require(['../components/pages/BaseCharts.vue'], resolve)   // vue-schart组件
      },
      {
        path: '/drag',
        component: resolve => require(['../components/pages/DragList.vue'], resolve)    // 拖拽列表组件
      },
      {
        path: '/preferences',
          component: resolve => require(['../components/pages/preferences/preferences.vue'], resolve)    // 拖拽列表组件
      },
      {
        path: '/account',
        component: resolve => require(['../components/pages/account/index.vue'], resolve)    // 账号管理
      },
    ]
  }
]
