import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store1=new Vuex.Store({
	modules:{
		moduleA,
		moduleB,
		moduleC
	}
})

moduleA={
	state:{
		name:"第一"
	}
}

moduleB={
	state:{
		name:"第儿"
	}
}

moduleB={
	state:{
		name:"第3"
	}
}

export default store1