export default class Account{
    id;
    user;
    password;
    email;
    constructor(id, user, password,email){
        this.id = id;
        this.user = user;
        this.password = password;
        this.email = email;
    }
}