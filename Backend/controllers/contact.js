const { response } = require("express");
const Contact = require("../models/contact");

const contact = async (req, res = response) => {

    const { name, email, message } = req.body;

    try{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                ok: false,
                msg: 'Formato de correo electrónico no válido',
            });
        }

        // Verificar si el email ya existe en la base de datos
        const existingContact = await Contact.findOne({ email });
        if (existingContact) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo electrónico ya está registrado',
            });
        }
        const contact = new Contact({ name, email, message });
        await contact.save();
        res.status(200).json({
            ok: true,
            contact
        });
    
    } catch (error) {
        console.error('Error en el servidor:', error);
        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor'
        });
    }

  };

  
module.exports = {
    contact
}