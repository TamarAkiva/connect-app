let questions = [
{"id":1,"text":"What is your most treasured memory?","type":"question","category":["social"]},
{"id":2,"text":"Describe a time you were offended.","type":"question","category":["social"]},
{"id":3,"text":"What have you changed your mind about recently?","type":"question","category":["social"]},
{"id":4,"text":"What's the worst thing someone could say about you? List three things.","type":"question","category":["social"]},
{"id":5,"text":"What is the greatest accomplishment of your life?","type":"question","category":["social"]},
{"id":6,"text":"What is a dream you let go of and why?","type":"question","category":["social"]},
{"id":7,"text":"Describe a time you hurt someone. What happened, and how did you rectify the situation?","type":"question","category":["social"]},
{"id":8,"text":"Before making a phone call, do you ever rehearse what you're going to say?","type":"question","category":["social"]},
{"id":9,"text":"What item has the most sentimental value to you?","type":"question","category":["social"]},
{"id":10,"text":"What is your most terrible memory?","type":"question","category":["social"]},
{"id":11,"text":"Would you change anything about how you were raised? Why or why not?","type":"question","category":["social"]},
{"id":12,"text":"What do you find beautiful that others don't?","type":"question","category":["social"]},
{"id":13,"text":"What insecurity of yours holds you back the most?","type":"question","category":["social"]},
{"id":14,"text":"What compliment do you think you hear the most, and what compliment do you think I hear the most?","type":"question","category":["social"]},
{"id":15,"text":"How have you changed in the last few years?","type":"question","category":["social"]},
{"id":16,"text":"What are you currently unlearning?","type":"question","category":["social"]},
{"id":17,"text":"How do you talk about people who hurt you? Are you bitter, or do you take accountability?","type":"question","category":["social"]},
{"id":18,"text":"What scares you beyond the obvious?","type":"question","category":["social"]},
{"id":19,"text":"How do you show love not just in words but in actions and presence?","type":"question","category":["social"]},
{"id":20,"text":"What are you proud of and why?","type":"question","category":["social"]},
{"id":21,"text":"What is your idea of a good life?","type":"question","category":["social"]},
{"id":22,"text":"What does home feel like to you?","type":"question","category":["social"]},
{"id":23,"text":"How did your childhood memories shape the way you process emotions and relationships?","type":"question","category":["social"]},

{"id":24,"text":"Take a deep breath and look into your partner's eyes for four minutes in silence.","type":"challenge","category":["relationships"]},
{"id":25,"text":"Have you ever thought of me as more than a friend?","type":"question","category":["relationships"]},
{"id":26,"text":"Share something you consider a positive characteristic of your partner.","type":"question","category":["relationships"]},
{"id":27,"text":"What comes first for you: physical or emotional attraction?","type":"question","category":["relationships"]},
{"id":28,"text":"If you were to die right now, what would you most regret not telling someone?","type":"question","category":["relationships"]},
{"id":29,"text":"What does it mean to be vulnerable with your partner?","type":"question","category":["relationships"]},
{"id":30,"text":"What about your life do you wish would never change and why?","type":"question","category":["relationships"]},
{"id":31,"text":"In what area of your life do you not trust yourself?","type":"question","category":["relationships"]},
{"id":32,"text":"On a scale of 1 to 10, how ready do you feel to be in a relationship?","type":"question","category":["relationships"]},
{"id":33,"text":"What is one thing you secretly find irresistible?","type":"question","category":["relationships"]},
{"id":34,"text":"Do you secretly enjoy red flags until they hurt you?","type":"question","category":["relationships"]},
{"id":35,"text":"Tell each other about your first crush.","type":"challenge","category":["relationships"]},
{"id":36,"text":"Share three positive characteristics about your partner.","type":"question","category":["relationships"]},
{"id":37,"text":"What was the biggest lesson your past relationship taught you?","type":"question","category":["relationships"]},
{"id":38,"text":"What is something you regret not doing in a past relationship?","type":"question","category":["relationships"]},
{"id":39,"text":"How do you think relationships should work?","type":"question","category":["relationships"]},
{"id":40,"text":"If you were to marry someone you know now, who would it be?","type":"question","category":["relationships"]},
  
{"id":41,"text":"If someone met you at a party, what misconception might they have about you?","type":"question","category":["social"]},
{"id":42,"text":"Do you ever feel like you have something to prove?","type":"question","category":["social"]},
{"id":43,"text":"When was the last time someone told you that you've changed?","type":"question","category":["social"]},
{"id":44,"text":"What emotion do you feel when walking into your childhood home?","type":"question","category":["social"]},
{"id":45,"text":"Rate how attractive the person across from you is from 1 to 10.","type":"question","category":["social"]},
{"id":46,"text":"FaceTime the other person's mom.","type":"challenge","category":["social"]},
{"id":47,"text":"Search your name in the other person's messages.","type":"challenge","category":["social"]},
{"id":48,"text":"What do you imagine other people assume about you?","type":"question","category":["social"]},
{"id":49,"text":"Call your mom and tell her about the other person.","type":"challenge","category":["social"]},
{"id":50,"text":"What are your top three moments from our friendship?","type":"question","category":["social"]},
{"id":51,"text":"When do you feel the safest around someone?","type":"question","category":["social"]},
{"id":52,"text":"Is there a version of you only one person has ever seen?","type":"question","category":["social"]},
{"id":53,"text":"What small moment changed everything for you?","type":"question","category":["social"]},
{"id":54,"text":"What is worse: being unloved or misunderstood?","type":"question","category":["social"]},
{"id":55,"text":"If your life was a TV show, who would viewers want you to end up with?","type":"question","category":["social"]},
{"id":56,"text":"If I dared you to do something out of character, what would it be?","type":"question","category":["social"]},
{"id":57,"text":"What random thing makes you laugh uncontrollably?","type":"question","category":["social"]},
{"id":58,"text":"If you could live a day in someone else's life, whose would it be?","type":"question","category":["social"]},
{"id":59,"text":"If we were in a movie together, what genere would it be?","type":"question","category":["social"]},
{"id":60,"text":"What wild impossible thing have you always wanted to do?","type":"question","category":["social"]},
{"id":61,"text":"If you were a movie character, what would the audience shout at you to do?","type":"question","category":["social"]},
{"id":62,"text":"Do you think some people are better off never having kids?","type":"question","category":["social"]},
{"id":63,"text":"What is the kindest lie you have ever told someone you love?","type":"question","category":["social"]},
{"id":64,"text":"Is closure real or just emotional stalling?","type":"question","category":["social"]},
{"id":65,"text":"What would your younger self be proud of today?","type":"question","category":["social"]},
{"id":66,"text":"When did you realize your parents were just people?","type":"question","category":["social"]},
{"id":67,"text":"What habit would you never admit on a first date?","type":"question","category":["social"]},
{"id":68,"text":"Would you prefer total transparency or a little mystery?","type":"question","category":["social"]},
{"id":69,"text":"What do you need during conflict but rarely say out loud?","type":"question","category":["social"]},
{"id":70,"text":"What did you once think was normal but now see as toxic?","type":"question","category":["social"]},
{"id":71,"text":"Can people outgrow love? If yes, was it ever real?","type":"question","category":["social","relationships"]},

{"id":72,"text":"How do you handle stress?","type":"question","category":["growth"]},
{"id":73,"text":"How have you shown growth awareness in the past few years?","type":"question","category":["growth"]},
{"id":74,"text":"What do you need inside yourself that you have been neglecting?","type":"question","category":["growth"]},
{"id":75,"text":"How do your fears reveal how safe you feel being seen?","type":"question","category":["growth"]},
{"id":76,"text":"How do you show love consistently through presence?","type":"question","category":["growth"]},
{"id":77,"text":"What are you working toward and why?","type":"question","category":["growth"]},
{"id":78,"text":"What strange belief do you still stand by today?","type":"question","category":["growth","social"]},
{"id":79,"text":"What would you like people to ask you more about?","type":"question","category":["growth","social"]},

{"id":83,"text":"Learn one poem a week this year.","type":"experience","category":["learning"]},
{"id":84,"text":"Memorize country capitals.","type":"experience","category":["learning"]},
{"id":85,"text":"Learn to identify constellations.","type":"experience","category":["learning"]},
{"id":86,"text":"Write short reviews of movies or books you experience.","type":"experience","category":["learning"]},
{"id":87,"text":"Listen to iconic albums from music history.","type":"experience","category":["learning"]},
{"id":88,"text":"Identify plants you see and learn their names.","type":"experience","category":["learning"]},
{"id":89,"text":"Learn greetings in several languages.","type":"experience","category":["learning"]},
{"id":90,"text":"Draw neurographic lines or mandalas.","type":"experience","category":["learning"]},
{"id":91,"text":"Keep a daily thought journal.","type":"experience","category":["learning"]},

{"id":92,"text":"Go for a walk and see who gets the most nods from strangers.","type":"challenge","category":["fun"]},
{"id":93,"text":"Go to an aquarium and name every fish you see.","type":"challenge","category":["fun"]},
{"id":94,"text":"Decide a new pope between yourselves.","type":"challenge","category":["fun"]},
{"id":95,"text":"Go to a thrift store and build the best toy army.","type":"challenge","category":["fun"]},
{"id":96,"text":"Stand guard where one person only tells truths and the other only lies.","type":"challenge","category":["fun"]},
{"id":97,"text":"Go to Ikea and play family.","type":"challenge","category":["fun"]},
{"id":98,"text":"Start a flash mob.","type":"challenge","category":["fun"]},
{"id":99,"text":"Perform a dramatic fake ritual.","type":"challenge","category":["fun"]},
{"id":100,"text":"Turn your meet-up into a talk show interview.","type":"challenge","category":["fun"]},
{"id":101,"text":"Return shopping carts in a parking lot competition.","type":"challenge","category":["fun"]},
{"id":102,"text":"Play 'Will it waffle?' with random foods.","type":"challenge","category":["fun"]},
{"id":103,"text":"Do a show and tell from your junk drawer.","type":"challenge","category":["fun"]},
{"id":104,"text":"Go people watching and invent stories.","type":"challenge","category":["fun"]},
{"id":105,"text":"Plan a fictional bank heist.","type":"challenge","category":["fun"]},
{"id":106,"text":"Build a Rube Goldberg machine.","type":"challenge","category":["fun"]},
{"id":107,"text":"Try to beat a high score at an arcade.","type":"challenge","category":["fun"]},
{"id":108,"text":"Play HORSE while eating donut holes.","type":"challenge","category":["fun"]},
{"id":109,"text":"Have a lightsaber fight.","type":"challenge","category":["fun"]},
{"id":110,"text":"Start a podcast debriefing your meet-up.","type":"challenge","category":["fun"]},
{"id":111,"text":"Test drive a car and see how long you last.","type":"challenge","category":["fun"]},
{"id":112,"text":"Try solving an old cold case mystery.","type":"challenge","category":["fun"]},
{"id":113,"text":"Record a dramatic 'if you're watching this I'm dead' video.","type":"challenge","category":["fun"]},
{"id":114,"text":"Make a bingo card of movie clichés.","type":"challenge","category":["fun"]},
{"id":115,"text":"Sign up for a welding class and forge jewelry.","type":"challenge","category":["fun"]},
{"id":116,"text":"Have a Nerf battle.","type":"challenge","category":["fun"]},
{"id":117,"text":"Have a laser tag battle.","type":"challenge","category":["fun"]}
];
let usedQuestions = {};
let questionCounter = 0;

