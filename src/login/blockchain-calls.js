export const addFiles = (id_, name_, description_, hash_) => {
  return fetch('http://localhost:8082/api/addMetadata', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id_,
      name: name_,
      descripcion: description_,
      hash: hash_
    })
  }).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK')
    }
    return response.blob()
  }).catch((error) => {
    console.error('There has been a problem with your fetch operation:', error)
    return 'error'
  })
}
export const deleteFiles = async (id_) => {
  return fetch('http://localhost:8082/api/deletemetadata/' + id_, {
    method: 'DELETE',
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Content-Type': 'application/json'
    }
  }).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK')
    }
    return response.blob()
  }).catch((error) => {
    console.error('There has been a problem with your fetch operation:', error)
    return 'error'
  })
}
// export const updateCID = async (hash_) => {
//   fetch('http://localhost:8082/api/deletemetada/' + id_, {
//     method: 'GET',
//     headers: {
//       'Access-Control-Allow-Headers': '*',
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': '*',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       parameterFour: hash_
//     })
//   }).then(response => console.log(response)).catch(err => {
//     throw new Error(err)
//   })
// }
