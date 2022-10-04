import "./productList.css";
import ProductCard from "../productCard/ProductCard";
import { useState } from "react";

const products = [
  {
    id: 1, 
    title: "Nike lebron XIX Black",
    price: 55000,
    stock: 3,
    img: "https://es.kicksmaniac.com/zdjecia/2022/06/10/306/22/NIKE_LEBRON_19_FAST_FOODm-242-mini.jpg?v=3&242",
    detail:
      "Un clásico de la NBA actualizado, no hay nada más emblemático que estas zapatillas de caña alta. Un clásico del baloncesto durante décadas. Adopta el característico aspecto de tu equipo con estas zapatillas y lleva tu estilo de juego a otro nivel",
  },
  {
    id: 2,
    title: "Nike Kyrie low 3 court",
    price: 45000,
    stock: 8,
    img: "https://de.kicksmaniac.com/zdjecia/2020/12/16/312/24/NIKE_KYRIE_LOW_3_ORCHIDm-242-mini.jpg?v=3&242",
    detail:
      "La capacidad de Kyrie Irving de frenarse, salir disparado y cortar con el balón no tiene rival. Las Kyrie Low 3 proporcionan mayor agilidad y tracción en múltiples direcciones, y ofrecen sujeción y amortiguación a los jugadores que más rápido cortan. Su diseño de perfil bajo cuenta con un patrón de goma agresivo que envuelve los laterales y una correa de sujeción en el mediopié para un ajuste seguro para la cancha.",
  },
  {
    id: 3,
    title: "Nike Giannis Immortality",
    price: 47700,
    stock: 6,
    img: "https://it.kicksmaniac.com/zdjecia/2022/06/28/1106/32/NIKE_GIANNIS_IMMORTALITY_ARCTIC_ORANGEm-242-mini.jpg?v=3&242",
    detail:
      "Habilidades increíbles, pedigrí magistral. Eres tú en el campo con la camiseta de Giannis. La sensación de suavidad y un corte suelto aseguran la libertad de movimiento durante los lanzamientos a canasta y cuando trabajas en defensa.",
  },
  {
    id: 4,
    title: "Nike lebron Witness VI",
    price: 55000,
    stock: 3,
    img: "https://no.basketzone.net/zdjecia/2021/10/21/610/12/NIKE_LEBRON_WITNESS_VI_WHITE_PURPLE_GOLDs-mini.jpg?mini",
    detail:
      "Las Zapatillas Nike Lebron Witness 6 es un calzado robusto y ligero, diseñado para verse veloz. Cuentan con una pieza rígida en el talón y un ajuste firme en el antepié que proporcionan soporte. Además, tienen amortiguación eficaz y tracción multidireccional que se combinan para que mantengas el control mientras te desplazás dentro de la cancha.",
  },
  {
    id: 5,
    title: "Nike lebron witness",
    price: 60000,
    stock: 3,
    img: "https://fr.basketzone.net/zdjecia/2021/04/03/604/40/NIKE_LEBRON_WITNESS_V_VOLTs-mini.jpg?mini",
    detail:
     "Zapato de baloncesto Le Br on Witness Now her br on lives in l.A., but her heart will always be in akron. El zapato de testigo presenta el nuevo capítulo de la carrera King JAMES y rinde homenaje a sus raíces.",
  },
  {
    id: 6,
    title: "Nike PG Black mint",
    price: 55000,
    stock: 3,
    img: "https://se.basketzone.net/zdjecia/2022/05/05/705/13/NIKE_PG_6_BLACK_MINT_FROGm-242-mini.jpg?v=3&242",
    detail:
      "Diseñada y confeccionada bajo las especificaciones de la super-estrella Paul George, orientadas a una maxima performance tanto en ataque como en defensa.",
  },
  {
    id: 7,
    title: "Nike kobe AD Lakers",
    price: 55000,
    stock: 3,
    img: "https://dk.basketzone.net/zdjecia/2018/06/12/406/17/NIKE_KOBE_AD_NXT_360_LAKERSm-242-mini.jpg?v=3&242",
    detail:
      "La zapatilla proporciona al que la lleve una gran sensibilidad y una amortiguación flexible. En la parte superior, una malla transpirable con la tecnología Flywire. Ésta ayudará a bloquear el pie en el momento de los cambios rápidos de dirección hacia la canasta o cuando tenga que cubrir a un rival.",
  },
  {
    id: 8,
    title: "Nike air jordan stay loyal",
    price: 70000,
    stock: 2,
    img: "https://kicksmaniac.com/zdjecia/2022/02/28/402/23/NIKE_AIR_JORDAN_STAY_LOYAL_AQUAm-242-mini.jpg?v=3&242",
    detail:
      "Los zapatos universales para hombre Nike Jordan Stay Loyal DB2884 001 te permiten disfrutar de la comodidad y la libertad todos los días. Es un modelo deportivo que hace referencia al diseño de los proyectos anteriores de Nike, a los que se les ha dado un nuevo aire. ",
  },
];

const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 2500);
});

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  getProducts.then((result) => {
    setProductList(result);
  });
  return (
    <div className="product-container">
      {productList.map((p) => {
        return (
          <ProductCard
            key={p.id}
            price={p.price}
            stock={p.stock}
            img={p.img}
            title={p.title}
            id={p.id}
          />
        );
      })}
    </div>
  );
};

export function getSingleItem(idItem) {
  return new Promise((resolve, reject) => {
    let itemFind= products.find((item) => item.id === parseInt(idItem));
    if (itemFind) resolve(itemFind);
    else reject(new Error('el item no fue encontrado'))
      
    
  });
}

export default ProductList;
