const {Sequelize,DataTypes} = require('sequelize')
const path = require('path')

const sequelizeObj = new Sequelize(
    'HospitalManagement','root','password',{
        host : 'localhost',
        dialect : 'mysql',
        pool : {
            min : 0,
            max : 1,
            idle : 100,
        },
        define : {
            timestamps :false
        }
    }
)

const UserModel = require(path.join(__dirname , './../models/User'))(
    sequelizeObj,
    DataTypes
);

class UserDataAccess{
    async getUsers(req,res){
        await sequelizeObj.sync({force:false})
        let Users = await UserModel
        .findAll();
        if(Users)
        {
            return(
                res.status(200).send({value : Users})
            )
        }
        return res.status(500).send({message : 'Some Error Occur'});
    }

    async createUser(req,res){
        const data = req.body;
        await sequelizeObj.sync({force:false});
        let result = UserModel.create(data)
        if(result){
            console.log("After Adding User:- ",result)
            return (res.status(200).send({
                message : 'User Added Successfully.',
                value : result
            }))
            return res.status(500).send({message : "Some error occured while adding user. Please try again carefully"})
        }
    }
    async deleteUser(req,res){
        const id = parseInt(req.params.id);
        await sequelizeObj.sync({force:false}).then(
            ()=> UserModel.destroy({
                where : {UserId : id}
            })
            .then((data)=>{
                res.status(200).send({
                    message : 'Data deleted successfully',
                    data : data
                })
            })
            .catch(err =>{
                res.status(500).send({message : "Some error occured"})
            })
        )
    }

    
    async updateUser(req,res){
        const id = parseInt(req.params.id)
        const data = req.body;
        await sequelizeObj.sync({force:false})
        .then(()=>{
            UserModel.update({
                "UserName" : JSON.stringify(data.UserName)
            },{
                where : {UserId : id}
            })
        })
        .then(data=>{
            res.status(200).send({
                message : 'User Added Successfully.',
                data : data
            })  
        })
        .catch(err=>{
            res.status(500).send({
                message : "Some error occured."
            })
        })
    }

    async authuser(req,res){
        
        let test = req.headers.authorization.split(" ");
        console.log("Values:- " , test)
        let UserName = test[1]
        let UserId = test[0]
        console.log(`${UserName} and ${UserId}`);
        await sequelizeObj.sync({force:false})
        let Users = await UserModel
        .findOne({where : {
            'UserId' : UserId
        }});
        if(Users == null)
        {
            res.staus(202).send("No data Found")
        }
        return res.status(200).send({value : Users});
    }
}

module.exports = UserDataAccess;