import Card from "./components/Card";
import amazon from "./assets/amazon.png";
import Calculator from "./assets/calculator.png";
import currency from "./assets/currency.png";
import tic from "./assets/tic.png";
import rock from "./assets/rock.png";
import taskmanager from "./assets/taskmanager.png";
import todo from "./assets/todo.png";
import friendrequest from "./assets/friendrequest.png";
import instalike from "./assets/instalike.png";
import numguess from "./assets/numguess.png";
import potfolio from "./assets/potfolio.png";
import potfoliob from "./assets/potfoliob.png";
import quiz from "./assets/quiz.png";
import quote from "./assets/quote.png";
import story from "./assets/story.png";
import theme from "./assets/theme.png";
const App = () => {
  const data = [
    {
      title: "Potfolio Website",
      link: potfoliob,
      live: "https://pratik-code7.github.io/Potfolio_website/",
    },
    {
      title: "Task Manager",
      link: taskmanager,
      live: "https://pratik-code7.github.io/React-Task-Manager/",
    },
    {
      title: "Rock Paper Scissors",
      link: rock,
      live: "https://pratik-code7.github.io/Rock-Paper-Scissors/",
    },
    {
      title: "Tic Tac Toe",
      link: tic,
      live: "https://pratik-code7.github.io/Tic-Tac-Toe/",
    },
    {
      title: "Amazon",
      link: amazon,
      live: "https://pratik-code7.github.io/Amazon-Clone/Amazon/",
    },
    {
      title: "Potfolio",
      link: potfolio,
      live: "https://pratik-code7.github.io/Potfolio/My potfolio",
    },
    {
      title: "Friend Request",
      link: friendrequest,
      live: "https://pratik-code7.github.io/Friend-Request/",
    },
    {
      title: "To do List",
      link: todo,
      live: "https://pratik-code7.github.io/To-Do-List/",
    },
    {
      title: "Insta Like",
      link: instalike,
      live: "https://pratik-code7.github.io/Insta-Like/",
    },
    {
      title: "Currency",
      link: currency,
      live: "https://pratik-code7.github.io/Currency-Converter/",
    },
    {
      title: "Story",
      link: story,
      live: "https://pratik-code7.github.io/Insta-Story/",
    },
    {
      title: "Quote",
      link: quote,
      live: "https://pratik-code7.github.io/Quote/",
    },
    {
      title: "Num Guess",
      link: numguess,
      live: "https://pratik-code7.github.io/Number-Guessing-Game/",
    },
    {
      title: "Theme",
      link: theme,
      live: "https://pratik-code7.github.io/Theme-toggle/",
    },
    { title: "Quiz", link: quiz, live: "https://pratik-code7.github.io/Quiz/" },
    {
      title: "Calculator",
      link: Calculator,
      live: "https://pratik-code7.github.io/Calculator-Project/",
    },
  ];
  return (
    <div className="p-5 w-screen h-screen overflow-x-auto">
      <h1 className="text-center m-8 mb-15 text-3xl tracking-widest">
        Projects Showcase
      </h1>
      <div className="flex flex-wrap justify-center gap-10 h-full w-full">
        {data.map((elem, idx) => {
          return <Card title={elem.title} link={elem.link} live={elem.live} />;
        })}
      </div>
    </div>
  );
};

export default App;
