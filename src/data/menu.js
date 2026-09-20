import espresso from '../assets/images/menu/hotCoffee/espresso.webp'
import dblEspresso from '../assets/images/menu/hotCoffee/dblEspresso.avif'
import americano from '../assets/images/menu/hotCoffee/americano.webp'
import cappuccino from '../assets/images/menu/hotCoffee/cappuccino.webp'
import caffeLatte from '../assets/images/menu/hotCoffee/caffeLatte.webp'
import flatWhite from '../assets/images/menu/hotCoffee/flatWhite.webp'
import cortado from '../assets/images/menu/hotCoffee/cortado.webp'
import macchiato from '../assets/images/menu/hotCoffee/macchiato.webp'
import mocha from '../assets/images/menu/hotCoffee/mocha.jpg'
import spanishLatte from '../assets/images/menu/hotCoffee/spanishLatte.jpg'
import caramelLatte from '../assets/images/menu/hotCoffee/caramelLatte.jpg'
import vanillaLatte from '../assets/images/menu/hotCoffee/vanillaLatte.jpg'
import icedAmericano from '../assets/images/menu/icedCoffee/icedAmericano.jpg'
import icedLatte from '../assets/images/menu/icedCoffee/icedLatte.jpg'
import icedSpanishLatte from '../assets/images/menu/icedCoffee/icedSpanishLatte.webp'
import icedMocha from '../assets/images/menu/icedCoffee/icedMocha1.jpg'
import icedCaramelLatte from '../assets/images/menu/icedCoffee/icedCaramelLatte3.avif'
import icedVanillaLatte from '../assets/images/menu/icedCoffee/icedVanillaLatte.jpeg'
import coldBrew from '../assets/images/menu/icedCoffee/coldBrew.jpg'
import affogato from '../assets/images/menu/icedCoffee/affogato.webp'
import frappuccino from '../assets/images/menu/icedCoffee/frappuccino.jpg'
import englishBreakfastTea from '../assets/images/menu/tea/englishBreakfastTea.jpg'
import earlGrey from '../assets/images/menu/tea/earlGrey.webp'
import greenTea from '../assets/images/menu/tea/greenTea.jpg'
import moroccanMintTea from '../assets/images/menu/tea/moroccanMintTea.webp'
import blackTea from '../assets/images/menu/tea/blackTea.webp'
import herbalTea from '../assets/images/menu/tea/herbalTea.jpg'
import gingerTea from '../assets/images/menu/tea/gingerTea.jpg'
import classicMatcha from '../assets/images/menu/matcha/classicMatcha.webp'
import matchaLatte from '../assets/images/menu/matcha/matchaLatte1.webp'
import icedMatchaLatte from '../assets/images/menu/matcha/icedMatchaLatte.webp'
import strawberryMatcha from '../assets/images/menu/matcha/strawberryMatcha.jpg'
import hotChocolate from '../assets/images/menu/chocolate/hotChocolate.jpg'
import darkHotChocolate from '../assets/images/menu/chocolate/darkHotChocolate.avif'
import icedChocolate from '../assets/images/menu/chocolate/icedChocolate.webp'
import chocolateFrappe from '../assets/images/menu/chocolate/chocolateFrappe1.avif'
import freshOrangeJuice from '../assets/images/menu/freshJuices/freshOrangeJuice.jpg'
import freshLemonJuice from '../assets/images/menu/freshJuices/freshLemonJuice.avif'
import lemonMint from '../assets/images/menu/freshJuices/lemonMint.jpg'
import mangoJuice from '../assets/images/menu/freshJuices/mangoJuice.avif'
import strawberryJuice from '../assets/images/menu/freshJuices/strawberryJuice1.jpg'
import watermelonJuice from '../assets/images/menu/freshJuices/watermelonJuice.avif'
import strawberrySmoothie from '../assets/images/menu/smoothies/strawberrySmoothie.jpg'
import mangoSmoothie from '../assets/images/menu/smoothies/mangoSmoothie.webp'
import mixedBerrySmoothie from '../assets/images/menu/smoothies/mixedBerrySmoothie.avif'
import bananaSmoothie from '../assets/images/menu/smoothies/bananaSmoothie.jpg'
import Mojito from '../assets/images/menu/mocktails/Mojito.avif'
import strawberryMojito from '../assets/images/menu/mocktails/strawberryMojito.jpg'
import passionFruitMojito from '../assets/images/menu/mocktails/passionFruitMojito.jpg'
import sunset from '../assets/images/menu/mocktails/sunset.avif'
import blueLagoon from '../assets/images/menu/mocktails/blueLagoon8.jpg'
import classicCheesecake from '../assets/images/menu/dessert/classicCheesecake.webp'
import chocolateCake from '../assets/images/menu/dessert/chocolateCake2.webp'
import tiramisu from '../assets/images/menu/dessert/tiramisu.jpg'
import brownie from '../assets/images/menu/dessert/brownie.webp'

