import { Module, MutationTree, ActionTree, GetterTree } from 'vuex'
import { MutationType, RootStateInterface, FilesStateInterface } from '@/models/store'
import { initialFilesState } from './initialState'

import { FilesInterface } from '@/models/files/Files.interface'
import apiClient from '@/api-client'


export const mutations: MutationTree<FilesStateInterface> = {
  /*   loadingItems(state: ItemsStateInterface) {
        state.loading = true
    },
    loadedItems(state: ItemsStateInterface, items: ItemInterface[]) {
        state.items = items
        state.loading = false
    },
    selectItem(state: ItemsStateInterface, params: {
        id: number
        selected: boolean
    }) {
        const { id, selected } = params
        const item =  Object.values(state.items).find(o => o.id === id)
         if (item) {
            item.selected = selected
        } 
    } */
}

export const actions: ActionTree<FilesStateInterface, RootStateInterface> = {
 
    chooseFile({ commit }) {
        commit(MutationType.files.chooseFile)
        // Эмулируем обращение к какому-нибудь API-маршруту
        // длительностью в 1 секунду, который вернёт данные, используя
        // для этого JavaScript-функцию setTimeout со значением 1000 в опции миллисеку        нд
      apiClient.items.fetchItems().then((data: FilesInterface) => {
                commit(MutationType.items.loadedItems, data)
            })
        }
    }
   {

       //вызываем мутацию для определенного действия 
        commit(MutationType.items.selectItem, params)
    } 
}

export const getters: GetterTree<FilesStateInterface, RootStateInterface> = {}

// Создаём экземпляр состояния Items
const namespaced: boolean = true

const state: FilesStateInterface = initialFilesState

export const filesState: Module<FilesStateInterface, RootStateInterface> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}