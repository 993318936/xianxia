/**
 * Created by lilinhui on 17/3/21.
 */
import App from './../js/components/App'

export default [
    {
        path:'/',
        component:App,
        children:[
            {
                path:'index', //起始页
                component:r => require.ensure([],() => r(require('./../js/components/Index')),"index")
            }
            // {
            //     path:'user', //个人中心
            //     component:r => require.ensure([],() => r(require('./../js/components/user/user')),"user"),
            //     children:[
            //         {
            //             path:'list', //个人中心
            //             name:'usList',
            //             component:r => require.ensure([],() => r(require('./../js/components/user/list')),"user")
            //         },
            //         {
            //             path:'projects', //我的筹款
            //             name:'projects',
            //             component:r => require.ensure([],() => r(require('./../js/components/user/projects')),"user")
            //         },
            //         {
            //             path:'supports', //我的支持
            //             component:r => require.ensure([],() => r(require('./../js/components/user/supports')),"user")
            //         }
            //     ]
            // },
            // {
            //     path:'*', //404
            //     component:r => require.ensure([],() => r(require('./../js/components/start')),"user")
            // }
        ]
    }
]