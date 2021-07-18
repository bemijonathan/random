
import { createStore } from 'vuex'
import request from '../utils/request'
export default createStore({
  state: {
    Tasks: { data: [] },
    Tags: [],
    Headers: [],
    loading: false,
    currentQuery: '',
    assignees: []
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },
    setTasks(state, payload) {
      state.Tasks = payload
    },
    setTags(state, payload) {
      state.Tags = payload
    },
    addHeadersCount(state, payload) {
      console.log('setting')
      state.Headers = [
        { title: "Active Task", payload: "ACTIVE_TASK", count: payload.active, tag: 'waiting_approval in_progress in_review' },
        { title: "Completed", payload: "COMPLETE_TASK", count: payload.completed, tag: 'verify' },
        { title: "Archived", payload: "ARCHIVED_TASK", count: payload.archived, tag: 'archived' },
        { title: "Closed", payload: "CLOSED_TASK", count: payload.closed, tag: 'closed' },
      ]
    },
    setCurrentQuery(state, payload) {
      state.currentQuery = payload
    },
    setAssignees(state, payload) {
      state.assignees = payload
    }
  },
  actions: {
    async getTasks({ commit }) {
      try {
        const { data } = await request.get('/api/tasks?populate=assignee&page=1');
        console.log(data)
        commit('setTasks', data)
      } catch (error) {
        throw new Error(error.response ? error.response.message : error.message)
      }
    },
    async getTags({ commit }) {
      try {
        const { data } = await request.get('/api/tags');
        console.log(data)
        commit('setTags', data.data)
      } catch (error) {
        throw new Error(error.response ? error.response.message : error.message)
      }
    },
    async getAnalytics({ commit }) {
      try {
        const { data } = await request.get('/tasks/analytics');
        console.log(data)
        commit('addHeadersCount', data)
      } catch (error) {
        throw new Error(error.response ? error.response.message : error.message)
      }
    },
    async selectCategory({ state, commit }, payload) {
      commit('setLoading', true)
      const tags = state.Headers.find(e => e.tag.includes(payload))
      console.log(tags.tag);
      let params = '?';
      let data;
      if (tags.tag.split(" ").length > 1) {
        tags.tag.split(" ").forEach(element => {
          params += `where[status]=${element}&`
        });
        data = await (await request.get('/api/tasks??populate=assignee&page=1&status=' + params)).data
        commit("setCurrentQuery", "/api/tasks?populate=assignee&page=1&status=' + params")
      } else {
        data = await (await request.get('/api/tasks?populate=assignee&page=1&where[status]=' + tags.tag)).data
        commit("setCurrentQuery", '/api/tasks?populate=assignee&page=1&where[status]=' + tags.tag)
      }
      console.log(data)
      commit("setTasks", data)
      commit("setLoading", false)
    },
    async paginateTask({ commit }, payload) {
      debugger

      const { page, tag } = payload;

      let data;
      let params = '';

      if (tag.split(" ").length > 1) {
        tag.split(" ").forEach(element => {
          params += `where[status]=${element}&`
        });
        data = await (await request.get(`/api/tasks?populate=assignee&page=${page}&status=${params}`)).data
        commit("setCurrentQuery", `/api/tasks?populate=assignee&page=${page}&status=${params}`)
      } else {
        data = await (await request.get(`/api/tasks?populate=assignee&page=${page}&where[status]=${tag}`)).data
        commit("setCurrentQuery", '/api/tasks?populate=assignee&page=1&where[status]=' + tag)
      }
      console.log(data)
      commit("setTasks", data)
      commit("setLoading", false)
    },
    async getAssignees({ commit }) {
      try {
        const { data } = await request.get('/api/assignees');
        console.log(data)
        commit('setAssignees', data.data)
      } catch (error) {
        throw new Error(error.response ? error.response.message : error.message)
      }
    },
    deleteTasks() {

    },
    updateTasks() {

    },
    createTasks() {

    },
    addComment() {

    }
  },
  getters: {
    getCurrentTask(state) {
      console.log(state)
      return state.Tasks.data.filter(e => e.current_task)
    },
    getOtherTask(state) {
      return state.Tasks.data.filter(e => !e.current_task)
    },
  },
  modules: {

  }
})