function nextQuestion() {
  const category = document.getElementById("categorySelect").value;
  const mode = document.getElementById("modeSelect").value;
  if (!usedQuestions[category]) {
    usedQuestions[category] = [];
  }
  // כל השאלות בקטגוריה
  let categoryQuestions = questions.filter(q =>
    q.category.includes(category)
  );
  // שאלות שלא נשאלו עדיין
  let available = categoryQuestions.filter(q =>
    !usedQuestions[category].includes(q.id)
  );
  // אם נגמרו השאלות איפוס
  if (available.length === 0) {
    usedQuestions[category] = [];
    available = categoryQuestions;
  }
  let question;
  // NORMAL MODE
  if (mode === "normal") {
    question = randomItem(available);
  }
  // GAME MODE
  else {
    if (questionCounter >= 3) {
      let challenges = available.filter(q => q.type === "challenge");
      if (challenges.length > 0) {
        question = randomItem(challenges);
        questionCounter = 0;
      } else {
        question = randomItem(available);
      }
    } else {
      let normalQuestions = available.filter(q => q.type === "question");

      if (normalQuestions.length > 0) {
        question = randomItem(normalQuestions);
      } else {
        question = randomItem(available);
      }
      questionCounter++;
    }
  }
  usedQuestions[category].push(question.id);
  displayQuestion(question);
}
// פונקציה לבחירה אקראית
function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
// פונקציה להצגת השאלה
function displayQuestion(question) {
  const card = document.getElementById("card");
  if (question.type === "challenge") {
    card.classList.add("challenge");
    card.innerText = "Challenge unlocked\n\n" + question.text;
  } else {
    card.classList.remove("challenge");
    card.innerText = question.text;
  }
}
  usedQuestions[category].push(question.id);
  document.getElementById("card").innerText = question.text;
}
