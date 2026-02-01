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
    { title: "Potfolio Website", link: potfoliob },
    { title: "Task Manager", link: taskmanager },
    { title: "Rock Paper ", link: rock },
    { title: "Tic Tac Toe", link: tic },
    { title: "Amazon", link: amazon },
    { title: "Potfolio", link: potfolio },
    { title: "Friend Request", link: friendrequest },
    { title: "To do List", link: todo },
    { title: "Insta Like", link: instalike },
    { title: "Currency", link: currency },
    { title: "Story", link: story },
    { title: "Quote", link: quote },
    { title: "Num Guess", link: numguess },
    { title: "Theme", link: theme },
    { title: "Quiz", link: quiz },
    { title: "Calculator", link: Calculator },
  ];
  return (
    <div className="p-5 w-screen h-screen overflow-x-auto">
      <h1 className="text-center m-8 mb-15 text-3xl tracking-widest">
        Projects Showcase
      </h1>
      <div className="flex flex-wrap justify-center gap-10 h-full w-full">
        {data.map((elem, idx) => {
          return <Card title={elem.title} link={elem.link} />;
        })}
      </div>
    </div>
  );
};

export default App;
