export const site = {
  name: "Dog Harmonie",
  tagline: "Éducation bienveillante & gestion du comportement canin",
  description:
    "Dog Harmonie, c'est avant tout écouter, respecter et satisfaire les besoins de votre chien pour apprendre en s'amusant. Méthodes positives, résultats durables.",
  phone: "07 82 63 44 66",
  email: "dogharmonie.education@gmail.com",
  location: "Métropole Valenciennoise · Saint-Saulve (59880)",
  siret: "885 335 166 00017",
  social: {
    instagram: "https://www.instagram.com/dogharmonie/",
    facebook: "https://www.facebook.com/dogharmonieeducation",
  },
};

export const services = [
  {
    id: "coaching",
    title: "Coaching Éducatif",
    subtitle: "Cours personnalisés à domicile",
    description:
      "Programme sur-mesure utilisant méthodes positives et conditionnement au clicker. Bilan comportemental gratuit inclus, suivi de 5 séances progressives : d'abord chez vous, puis en milieu extérieur pour travailler rappel et tenue en laisse.",
    details: ["Bilan comportemental 2h offert", "5 séances de 45min ou cours à l'unité", "Accès à vie Dog Harmonie Académie", "Balades collectives hebdomadaires incluses"],
    image: "/photos/coaching.jpg",
    price: "Forfait à partir de 275 €",
  },
  {
    id: "comportement",
    title: "Gestion du Comportement",
    subtitle: "Accompagnement ultra-personnalisé",
    description:
      "Pour les maîtres qui rencontrent des problématiques prononcées : peur, malpropreté, hyper-activité, réactivité. Rééducation post-traumatique par contre-conditionnement.",
    details: ["Bilan comportemental 2h approfondi", "Séances à l'unité d'1h adaptées", "Suivi de progression personnalisé", "Accès à vie Dog Harmonie Académie"],
    image: "/photos/bilan.jpg",
    price: "Sur devis (séance à 45 €)",
  },
  {
    id: "adoption",
    title: "Accompagnement Pré-Adoption",
    subtitle: "Préparez l'arrivée de votre chien",
    description:
      "Un service complet pour les futurs adoptants : choix de la race, sélection du lieu d'adoption, aménagement du foyer et conseils nutritionnels pour démarrer sur de bonnes bases.",
    details: ["RDV 2h : Sensibilisation pré-adoption", "RDV 1h : Suivi post-adoption", "Forfait 5 séances coaching", "Socialisation hebdomadaire incluse"],
    image: "/photos/pre-adoption.jpg",
    price: "Forfait complet disponible",
  },
  {
    id: "balades",
    title: "Balades Collectives Éducatives",
    subtitle: "Socialisation & dépense en groupe",
    description:
      "Des promenades hebdomadaires en petit groupe pour travailler la socialisation et la marche en laisse dans un cadre fun et bienveillant. Réservées aux membres de la Dog Harmonie Académie.",
    details: ["Séances d'1h30 en extérieur", "Petits groupes pour plus d'attention", "Travail de la marche en laisse", "Renforcement des apprentissages"],
    image: "/photos/balades.jpg",
    price: "15 € / séance (membres)",
  },
  {
    id: "centre-aere",
    title: "Centre Aéré Canin",
    subtitle: "Une journée de bonheur pour votre chien",
    description:
      "Collecte à domicile, transport en mini-bus, 3h d'activités sur terrain clôturé avec piscines et bac à sable. Votre chien rentre épanoui et fatigué !",
    details: ["Collecte et retour à domicile", "Terrain verdoyant entièrement clôturé", "Piscines, bac à sable, jeux", "Tous les jeudis en saison, 9h–16h"],
    image: "/photos/centre-aere.jpg",
    price: "45 € / jour (35–38 € membres)",
  },
  {
    id: "sports",
    title: "Sports Canins",
    subtitle: "Canicross, Frisbee, Treibball",
    description:
      "Des séances sportives en petit groupe pour allier dépense physique, stimulation mentale et complicité avec votre chien. Exclusivement réservé aux membres de la Dog Harmonie Académie.",
    details: ["Canicross (saison hivernale)", "Frisbee Freestyle & Treibball (été)", "Petits groupes · vendredi & samedi matin", "Séances d'1h30"],
    image: "/photos/sports-canins.jpg",
    price: "20 € / séance (15 € membres)",
  },
];

