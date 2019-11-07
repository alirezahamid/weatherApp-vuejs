const localStoragePlugin = store => {
    // called when the store is initialized
    store.subscribe((mutation, {
        city
    }) => {
        window.localStorage.setItem('location', JSON.stringify(city))
    })
}

export default [localStoragePlugin]