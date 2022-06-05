export const sliderItems = [
    {
        id: 1,
        img: "https://i.ibb.co/4mrZgCF/Figure-Dumbbell-Hantel.png",
        title: "EQUIPAMIENTO",
        desc: "NUEVO EQUIPAMIENTO DE PRIMERA CALIDAD",
        link: "/ProductList",
    },
    {
        id: 2,
        img: "https://i.ibb.co/dcQjJ4Z/technician.jpg",
        title: "ASESORÍA TÉCNICA",
        desc: "TE AYUDAMOS CON CUALQUIER PROBLEMA",
        link: "/Request",
    }
];

export const products = [
    {
        id: 1,
        img: "https://i.ibb.co/4mrZgCF/Figure-Dumbbell-Hantel.png",
        name: "Mancuernas Hantel",
        desc: "Set de mancuernas marca Hantel. Con recubrimiento de goma que añade seguridad y una calidad excepcional.",
        price: 160000,

    },
    {
        id:2,
        img: "https://i.ibb.co/PzKcFMX/dumbbellpink.png",
        name: "Mancuernas de goma",
        desc: "Set de mancuernas de goma. Con variedad de pesos que son capaces de adaptarse a tus necesidades.",
        price: 90000,
    },
    {
        id:3,
        img: "https://i.ibb.co/LCYHKmr/tbar.png",
        name: "Remo T",
        desc: "Una de las mejores máquinas para trabajar la espalda",
        price: 180000,
    },
    {
        id:4,
        img: "https://i.ibb.co/DrZtcxQ/bars1.png",
        name: "Barras paralelas",
        desc: "Trabaja tu tren superior con calistenia usando estas barras",
        price: 110000,
    },
    {
        id:5,
        img: "https://i.ibb.co/bQZ0507/plateset2.png",
        name: "Set de discos GPWT",
        desc: "Set de discos con variedad de pesos y colores para darle otro ambiente a tu gym",
        price: 150000,
    },
    {
        id:6,
        img: "https://i.ibb.co/r69Hf8J/plateset1.png",
        name: "Set de discos barbell",
        desc: "Set de discos con variedad y un amplio rango de pesos",
        price: 125000,
    },
    {
        id:7,
        img: "https://i.ibb.co/9WFWbbV/banca.jpg",
        name: "Banca TrainPower",
        desc: "Una de las bancas de mejor calidad del mercado, con su debido soporte para barras y gran comodidad",
        price: 150000,
    },
    {
        id:8,
        img: "https://i.ibb.co/ts6GkYt/Mariposa.jpg",
        name: "Máquina Butterfly",
        desc: "Trabaja tu tren superior, enfocándote en el pecho y la espalda con esta cómoda máquina",
        price: 190000,
    },
    {
        id:9,
        img: "https://i.ibb.co/YtvcKJZ/discos5kg.jpg",
        name: "Set de discos Marcy",
        desc: "Set de discos con rango inferior y recubiertos de goma, para mayor seguridad y facil manejo",
        price: 90000,
    },
    {
        id:10,
        img: "https://i.ibb.co/0ntZgbr/brazos.png",
        name: "Banca bicep curl Forte",
        desc: "Trabaja en tus bíceps con esta banca que ofrece una muy buena comodidad",
        price: 120000,
    },
    {
        id:11,
        img: "https://i.ibb.co/2sbBLsn/discos20kg.jpg",
        name: "Set de discos GETSTRONG",
        desc: "Set de discos con un rango superior, partiendo desde los 20kg en adelante",
        price: 90000,
    },
    {
        id:12,
        img: "https://i.ibb.co/6Ft83SV/prensa.jpg",
        name: "Prensa ATX",
        desc: "Trabaja tu tren inferior con esta prensa de alta calidad",
        price: 180000,
    },
];

export function getProduct(id) {
    return products.find(
      (product) => product.id === id
    );
  }
