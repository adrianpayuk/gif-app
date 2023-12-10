import { useEffect, useState } from "react"
import { getGif } from "../Helpers/getGif";

export const useFetchGif = (catergory) => {

    const [state, setstate] = useState({
        data: [],
        loading: true,
    })

    useEffect(() => {

        getGif(catergory)
            .then(img => {
                setstate({
                    data: img,
                    loading: false,
                })
            })

    }, [catergory])

   
    return (state);

}
