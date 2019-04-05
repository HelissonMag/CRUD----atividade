const root = require("express").Router();

const con = require("../controllers/authController")

const router=()=>{
    root.route("/")
        .get(con.acharTodos)
        .post(con.criar);

    root.route("/:cpf")
        .get(con.acharUm)
        .put(con.uptdUser)
        .delete(con.remover)

    return root;
}

module.exports = router;