export function newUser(req, res){
    const {username, password} = req.body;
    res.send({ message: "A new User was added", username,password });
}

export function loginUser(req, res){
    //create a cookie Admin
    const {username, password} = req.body;
    if(username && password){
        res.cookie('role',{role:'admin'}, {maxAge:9939394949, httpOnly:true}).send({ message: "A User was logged", username,password });
    }
    res.send({login:true})
}

export const adminPanel = (req, res)=>{
    res.send({adminPanel:true, message:'Salio todo perfecto'})
}