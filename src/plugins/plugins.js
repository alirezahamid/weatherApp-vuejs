const localStoragePlugin = store => {
    store.subscribe((mutation, {
        city
    }) => {
        window.localStorage.setItem('location', JSON.stringify(city));
    })
}

export default [localStoragePlugin]