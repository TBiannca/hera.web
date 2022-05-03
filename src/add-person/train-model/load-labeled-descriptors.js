import * as faceapi from 'face-api.js'

export const loadLabeledDescriptors = async values => {
    const descriptions = []
    console.log('values', values)
    
    for (let i = 0; i< values.photos.length; i++)
    {
        const imag = await faceapi.bufferToImage(values.photos[i])
        const img = new Image()
        img.src = imag.src
        const descriptors = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
        descriptions.push(descriptors.descriptor)
    }
    
    return new faceapi.LabeledFaceDescriptors(values.label, descriptions)
}
