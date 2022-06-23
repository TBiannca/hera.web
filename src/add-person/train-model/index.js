import * as faceapi from 'face-api.js'
import { loadLabeledDescriptors } from './load-labeled-descriptors'
import { actions } from '../slices/add-person'

export const trainModel = async (values, dispatch, history) => {
    const token = window.localStorage.getItem('ACCESS_TOKEN')
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models')
    await faceapi.nets.faceRecognitionNet.loadFromUri('/models')
    
    return await loadLabeledDescriptors(values)
        .then(createdPerson => {
            dispatch(actions.attempt({ token, person: [createdPerson] }))
            history.push('/persoane')
    }
    )
    
}