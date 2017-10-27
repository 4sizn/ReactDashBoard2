import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'; //incryption, dycription library

const Schema = mongoose.Schema;

const Account = new Schema({
    username : String,
    password : String,
    created: {
        type: Date,
        default: Date.now
    }
});

//generate hash
Account.methods.generateHash = function(password){
    return bcrypt.hashSync(password, 8);
    //arrow 메소드를 사용하면 class 내 this binding 오류로 제대로 작동하지 않기 떄문에
    //그냥 일반함수형으로 작성해야 한다.
}

// compares the password
Account.methods.validateHash = function(password){
    return bcrypt.compareSync(password, this.password);
}

export default mongoose.model('account', Account);

