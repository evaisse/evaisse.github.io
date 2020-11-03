

let list = [
  [
     'Tu peux',
     'Il faut',
     'Tu dois',
     'Normalement, t\'aurais pu',
     'CF la doc officielle sur stackoverflow, il faudra', 
     'J\'ai trouvé la rootcause, il fallait ',
     'Je suis sûr à 99% que tu peux',
     'Suite à une décision du comex, attends-toi à',
  ],
  [ // action
    'modifier',
    'altérer',
    'synchroniser',
    'recompiler',
    'formatter',
    'discard',
    'incrémenter',
    'livrer',
    ],
  [ // temporalité / contexte
    'sans les mains',
    'par retro-ingénierie',
    'ASAP',
    'simplement',
    'un vendredi soir',
    'sans ticket',
    'hors VPN',
    'avec le proxy',
    'avec l\'aide d\'un creative developer',
    'en méthode agile',
    'en hotfix',
    ],
  [
    'le wording',
    'le protocol',
    'la structure',
    'la composition',
    'l\'asynchronicité',
    'la résponsivité',
    'les inodes',
    'le styleguide',
    'le build',
    'les tests',
    'la containeurisation',
    ],
  [
      'du pink weekend',
    'du composant',
    'du design system',
    'du kafka',
    'du digital',
    'de l\'API',
    'du json schema',
    'du kernel',
    'dans un ticket JIRA à l\'infographie',
    'des logs',
    'de la machine à café',
    'de la livraison',
    ],
];



let fetchText = () => {
    return list.reduce((output, input) => {
    output.push(input.sort(() => Math.random() - 0.5)[0]);
    return output;
  }, []).join(' ') + '.';
}


let sentence = document.createElement('h1');
sentence.innerHTML = fetchText();
document.getElementById('app').append(sentence);
document.getElementById('reload-btn').addEventListener('click', () => {
    sentence.innerHTML = fetchText();
});



