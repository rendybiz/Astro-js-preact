import {useEffect, useState} from "preact/hooks"

// fetch data
const fetchData = async ()=>{
    const response = await fetch('https://reqres.in/api/users/2')
    
    return await response.json()
}

export default function List({children}){
    const [value, setValue] = useState(null)

    useEffect(async ()=>{
        console.log("hello use effect")
        setValue(await fetchData())
    },[])
    return <div>
        {
            value && (
                <div>
                    {value.support.text}
                    </div>
            )
        }
    </div>
}

// export default List;