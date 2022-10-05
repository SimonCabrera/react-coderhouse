import "./productList.css";

const products = [
  {
    category:'lebron',
    id: 1, 
    title: "Nike lebron XIX Black",
    price: 55000,
    stock: 3,
    img: "https://es.kicksmaniac.com/zdjecia/2022/06/10/306/22/NIKE_LEBRON_19_FAST_FOODm-242-mini.jpg?v=3&242",
    detail:
      "Un clásico de la NBA actualizado, no hay nada más emblemático que estas zapatillas de caña alta. Un clásico del baloncesto durante décadas. Adopta el característico aspecto de tu equipo con estas zapatillas y lleva tu estilo de juego a otro nivel",
  },
  {
    category: 'kyrie',
    id: 2,
    title: "Nike Kyrie low 3 court",
    price: 45000,
    stock: 8,
    img: "https://de.kicksmaniac.com/zdjecia/2020/12/16/312/24/NIKE_KYRIE_LOW_3_ORCHIDm-242-mini.jpg?v=3&242",
    detail:
      "La capacidad de Kyrie Irving de frenarse, salir disparado y cortar con el balón no tiene rival. Las Kyrie Low 3 proporcionan mayor agilidad y tracción en múltiples direcciones, y ofrecen sujeción y amortiguación a los jugadores que más rápido cortan. Su diseño de perfil bajo cuenta con un patrón de goma agresivo que envuelve los laterales y una correa de sujeción en el mediopié para un ajuste seguro para la cancha.",
  },
  {
    category:'giannis',
    id: 3,
    title: "Nike Giannis Immortality",
    price: 47700,
    stock: 6,
    img: "https://it.kicksmaniac.com/zdjecia/2022/06/28/1106/32/NIKE_GIANNIS_IMMORTALITY_ARCTIC_ORANGEm-242-mini.jpg?v=3&242",
    detail:
      "Habilidades increíbles, pedigrí magistral. Eres tú en el campo con la camiseta de Giannis. La sensación de suavidad y un corte suelto aseguran la libertad de movimiento durante los lanzamientos a canasta y cuando trabajas en defensa.",
  },
  {
    category:'lebron',
    id: 4,
    title: "Nike lebron Witness VI",
    price: 55000,
    stock: 3,
    img: "https://no.basketzone.net/zdjecia/2021/10/21/610/12/NIKE_LEBRON_WITNESS_VI_WHITE_PURPLE_GOLDs-mini.jpg?mini",
    detail:
      "Las Zapatillas Nike Lebron Witness 6 es un calzado robusto y ligero, diseñado para verse veloz. Cuentan con una pieza rígida en el talón y un ajuste firme en el antepié que proporcionan soporte. Además, tienen amortiguación eficaz y tracción multidireccional que se combinan para que mantengas el control mientras te desplazás dentro de la cancha.",
  },
  {
    category: 'lebron',
    id: 5,
    title: "Nike lebron witness",
    price: 60000,
    stock: 3,
    img: "https://fr.basketzone.net/zdjecia/2021/04/03/604/40/NIKE_LEBRON_WITNESS_V_VOLTs-mini.jpg?mini",
    detail:
     "Zapato de baloncesto Le Br on Witness Now her br on lives in l.A., but her heart will always be in akron. El zapato de testigo presenta el nuevo capítulo de la carrera King JAMES y rinde homenaje a sus raíces.",
  },
  {
    category: 'paul',
    id: 6,
    title: "Nike PG Black mint",
    price: 55000,
    stock: 3,
    img: "https://se.basketzone.net/zdjecia/2022/05/05/705/13/NIKE_PG_6_BLACK_MINT_FROGm-242-mini.jpg?v=3&242",
    detail:
      "Diseñada y confeccionada bajo las especificaciones de la super-estrella Paul George, orientadas a una maxima performance tanto en ataque como en defensa.",
  },
  {
    category: 'kobe',
    id: 7,
    title: "Nike kobe AD Lakers",
    price: 55000,
    stock: 3,
    img: "https://dk.basketzone.net/zdjecia/2018/06/12/406/17/NIKE_KOBE_AD_NXT_360_LAKERSm-242-mini.jpg?v=3&242",
    detail:
      "La zapatilla proporciona al que la lleve una gran sensibilidad y una amortiguación flexible. En la parte superior, una malla transpirable con la tecnología Flywire. Ésta ayudará a bloquear el pie en el momento de los cambios rápidos de dirección hacia la canasta o cuando tenga que cubrir a un rival.",
  },
  {
    category: 'jordan',
    id: 8,
    title: "Nike air jordan stay loyal",
    price: 70000,
    stock: 2,
    img: "https://kicksmaniac.com/zdjecia/2022/02/28/402/23/NIKE_AIR_JORDAN_STAY_LOYAL_AQUAm-242-mini.jpg?v=3&242",
    detail:
      "Los zapatos universales para hombre Nike Jordan Stay Loyal DB2884 001 te permiten disfrutar de la comodidad y la libertad todos los días. Es un modelo deportivo que hace referencia al diseño de los proyectos anteriores de Nike, a los que se les ha dado un nuevo aire. ",
  },
  {
    category:'giannis',
    id: 9,
    title: 'Nike Giannis Championship',
    price: 49000,
    stock: 6,
    img:'https://es.basketzone.net/zdjecia/2022/03/09/103/37/NIKE_GIANNIS_IMMORTALITY_CHAMPIONSHIPm-242-mini.jpg?v=3&242',
    detail: 'Habilidades increíbles, pedigrí magistral. Eres tú en el campo con la camiseta de Giannis. La sensación de suavidad y un corte suelto aseguran la libertad de movimiento durante los lanzamientos a canasta y cuando trabajas en defensa.',
  },
  {
    category:'giannis',
    id: 10,
    title: 'nike zoom freak 3',
    price:52000,
    stock: 3,
    img:'https://es.basketzone.net/zdjecia/2021/10/21/710/03/NIKE_ZOOM_FREAK_3_PROJECT_34m-242-mini.jpg?v=3&242',
    detail: 'Canaliza tu monstruo interior en la cancha con el Nike Zoom Freak 3. Capturando el atletismo extraño de Giannis en siluetas elegantes y de alto rendimiento, estos zapatos ofrecen un ajuste perfecto, capacidad de respuesta en el antepié y tracción multidireccional que te ayuda a mantener el control.',
  },
  {
    category:'kobe',
    id: 11,
    title: 'Nike Kobe A.D white',
    price:75000,
    stock: 1,
    img:'https://de.kicksmaniac.com/zdjecia/2018/02/06/1002/17/NIKE_KOBE_12_A.D_MID_PURE_PLATINIUMm-242-mini.jpg?v=3&242',
    detail: 'La zapatilla proporciona al que la lleve una gran sensibilidad y una amortiguación flexible. En la parte superior, una malla transpirable con la tecnología Flywire. Ésta ayudará a bloquear el pie en el momento de los cambios rápidos de dirección hacia la canasta o cuando tenga que cubrir a un rival.',
  },
  {
    category:'kobe',
    id: 12,
    title: 'Nike Kobe 9 high',
    price:95000,
    stock: 1,
    img:'https://fr.kicksmaniac.com/zdjecia/zdjecia/2015/01/28/NIKE_KOBE_9_HIGH_EXT_QS_SNAKESKIN_716616-001sg-242-mini.jpg?v=3&242',
    detail: 'Excelente traccion, excelente comodidad, excelente diseño, creadas por y para jugadores de alto nivel deportivo que esperan unas zapatillas a la altura de su juego',
  },
  {
    category:'paul',
    id: 13,
    title: 'Nike PG 4 Digi Camo',
    price: 45000,
    stock: 6,
    img:'https://sk.basketzone.net/zdjecia/2020/09/28/309/31/NIKE_PG_4_DIGI_CAMO_PAUL_GEORGEm-242-mini.jpg?v=3&242',
    detail: 'Paul George es un tirador con porcentajes de acierto altísimos al tiempo que es el sueño de todo entrenador en defensa. Las PG 4, diseñadas para su inimitable juego bidireccional, presentan un nuevo sistema de amortiguación ligero, articulado y reactivo, ideal para jugadores como PG que lo dan todo en cada jugada. ',
  },
  {
    category:'paul',
    id: 14,
    title: 'Nike PG 5 beige',
    price: 43000,
    stock: 7,
    img:'https://tr.basketzone.net/zdjecia/2021/07/11/707/52/NIKE_PG_5_BEIGE_PAUL_GEORGEs-mini.jpg?mini',
    detail: 'Paul George es un jugador fiable que aporta a cada partido su fluidez y su estabilidad. Se toma su tiempo, pero siempre está bien posicionado para realizar un pase adicional, acortar por la zona o encestar un tiro en suspensión. Las zapatillas PG 5, una evolución más ligera de las 4, combinan el perfil bajo y ágil que le gusta a Paul con la amortiguación Nike Air Strobel flexible y completa. La unidad Air está cosida directamente a la parte superior para que las zapatillas sean más ligeras y la amortiguación suave y elástica esté justo bajo el pie, lo que es perfecto para que Paul George se mueva cómodamente.',
  },
  {
    category:'kyrie',
    id: 15,
    title: 'Kyrie low 3 jade',
    price: 44000,
    stock: 9,
    img:'https://dk.basketzone.net/zdjecia/2021/02/22/802/59/NIKE_KYRIE_LOW_3_JADEm-242-mini.jpg?v=3&242',
    detail: 'Diseñada para los más rápidos de la pista, con piezas de refuerzo y materiales de gran calidad , zapatilla de alta gama. La Kyrie Low 3 "Eclipse" simboliza el equilibrio entre los opuestos, con patrones intrincados en la puntera y la correa y un emblema amarillo en el talón.',
  },
  {
    category:'jordan',
    id: 16,
    title: 'Nike Air Jordan 1',
    price: 100000,
    stock: 3,
    img:'https://kicksmaniac.com/zdjecia/2022/05/03/705/51/NIKE_AIR_JORDAN_1_RETRO_LOW_BLACK_TOEm-242-mini.jpg?v=3&242',
    detail: 'El Air Jordan 1 es una de las zapatillas más vendidas de Nike en relación con la practica del baloncesto, desde sus orígenes siempre ha destacado por su gran versatilidad sobre la pista de basket. Adaptándose a diversos estilos de juegos y deslumbrando por su calidad.',
  },
  {
    category:'jordan',
    id: 17,
    title: 'Nike air Jordan 6',
    price: 95000,
    stock: 4,
    img:'https://no.basketzone.net/zdjecia/2021/04/26/604/37/NIKE_AIR_JORDAN_6_RETRO_CARMINEm-242-mini.jpg?v=3&242',
    detail: 'El calzado Air Jordan 6 Retro "Hare" ofrece una vista discreta de la silueta clásica con un pedigrí de campeonato. El color gris monocromático se aplica en la parte superior de la gamuza, con detalles tradicionales AJ6 que incluyen cordones de encaje, incrustaciones perforadas y un spoiler extendido en el talón.',
  },
  {
    category:'kyrie',
    id: 18,
    title: 'Nike kyrie Flytrap',
    price: 55000,
    stock: 7,
    img:'https://it.kicksmaniac.com/zdjecia/2020/07/31/207/37/NIKE_KYRIE_FLYTRAP_III_SOUTH_BEACHm-242-mini.jpg?v=3&242',
    detail: ' Muévete rápido en tus límites con el Kyrie Flytrap 4, un calzado que es ligero y brinda soporte y libertad de movimiento. Cuenta con un agarre actualizado, un ajuste firme y una amortiguación eficaz. El unidad Air Zoom de gran tamaño devuelve más energía que el modelo anterior.',
  },
];

export function getAllProducts () {
  console.log("hola desde getallprod")
  return new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
    console.log(products)
  });
  });
}

export function GetProductById(idItem) {
  return new Promise((resolve, reject) => {
    let itemFind = products.find((item) => item.id === parseInt(idItem));
    if (itemFind) resolve(itemFind);
    else reject(new Error('el item no fue encontrado'))
  });
}

export function getProductByCategory(cat) {
  return new Promise((resolve, reject) => {
  
    let itemFind= products.filter((item) =>{
      return item.category === cat;
    });
    console.log("Encontramos esto:", itemFind)
    if (itemFind) resolve(itemFind);

    else reject(new Error('el item no fue encontrado'))
  });
}
