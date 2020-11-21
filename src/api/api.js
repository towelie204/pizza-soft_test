import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://raw.githubusercontent.com/towelie204/test_API/master/employees.json'
})

// export const employeesAPI = async () => {
//     await instance.get().then((responce) => {
//         //console.log(responce.data)
//         return responce.data;
//     });
// }

export const employeesAPI = async () => {
    try {
        await instance.get().then((data) => {
            let staff = data.data
            //console.log(staff)
            return staff;
        })
    } catch (err) {
        console.log(err)
    }
}