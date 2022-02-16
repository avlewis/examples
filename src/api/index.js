import data from './dummyData.json';

export const getEmployees = async (query) => {
    if(query){
        return Promise.resolve(data.employees.filter(i => 
            i.first_name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) | i.last_name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
            
            ))
    }
    return Promise.resolve(data.employees);
}