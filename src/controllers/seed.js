//IMPORTAR O MODEL

const Contact = require("../models/ContactModel");

//cria um novo contato

const newContact = new Contact({
  name: "ARNSTRONIC",
  intern_contact: "Antonio Pereira Arns",
  cnpj: "24.721.937/0001-14",
  situation: "ATIVA",
  city: "URUGUAIANA",
  state: "RS",
  instagram:"https://www.instagram.com/arnstronic/",
    business_segment:
    "Agricultura de precisão, coletando imagens com excelente resolução de grandes áreas, fazemos o uso de VANTs(Veiculo Aéreo Não Tripulado) projetados por nossos engenheiros, tanto a parte mecânica estrutural e aerodinâmica do voo quanto mecanismos de eletro eletrônica e automação com os equipamentos mais modernos disponíveis no mundo, analisamos e traduzimos as imagens com exatidão a ponto de sabermos, como por exemplo e qual área merece um maior cuidado dentro de uma lavoura, seja uma drenagem, adubação ou plantio.",
});

//salva no BD

newContact.save()