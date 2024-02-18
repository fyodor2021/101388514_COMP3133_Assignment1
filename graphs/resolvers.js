const UserModel = require('../model/User.js')
const EmployeeModel = require('../model/Employee.js')
const resolvers = {
    Query:{
        login: async  (_, {email,username, password}) => {
            const queryFields = email ? {email,password} : {username,password}
            const user = await UserModel.findOne(queryFields);
            if(user.password === password){
                return user;
            }
            return "user was not found";
        },
        getAllEmployees: async () => {
            return await EmployeeModel.find();
        },
        getEmployeeById: async (_, _id) => {
            return await EmployeeModel.findOne({_id})
        }
    },
    Mutation:{
        signup: async (_,{input}) => {
            const user = new UserModel(input);
            console.log(input)
            await user.save();
            return "user was created successfully"
        },
        addNewEmployee: async (_, {input}) => {
            const employee = new EmployeeModel(input);
            employee.save();
            return employee;
        },
        updateEmployeeById : async (_, {_id,input}) => {
            return await EmployeeModel.findOneAndUpdate({ _id }, input, { new: true })
            .then((updatedEmployee) => {
              if (updatedEmployee) {
                return updatedEmployee;
              } else {
                throw new Error("Employee not found");
              }
            })

        },
        deleteEmployeeById: (_, {_id}) => {
            return EmployeeModel.findOneAndDelete(_id)
            .then(res => {
                if(res){
                    return "employee deleted successfully"
                }else{
                    return "emp not found"
                }
            }).catch(err => {
                return "error deleting emp"
            })
        }
    }
}
module.exports = resolvers