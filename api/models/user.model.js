import mongoose from 'mongoose';

const userSchema = new mongoose.Schema (
    {
    username : {
        type: String,
        required: true,
        unique : true,
    },
    email : {
        type: String,
        required: true,
        unique : true,
    },
    password : {
        type: String,
        required: true,
    },
    avatar : {
        type: String,
        default: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F011%2F675%2F374%2Foriginal%2Fman-avatar-image-for-profile-png.png&f=1&nofb=1&ipt=fd97becde28824295fa9d16f6dade880c898272b97e704ca3fce203a19761124",
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;