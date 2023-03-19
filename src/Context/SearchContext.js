import {createContext, useRef} from 'react'

export const SearchContext = createContext({
    ref: {},
    setSearch: () => {}
})

const datacontext = useRef(5);
console.log(typeof data)