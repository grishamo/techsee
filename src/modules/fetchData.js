import axios from "axios";

// "Privates" .......................................................
const userObjectAdapter = (data) => {
    return {
      firstName: data.firstName,
      lastName: data.lastName,
      country: data.country,
      bugs: data.bugs.map(bug => bug.title).join(', ')
    }
}

const usersDataAdapter = (data) => {
    let users = [];

    if(Array.isArray(data)) {
      users = data.map(item => userObjectAdapter(item))
    }
    else {
      users = [userObjectAdapter(data)]
    }

    return users;
} 

// Public .......................................................................
export default class UsersData {
    constructor(url){
        this.url = url;
        this.errorMsg = "Temporary error occurred, please try again later";
    }

    get(params) {
        if(!params || !params.name){
            return Promise.reject('ERROR: UserData::get -> missing parameter: name');
        }

        return new Promise((resolve, reject) => {
            axios.get(this.url + params.name)
            .then( res => {

                if(!res.data || res.data.length === 0) {
                    throw new Error(this.errorMsg);
                }

                resolve( usersDataAdapter(res.data));
            })
            .catch( err => {
                reject(new Error(this.errorMsg));
            })
        })
    }
}
