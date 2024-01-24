const getCurrentPosition = (successCallback, errorCallback) => {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
}

export default getCurrentPosition
