var projects = [];

// var projectIXJournal = {
//   id: "iXJournal",
//   projectSession: "iOS",
//   title: "iX Journal",
//   imageSource: "url(images/apps/iXJournal.png)",
//   projectText: "This is the second project app our students developed in the iOS course we taught at iXperience Cape Town, South Africa. Currently in the App Store.",
//   projectTimes: "July '16",
//   videoSource: "",
//   projectLinks: [{link:"https://itunes.apple.com/us/app/ix-journal/id1134250801?mt=8", linktype:"appleStore"}]
// };
// projects.push(projectIXJournal);

// var projectTicTacToe = {
//   id: "iXoX",
//   projectSession: "iOS",
//   title: "Tic Tac Toe",
//   imageSource: "url(images/apps/iXoX.png)",
//   projectText: "This is the first project app our students developed in the iOS course we taught at iXperience Cape Town, South Africa. Currently in the App Store.",
//   projectTimes: "June '16",
//   videoSource: "",
//   projectLinks: [{link:"https://itunes.apple.com/us/app/ix-ox/id1125351984?mt=8", linktype:"appleStore"}]
// };
// projects.push(projectTicTacToe);

// var projectPio = {
//   id: "pio",
//   projectSession: "iOS",
//   title: "PIO SMART RECORDER",
//   imageSource: "url(images/apps/pio.png)",
//   projectText: "We built Pio to help people record audio, mark important moments and export them, all in a simple interface. I was in charge of the iOS development.",
//   projectTimes: "June '14 - present",
//   videoSource: "videos/pio-video.mp4",
//   projectLinks: [{link:"http://propelland.com/pio-smart-audio-recorder-app/", linktype:"web"},{link:"http://thenextweb.com/apps/2015/07/20/pio-for-ios-is-the-perfect-audio-recording-app-for-interviews/", linktype:"press"},{link:"https://itunes.apple.com/us/app/pio-smart-recorder/id923119916?ls=1&mt=8", linktype:"appleStore"}]
// };
// projects.push(projectPio);

// var projectCalFit = {
//   id: "calFit",
//   projectSession: "iOS",
//   title: "Fitness recommendation app",
//   imageSource: "url(images/apps/calFitness.png)",
//   projectText: "Along with Professor Aswani and Mo Zhou, a PhD student, we are working on an app that recommends workouts using machine learning algorithms.",
//   projectTimes: "February '16 - present",
//   videoSource: "",
//   projectLinks: []
// };
// projects.push(projectCalFit);

// var projectEasyDoesIt = {
//   id: "easyDoesIt",
//   projectSession: "iOS",
//   title: "EASY DOES IT",
//   imageSource: "url(images/apps/easyDoesIt.png)",
//   projectText: "In 24 hours we designed and prototyped an iOS app that improves communications between users and the non-profit, as well as improving internal communications. We won Bekeley Builds Spring 16 - Easy Does It designathon.",
//   projectTimes: "April '16",
//   videoSource: "",
//   projectLinks: [{link:"https://docs.google.com/presentation/d/1YoJWUQPQsoThpYJESuDRL511C2gJsaWl9Ggi8dpC3wk/edit", linktype:"presentation"}]
// };
// projects.push(projectEasyDoesIt);

// var projectClock = {
//   id: "clock",
//   projectSession: "iOS",
//   title: "PROPELLAND TIME!",
//   imageSource: "url(images/apps/clock.png)",
//   projectText: "Daniel Facio and I made an iOS app connected to an RFDuino that moved the propellers of a clock by blowing into the microphone of the phone.",
//   projectTimes: "August '14",
//   videoSource: "",
//   projectLinks: [{link:"http://www.danielfacio.com/propelland-time.html", linktype:"web"}]
// };
// projects.push(projectClock);

// var projectInfiniteMirror = {
//   id: "infiniteMirror",
//   projectSession: "other",
//   title: "INFINITE MIRROR",
//   imageSource: "url(images/projects/project-infiniteMirror.png)",
//   projectText: "Infinite mirror made with an Arduino, a full mirror, a half mirror, a 3D printed case, and a LED strip.",
//   projectTimes: "August '14",
//   projectLinks: [{link:"https://www.instagram.com/p/4AxpG8tjr_/", linktype:"instagram"}]
// };
// projects.push(projectInfiniteMirror);

var projectBoxLock = {
  id: "boxlock",
  projectSession: "other",
  title: "BoxLock",
  imageSource: "url(images/projects/project-boxlock2.png)",
  projectText: "Packages thefts at houses are increasing. At propelland we designed and prototyped BoxLock to mitigate this issue.",
  projectTimes: "May '17 - present",
  projectLinks: [{link:"https://www.getboxlock.com/", linktype:"web"}],
  tools: "iOS, Raspberry Pi, Django"
};
projects.push(projectBoxLock);

var projectPowerade = {
  id: "powerade",
  projectSession: "other",
  title: "POWERADE",
  imageSource: "url(images/projects/project-powerade.jpg)",
  projectText: "At propelland we designed and prototyped a Field of Play product that will be available at the FIFA WorldCup Russia 2018.",
  projectTimes: "August '16 - October '17",
  projectLinks: [],
  tools: "iOS, Arduino, Django, AWS"
};
projects.push(projectPowerade);

