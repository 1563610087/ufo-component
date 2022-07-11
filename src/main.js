import HelloWorld from './components/HelloWorld/index'


const components=[
  HelloWorld
]
//33

const install=function(vue) {
  components.forEach(component =>{
    vue.component(component.name, component)
  })
}

export default {
  HelloWorld,
  install
}
