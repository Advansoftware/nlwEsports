import { useState } from "react";
import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import otherImageUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    source: bugImageUrl,
    alt: "Imagem de um Inseto",
  },
  IDEA: {
    title: "Ideia",
    source: ideaImageUrl,
    alt: "Imagem de uma Lampada",
  },
  OTHER: {
    title: "Outro",
    source: otherImageUrl,
    alt: "imagem de um balão",
  },
};
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  function handleRestartedFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4  flex flex-col items-center shadow-lg w-[calc(100vh-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequest={handleRestartedFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbacktype={feedbackType}
              onFeedbackRestartRequest={handleRestartedFeedback}
              onFeedBackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito por{" "}
        <a
          className="underline underline-offset-2"
          href="http://brunoantunes.tech"
        >
          Bruno Antunes
        </a>
      </footer>
    </div>
  );
}