export const pricing = [
  {
    category: "Éducation",
    items: [
      { name: "Bilan comportemental (2h)", price: "100 €", note: "À domicile ou en visio" },
      { name: "Séance individuelle (1h)", price: "45 €", note: "En extérieur ou à domicile" },
      { name: "Forfait Chiot (5 séances)", price: "275 €", note: "Bilan + 5 séances + académie" },
    ],
  },
  {
    category: "Loisirs & Sport",
    items: [
      { name: "Centre aéré (journée)", price: "45 €", note: "35–38 € pour les membres" },
      { name: "Sports canins (1h30)", price: "20 €", note: "15 € pour les membres" },
      { name: "Balade collective (1h30)", price: "15 €", note: "Membres uniquement" },
    ],
  },
  {
    category: "Frais de déplacement",
    items: [
      { name: "Jusqu'à 10 km", price: "Offert", note: "Depuis Saint-Saulve 59880" },
      { name: "+10 km", price: "+5 €", note: "" },
      { name: "+15 km", price: "+10 €", note: "" },
      { name: "+20 km", price: "+15 €", note: "" },
    ],
  },
];

export const testimonials = [
  {
    name: "Sophie M.",
    dog: "Labrador 2 ans",
    text: "Grâce au coaching de Dog Harmonie, notre Labrador a appris la marche en laisse en seulement 3 séances. L'approche bienveillante est vraiment différente, mon chien adore les séances !",
    rating: 5,
    photo: "/photos/testimonial-sophie.jpg",
  },
  {
    name: "Thomas & Julie",
    dog: "Border Collie réactif",
    text: "Notre border collie était très réactif envers les autres chiens. Le programme comportemental a vraiment tout changé. Nous pouvons enfin profiter de balades sereinement.",
    rating: 5,
    photo: "/photos/testimonial-thomas.jpg",
  },
  {
    name: "Amélie L.",
    dog: "Berger Australien chiot",
    text: "Le forfait chiot est excellent. On a été super bien accompagnés dès l'arrivée de notre berger. Les conseils pre-adoption nous ont évité beaucoup d'erreurs de débutants !",
    rating: 5,
    photo: "/photos/testimonial-amelie.jpg",
  },
];

export const team = [
  {
    name: "Alex",
    role: "Fondateur & Éducateur canin comportementaliste",
    bio: "Mon aventure a commencé avec Falcko, mon Parson Russell Terrier. Après une carrière de manager en grande distribution et des voyages à l'étranger, j'ai tout arrêté pour me recentrer — et permettre à Falcko de s'épanouir. Ce qui devait être un moyen d'aider mon chien est devenu une vraie vocation.",
    quote: "Avec de la volonté, de l'amour et les bonnes clés, tout est possible.",
    dogs: "Falcko, Koda & Saucisse",
    photo: "/photos/alex.jpg",
    certifications: ["Certificat ACACED", "Formation 6 mois Paw's Up Éducation (Lille)", "Soins coopératifs", "Premiers secours canins", "Enseignement des loisirs canins", "Bénévolat associations animalières"],
  },
  {
    name: "Caroline",
    role: "Éducatrice canine",
    bio: "Caro nous a rejoints fin 2022. Dynamique, amoureuse des loulous, elle apporte ses diplômes et son expérience pour accompagner les suivis éducatifs avec enthousiasme.",
    quote: "L'humain et le chien au cœur des relations.",
    dogs: "Sky (Beaucerone)",
    photo: "/photos/caroline.jpg",
    certifications: ["Diplôme d'éducation canine", "Suivis éducatifs"],
  },
];

export const faqs = [
  {
    q: "À partir de quel âge peut-on commencer l'éducation ?",
    a: "L'éducation peut commencer dès 2 mois. C'est même le meilleur moment ! Les chiots sont comme des éponges entre 2 et 4 mois. Plus tôt vous commencez, plus c'est facile pour tout le monde.",
  },
  {
    q: "Utilisez-vous des méthodes coercitives ?",
    a: "Non, jamais. Dog Harmonie travaille exclusivement avec des méthodes positives et le conditionnement au clicker. Pas de colliers étrangleurs, pas de punitions, uniquement de la motivation et du plaisir.",
  },
  {
    q: "Intervenez-vous partout dans la métropole valenciennoise ?",
    a: "Oui, j'interviens dans toute la métropole de Valenciennes. Des frais de déplacement s'appliquent à partir de 10 km de Saint-Saulve. N'hésitez pas à me contacter pour vérifier votre secteur.",
  },
  {
    q: "Comment se déroule le premier bilan comportemental ?",
    a: "Le bilan (2h) se déroule à votre domicile ou en visio. J'observe votre chien dans son environnement, j'échange avec vous sur vos objectifs et ses comportements, puis je construis un programme de travail adapté.",
  },
  {
    q: "Qu'est-ce que la Dog Harmonie Académie ?",
    a: "C'est un espace en ligne accessible à vie inclus dans tous nos forfaits. Vous y trouverez des exercices, du contenu pédagogique et le suivi de votre programme entre les séances.",
  },
];
