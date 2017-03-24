/**
 * Created by lilinhui on 17/3/21.
 */
import App from './../js/components/App'
import Index from './../js/components/Index'

export default [
    {
        path:'/',
        component:App,
        children:[
            {
                path:'index', //起始页
                component:Index
            },
            {
                path:'books', //书
                component:r => require.ensure([],() => r(require('./../js/components/books/index')),"list"),
                children:[
                    {
                        path:'list', //列表
                        name:'listOfBooks',
                        component:r => require.ensure([],() => r(require('./../js/components/books/list')),"list")
                    }
                ]
            },
            {
                path:'*', //404
                component:Index
            }
        ]
    }
]