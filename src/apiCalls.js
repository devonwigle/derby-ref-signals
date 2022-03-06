const getAllHandSignals = async () => {
  return fetch('https://derby-api.herokuapp.com/api/v1/handsignals')
    .then(response => errorCheck(response))
}

const getSingleHandSignal = async (id) => {
  return fetch(`https://derby-api.herokuapp.com/api/v1/handsignals/${id}`)
    .then(response => errorCheck(response))
}

const errorCheck = (response) => {
  if (!response.ok) {
    throw new Error('Please try again later')
  } else {
    return response.json()
  }
}

export  {getAllHandSignals, getSingleHandSignal}