export const drinks = [
    // ==================== HOT COFFEE ====================

    {
        id: 1,
        name: "Espresso",
        nameAr: "إسبريسو",
        category: "Hot Coffee",
        categoryAr: "قهوة ساخنة",
        price: 60,
        image: espresso,
        description: "A rich and concentrated shot of freshly brewed espresso.",
        descriptionAr: "جرعة غنية ومركزة من الإسبريسو المحضر حديثًا.",
    },
    {
        id: 2,
        name: "Double Espresso",
        nameAr: "إسبريسو دبل",
        category: "Hot Coffee",
        categoryAr: "قهوة ساخنة",
        price: 75,
        image: dblEspresso,
        description: "Two rich shots of freshly brewed espresso.",
        descriptionAr: "جرعتان غنيتان من الإسبريسو المحضر حديثًا.",
    },
    {
        id: 3,
        name: "Americano",
        nameAr: "أمريكانو",
        category: "Hot Coffee",
        categoryAr: "قهوة ساخنة",
        price: 70,
        image: americano,
        description: "Espresso blended with hot water for a smooth finish.",
        descriptionAr: "إسبريسو ممزوج بالماء الساخن لمذاق ناعم.",
    },
    {
        id: 4,
        name: "Cappuccino",
        nameAr: "كابتشينو",
        category: "Hot Coffee",
        categoryAr: "قهوة ساخنة",
        price: 85,
        image: cappuccino,
        description: "Espresso with steamed milk and a soft layer of foam.",
        descriptionAr: "إسبريسو مع حليب مبخر وطبقة ناعمة من الرغوة.",
    },
    {
        id: 5,
        name: "Caffe Latte",
        nameAr: "كافيه لاتيه",
        category: "Hot Coffee",
        categoryAr: "قهوة ساخنة",
        price: 90,
        image: caffeLatte,
        description: "Smooth espresso with steamed milk and a silky finish.",
        descriptionAr: "إسبريسو ناعم مع حليب مبخر وقوام حريري.",
    },
    {
        id: 6,
        name: "Flat White",
        nameAr: "فلات وايت",
        category: "Hot Coffee",
        categoryAr: "قهوة ساخنة",
        price: 90,
        image: flatWhite,
        description: "Rich espresso combined with smooth microfoam milk.",
        descriptionAr: "إسبريسو غني مع حليب ناعم بطبقة خفيفة من الرغوة.",
    },
    {
        id: 7,
        name: "Cortado",
        nameAr: "كورتادو",
        category: "Hot Coffee",
        categoryAr: "قهوة ساخنة",
        price: 85,
        image: cortado,
        description: "Balanced espresso softened with a small amount of warm milk.",
        descriptionAr: "إسبريسو متوازن مع كمية صغيرة من الحليب الدافئ.",
    },
    {
        id: 8,
        name: "Macchiato",
        nameAr: "ماكياتو",
        category: "Hot Coffee",
        categoryAr: "قهوة ساخنة",
        price: 80,
        image: macchiato,
        description: "Espresso lightly marked with steamed milk foam.",
        descriptionAr: "إسبريسو مع لمسة خفيفة من رغوة الحليب المبخر.",
    },
    {
        id: 9,
        name: "Mocha",
        nameAr: "موكا",
        category: "Hot Coffee",
        categoryAr: "قهوة ساخنة",
        price: 95,
        image: mocha,
        description: "Espresso, chocolate and steamed milk with a rich finish.",
        descriptionAr: "إسبريسو مع الشوكولاتة والحليب المبخر بمذاق غني.",
    },
    {
        id: 10,
        name: "Spanish Latte",
        nameAr: "سبانيش لاتيه",
        category: "Hot Coffee",
        categoryAr: "قهوة ساخنة",
        price: 100,
        image: spanishLatte,
        description: "Espresso blended with creamy milk and sweetened condensed milk.",
        descriptionAr: "إسبريسو ممزوج بالحليب الكريمي والحليب المكثف المحلى.",
    },
    {
        id: 11,
        name: "Caramel Latte",
        nameAr: "كراميل لاتيه",
        category: "Hot Coffee",
        categoryAr: "قهوة ساخنة",
        price: 100,
        image: caramelLatte,
        description: "Smooth latte finished with a delicate caramel flavor.",
        descriptionAr: "لاتيه ناعم مع لمسة خفيفة من نكهة الكراميل.",
    },
    {
        id: 12,
        name: "Vanilla Latte",
        nameAr: "فانيلا لاتيه",
        category: "Hot Coffee",
        categoryAr: "قهوة ساخنة",
        price: 100,
        image: vanillaLatte,
        description: "Classic espresso and milk with a touch of vanilla.",
        descriptionAr: "إسبريسو وحليب كلاسيكيان مع لمسة من الفانيلا.",
    },

    // ==================== COLD COFFEE ====================

    {
        id: 13,
        name: "Iced Americano",
        nameAr: "أمريكانو مثلج",
        category: "Cold Coffee",
        categoryAr: "قهوة باردة",
        price: 75,
        image: icedAmericano,
        description: "Espresso served over ice with chilled water.",
        descriptionAr: "إسبريسو يقدم مع الثلج والماء البارد.",
    },
    {
        id: 14,
        name: "Iced Latte",
        nameAr: "لاتيه مثلج",
        category: "Cold Coffee",
        categoryAr: "قهوة باردة",
        price: 95,
        image: icedLatte,
        description: "Smooth espresso, chilled milk and ice.",
        descriptionAr: "إسبريسو ناعم مع الحليب البارد والثلج.",
    },
    {
        id: 15,
        name: "Iced Spanish Latte",
        nameAr: "سبانيش لاتيه مثلج",
        category: "Cold Coffee",
        categoryAr: "قهوة باردة",
        price: 105,
        image: icedSpanishLatte,
        description: "Espresso, cold milk and condensed milk served over ice.",
        descriptionAr: "إسبريسو مع الحليب البارد والحليب المكثف ويقدم مع الثلج.",
    },
    {
        id: 16,
        name: "Iced Mocha",
        nameAr: "موكا مثلج",
        category: "Cold Coffee",
        categoryAr: "قهوة باردة",
        price: 105,
        image: icedMocha,
        description: "Cold espresso, chocolate and milk served over ice.",
        descriptionAr: "إسبريسو بارد مع الشوكولاتة والحليب ويقدم مع الثلج.",
    },
    {
        id: 17,
        name: "Iced Caramel Latte",
        nameAr: "كراميل لاتيه مثلج",
        category: "Cold Coffee",
        categoryAr: "قهوة باردة",
        price: 110,
        image: icedCaramelLatte,
        description: "Chilled latte with a smooth caramel touch.",
        descriptionAr: "لاتيه بارد مع لمسة ناعمة من الكراميل.",
    },
    {
        id: 18,
        name: "Iced Vanilla Latte",
        nameAr: "فانيلا لاتيه مثلج",
        category: "Cold Coffee",
        categoryAr: "قهوة باردة",
        price: 110,
        image: icedVanillaLatte,
        description: "Cold espresso and milk with a hint of vanilla.",
        descriptionAr: "إسبريسو بارد مع الحليب ولمسة من الفانيلا.",
    },
    {
        id: 19,
        name: "Cold Brew",
        nameAr: "كولد برو",
        category: "Cold Coffee",
        categoryAr: "قهوة باردة",
        price: 90,
        image: coldBrew,
        description: "Slow-brewed coffee served chilled for a smooth taste.",
        descriptionAr: "قهوة محضرة بالتخمير البارد وتقدم باردة لمذاق ناعم.",
    },
    {
        id: 20,
        name: "Affogato",
        nameAr: "أفوجاتو",
        category: "Cold Coffee",
        categoryAr: "قهوة باردة",
        price: 110,
        image: affogato,
        description:
            "A scoop of creamy vanilla ice cream topped with espresso.",
        descriptionAr: "كرة من آيس كريم الفانيلا الكريمي تعلوها جرعة من الإسبريسو.",
    },
    {
        id: 21,
        name: "Frappuccino",
        nameAr: "فرابتشينو",
        category: "Cold Coffee",
        categoryAr: "قهوة باردة",
        price: 115,
        image: frappuccino,
        description: "Blended coffee, milk and ice with a creamy texture.",
        descriptionAr: "قهوة ممزوجة بالحليب والثلج بقوام كريمي.",
    },

    // ==================== TEA ====================

    {
        id: 22,
        name: "English Breakfast Tea",
        nameAr: "شاي إنجليزي",
        category: "Tea",
        categoryAr: "شاي",
        price: 60,
        image: englishBreakfastTea,
        description: "A classic full-bodied black tea.",
        descriptionAr: "شاي أسود كلاسيكي غني ومميز.",
    },
    {
        id: 23,
        name: "Earl Grey",
        nameAr: "إيرل جراي",
        category: "Tea",
        categoryAr: "شاي",
        price: 65,
        image: earlGrey,
        description: "Black tea with a delicate bergamot aroma.",
        descriptionAr: "شاي أسود مع رائحة البرغموت الرقيقة.",
    },
    {
        id: 24,
        name: "Green Tea",
        nameAr: "شاي أخضر",
        category: "Tea",
        categoryAr: "شاي",
        price: 60,
        image: greenTea,
        description: "Light and refreshing green tea.",
        descriptionAr: "شاي أخضر خفيف ومنعش.",
    },
    {
        id: 25,
        name: "Moroccan Mint Tea",
        nameAr: "شاي بالنعناع المغربي",
        category: "Tea",
        categoryAr: "شاي",
        price: 70,
        image: moroccanMintTea,
        description: "Refreshing green tea infused with fresh mint.",
        descriptionAr: "شاي أخضر منعش مع النعناع الطازج.",
    },
    {
        id: 26,
        name: "Black Tea",
        nameAr: "شاي أسود",
        category: "Tea",
        categoryAr: "شاي",
        price: 55,
        image: blackTea,
        description: "Classic black tea served hot.",
        descriptionAr: "شاي أسود كلاسيكي يقدم ساخنًا.",
    },
    {
        id: 27,
        name: "Herbal Tea",
        nameAr: "شاي أعشاب",
        category: "Tea",
        categoryAr: "شاي",
        price: 65,
        image: herbalTea,
        description: "A calming blend of aromatic herbs.",
        descriptionAr: "مزيج هادئ من الأعشاب العطرية.",
    },
    {
        id: 28,
        name: "Ginger Tea",
        nameAr: "شاي بالزنجبيل",
        category: "Tea",
        categoryAr: "شاي",
        price: 65,
        image: gingerTea,
        description: "Warm ginger infusion with a naturally spicy finish.",
        descriptionAr: "مشروب زنجبيل دافئ بنكهة طبيعية مميزة.",
    },
    // ==================== MATCHA ====================

    {
        id: 29,
        name: "Classic Matcha",
        nameAr: "ماتشا كلاسيك",
        category: "Matcha",
        categoryAr: "ماتشا",
        price: 95,
        image: classicMatcha,
        description: "Smooth Japanese-style matcha prepared with water.",
        descriptionAr: "ماتشا يابانية ناعمة محضرة بالماء.",
    },
    {
        id: 30,
        name: "Matcha Latte",
        nameAr: "ماتشا لاتيه",
        category: "Matcha",
        categoryAr: "ماتشا",
        price: 105,
        image: matchaLatte,
        description: "Creamy milk blended with rich matcha.",
        descriptionAr: "حليب كريمي ممزوج بالماتشا الغنية.",
    },
    {
        id: 31,
        name: "Iced Matcha Latte",
        nameAr: "ماتشا لاتيه مثلج",
        category: "Matcha",
        categoryAr: "ماتشا",
        price: 110,
        image: icedMatchaLatte,
        description: "Smooth matcha and chilled milk served over ice.",
        descriptionAr: "ماتشا ناعمة مع الحليب البارد وتقدم مع الثلج.",
    },
    {
        id: 32,
        name: "Strawberry Matcha",
        nameAr: "ماتشا بالفراولة",
        category: "Matcha",
        categoryAr: "ماتشا",
        price: 120,
        image: strawberryMatcha,
        description: "Creamy matcha layered with sweet strawberry.",
        descriptionAr: "ماتشا كريمية بطبقة من الفراولة الحلوة.",
    },
    // ==================== CHOCOLATE ====================
    {
        id: 33,
        name: "Hot Chocolate",
        nameAr: "هوت شوكليت",
        category: "Chocolate",
        categoryAr: "شوكولاتة",
        price: 85,
        image: hotChocolate,
        description: "Rich and creamy chocolate served warm.",
        descriptionAr: "شوكولاتة غنية وكريمية تقدم دافئة.",
    },
    {
        id: 34,
        name: "Dark Hot Chocolate",
        nameAr: "هوت شوكليت دارك",
        category: "Chocolate",
        categoryAr: "شوكولاتة",
        price: 90,
        image: darkHotChocolate,
        description: "Deep dark chocolate with a rich and balanced taste.",
        descriptionAr: "شوكولاتة داكنة غنية بمذاق متوازن.",
    },
    {
        id: 35,
        name: "Iced Chocolate",
        nameAr: "شوكولاتة مثلجة",
        category: "Chocolate",
        categoryAr: "شوكولاتة",
        price: 95,
        image: icedChocolate,
        description: "Cold creamy chocolate served over ice.",
        descriptionAr: "شوكولاتة باردة وكريمية تقدم مع الثلج.",
    },
    {
        id: 36,
        name: "Chocolate Frappe",
        nameAr: "فرابيه شوكولاتة",
        category: "Chocolate",
        categoryAr: "شوكولاتة",
        price: 110,
        image: chocolateFrappe,
        description: "Blended chocolate, milk and ice with a creamy texture.",
        descriptionAr: "شوكولاتة ممزوجة بالحليب والثلج بقوام كريمي.",
    },
    // ==================== FRESH JUICES ====================

    {
        id: 37,
        name: "Fresh Orange Juice",
        nameAr: "عصير برتقال فريش",
        category: "Fresh Juice",
        categoryAr: "عصائر فريش",
        price: 75,
        image: freshOrangeJuice,
        description: "Freshly squeezed orange juice.",
        descriptionAr: "عصير برتقال طازج معصور حديثًا.",
    },
    {
        id: 38,
        name: "Fresh Lemon Juice",
        nameAr: "عصير ليمون فريش",
        category: "Fresh Juice",
        categoryAr: "عصائر فريش",
        price: 65,
        image: freshLemonJuice,
        description: "Fresh lemon juice with a refreshing citrus taste.",
        descriptionAr: "عصير ليمون فريش بمذاق حمضي منعش.",
    },
    {
        id: 39,
        name: "Lemon Mint",
        nameAr: "ليمون بالنعناع",
        category: "Fresh Juice",
        categoryAr: "عصائر فريش",
        price: 75,
        image: lemonMint,
        description: "Refreshing lemon juice blended with fresh mint.",
        descriptionAr: "عصير ليمون منعش ممزوج بالنعناع الطازج.",
    },
    {
        id: 40,
        name: "Mango Juice",
        nameAr: "عصير مانجو",
        category: "Fresh Juice",
        categoryAr: "عصائر فريش",
        price: 85,
        image: mangoJuice,
        description: "Smooth and naturally sweet mango juice.",
        descriptionAr: "عصير مانجو ناعم وحلو بطبيعته.",
    },
    {
        id: 41,
        name: "Strawberry Juice",
        nameAr: "عصير فراولة",
        category: "Fresh Juice",
        categoryAr: "عصائر فريش",
        price: 85,
        image: strawberryJuice,
        description: "Fresh strawberry juice with a naturally sweet taste.",
        descriptionAr: "عصير فراولة طازج بمذاق حلو طبيعي.",
    },
    {
        id: 42,
        name: "Watermelon Juice",
        nameAr: "عصير بطيخ",
        category: "Fresh Juice",
        categoryAr: "عصائر فريش",
        price: 75,
        image: watermelonJuice,
        description: "Light and refreshing fresh watermelon juice.",
        descriptionAr: "عصير بطيخ فريش خفيف ومنعش.",
    },

    // ==================== SMOOTHIES ====================

    {
        id: 43,
        name: "Strawberry Smoothie",
        nameAr: "سموزي فراولة",
        category: "Smoothie",
        categoryAr: "سموزي",
        price: 105,
        image: strawberrySmoothie,
        description: "Creamy blended strawberries with milk.",
        descriptionAr: "فراولة ممزوجة بالحليب بقوام كريمي.",
    },
    {
        id: 44,
        name: "Mango Smoothie",
        nameAr: "سموزي مانجو",
        category: "Smoothie",
        categoryAr: "سموزي",
        price: 105,
        image: mangoSmoothie,
        description: "Rich mango blended into a smooth creamy drink.",
        descriptionAr: "مانجو غنية ممزوجة في مشروب ناعم وكريمي.",
    },
    {
        id: 45,
        name: "Mixed Berry Smoothie",
        nameAr: "سموزي ميكس بيري",
        category: "Smoothie",
        categoryAr: "سموزي",
        price: 115,
        image: mixedBerrySmoothie,
        description: "A refreshing blend of mixed berries.",
        descriptionAr: "مزيج منعش من التوت المشكل.",
    },
    {
        id: 46,
        name: "Banana Smoothie",
        nameAr: "سموزي موز",
        category: "Smoothie",
        categoryAr: "سموزي",
        price: 95,
        image: bananaSmoothie,
        description: "Creamy banana smoothie with a naturally sweet taste.",
        descriptionAr: "سموزي موز كريمي بمذاق حلو طبيعي.",
    },

    // // ==================== MOCKTAILS ====================

    {
        id: 47,
        name: "Mojito",
        nameAr: "موهيتو",
        category: "Mocktail",
        categoryAr: "موكتيلات",
        price: 95,
        image: Mojito,
        description: "Refreshing lime, mint and sparkling water.",
        descriptionAr: "ليمون ونعناع ومياه غازية في مشروب منعش.",
    },
    {
        id: 48,
        name: "Strawberry Mojito",
        nameAr: "موهيتو فراولة",
        category: "Mocktail",
        categoryAr: "موكتيلات",
        price: 105,
        image: strawberryMojito,
        description: "Fresh strawberries, lime, mint and sparkling water.",
        descriptionAr: "فراولة طازجة مع الليمون والنعناع والمياه الغازية.",
    },
    {
        id: 49,
        name: "Passion Fruit Mojito",
        nameAr: "موهيتو باشن فروت",
        category: "Mocktail",
        categoryAr: "موكتيلات",
        price: 110,
        image: passionFruitMojito,
        description: "Passion fruit, lime and mint with sparkling water.",
        descriptionAr: "باشن فروت مع الليمون والنعناع والمياه الغازية.",
    },
    {
        id: 50,
        name: "Sunset",
        nameAr: "صن سيت",
        category: "Mocktail",
        categoryAr: "موكتيلات",
        price: 110,
        image: sunset,
        description:
            "A refreshing fruity mocktail with a beautiful layered look.",
        descriptionAr: "موكتيل فواكه منعش بطبقات جميلة ومتناسقة.",
    },
    {
        id: 51,
        name: "Blue Lagoon",
        nameAr: "بلو لاجون",
        category: "Mocktail",
        categoryAr: "موكتيلات",
        price: 105,
        image: blueLagoon,
        description: "A bright citrus mocktail with a refreshing finish.",
        descriptionAr: "موكتيل حمضيات منعش بمذاق خفيف ومنعش.",
    },
    // // ==================== DESSERTS ====================

    {
        id: 52,
        name: "Classic Cheesecake",
        nameAr: "تشيز كيك كلاسيك",
        category: "Dessert",
        categoryAr: "حلويات",
        price: 110,
        image: classicCheesecake,
        description: "Creamy cheesecake with a smooth classic flavor.",
        descriptionAr: "تشيز كيك كريمي بنكهة كلاسيكية ناعمة.",
    },

    {
        id: 53,
        name: "Chocolate Cake",
        nameAr: "كيكة الشوكولاتة",
        category: "Dessert",
        price: 100,
        image: chocolateCake,
        description: "Rich chocolate cake with a soft moist texture.",
        descriptionAr: "كيكة شوكولاتة غنية بقوام طري ورطب.",
    },
    {
        id: 54,
        name: "Tiramisu",
        nameAr: "تيراميسو",
        category: "Dessert",
        price: 120,
        image: tiramisu,
        description: "Classic Italian dessert with coffee and mascarpone.",
        descriptionAr: "حلوى إيطالية كلاسيكية بالقهوة والماسكاربوني.",
    },
    {
        id: 55,
        name: "Brownie",
        nameAr: "براوني",
        category: "Dessert",
        price: 90,
        image: brownie,
        description: "Rich chocolate brownie with a soft center.",
        descriptionAr: "براوني شوكولاتة غنية بقلب طري.",
    }
];

export const categories = [
    {
        en: "All",
        ar: "الكل",
    },
    {
        en: "Hot Coffee",
        ar: "قهوة ساخنة",
    },
    {
        en: "Cold Coffee",
        ar: "قهوة باردة",
    },
    {
        en: "Tea",
        ar: "شاي",
    },
    {
        en: "Matcha",
        ar: "ماتشا",
    },
    {
        en: "Chocolate",
        ar: "شوكولاتة",
    },
    {
        en: "Fresh Juice",
        ar: "عصائر فريش",
    },
    {
        en: "Smoothie",
        ar: "سموزي",
    },
    {
        en: "Mocktail",
        ar: "موكتيلات",
    },
    {
        en: "Dessert",
        ar: "حلويات",
    },
];