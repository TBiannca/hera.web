import * as faceapi from 'face-api.js'

export const loadLabeledDescriptors = async values => {
    const descriptions = []
    const label = values.lastName.concat(' ', values.firstName)
    
    for (let i = 0; i< values.photos.length; i++)
    {
        const imag = await faceapi.bufferToImage(values.photos[i])
        const img = new Image()
        img.src = imag.src
        const descriptors = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
        descriptions.push(descriptors.descriptor)
    }
    
    return new faceapi.LabeledFaceDescriptors(label, descriptions)
}
