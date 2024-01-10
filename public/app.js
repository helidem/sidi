// app.js
const express = require('express');
const app = express();

const citations = [
    `Sidi Amadou Tijani Gassama dit : "Mieux vaut un âne qui porte des livres qu'un savant qui ne sait pas lire. La sagesse, c'est comme une clé, il faut savoir l'utiliser!"`,
    `Un jour, Sidi Amadou Tijani Gassama trouva un œuf de serpent dans son jardin. Il dit : "Même les serpents commencent petits, mais il vaut mieux ne pas les laisser grandir dans ton potager de la vie!"`,
    `Sidi Amadou Tijani Gassama raconte : "Un menteur a demandé à la vérité : 'Pourquoi tout le monde te fuit?' La vérité répondit : 'Parce que je ne suis pas toujours facile à avaler, mais au moins, je ne laisse pas un mauvais goût.'"`,
    `Un jour, Sidi Amadou Tijani Gassama demanda à son ami : "Pourquoi pleures-tu ?" L'ami répondit : "J'ai perdu quelque chose de très précieux." Sidi Amadou Tijani Gassama sourit et dit : "Cherche dans ton cœur, c'est souvent là que se cachent les trésors les plus importants."`,
    `Sidi Amadou Tijani Gassama dit : "La patience, c'est comme pêcher. Mieux vaut attendre calmement au bord de la rivière, sinon, tu risques de finir avec une botte mouillée et rien dans ton filet!"`,
    `Un jour, Sidi Amadou Tijani Gassama s'exclama : "On m'a demandé quel est le secret du bonheur. J'ai répondu : 'Savoir rire de soi-même, car c'est le seul rire sur lequel on a toujours le contrôle.'"`,
    `Sidi Amadou Tijani Gassama dit : "La vie est comme une tasse de thé. Parfois, elle est trop chaude, parfois trop froide. Il faut juste trouver le bon équilibre et siroter chaque moment avec sagesse."`,
    `Sidi Amadou Tijani Gassama raconte : "J'ai demandé à un sage comment atteindre la sagesse. Il m'a répondu : 'Comme on mange un éléphant, une bouchée à la fois. Prends chaque jour une leçon de vie, mais n'oublie pas de savourer le repas.'"`,
    `Un jour, Sidi Amadou Tijani Gassama dit à son voisin : "La vie est comme un arc-en-ciel, parfois il faut endurer la pluie pour voir toutes les couleurs. Alors, danse sous la pluie, mon ami!"`,
    `Sidi Amadou Tijani Gassama réfléchit et dit : "Certains pensent que la richesse se mesure aux biens matériels. Moi, je pense que la vraie richesse est d'avoir un cœur rempli d'amour et d'un bon sens de l'humour."`,
    `Un homme demanda à Sidi Amadou Tijani Gassama : "Comment puis-je éviter les problèmes dans la vie?" Il répondit avec un sourire : "C'est comme essayer d'éviter les oiseaux dans le ciel. Mieux vaut apprendre à voler avec eux."`,
    `Sidi Amadou Tijani Gassama dit : "La modestie, c'est comme une ombre. Elle te suit partout où tu vas. Plus tu te rapproches de la lumière, plus elle grandit."`,
    `Un jour, Sidi Amadou Tijani Gassama dit à son apprenti : "N'oublie pas que même le plus grand arbre a commencé petit. Sois humble dans ta croissance et n'oublie jamais tes racines."`,
    `Sidi Amadou Tijani Gassama réfléchit et dit : "Le pardon, c'est comme nettoyer une tache sur un vêtement. Cela ne rend pas la tache inexistante, mais cela permet de porter le vêtement sans être constamment rappelé de la tache."`,
    `Un jour, Sidi Amadou Tijani Gassama dit en souriant : "La vie est un voyage, et il vaut mieux avoir une carte, mais parfois, il est aussi amusant de se perdre et de découvrir des trésors inattendus le long du chemin."`,
    `Sidi Amadou Tijani Gassama affirme : "Le mensonge est comme une chèvre dans un jardin. Au début, ça peut sembler inoffensif, mais bientôt, elle aura tout dévoré. Mieux vaut cultiver la vérité."`,
    `Un jour, Sidi Amadou Tijani Gassama dit : "Le mensonge est une ombre qui suit toujours celui qui la crée. Tôt ou tard, la lumière de la vérité la révélera."`,
    `Sidi Amadou Tijani Gassama raconte : "Un menteur a construit une maison sur des fondations fragiles de mensonges. Un jour, le vent de la vérité est venu, et la maison s'est effondrée."`,
    `Un homme demanda à Sidi Amadou Tijani Gassama : "Pourquoi éviter le mensonge?" Il répondit avec sagesse : "Parce que le mensonge est comme une petite pierre jetée dans un étang. Les ondes se propagent et touchent tout, même les rives de l'âme."`,
    `Sidi Amadou Tijani Gassama dit : "Le mensonge peut être une route facile, mais c'est une route sans issue. Tôt ou tard, tu te retrouveras perdu sans savoir par où aller."`,
    `Un jour, Sidi Amadou Tijani Gassama dit à son ami : "Le mensonge est comme un feu de paille. Il brille intensément un moment, puis s'éteint rapidement, laissant derrière lui des cendres de méfiance."`,
    `Sidi Amadou Tijani Gassama réfléchit et dit : "La vérité peut parfois être douloureuse, mais le mensonge est comme une fausse douceur qui finit par causer une amertume persistante."`,
    `Un apprenti demanda à Sidi Amadou Tijani Gassama : "Pourquoi certains mentent-ils?" Il répondit : "Parce qu'ils pensent que le mensonge est un raccourci vers le bonheur, mais en réalité, c'est un détour vers la tristesse."`,
    `Sidi Amadou Tijani Gassama dit en souriant : "Les mensonges sont comme des graines de mauvaises herbes. Si tu ne les arraches pas à temps, ils envahiront ton jardin et étoufferont la vérité."`,
    `Un jour, Sidi Amadou Tijani Gassama dit avec sagesse : "La confiance est comme un miroir. Une fois brisé par le mensonge, même les morceaux recollés ne reflètent plus jamais la même image."`,
    `Sidi Amadou Tijani Gassama affirme : "Un esprit têtu est comme une porte fermée. Même si tu as la clé de la sagesse, il faut d'abord ouvrir l'esprit avant d'entrer."`,
    `Un jour, Sidi Amadou Tijani Gassama dit : "L'insolence est une petite graine qui pousse dans le sol de l'ignorance. Mieux vaut la traiter avant qu'elle ne devienne un arbre d'arrogance."`,
    `Sidi Amadou Tijani Gassama raconte : "J'ai rencontré un homme tellement têtu qu'il aurait refusé de changer d'avis même s'il avait tort. La sagesse, c'est savoir plier avant de rompre."`,
    `Un homme demanda à Sidi Amadou Tijani Gassama : "Comment traiter quelqu'un de tête dure?" Il répondit : "Comme un sculpteur traite une pierre. Patiemment, avec finesse, et en espérant que la beauté de la compréhension émerge."`,
    `Sidi Amadou Tijani Gassama dit : "L'insolence est comme une tempête dans une tasse de thé. Cela fait beaucoup de bruit, mais cela ne changera pas la température de l'eau."`,
    `Un jour, Sidi Amadou Tijani Gassama dit à son ami : "Les têtus sont comme des arbres sans racines profondes. Ils se balancent au gré du vent de l'ignorance sans jamais trouver une stabilité véritable."`,
    `Sidi Amadou Tijani Gassama réfléchit et dit : "L'obstination est comme une route fermée. Même si tu insistes pour avancer, tu finiras par te retrouver face à un mur."`,
    `Un apprenti demanda à Sidi Amadou Tijani Gassama : "Comment faire face à quelqu'un d'insolent?" Il répondit : "Avec le calme d'un lac, même lorsqu'une pierre est jetée à sa surface, il retrouve rapidement sa tranquillité."`,
    `Sidi Amadou Tijani Gassama dit en souriant : "Les têtus ressemblent parfois à des mulets. Ils avancent, mais il faut parfois une bonne tape sur l'épaule de la réalité pour les faire changer de direction."`,
    `Un jour, Sidi Amadou Tijani Gassama dit avec sagesse : "L'insolence est une ombre qui obscurcit le chemin de la compréhension. Si tu veux voir la lumière, il faut apprendre à disperser les nuages de l'orgueil."`,
    `Sidi Amadou Tijani Gassama dit : "Le racisme est comme une tempête qui obscurcit le ciel de l'humanité. La vraie couleur de notre monde ne se révèle que lorsque nous apprenons à apprécier la diversité de chaque nuance."`,
    `Un jour, Sidi Amadou Tijani Gassama raconte : "J'ai vu un jardin où chaque fleur était unique. Imaginez si toutes les fleurs étaient identiques, le jardin perdrait sa beauté. De même, la diversité rend notre monde plus riche."`,
    `Sidi Amadou Tijani Gassama affirme : "Le racisme est une maladie de l'esprit qui rend aveugle à la beauté de la diversité. La guérison commence lorsque nous ouvrons les yeux pour voir la richesse de chaque couleur."`,
    `Il dit également : "Les différences entre nous sont comme les notes d'une mélodie. Ensemble, elles créent une harmonie magnifique. Ignorer cela, c'est manquer la symphonie de l'humanité."`,
    `Sidi Amadou Tijani Gassama réfléchit et dit : "Le racisme est une porte fermée à la compréhension. Ouvrons plutôt la porte de la tolérance et de l'acceptation pour construire des ponts entre les cœurs."`,
    `Un homme demanda à Sidi Amadou Tijani Gassama : "Comment vaincre le racisme?" Il répondit : "En plantant des graines d'amour et de compréhension dans le sol de l'ignorance, afin de cultiver un jardin où chaque être humain peut s'épanouir."`,
    `Sidi Amadou Tijani Gassama dit en souriant : "Le racisme est comme une cage qui emprisonne non seulement ceux qui sont jugés, mais aussi ceux qui jugent. La liberté réside dans l'acceptation et la célébration de nos différences."`,
    `Il conclut avec sagesse : "Le racisme est un poids que l'humanité porte depuis trop longtemps. Il est temps de le déposer et de marcher ensemble vers un avenir où la diversité est célébrée, non pas tolérée."`,
];


app.use(express.static('public'));

app.get('/citation', (req, res) => {
    const citationAleatoire = citations[Math.floor(Math.random() * citations.length)];
    res.json({ citation: citationAleatoire });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}`);
});
