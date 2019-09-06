import request from 'superagent'

export const ALL_IMAGES = 'ALL_IMAGES'

const baseUrl = 'http://localhost:4000'

function allImages(images) {
  return {
    type: ALL_IMAGES,
    payload: images
  }
}

export const NEW_IMAGE = 'NEW_IMAGE'

function newImage(payload) {
  return {
    type: NEW_IMAGE,
    payload
  }
}

export const createImage = data => dispatch => {
  request
    .post(`${baseUrl}/image`)
    .send(data)
    .then(response => {
      const action = newImage(response.body)

      dispatch(action)
    })
    .catch(console.error)
}

export const getImages = () => (dispatch, getState) => {
  const state = getState()
  const { images } = state

  if (!images.length) {
    request(`${baseUrl}/image`)
      .then(response => {
        const action = allImages(response.body)

        dispatch(action)
      })
      .catch(console.error)
  }
}

export const LOGIN_USER = "LOGIN_USER"

function newLogin(jwt) {
  return {
    type: LOGIN_USER,
    payload: jwt
  }
}


export const login = (data) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => response.body.jwt)
    .then(dispatch)
    .catch(console.error)
}