import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import {reset as resetForm,initialize} from 'redux-form'
import {showTabs,selectTab }from '../common/tab/tabActions'
import {loading} from '../main/appActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {}


export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    
    return dispatch => {
        dispatch(loading(true))
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                dispatch(loading(false)),
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
    
}

export function showUpdate(billingCycle) {
    return [
        showTabs('tabList','tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}
