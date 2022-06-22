const fillers = {
    hello: ["Hello", "Hi", "Greetings", "你好", "How are you", "What is going on", "What's up", "Yo"],
    adventurer: ["my dude", "bro", "兄弟", "大哥", "fellow", "my guy", "man", "guardian", "people", "madam", "sir", "$adventurer and $adventurer", "$adventurer, $adventurer, and $adventurer", "Geoff"],
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "nice day", "big day"],
    pre: ["Fra", "Tro", "Gre", "Pan", "Ast", "Ara"],
    post: ["gria", "ston", "gott","-on-the-lee", "ora", "Ara", "uwu"],
    what: ["dangerous", "scary", "difficult", "important", "easy","honored", "forgotten","mystic"],
    item: ["axe", "staff", "book", "cloak", "shield", "club", "sword", "magic gloves", "galvel", "fists", "mace", "potato"],
    num: ["two", "three", "eleven", "so many", "too many", "an unsatisfying number of", "barely any", "an unspecified amount of", "surely a satisfactory number of", "one", "few", "一点点", "a little"],
    looty: ["gleaming", "valuable", "esteemed", "rare", "exalted", "scintillating", "kinda gross but still usefull", "complete garbage"],
    loots: ["coins", "chalices", "ingots", "hides", "victory points", "gems","scrolls", "bananas", "noodles", "goblins", "CS Majors", "college credits", "bottle of water"],
    baddies: ["orcs", "glubs", "fishmen", "cordungles", "mountain trolls", "college professors", "dragon", "evil $adventurer", "agents of chaos", "game designers"],
    do:["pet a dog, because they never had a dog", "build a school", "learn how to cook", "read a book", "study in CMPM 147", "起飞", "do nothing", "design a game"],
    
  };
  
  const template = `$hello, $adventurer, it is $day today,
  
  I have to announce you that, I come from $pre$post and I am here to give you a $what mission. You need to go to my town, and find the %baddies, and help them to $do.
  
  Once you finished the job, you will be awarded with $num $looty $loots. JUST DO IT $adventurer!
  `;
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
