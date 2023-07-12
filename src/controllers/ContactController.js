const Contact = require("../models/ContactModel");

module.exports.addContact = async (req, res) => {
  try {
    const {
      name,
      cnpj,
      city,
      state,
      intern_contact,
      profession,
      business_segment,
      email,
      phone,
      address_street,
      address_number,
      district,
      zip_code,
      complement,
      site,
      plantig_culture,
      whatsapp,
      facebook,
      instagram,
      linkedin,
      specialties,
      contact_type,
      degree_relevance,
      image_url,
      observation,
      situation,
    } = req.body;

    const contactAlreadExists = await Contact.findOne({ name });

    if (!contactAlreadExists) {
      await Contact.create({
        name,
        cnpj,
        city,
        state,
        intern_contact,
        profession,
        business_segment,
        email,
        phone,
        address_street,
        address_number,
        district,
        zip_code,
        complement,
        site,
        plantig_culture,
        whatsapp,
        facebook,
        instagram,
        linkedin,
        specialties,
        contact_type,
        degree_relevance,
        image_url,
        observation,
        situation,
      });

      return res.json({ msg: "Contact add!!!" });
    } else return res.json({ msg: "Contact already exist." });
  } catch (error) {
    return res.json({ msg: "Erro ao adicionar Startup" });
  }
};


module.exports.allContacts = async(req,res)=>{

  const contacts = await Contact.find();

  return res.status(201).json(contacts)
}