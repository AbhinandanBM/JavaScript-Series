const { object } = require("webidl-conversions")

const User = {
    _email: 'abhi@bm.com',
    _password: '1234',

    get email(){
        return this._email.toLowerCase()
    },

    set email(value){
        this._email = value
    } 

}

const tea = Object.create(User)
console.log(tea.email);