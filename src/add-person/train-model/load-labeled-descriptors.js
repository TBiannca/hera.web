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
    
    const person = new faceapi.LabeledFaceDescriptors(label, descriptions)
    const descriptors = JSON.stringify(person.descriptors)
    const encodedDescriptors = btoa(descriptors)
    
    const personInfo =  {
        name: label,
        role: values.role,
        descriptors: encodedDescriptors
    }
    console.log(personInfo)
    
    return personInfo
}
