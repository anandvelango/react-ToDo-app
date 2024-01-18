import { useEffect, useState } from "react"

function getSavedValue(key: string, initialValue: any){
    const savedValue = localStorage.getItem(key)
    if (savedValue) return JSON.parse(savedValue)

    if (initialValue instanceof Function) return initialValue()
    return initialValue
}

export default function useLocalstorage(key: string, initialValue: any){
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}