export const addFiles = async (id_, name_, description_, hash_) => {
  fetch('http://localhost:8082/api/addMetadata', {
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
  }).then(response => console.log(response)).catch(err => {
    throw new Error(err)
  })
}
export const deleteFiles = (id_) => {
  fetch('http://localhost:8082/api/deletemetadata/' + id_, {
    method: 'DELETE',
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Content-Type': 'application/json'
    }
  }).then(response => console.log(response)).catch(err => {
    console.log('lanzado')
    throw new Error(err)
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
