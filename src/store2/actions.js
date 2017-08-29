import * as types from './types'


export default {
  refresh:({commit})=>{
    commit('refresh')
  },





  buttonClick:({commit})=>{
    commit('buttonClick')
  },
  searchFilter:({commit},res)=>{
    commit('searchFilter',res)
  },
  fenyedabao:({commit},res)=>{
    commit('fenyedabao',res)
  },
  handleDelete:({commit},res)=>{
    commit('handleDelete',res)
  },
  handleEdit:({commit},res)=>{
    commit('handleEdit',res)
  },
  getTableData:({commit},res)=>{
    commit('getTableData',res)
  },
  pop:({commit},res)=>{
    commit('pop',res)
  },
  goToPage:({commit},res)=>{
    commit('goToPage',res)
  },
  getDates:({commit},res)=>{
    commit('getDates',res)
  },
  leftblue:({commit},res)=>{
    commit('leftblue',res)
  },
  leftblue50:({commit},res)=>{
    commit('leftblue50',res)
  },





















  remove:({commit})=>{
    commit(types.REMOVE)
  },
}
