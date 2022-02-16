import { useEffect, useState } from "react";
import { getEmployees } from "../../api";
import styles from './Sorting.module.css';

export default function Sorting(){


    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees().then(res => {
            setEmployees(res)
        })
    },[]);

    return(
        <div className="flex flex-col">
            <div className="flex justify-center">
                <SearchBar employees={employees} setEmployees={setEmployees} />
            </div>
            <CardContainer>
                {employees.map((f) => 
                    <Card>
                        <div>
                            <div className={styles.avatar}>{f.first_name.slice(0,1)}</div>
                        </div>
                        <div>
                            {f.first_name} {f.last_name}
                        </div>
                        <div>
                            {f.email}
                        </div>
                    </Card>
                )}
            </CardContainer>
        </div>
    )
}


const Card = ({children}) => {
    return(
        <div className={styles.card}>
            <div className={styles.card_content}>
                {children}
            </div>
        </div>
    )
}



const CardContainer = ({children}) => {
    return(
        <div className={styles.card_container}>
            {children}
        </div>
    )
}

const SearchBar = ({setEmployees}) => {

    const handleChange = (e) => {
        getEmployees(e.target.value).then(res => {
            setEmployees(res)
        })
    }

    return(
        <input placeholder="Search Employees" className={styles.searchBar} onChange={(e) => handleChange(e)}/>
    )
}