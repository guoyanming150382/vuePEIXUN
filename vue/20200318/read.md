1.tag 用什么标签包裹组件
2.组件名  asdaPasda  要写成<asda-pasda></asda-pasda>
3.transition  mode="out-in",解决动画效果的错位
4.获取路由参数; to="/login?id=10"  
{{$route.query.id}}

$route  当前的路由
带id调到详情页，获取接口

获取动态参数：
path:'/login:/id' 
$route.params.id