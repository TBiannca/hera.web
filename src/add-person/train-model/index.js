import * as faceapi from 'face-api.js'
import { loadLabeledDescriptors } from './load-labeled-descriptors'

export const trainModel = async values => {
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models')
    await faceapi.nets.faceRecognitionNet.loadFromUri('/models')

    const labeledFaceDescriptors = await loadLabeledDescriptors(values)
    console.log(labeledFaceDescriptors)
}