const propiedadesAlquiler = [
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://e1.pxfuel.com/desktop-wallpaper/437/681/desktop-wallpaper-a-modern-house-i-designed-minecraft-modern-house.jpg",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 6,
    banos: 4,
    costo: 9000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://e1.pxfuel.com/desktop-wallpaper/7/829/desktop-wallpaper-40-best-minecraft-house-ideas-and-designs-for-1-19-minecraft-modern-house.jpg",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "0 456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 4,
    banos: 4,
    costo: 7000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://i.pinimg.com/1200x/e4/93/3c/e4933cae4e7b260551db6a25bca4bb00.jpg",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo",
    ubicacion: "© 123 Main Street, Anytown, CA 91234",
    habitaciones: 3,
    banos: 3,
    costo: 8000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/173807235/original/5907a7728bb5571fb3b8d253c1babca2c8f8e48a/build-you-the-best-modern-house-in-minecraft-pocket-edition.png",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panoramica con vistas espectaculares",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    banos: 3,
    costo: 9000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://www.minecraft.net/content/dam/archive/a480be039a8ad63f53ab53d72abd8955-Header1.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "9 789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    banos: 2,
    costo: 7000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://br.atsit.in/es/wp-content/uploads/2022/02/las-15-mejores-ideas-para-casas-de-minecraft-3.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "© 123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    banos: 4,
    costo: 9000,
    smoke: false,
    pets: true,
  },
];

const propiedadesAlquilerHtml = document.querySelector("#propiedadesAlquiler");

for (alquiler of propiedadesAlquiler) {
  console.log("alquiler", alquiler);
  const template = `
    <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${alquiler.src}"
                class="card-img-top" alt="" />
            <div class="card-body">
                <h5 class="card-title">
                    ${alquiler.nombre}
                </h5>
                <p class="card-text">
                   ${alquiler.descripcion}
                </p>
                <p>
                    <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane,
                    ${alquiler.ubicacion}
                </p>
                <p>
                    <i class="fas fa-bed"></i> ${
                      alquiler.habitaciones
                    } Habitaciones |
                    <i class="fas fa-bath"></i> ${alquiler.banos} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo} </p>
                ${
                  alquiler.smoke
                    ? '<p class="text-success"> <i class="fa-solid fa-smoking"></i> Se permite fumar </p>'
                    : '<p class="text-danger"> <i class="fa-solid fa-ban-smoking"></i> No se permite fumar </p>'
                }
                ${
                  alquiler.pets
                    ? '<p class="text-success"> <i class="fa-solid fa-paw"></i> Se permiten mascotas </p>'
                    : '<p class="text-danger"> <i class="fa-solid fa-paw"></i> No se permiten mascotas </p>'
                }
            
            </div>
        </div>
    </div>
    `;
  propiedadesAlquilerHtml.innerHTML += template;
}
