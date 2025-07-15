// Заглушка
export const mockPosts = [
  {
    postId: 1,
    title: "To nap or not to nap",
    content: "Some controversial text regarding benefits of lunch time sleep",
    userName: "SleepySocrates",
    userId: 11,
  },
  {
    postId: 2,
    title: "Take the ultimate Quiz",
    content: "The survey that shows you if you're a doglover or a dogeater",
    userName: "LeafMeAlone",
    userId: 22,
  },
  {
    postId: 3,
    title: "Living in a dream",
    content: "40 years like a dream, working on shitpump machine",
    userName: "PipeDreamer",
    userId: 33,
  },
  {
    postId: 4,
    title: "Office Plants and Existential Dread",
    content: "How my ficus helped me survive corporate meetings",
    userName: "LeafMeAlone",
    userId: 22,
  },
  {
    postId: 5,
    title: "The Day I Ate Code",
    content: "When JavaScript took over my lunch break",
    userName: "SleepySocrates",
    userId: 11,
  },
  {
    postId: 6,
    title: "Midnight Thoughts at 3 PM",
    content: "A reflective rant on productivity hacks and why none of them work",
    userName: "SleepySocrates",
    userId: 11,
  },
];

export const mockComments = [
  {
    id: 100,
    postId: 1,
    userName: "SleeplessDad_42",
    body: "Used to sleep like a kid, but mine seems to hate it, I wonder why",
  },
  {
    id: 200,
    postId: 1,
    userName: "Napfluencer",
    body: "My favourite part of a working day",
  },
  {
    id: 300,
    postId: 2,
    userName: "BarkBQ",
    body: "Finally, a quiz that separates the -aww- crowd from the -mmm- crowd",
  },
  {
    id: 400,
    postId: 2,
    userName: "SpiceRetriever",
    body: "I thought I was a dog person until this test asked for my favorite seasoning",
  },
  {
    id: 500,
    postId: 3,
    userName: "FlushAndFame",
    body: "Living the dream, one flush at a time",
  },
  {
    id: 600,
    postId: 3,
    userName: "Pumpinator9000",
    body: "You came, you pumped, you conquered",
  },
  {
    id: 700,
    postId: 4,
    userName: "GreenWhisper",
    body: "My cactus is my only coworker now",
  },
  {
    id: 800,
    postId: 4,
    userName: "DeskJungle",
    body: "Plants > People. Change my mind.",
  },
  {
    id: 900,
    postId: 4,
    userName: "FicusTherapist",
    body: "Same here. Weekly one-on-one with my fern.",
  },
  {
    id: 1000,
    postId: 5,
    userName: "ScriptSnacker",
    body: "I once chewed on a USB cable during deployment stress",
  },
  {
    id: 1100,
    postId: 5,
    userName: "CodeVore",
    body: "Syntax errors taste like regret",
  },
  {
    id: 1200,
    postId: 6,
    userName: "HackSloth",
    body: "Tried Pomodoro, ended up with tomato sauce on my keyboard",
  },
  {
    id: 1300,
    postId: 6,
    userName: "TimeBandit",
    body: "Productivity hacks only work if you ignore reality",
  },
  {
    id: 1400,
    postId: 6,
    userName: "3PMPoet",
    body: "I cry in calendar mode",
  },
];

export const MAX_TITLE_LENGTH = 40;
