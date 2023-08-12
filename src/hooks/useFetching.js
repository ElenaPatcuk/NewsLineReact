import { useState } from "react";

export const useFetching = (callback) => {
    // загрузка
    const [isLoading, setIsLoading] = useState(false)
    // обработка ошибок
    const [error, setError] = useState('')


    const fetching = async (...args) => {
        // try выполнение кода
        try{
            setIsLoading(true)
            await callback(...args)
        } //catch обработка ошибок 
        catch(e){
            setError(e.message)
        } // выполняем всегда
        finally{
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}