const { estNonVide, estEmailValide } = require('../utils/validators');
let users =[
    {id:1, name:"ahmed", email:"ahmed@gmail.com", role:"engineer"},
    {id:2, name:"eya", email:"eya@gmail.com", role:"student"},

];

let prochainId = 3;
const getAllUsers = (req, res) => {
  const { role } = req.query;
  let resultat = users;

  if (role) {
    resultat = users.filter(a => a.role === role);
  }

  res.status(200).json({
    total: resultat.length,
    name: resultat
  });
};

const getUserById = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(a => a.id === id);

  if (!user) {
    return res.status(404).json({
      error: `User ${id} introuvable`
    });
  }

  res.status(200).json(user);
};

const createUser =(req, res) =>{
    const { name, email, role } = req.body;
    if (!estNonVide(name)) {
        return res.status(400).json({error: "Le nom est obligatoire et ne doit pas être vide"});
    }
    if (!estEmailValide(email)) {
        return res.status(400).json({error: "l'adresse mail fournie est invalide(doir contenir '@' et '.'"});
    }
    

  const nouveauUser = {
    id: prochainId++,
    name,
    email,
    role
  };

  users.push(nouveauUser);

  res.status(201).json({
    message: "User créé",
    uer: nouveauUser
  });
};

const deleteUser = (req, res) =>{
    const id = Number(req.params.id);
    const UserExiste = users.some(a => a.id === id);

  if (!UserExiste) {
    return res.status(404).json({
      error: `Impossible de supprimer : user ${id} introuvable`
    });
  }

  // On filtre pour ne garder que les users ayant un ID différent
  users = users.filter(a => a.id !== id);

  res.status(200).json({
    message: `User ${id} supprimé avec succès`
  });
};
module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser
}