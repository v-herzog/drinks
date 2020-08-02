import config from '../config'

export const filterByName = (name, filter) => {
    return filter === config.EMPTY ||
        name.toLowerCase().includes(filter.toLowerCase())
}