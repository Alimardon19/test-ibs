
const user = [
    {id: 1, fullName: 'Axror', email: 'axror@gmail.com', phone: 123456},
    {id: 2, fullName: 'Sharif', email: 'sharif@gmail.com', phone:123456},
    {id: 3, fullName: 'Shoxrux', email: 'shoxrux@gmail.com', phone:123456},
]

module.exports = {

    allUsers: (req, res) => {
        res.send(user)
    },

    postUsers: (req, res) => {
        const {fullName, email, phone} = req.body;
        if (fullName && email, phone) {
            let obj = {
                id:  user.length === 0 ? 1 : user[user.length - 1].id + 1,
                fullName: req.body.fullName,
                email: req.body.email,
                phone: req.body.phone
            }
            user.push(obj);
            res.status(200).send(obj);
        }else {
            return res.status(404).send(`Malumotlar to'liq yuborilmagan!!!`)
        }
    },

    putUsers: (req, res)=> {
        const result = user.find(e => e.id == req.params.id);
        if (!result) {
            return res.status(404).send("Berilgan user bazadan topilmadi")
        }
        result.fullName = req.body.fullName;
        result.email = req.body.email;
        result.phone = req.body.phone;

        res.status(200).send(result);
    },

    deleteUsers: (req, res)=> {
        const result = user.find(e => e.id == req.params.id);
        if (!result) {
            return res.status(404).send("Berilgan user bazadan topilmadi")
        }
        const userIndex = user.indexOf(result)
        user.splice(userIndex, 1);
        res.status(200).send(result);
    }
}