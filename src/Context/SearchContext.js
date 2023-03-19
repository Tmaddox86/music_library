import {createContext, useRef} from 'react'

export const SearchContext = createContext({
    term: {},
    handleSearch: () => {}
})

let datacontext = useRef(5);
console.log(typeof data)