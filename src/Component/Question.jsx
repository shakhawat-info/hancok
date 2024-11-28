import React from "react";
import QuestionCart from "./QuestionCart";
const Question = () => {
  return (
    <section className="lg:pt-[55px] pt-5 lg:pb-[200px] pb-[130px] bg-[#0c0c0e]">
      <div className="container">
        <h2 className="head lg:max-w-[40%] max-w-3/4 lg:after:w-[95px] after:w-0 after:h-[2px] after:bottom-[15px] ">
          prequently asked question "question & answere”
        </h2>
        <div className="lg:grid flex flex-col grid-cols-teamGrid lg:mt-[92px] mt-5 lg:gap-y-[150px] gap-y-[30px] gap-x-[242px] relative after:content-[''] after:h-full lg:after:w-[2px] after:w-0 after:bg-[#666] 
        after:absolute after:top-0 after:left-[50%] before:h-[2px] lg:before:w-full before:w-0 before:content-[''] before:bg-[#666] before:top-[50%] before:left-0 before:absolute ">
          <QuestionCart Qnumber="1" Qtitle="how to download the game ?" mainQ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste, sed error at adipisci repellat rem maiores provident voluptatem ipsum autem fugiat."/>
          <QuestionCart Qnumber="2" Qtitle="is there any age restrictions ?" mainQ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste, sed error at adipisci repellat rem maiores provident voluptatem ipsum autem fugiat." />
          <QuestionCart Qnumber="3" Qtitle="how to become a team member ?" mainQ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste, sed error at adipisci repellat rem maiores provident voluptatem ipsum autem fugiat." />
          <QuestionCart Qnumber="4" Qtitle="is there any reward for winners ? " mainQ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste, sed error at adipisci repellat rem maiores provident voluptatem ipsum autem fugiat." />
        </div>
      </div>
    </section>
  );
};

export default Question;
