export const addFiles = async (id_, name_, user_) => {
  return fetch('http://localhost:8082/api/add/metadata/', {
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
      user: user_
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
export const deleteFiles = async (id_, user_) => {
  return fetch('http://localhost:8082/api/delete/metadata/:metadata_index' + id_, {
    method: 'DELETE',
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id_,
      user: user_
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
export const updateCID = async (id_, name_, user_, newid_) => {
  fetch('http://localhost:8082/api/updateMetadata/', {
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id_,
      name: name_,
      user: user_,
      newid: newid_
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