var projectMagLaces = {
  id: "maglaces",
  projectSession: "other",
  title: "MagLaces",
  imageSource: "url(images/projects/project-imageNotAvailable.png)",
  projectText: "With the exaggerated idea of hiper optimizing my time and after stumbling upon this concept, I redesigned these shoe magnetic laces to never tie my shoes again.",
  projectTimes: "July '17 - August '17",
  videoSource: "",
  projectLinks: [],
  tools: "Fusion 360"
};
projects.push(projectMagLaces);

var projectManifesto = {
  id: "manifesto",
  projectSession: "other",
  title: "Manifesto",
  imageSource: "url(images/projects/project-manifesto.png)",
  projectText: "To help remind myself about the real important thoughts in life rather than the urgent, I published Manifesto on the App Store.",
  projectTimes: "April '17",
  videoSource: "",
  projectLinks: [{link:"https://itunes.apple.com/us/app/manifesto/id1223839749?mt=8", linktype:"appleStore"}],
  tools: "iOS"
};
projects.push(projectManifesto);

var projectCocaCola = {
  id: "cocacola",
  projectSession: "other",
  title: "COCA-COLA",
  imageSource: "url(images/projects/project-cocacola.jpg)",
  projectText: "Coca-Cola is one of the biggest propelland clients, for them we have prototyped 3 concepts that are really pushing the company internal boundaries of innovation.",
  projectTimes: "August '16 - present",
  projectLinks: [],
  tools: "iOS, Machine Learning, Arduino, Flask"
};
projects.push(projectCocaCola);

var projectHyundai = {
  id: "hyundai",
  projectSession: "other",
  title: "HYUNDAI",
  imageSource: "url(images/projects/project-hyundai.png)",
  projectText: "With the wake of electric cars, at propelland I supported on the primary research part of this project, where we wanted to understand the market forces behind the acquisition of elecric & hybrid cars.",
  projectTimes: "October '16 - November '16",
  projectLinks: [],
  tools: "Primary Research, Insights definition"
};
projects.push(projectHyundai);

var projectKa = {
  id: "ka",
  projectSession: "other",
  title: "NEW TEXTBOOK CONCEPT",
  imageSource: "url(images/projects/project-khanacademy.jpg)",
  projectText: "Education is the root solution to todays major challenges. To reduce educational costs, I proposed to Khan Academy to create a wikipedia-like platform for the creation of textbooks.",
  projectTimes: "March '16",
  projectLinks: [{link:"https://docs.google.com/presentation/u/1/d/1wc829MPxy3WpouvfiPxrWt_6Gz1kgrX_Q_hgXaQBeAU/edit?usp=sharing", linktype:"presentation"}],
  tools: "Illustrator"
};
projects.push(projectKa);

var projectAliviara = {
  id: "aliviara",
  projectSession: "other",
  title: "ALIVIARA SMART GLOVE",
  imageSource: "url(images/projects/project-aliviara.png)",
  projectText: "To help patients with Rheumatoid Arthritis conduct rehabilitation exercises, we built a prototype that won Bekeley's Hack For Humanity 2016.",
  projectTimes: "February '16",
  videoSource: "",
  projectLinks: [{link:"https://docs.google.com/presentation/d/1MyB0A3yDUM2COJymWf7WJjGZthVq2QkIO_HR8Rqxk1k/edit", linktype:"presentation"}],
  tools: "iOS, Arduino, Flask, Machine Learning"
};
projects.push(projectAliviara);

var projectARTextbooks = {
  id: "ARTextbooks",
  projectSession: "other",
  title: "Augmented Reality Textbooks",
  imageSource: "url(images/projects/project-artextbooks2.png)",
  projectText: "At the Berkeley Virtual Reality Club we made textbooks more interactive by making conventional 2D figures come to life in 3D through AR.",
  projectTimes: "January '16 - May '16",
  videoSource: "",
  projectLinks: [{link:"https://www.youtube.com/watch?v=EcAYZpuYi3w", linktype:"video"}],
  tools: "iOS, Unity, Google Cardboard"
};
projects.push(projectARTextbooks);

var projectZumy = {
  id: "zumy",
  projectSession: "other",
  title: "ZUMY RESCUE ROBOTS",
  imageSource: "url(images/projects/project-zumy.png)",
  projectText: "To mitigate the impact of a catastrophe, we simulated a system where our Zumy Robots autonomously navigate a field with ruined buildings in order to look for survivors.",
  projectTimes: "August '15 - December '15",
  projectLinks: [{link:"https://www.youtube.com/watch?v=wWe99oHV6BY&feature=youtu.be", linktype:"presentation"}],
  tools: "ROS"
};
projects.push(projectZumy);

// var projectXamarin = {
//   id: "xamarin",
//   projectSession: "other",
//   title: "CHURN ANALYSIS",
//   imageSource: "url(images/projects/project-xamarin.png)",
//   projectText: "A group of 5 future industrial engineers for our senior project we have partnered with Xamarin, a Microsoft acquired company, to forecast user churn rate.",
//   projectTimes: "January '16 - May '16",
//   projectLinks: [{link:"https://drive.google.com/file/d/0B3judopZrAtOMFREVDIwOHlZZnc/view", linktype:"pdf"}]
// };
// projects.push(projectXamarin);

// var projectWeather = {
//   id: "weather",
//   projectSession: "iOS",
//   title: "Wear based on weather",
//   imageSource: "url(images/apps/weather.png)",
//   projectText: "This is the first app I made in my life",
//   projectTimes: "May '14",
//   videoSource: "",
//   projectLinks: []
// };
// projects.push(projectWeather);
