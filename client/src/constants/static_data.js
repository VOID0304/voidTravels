import hampi from "../assets/images/hampi.png";
import coorg from "../assets/images/coorg.png";
import mysore from "../assets/images/mysore.png";
import udupi from "../assets/images/udupi.png";
import chikmagalur from "../assets/images/chikmagalur.png";
import jogfalls from "../assets/images/jogfalls.png";
import murudeswar from "../assets/images/murudeswar.png";
import banglore from "../assets/images/bangalore.png";
import nandihills from "../assets/images/nandihills.png";
import mangalore from "../assets/images/mangalore.png";
import vrindavan from "../assets/images/vrindavan.png";
import allindia from "../assets/images/allindia.png";
import leh from "../assets/images/leh.png";
import islands from "../assets/images/islands.png";
import honeymoon from "../assets/images/honeymoon.png";

class StaticData{
    static StateListdata=[
        {
            title: "Hampi",
            img: hampi,
            description: 'Hampi is famous for its ruins which belong to the Vijayanagar Empire. This UNESCO World Heritage Site is also renowned for its group of monuments. Surrounded by 500 ancient monuments, temples, buildings, and captivating ruins',
            besttime: 'October',
            tourist: '35 Tourist Attractions',
            stars: '⭐⭐⭐⭐⭐',
        },
        {
            title: "Coorg",
            img: coorg,
            description: 'Coorg, officially known as Kodagu, is the most affluent hill station in Karnataka. It is well known for its breathtakingly exotic scenery and lush greenery. Forest covered hills, sallepye and coffee plantations only add to the landscape. ',
            besttime: 'November',
            tourist: '30 Tourist Attractions',
            stars: '⭐⭐⭐⭐⭐',
            
        },
        {
            title: "Mysore",
            img: mysore,
            description: 'Mysore was one of the three largest Princely States in the erstwhile British Empire of India. To this day, the Mysore Palace stands tall as one of the most spectacular palaces in India.',
            besttime: 'All over the year',
            tourist: '36 Tourist Attractions',
            stars: '⭐⭐⭐⭐⭐',
            
        },
        {
            title: "Udupi",
            img: udupi,
            description: 'Udupi is a coastal town in Karnataka, most famous for its vegetarian cuisine and South Indian restaurants all over the country. With beautifully carved ancient temples, laidback beaches and unexplored forests, ',
            besttime: 'October',
            tourist: '31 Tourist Attractions',
            stars: '⭐⭐⭐⭐⭐',
            
        },
        {
            title: "Chikmagalur",
            img: chikmagalur,
            description: 'Popularly known as the ‘Coffee Land of Karnataka’, Chikmagalur is situated in the foothills of the Mullayangiri Range and is one of the most beautiful hill stations in Karnataka. Coffee lingering in the air with it plenty of coffee plantations.',
            besttime: 'All over the year',
            tourist: '22 Tourist Attractions',
            stars: '⭐⭐⭐⭐⭐',
            
        },
        {
            title: "Jog Falls",
            img: jogfalls,
            description: 'Jog Falls is a major tourist attraction in Karnataka and is the highest waterfall in the state. Second, to the Nohkalikai Falls of Meghalaya, Jog falls drops about a huge 253 m (850 ft. ) in a single fall.',
            besttime: 'July',
            tourist: '9 Tourist Attractions',
            stars: '⭐⭐⭐⭐',
            
        },
        {
            title: "Murudeswar",
            img: murudeswar,
            description: 'Murudeshwar is home to the second tallest statue of Lord Shiva (123 ft) in the world. With the shimmering Arabian Sea on three sides and the magnificent Western Ghats imposing their presence on this town.',
            besttime: 'October',
            tourist: '8 Tourist Attractions',
            stars: '⭐⭐⭐⭐⭐',
            
        },
        {
            title: "Bangalore",
            img: banglore,
            description: 'Bangalore is loved for its pleasant weather, beautiful parks and the many lakes here. Bangalore is renowned for its eateries, street food corners, quirky cafes, coffee roasters and pubs dotting every corner of the city, serving cuisines from all over the world.',
            besttime: 'All over the year',
            tourist: '103 Tourist Attractions',
            stars: '⭐⭐⭐⭐⭐',
            
        },
        {
            title: "Nandi Hills",
            img: nandihills,
            description: 'Nandi Hills is one such tourist spot that has gradually been discovered by visitors over the years and has now become a well-known weekend getaway. Nandi Hills is scattered with shrines and monument and is surrounded by mesmerizing views',
            besttime: 'Decenmber',
            tourist: '12 Tourist Attractions',
            stars: '⭐⭐⭐⭐⭐',
            
        },
        {
            title: "Mangalore",
            img: mangalore,
            description: 'Located between the Arabian Sea and the Western Ghats, the port city of Mangalore or Mangaluru is known for its swaying coconut palms, beautiful beaches and temple architecture. ',
            besttime: 'All over the year',
            tourist: '35 Tourist Attractions',
            stars: '⭐⭐⭐⭐⭐', 
            
        }
    ];


    static packageList=[
        {
            heading: 'NORTH INDIA TOUR',
            subheading:'Starting from: Vrindavan',
            price: '₹ 15,000',
            img: vrindavan,
            l1: 'Tughlqabad',
            l2: 'Agra',
            l3: 'Vrindavan',
            l4: 'Mathura',

        },
        {
            heading: 'ALL INDIA TOUR',
            subheading:'Starting from: Chennai',
            img: allindia,
            price: '₹ 19,000',
            l1: 'Arunachalam',
            l2: 'Thiruvananthapuram',
            l3: 'Kolhapur Mahalakshmi',
            l4: 'Kamakhya Devi temple',
        },
        {
            heading: 'LEH LADAKH TOUR',
            subheading:'Starting from: Delhi',
            price: '₹ 19,999',
            img: leh,
            l1: 'Leh',
            l2: 'Sham valley',
            l3: 'kardhungla',
            l4: 'Nubra valley',
            l5: 'pangong',
            l6: 'Stock Village',
        },
        {
            heading: 'ANDAMAN & NICOBAR ISLANDS',
            subheading:'Starting from: Chennai',
            price: '₹ 20,000',
            img: islands,
            l1: 'Port Blair',
            l2: 'Havelock',
            l3: 'Neil island',
        },
        {
            heading: 'HONEYMOON PACKAGE',
            subheading:'Starting from: Delhi',
            price: '₹ 8000',
            img: honeymoon,
            l1: 'Manali',
            l2: 'Solang',
            l3: 'Naggar + jana waterfall',
            l4: 'kullu - manikaran',

        }
    ];
}

export default StaticData;